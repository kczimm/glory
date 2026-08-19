#!/usr/bin/env node
/**
 * Emits the exact audio catalog Glory speaks, so the generation pipeline can
 * synthesize and upload files that match the app's URL contract one-to-one:
 *
 *   /v1/{voice}/{sha1(text)}.m4a
 *
 * The script imports the app's own data and its own text-shaping module
 * (src/lib/audio-text.mjs), so chunking, whitespace normalization, ref
 * formatting, and hashing are byte-identical to playback. If a chunk's text
 * ever changes, its hash changes and a new file is generated; old files are
 * orphaned, never served stale.
 *
 * Usage:
 *   node scripts/audio-manifest.mjs [--voice kokoro-am_michael] [--out audio-manifest.json]
 *
 * The generated JSON is a flat list of entries:
 *   { key, itemId, label, text, hash, path }
 * where `key` groups entries by source ("passage:{slug}:{Book} {ch}" or
 * "study:{slug}") and `text` is exactly the string the app speaks. The
 * pipeline should dedupe on `hash` and skip files already present in the
 * bucket. Requires Node >= 22.6 (native TypeScript stripping).
 */

import { writeFileSync } from "node:fs";
import {
  canonicalBook,
  chapterItems,
  filterFocus,
  sha1Hex,
  studyItems,
} from "../src/lib/audio-text.ts";
import { verses, chapters } from "../src/data/scripture.ts";
import { questions } from "../src/data/questions.ts";

// ---- options ---------------------------------------------------------------

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
const VOICE = arg("--voice", "kokoro-am_michael");
const OUT = arg("--out", "audio-manifest.json");

// ---- verse text resolution (mirrors getPassageText in src/data/index.ts) ----

function parseRef(ref) {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  return {
    book: canonicalBook(m[1]),
    chapter: Number(m[2]),
    start: Number(m[3]),
    end: Number(m[4] ?? m[3]),
  };
}

function verseText(ref) {
  const p = parseRef(ref);
  if (!p) return null;
  const parts = [];
  for (let v = p.start; v <= p.end; v++) {
    const t = verses[`${p.book} ${p.chapter}:${v}`];
    if (!t) return null;
    parts.push(t.replace(/\n+/g, " "));
  }
  return parts.join(" ");
}

// ---- build the manifest ----------------------------------------------------

const entries = [];
const unique = new Set();

for (const q of questions) {
  for (const p of q.passages) {
    const key = `passage:${q.slug}:${p.book} ${p.chapter}`;
    const ch = chapters[`${canonicalBook(p.book)} ${p.chapter}`];
    const list = ch ? filterFocus(ch, p.focus) : [];
    for (const item of chapterItems(p.book, p.chapter, list)) {
      const hash = sha1Hex(item.text);
      entries.push({ key, itemId: item.id, label: item.label, text: item.text, hash, path: `/v1/${VOICE}/${hash}.m4a` });
      unique.add(hash);
    }
  }

  const key = `study:${q.slug}`;
  for (const item of studyItems(q, verseText)) {
    const hash = sha1Hex(item.text);
    entries.push({ key, itemId: item.id, label: item.label, text: item.text, hash, path: `/v1/${VOICE}/${hash}.m4a` });
    unique.add(hash);
  }
}

const manifest = {
  version: 1,
  voice: VOICE,
  note: "Content-addressed audio catalog. Generate /v1/{voice}/{hash}.m4a for each unique hash; skip files already in the bucket.",
  generatedAt: new Date().toISOString(),
  totalEntries: entries.length,
  uniqueChunks: unique.size,
  entries,
};

writeFileSync(OUT, JSON.stringify(manifest, null, 2) + "\n");

// ---- summary ---------------------------------------------------------------

const chaptersCount = new Set(entries.filter((e) => e.key.startsWith("passage:")).map((e) => e.key)).size;
const studiesCount = new Set(entries.filter((e) => e.key.startsWith("study:")).map((e) => e.key)).size;
const sample = entries.find((e) => e.itemId === "intro") ?? entries[0];

console.log(`Wrote ${OUT}`);
console.log(`  entries:      ${entries.length}`);
console.log(`  unique files: ${unique.size}`);
console.log(`  source groups: ${chaptersCount} passage queues, ${studiesCount} study queues`);
console.log(`  e.g. ${sample.key} / ${sample.itemId}`);
console.log(`  path: ${sample.path}`);
console.log(`  tip: recalc must match Node sha1: ${sha1Hex("abc") === "a9993e364706816aba3e25717850c26c9cd0d89d" ? "ok" : "MISMATCH"}`);

if (sample.path.includes(" ") || sample.text.includes("\n")) {
  console.error("Sanity check failed: path/text contains whitespace anomalies");
  process.exit(1);
}

// Also sanity-check that every passage ref resolves to scripture.
let missing = 0;
for (const q of questions) {
  for (const p of q.passages) {
    if (!chapters[`${canonicalBook(p.book)} ${p.chapter}`]) {
      console.error(`  MISSING chapter ${p.book} ${p.chapter} (${q.slug})`);
      missing++;
    }
  }
  for (const pt of q.points) {
    for (const ref of pt.verses) {
      if (!verseText(ref)) {
        console.error(`  MISSING verse ${ref} (${q.slug})`);
        missing++;
      }
    }
  }
}
if (missing) {
  console.error(`${missing} unresolved references`);
  process.exit(1);
}
console.log("  all source verses resolve; manifest OK");