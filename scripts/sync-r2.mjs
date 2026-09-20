#!/usr/bin/env node
/**
 * Sync generated audio to Cloudflare R2.
 *
 * Usage: node scripts/sync-r2.mjs [--dryrun] [--limit N] [--force]
 *        [--verify-concurrency N] [--upload-concurrency N]
 *        [--list-timeout-ms N] [--bucket NAME] [--audio-dir PATH]
 *
 * Contract: a local file is uploaded only when the bucket does not already
 * hold an object under the same key with the same size.
 *
 * Keys are `v1/{voice}/{sha1(chunkText)}.m4a`, so a key identifies the TEXT
 * rather than the bytes. That shapes the whole script:
 *
 *   1. Only the prefixes actually being synced are listed (for example
 *      `v1/kokoro-am_michael/`), never the whole bucket. Paginating `v1/`
 *      walks every voice and every orphaned object, which is both slower and
 *      far likelier to run out of time.
 *   2. Pagination runs to completion. Each request carries its own timeout
 *      and retry budget; there is no global deadline. A global 60s deadline
 *      was the original bug: it truncated the listing after one page (1000
 *      of 16540 objects), so every object past page one looked absent and
 *      roughly 2000 existing chunks were needlessly re-uploaded.
 *   3. If any prefix could not be listed completely, every remaining
 *      candidate is verified with a concurrent HeadObject before upload. An
 *      incomplete listing can therefore cost extra HEAD requests, but it can
 *      never cause an upload of an object that already exists.
 *
 * Size equality is a strong signal, not a proof: re-encoding the same text
 * with a different voice, dtype, or ffmpeg setting produces new bytes under
 * the same key. Pass --force to re-publish regardless of what is remote.
 *
 * Exit code is 1 if any upload failed, 0 otherwise (including --dryrun).
 */
import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { resolve, join, relative, sep, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ---- arguments -------------------------------------------------------------

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name, fallback) => {
  const i = argv.indexOf(name);
  return i > -1 && argv[i + 1] !== undefined ? argv[i + 1] : fallback;
};

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO_DIR = resolve(root, opt("--audio-dir", "audio-out/v1"));
const DRYRUN = flag("--dryrun");
const FORCE = flag("--force");
const LIMIT = flag("--limit") ? Number(opt("--limit", "0")) : Infinity;
const LIST_TIMEOUT_MS = Number(opt("--list-timeout-ms", "30000")); // per request
const VERIFY_CONCURRENCY = Math.max(1, Number(opt("--verify-concurrency", "16")));
const UPLOAD_CONCURRENCY = Math.max(1, Number(opt("--upload-concurrency", "1")));
const LIST_RETRIES = 3;
const UPLOAD_RETRIES = 3;
const MAX_PAGES = 50_000; // runaway guard: 50M objects under one prefix

// ---- credentials -----------------------------------------------------------

// Credentials live in .env.local (gitignored). Env vars win if both are set.
const envPath = resolve(root, ".env.local");
const envLocal = existsSync(envPath) ? readFileSync(envPath, "utf8") : "";
const getEnv = (key) => {
  const match = envLocal.match(new RegExp(`^${key}=(.*)$`, "m"));
  const fromFile = match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
  return fromFile || process.env[key];
};

const BUCKET = opt("--bucket", getEnv("R2_BUCKET") || "glory-audio");
const R2 = new S3Client({
  region: "auto",
  endpoint: getEnv("R2_ENDPOINT"),
  credentials: {
    accessKeyId: getEnv("R2_ACCESS_KEY_ID"),
    secretAccessKey: getEnv("R2_SECRET_ACCESS_KEY"),
  },
  requestHandler: {
    requestTimeout: 30_000,
    httpsAgent: { timeout: 30_000 },
  },
});

// ---- helpers ---------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Retry a remote call, returning null once the budget is exhausted. */
async function withRetry(label, fn, attempts) {
  let last;
  for (let a = 1; a <= attempts; a++) {
    try {
      return await fn();
    } catch (err) {
      last = err;
      if (a < attempts) await sleep(250 * 2 ** (a - 1));
    }
  }
  console.warn(`  ! ${label}: ${last?.name ?? last}`);
  return null;
}

/** Send with a per-request abort deadline. */
async function sendWithTimeout(cmd, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await R2.send(cmd, { abortSignal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Bounded-concurrency map, awaiting every item. */
async function eachLimit(items, limit, worker) {
  let i = 0;
  const width = Math.max(1, Math.min(limit, items.length || 1));
  const pool = [];
  for (let w = 0; w < width; w++) {
    pool.push(
      (async () => {
        while (i < items.length) await worker(items[i++]);
      })(),
    );
  }
  await Promise.all(pool);
}

const isNotFound = (err) =>
  err?.name === "NotFound" ||
  err?.name === "NoSuchKey" ||
  err?.Code === "NoSuchKey" ||
  err?.$metadata?.httpStatusCode === 404;

// ---- collect local files ---------------------------------------------------

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith(".m4a")) files.push(full);
  }
})(AUDIO_DIR);

console.log(`Found ${files.length} audio files in ${AUDIO_DIR}`);
if (files.length === 0) {
  console.log("Nothing to sync.");
  process.exit(0);
}

// Bucket key uses forward slashes on every platform.
const keyOf = (file) => "v1/" + relative(AUDIO_DIR, file).split(sep).join("/");
const prefixOf = (key) => {
  const rest = key.slice("v1/".length);
  return rest.includes("/") ? `v1/${rest.split("/")[0]}/` : "v1/";
};

const local = files.map((file) => ({
  file,
  key: keyOf(file),
  size: statSync(file).size,
}));

// ---- list only the prefixes we sync ---------------------------------------

const prefixes = [...new Set(local.map((f) => prefixOf(f.key)))].sort();
const remoteSize = new Map(); // key -> remote byte size
let listIncomplete = false;

for (const prefix of prefixes) {
  let token;
  let complete = false;
  for (let page = 0; page < MAX_PAGES; page++) {
    const resp = await withRetry(
      `list ${prefix} page ${page + 1}`,
      () =>
        sendWithTimeout(
          new ListObjectsV2Command({
            Bucket: BUCKET,
            Prefix: prefix,
            ContinuationToken: token,
          }),
          LIST_TIMEOUT_MS,
        ),
      LIST_RETRIES,
    );
    if (!resp) {
      listIncomplete = true;
      break;
    }
    for (const obj of resp.Contents || []) remoteSize.set(obj.Key, obj.Size);
    token = resp.NextContinuationToken;
    if (!token) {
      complete = true;
      break;
    }
  }
  console.log(
    `  listed ${prefix} ${complete ? "complete" : "INCOMPLETE (retries exhausted)"}`,
  );
}

console.log(
  `Remote index: ${remoteSize.size} object(s) under ${prefixes.length} prefix(es)${
    listIncomplete ? ", listing incomplete" : ", listing complete"
  }`,
);

// ---- decide what genuinely needs uploading --------------------------------

const candidates = [];
let skippedByListing = 0;
let sizeMismatch = 0;

for (const item of local) {
  if (FORCE) {
    candidates.push({ ...item, reason: "forced" });
    continue;
  }
  const remote = remoteSize.get(item.key);
  if (remote === undefined) {
    candidates.push({ ...item, reason: "absent" });
    continue;
  }
  if (remote === item.size) {
    skippedByListing++;
    continue;
  }
  sizeMismatch++;
  candidates.push({ ...item, reason: `size ${remote} != ${item.size}` });
}

// Safety net: never trust a partial listing for a skip decision. Verify each
// candidate directly before uploading anything.
let skippedByHead = 0;
let unverified = 0;
if (listIncomplete && candidates.length) {
  console.log(
    `Verifying ${candidates.length} candidate(s) with HEAD before upload (listing was incomplete)...`,
  );
  await eachLimit(candidates, VERIFY_CONCURRENCY, async (item) => {
    let res;
    try {
      res = await R2.send(
        new HeadObjectCommand({ Bucket: BUCKET, Key: item.key }),
      );
    } catch (err) {
      if (isNotFound(err)) item.verifiedAbsent = true;
      else unverified++;
      return;
    }
    if (res.ContentLength === item.size) item.existsWithSameSize = true;
  });
  for (let i = candidates.length - 1; i >= 0; i--) {
    if (candidates[i].existsWithSameSize) {
      skippedByHead++;
      candidates.splice(i, 1);
    }
  }
}

const plan = Number.isFinite(LIMIT) ? candidates.slice(0, LIMIT) : candidates;

console.log(
  [
    `  skipped, already present with matching size: ${skippedByListing}`,
    skippedByHead ? `  skipped, confirmed by HEAD: ${skippedByHead}` : null,
    sizeMismatch ? `  re-publishing, size differs: ${sizeMismatch}` : null,
    unverified ? `  could not verify (treated as missing): ${unverified}` : null,
    `  ${DRYRUN ? "would upload" : "to upload"}: ${plan.length}`,
  ]
    .filter(Boolean)
    .join("\n"),
);

if (plan.length === 0) {
  console.log(
    `Done: 0 uploaded, ${skippedByListing + skippedByHead} skipped (already in R2)`,
  );
  process.exit(0);
}

// ---- upload ----------------------------------------------------------------

let uploaded = 0;
let failed = 0;

await eachLimit(plan, UPLOAD_CONCURRENCY, async (item) => {
  if (DRYRUN) {
    console.log(`[DRYRUN] Would upload: ${item.key}  (${item.reason})`);
    uploaded++;
    return;
  }
  const body = readFileSync(item.file);
  const res = await withRetry(
    `put ${item.key}`,
    () =>
      R2.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: item.key,
          Body: body,
          ContentType: "audio/mp4",
          CacheControl: "public, max-age=2592000",
        }),
      ),
    UPLOAD_RETRIES,
  );
  if (res === null) {
    failed++;
    return;
  }
  uploaded++;
  if (uploaded % 25 === 0) console.log(`  uploaded ${uploaded}/${plan.length}...`);
});

console.log(
  `Done: ${uploaded} uploaded, ${skippedByListing + skippedByHead} skipped (already in R2)` +
    (failed ? `, ${failed} FAILED` : ""),
);

// Non-zero exit so a partial sync cannot look like success in a pipeline.
process.exit(failed > 0 ? 1 : 0);
