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
 * Notes:
 *  - Idempotent and resumable: existing .m4a files are skipped, so
 *    re-runs only do the work still missing.
 *  - The file NAME (URL) is the SHA-1 of the ORIGINAL text. Pronunciation
 *    cleaning changes only what is spoken, never the file name, so the
 *    app's lookup still matches.
 *  - Dependencies: `npm i -D kokoro-js` and a system ffmpeg.
 *  - Usage: node scripts/generate-audio.mjs [--manifest X] [--voice ID]
 *            [--out-dir D] [--dtype q8] [--only <hash|itemId>] [--limit N]
 *            [--force] [--list-voices]
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
} from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};
const has = (name) => process.argv.includes(name);

const MANIFEST = arg("--manifest", "audio-manifest.json");
const OUT_DIR = resolve(arg("--out-dir", "audio-out"));
const DTYPE = arg("--dtype", "q8");
const ONLY = arg("--only", ""); // substring match on hash or itemId
const LIMIT = has("--limit") ? Number(arg("--limit", "0")) : 0;
const FORCE = has("--force");
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

const SLUG = manifest.voice || "kokoro-am_michael"; // used in URLs
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

// ---- ffmpeg ----------------------------------------------------------------

function encodeToM4a(wavPath, m4aPath) {
  const r = spawnSync(
    "ffmpeg",
    ["-y", "-i", wavPath, "-c:a", "aac", "-b:a", "64k", "-ac", "1", m4aPath],
    { stdio: ["ignore", "ignore", "inherit"] }
  );
  if (r.status !== 0) throw new Error(`ffmpeg failed for ${m4aPath}`);
}

// ---- main ------------------------------------------------------------------

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

// Unique chunks: hash -> text (file name is the hash of the raw text).
const unique = new Map();
for (const e of manifest.entries) {
  if (!unique.has(e.hash)) unique.set(e.hash, e.text);
}

const outDir = resolve(OUT_DIR, "v1", SLUG);
mkdirSync(outDir, { recursive: true });
const tmpDir = resolve(OUT_DIR, ".tmp");
mkdirSync(tmpDir, { recursive: true });

// Work set: skip what already exists.
let work = [...unique.entries()];
if (ONLY) work = work.filter(([hash, text]) => hash.startsWith(ONLY) || text.includes(ONLY));
if (!FORCE) work = work.filter(([hash]) => !existsSync(resolve(outDir, `${hash}.m4a`)));
if (LIMIT > 0) work = work.slice(0, LIMIT);

console.log(`${unique.size} unique chunks; ${work.length} to generate (${unique.size - work.length} already present)`);

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
    "    --endpoint-url https://<accountid>.r2.cloudflarestorage.com"
);
