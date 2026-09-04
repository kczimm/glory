#!/usr/bin/env node
/**
 * Sync audio files to Cloudflare R2.
 *
 * Usage: node scripts/sync-r2.mjs [--dryrun] [--limit N]
 */
import {
  S3Client,
  ListObjectsV2Command,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { readdirSync, statSync, readFileSync } from "node:fs";
import { resolve, join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const AUDIO_DIR = resolve(root, "audio-out/v1");

// Load R2 credentials from .env.local
const envLocal = readFileSync(resolve(root, ".env.local"), "utf8");
const getEnv = (key) => {
  const match = envLocal.match(new RegExp(`^${key}=(.*)$`, "m"));
  return match ? match[1].trim() : process.env[key];
};

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

const BUCKET = getEnv("R2_BUCKET") || "glory-audio";
const DRYRUN = process.argv.includes("--dryrun");
const LIMIT = process.argv.includes("--limit")
  ? Number(process.argv[process.argv.indexOf("--limit") + 1])
  : Infinity;

// Collect all .m4a files
const files = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (entry.endsWith(".m4a")) {
      files.push(full);
    }
  }
};
walk(AUDIO_DIR);

console.log(`Found ${files.length} audio files in ${AUDIO_DIR}`);

// Check what's already in R2
const listCmd = new ListObjectsV2Command({ Bucket: BUCKET, Prefix: "v1/" });
const existing = new Set();
let continuationToken;
const listStart = Date.now();
const LIST_TIMEOUT = 60_000; // 60s max for listing
do {
  if (Date.now() - listStart > LIST_TIMEOUT) {
    console.warn(
      `Listing timed out after ${LIST_TIMEOUT / 1000}s with ${existing.size} files found. Proceeding with partial list.`,
    );
    break;
  }
  const resp = await R2.send(listCmd);
  for (const obj of resp.Contents || []) {
    existing.add(obj.Key);
  }
  continuationToken = resp.NextContinuationToken;
} while (continuationToken);

console.log(`${existing.size} files already in R2`);

// Upload missing files
let uploaded = 0;
let skipped = 0;
for (const file of files) {
  if (uploaded >= LIMIT) break;

  const key = "v1/" + relative(AUDIO_DIR, file);
  if (existing.has(key)) {
    skipped++;
    continue;
  }

  if (DRYRUN) {
    console.log(`[DRYRUN] Would upload: ${key}`);
    uploaded++;
    continue;
  }

  const body = readFileSync(file);
  await R2.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: "audio/mp4",
      CacheControl: "public, max-age=2592000",
    }),
  );

  uploaded++;
  if (uploaded % 10 === 0) {
    console.log(`Uploaded ${uploaded} files...`);
  }
}

console.log(`Done: ${uploaded} uploaded, ${skipped} skipped (already in R2)`);
