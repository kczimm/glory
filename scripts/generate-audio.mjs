#!/usr/bin/env node
/**
 * Audio generation pipeline for Glory, driven by the content-addressed
 * catalog produced by `npm run audio:manifest`.
 *
 * For every unique chunk in the manifest it synthesizes the text with the
 * local Kokoro-82M model (via `kokoro-js`, CPU, no torch), encodes to AAC
 * m4a with ffmpeg, and writes:
 *
 *   {out-dir}/v1/{voice}/{sha1(text)}.m4a
 *
 * Byte-identical to how the app names its files, so the output directory is
 * directly syncable to the object store:
 *
 *   aws s3 sync audio-out/v1 s3://<bucket>/v1 \
 *     --endpoint-url https://<accountid>.r2.cloudflarestorage.com
 *
 *  - Notes:
 *    - Idempotent and resumable: existing .m4a files are skipped, so
 *      re-runs only do the work still missing.
 *    - The file NAME (URL) is the SHA-1 of the ORIGINAL text. Pronunciation
 *      cleaning changes only what is spoken, never the file name, so the
 *      app's lookup still matches.
 *    - Dependencies: `npm i -D kokoro-js` and a system ffmpeg.
 *  - Usage: node scripts/generate-audio.mjs [--manifest X] [--voice ID]
 *            [--slug URLNS] [--out-dir D] [--dtype q8]
 *            [--only <hash|itemId>] [--key <group>] [--limit N]
 *            [--force] [--list-voices]
 *            [--check-bucket --bucket-url https://...r2.dev]
 *    --check-bucket probes each hash's public URL (ranged GET, bytes=0-0)
 *    and skips files already live in the bucket, so a fresh machine (or
 *    CI) only generates what is genuinely missing. Bucket URL defaults to
 *    the AUDIO_BUCKET_URL or NEXT_PUBLIC_AUDIO_ROOT env var; files are
 *    checked at {bucket-url}/v1/{slug}/{hash}.m4a.
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};
const has = (name) => process.argv.includes(name);

const MANIFEST = arg("--manifest", "audio-manifest.json");
const OUT_DIR = resolve(arg("--out-dir", "audio-out"));
const DTYPE = arg("--dtype", "q8");
const ONLY = arg("--only", ""); // substring match on hash or itemId/label text
const KEY = arg("--key", ""); // substring match on manifest entry key (e.g. ":John 3")
const LIMIT = has("--limit") ? Number(arg("--limit", "0")) : 0;
const FORCE = has("--force");
const CHECK_BUCKET = has("--check-bucket");
const BUCKET_URL = arg("--bucket-url", process.env.AUDIO_BUCKET_URL ?? process.env.NEXT_PUBLIC_AUDIO_ROOT ?? "").replace(/\/+$/, "");
const WORKERS = has("--workers") ? Math.max(1, Number(arg("--workers", "1"))) : 1;
const WORKER_SLICE = arg("--worker", ""); // internal: path to a JSON slice list
const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";

// ---- load manifest ---------------------------------------------------------

let manifest;
try {
  manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
} catch {
  console.error(`Cannot read ${MANIFEST}. Run \`npm run audio:manifest\` first.`);
  process.exit(1);
}
if (!manifest.entries?.length) {
  console.error("Manifest has no entries.");
  process.exit(1);
}

const SLUG = arg("--slug", manifest.voice || "kokoro-am_michael"); // URL namespace
// The Kokoro model voice id is usually the slug minus the "kokoro-" prefix.
const synthVoice = arg("--voice", SLUG.replace(/^kokoro-/, "") || "am_michael");

// ---- pronunciation cleaning -------------------------------------------------
// Kokoro's G2P (espeak-ng style) mangles many biblical proper nouns. This
// map swaps them for phonetic spellings it reads correctly. Only the spoken
// audio changes; file names still come from the raw manifest text. Extend
// freely as you hear names that need help.

const PRONUNCIATION = {
  Aenon: "AY-non",
  Bethsaida: "beth-SAY-ih-duh",
  Capernaum: "kuh-PUR-nay-um",
  Cephas: "SEE-fas",
  Corinthians: "kuh-RIN-thee-unz",
  Euodia: "yoo-OH-dee-uh",
  Herodias: "heh-ROH-dee-us",
  Jehoshaphat: "jee-HOH-shuh-fat",
  Magog: "MAY-gog",
  Melchizedek: "mel-KIZ-eh-dek",
  Nebuchadnezzar: "neb-uh-kud-NEZ-er",
  Proselyte: "PROSS-uh-lyte",
  Rehoboam: "ree-hoh-BOH-am",
  Salome: "suh-LOH-mee",
  Siloam: "sye-LOW-am",
  Syntyche: "SIN-tih-kee",
  tetrarch: "TEH-trark",
  Zerubbabel: "zuh-RUB-uh-bel",
};

const pronunciationRe = new RegExp(
  "\\b(" + Object.keys(PRONUNCIATION).join("|") + ")\\b",
  "gi"
);

function cleanForSpeech(text) {
  return text.replace(pronunciationRe, (m) => PRONUNCIATION[m] ?? m);
}

// ---- bucket existence (optional) -------------------------------------------
// Some public buckets (r2.dev included) do not answer HEAD reliably, so use a
// ranged GET (bytes=0-0): 200/206 means the object exists. The body is never
// read, so a full 200 (range ignored) costs only a tiny transfer.

async function existsInBucket(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      headers: { Range: "bytes=0-0" },
      signal: controller.signal,
    });
    if (res.body) await res.body.cancel(); // we only need the status
    return res.status === 200 || res.status === 206;
  } catch {
    return false; // offline or error: treat as missing so we still generate locally
  } finally {
    clearTimeout(timer);
  }
}

/** Which of `hashes` already resolve publicly in the bucket. */
async function filterExistingInBucket(hashes, concurrency = 16) {
  const existing = new Set();
  let i = 0;
  const worker = async () => {
    while (i < hashes.length) {
      const hash = hashes[i++];
      if (await existsInBucket(`${BUCKET_URL}/v1/${SLUG}/${hash}.m4a`)) existing.add(hash);
    }
  };
  await Promise.all(Array.from({ length: Math.min(concurrency, hashes.length || 1) }, worker));
  return existing;
}

// ---- ffmpeg ----------------------------------------------------------------

function encodeToM4a(wavPath, m4aPath) {
  const r = spawnSync(
    "ffmpeg",
    ["-y", "-i", wavPath, "-c:a", "aac", "-b:a", "64k", "-ac", "1", m4aPath],
    { stdio: ["ignore", "ignore", "pipe"] }
  );
  if (r.status !== 0) {
    const tail = (r.stderr ?? "").toString().split("\n").slice(-3).join(" ");
    throw new Error(`ffmpeg failed for ${m4aPath}: ${tail}`);
  }
}

// ---- worker mode ------------------------------------------------------------
// A worker process synthesizes exactly the items in its slice file. It is
// spawned by the parent (--workers) so each worker has its own model session
// and the OS spreads them across CPU cores.

async function runWorker() {
  const slice = JSON.parse(readFileSync(WORKER_SLICE, "utf8"));
  const { KokoroTTS } = await import("kokoro-js").catch((e) => {
    console.error("kokoro-js is not installed. Run:  npm i -D kokoro-js");
    console.error(e.message);
    process.exit(1);
  });
  const tts = await KokoroTTS.from_pretrained(MODEL_ID, {
    dtype: DTYPE,
    device: "cpu",
    progress_callback: () => {},
  });
  if (!tts.voices[synthVoice]) {
    console.error(`Unknown voice "${synthVoice}"`);
    process.exit(1);
  }
  const outDir = resolve(OUT_DIR, "v1", SLUG);
  mkdirSync(outDir, { recursive: true });
  const tmpDir = resolve(OUT_DIR, ".tmp");
  mkdirSync(tmpDir, { recursive: true });
  const tmpWav = resolve(tmpDir, `w${process.pid}.wav`);
  const tmpM4a = resolve(tmpDir, `w${process.pid}.m4a`);
  const t0 = Date.now();
  for (let i = 0; i < slice.length; i++) {
    const { hash, text } = slice[i];
    try {
      const spoken = cleanForSpeech(text);
      const raw = await tts.generate(spoken, { voice: synthVoice, speed: 1 });
      await raw.save(tmpWav);
      encodeToM4a(tmpWav, tmpM4a);
      rmSync(tmpWav, { force: true });
      renameSync(tmpM4a, resolve(outDir, `${hash}.m4a`));
      console.log(`  [w${process.pid} ${i + 1}/${slice.length}] ${hash.slice(0, 8)} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    } catch (err) {
      console.error(`  [w${process.pid}] FAILED ${hash}: ${err?.message ?? err}`);
      process.exit(1);
    }
  }
  console.log(`  [w${process.pid}] done ${slice.length} files`);
}

async function runWorkers(work) {
  // Round-robin so slow/long items balance across workers.
  const slices = Array.from({ length: WORKERS }, () => []);
  work.forEach(([hash, text], i) => slices[i % WORKERS].push({ hash, text }));
  const outDir = resolve(OUT_DIR, "v1", SLUG);
  mkdirSync(outDir, { recursive: true });
  const tmpDir = resolve(OUT_DIR, ".tmp");
  mkdirSync(tmpDir, { recursive: true });
  const t0 = Date.now();
  const script = fileURLToPath(import.meta.url);
  const planned = [];
  const children = slices
    .filter((s) => s.length > 0)
    .map((slice, idx) => {
      const sliceFile = resolve(tmpDir, `slice-${idx}.json`);
      writeFileSync(sliceFile, JSON.stringify(slice));
      planned.push({ file: sliceFile, hashes: slice.map((s) => s.hash) });
      return spawn(process.execPath, [
        script,
        "--worker", sliceFile,
        "--out-dir", OUT_DIR,
        "--slug", SLUG,
        "--voice", synthVoice,
        "--dtype", DTYPE,
      ], { stdio: ["ignore", "inherit", "inherit"] });
    });
  // onnxruntime-node aborts at process teardown (mutex lock) AFTER every file
  // is written, so exit codes are unreliable. Judge success by file presence:
  // files are written atomically, so a missing hash means the worker's work is
  // genuinely incomplete.
  await Promise.all(
    children.map(
      (c) =>
        new Promise((res) => {
          c.on("close", () => res());
          c.on("error", () => res());
        })
    )
  );
  let missing = 0;
  for (const { file, hashes } of planned) {
    for (const h of hashes) {
      if (!existsSync(resolve(outDir, `${h}.m4a`))) missing++;
    }
    rmSync(file, { force: true });
  }
  const wrote = work.length - missing;
  console.log(`\n${WORKERS} workers, ${work.length} files, ${((Date.now() - t0) / 1000).toFixed(1)}s wall; wrote ${wrote}, missing ${missing}`);
  if (missing) process.exit(1);
}

// ---- main ------------------------------------------------------------------

// A child worker handles only its own slice and exits; it never rebuilds the
// manifest or plan.
if (WORKER_SLICE) {
  await runWorker();
  process.exit(0);
}

// Unique chunks: hash -> text (file name is the hash of the raw text).
const unique = new Map();
for (const e of manifest.entries) {
  if (!unique.has(e.hash)) unique.set(e.hash, e.text);
}

const outDir = resolve(OUT_DIR, "v1", SLUG);
mkdirSync(outDir, { recursive: true });
const tmpDir = resolve(OUT_DIR, ".tmp");
mkdirSync(tmpDir, { recursive: true });

// Work set: hashes in scope, minus any already present locally.
const selected = new Set();
for (const e of manifest.entries) {
  const inOnly = !ONLY || e.hash.startsWith(ONLY) || e.text.includes(ONLY);
  const inKey = !KEY || e.key.includes(KEY);
  if (inOnly && inKey) selected.add(e.hash);
}
const selectedUnique = [...unique].filter(([hash]) => selected.has(hash));
let work = FORCE
  ? selectedUnique
  : selectedUnique.filter(([hash]) => !existsSync(resolve(outDir, `${hash}.m4a`)));

// Skip anything already live in the bucket (HEAD each public URL), so a fresh
// machine never regenerates audio that is already being served.
if (CHECK_BUCKET) {
  if (!BUCKET_URL) {
    console.error("--check-bucket needs --bucket-url (or AUDIO_BUCKET_URL / NEXT_PUBLIC_AUDIO_ROOT).");
    process.exit(1);
  }
  const inBucket = await filterExistingInBucket(work.map(([h]) => h));
  if (inBucket.size) {
    work = work.filter(([h]) => !inBucket.has(h));
    console.log(`  ${inBucket.size} already in the bucket; skipped by --check-bucket`);
  }
}

if (LIMIT > 0) work = work.slice(0, LIMIT);

const skipped = selectedUnique.length - work.length;
console.log(
  `${unique.size} unique chunks; ${selectedUnique.length} in scope; ${work.length} to generate (${skipped} already present${CHECK_BUCKET ? ", incl. bucket" : ""})`
);

// If there is nothing to synthesize, exit before loading the model at all.
if (work.length === 0 && !has("--list-voices")) {
  console.log("Nothing to generate.");
  process.exit(0);
}

// Parallel mode: split the work across worker processes and wait.
if (WORKERS > 1) {
  await runWorkers(work);
  process.exit(0);
}

const { KokoroTTS } = await import("kokoro-js").catch((e) => {
  console.error("kokoro-js is not installed. Run:  npm i -D kokoro-js");
  console.error(e.message);
  process.exit(1);
});

console.log("Loading Kokoro model:", MODEL_ID, `(dtype ${DTYPE})`);
const tts = await KokoroTTS.from_pretrained(MODEL_ID, {
  dtype: DTYPE,
  device: "cpu",
  progress_callback: ({ status, file, loaded, total }) => {
    if (status === "progress") return; // quiet the per-file spam
    console.log(`  [${status}] ${file ?? ""}${total ? ` ${((loaded / total) * 100).toFixed(0)}%` : ""}`);
  },
});

if (has("--list-voices")) {
  console.log("Voices:", Object.keys(tts.voices).join(", "));
  process.exit(0);
}
if (!tts.voices[synthVoice]) {
  console.error(`Unknown voice "${synthVoice}". Use --list-voices.`);
  process.exit(1);
}
console.log(`Synthesizing with voice "${synthVoice}" (male: am_*)`);

const t0 = Date.now();
let done = 0;
const tmpWav = resolve(tmpDir, "chunk.wav");
const tmpM4a = resolve(tmpDir, "chunk.m4a");
let first = true; // keep the first generated file for the smoke-test report

for (const [hash, text] of work) {
  const finalPath = resolve(outDir, `${hash}.m4a`);
  const spoken = cleanForSpeech(text);
  const raw = await tts.generate(spoken, { voice: synthVoice, speed: 1 });
  await raw.save(tmpWav);
  encodeToM4a(tmpWav, tmpM4a);
  rmSync(tmpWav, { force: true });
  renameSync(tmpM4a, finalPath);

  done++;
  const sec = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`  [${done}/${work.length}] ${hash.slice(0, 8)}… ${sec}s elapse`);
  if (first) {
    console.log(`  sample: ${finalPath}`);
    if (ONLY) {
      console.log(`  text:   ${JSON.stringify(text.slice(0, 120))}`);
      console.log(`  spoken: ${JSON.stringify(spoken.slice(0, 120))}`);
    }
    first = false;
  }
}

console.log(
  `\nDone in ${((Date.now() - t0) / 1000).toFixed(1)}s. ${done} files in ${outDir}\n` +
    "Sync to the bucket (R2 example):\n" +
    "  aws s3 sync " +
    OUT_DIR +
    "/v1 s3://<bucket>/v1 \\\n" +
    "    --endpoint-url https://<accountid>.r2.cloudflarestorage.com \\\n" +
    '    --cache-control "public, max-age=2592000"\n' +
    "\n" +
    "The --cache-control header makes each object explicitly cacheable, so\n" +
    "Cloudflare (when the bucket is served from a proxied custom domain such\n" +
    "as audio.glorystudy.com) caches it at the edge on first request. Without\n" +
    "it, R2 returns no Cache-Control and Cloudflare leaves the response\n" +
    "DYNAMIC (never cached). Zone Cache Rules are NOT reliably applied to R2\n" +
    "custom-domain traffic, so the object header is the authoritative fix.\n" +
    "\n" +
    "To retroactively stamp cache-control on objects already uploaded (sync\n" +
    "only copies new files, it will not touch existing ones):\n" +
    "  aws s3 cp s3://<bucket>/v1 s3://<bucket>/v1 \\\n" +
    "    --recursive \\\n" +
    "    --endpoint-url https://<accountid>.r2.cloudflarestorage.com \\\n" +
    '    --cache-control "public, max-age=2592000" \\\n' +
    "    --metadata-directive REPLACE"
);
