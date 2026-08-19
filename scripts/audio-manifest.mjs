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
  normalizeText,
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

// ---- chunk health audit ----------------------------------------------------
// Reconstruct every unique Bible verse from its manifest chunks and verify
// the chunking never drops/alters text and never breaks mid-sentence (the
// failure that made John 3:2 sound garbled).

const SENT_END = new Set([".", "?", "!", ";", ":", ","]);
const versesByRef = new Map(); // ref -> { source, chunks: [{ text, k }] }

for (const q of questions) {
  for (const p of q.passages) {
    const cb = canonicalBook(p.book);
    const ch = chapters[`${cb} ${p.chapter}`];
    const list = ch ? filterFocus(ch, p.focus) : [];
    for (const item of chapterItems(p.book, p.chapter, list)) {
      const m = item.id.match(/^(.+?)\s(\d+):(\d+)$/) || item.id.match(/^(.+?)\s(\d+):(\d+)\|(\d+)$/);
      if (!m || item.id === "intro") continue;
      const ref = `${m[1]} ${m[2]}:${m[3]}`;
      const src = verses[`${canonicalBook(m[1])} ${m[2]}:${m[3]}`];
      if (!src) continue;
      const k = m[4] ? Number(m[4]) : 1;
      if (!versesByRef.has(ref)) {
        versesByRef.set(ref, { source: normalizeText(src.replace(/\n+/g, " ")), chunks: [], seen: new Set() });
      }
      const rec = versesByRef.get(ref);
      // The same verse is a passage in several studies; keep one representative.
      if (!rec.seen.has(item.text)) {
        rec.seen.add(item.text);
        rec.chunks.push({ text: item.text, k });
      }
    }
  }
}

let checked = 0;
let altered = 0;
let midSentence = 0;
let tiny = 0;
const problems = [];

for (const [ref, { source, chunks }] of versesByRef) {
  checked++;
  const ordered = chunks.sort((a, b) => a.k - b.k);
  // Invariant: concatenating the chunks reproduces the verse exactly.
  const joined = ordered.map((c) => c.text).join(" ");
  if (joined !== source) {
    altered++;
    problems.push(`  [altered] ${ref}: chunks do not reassemble the source`);
  }
  // Rule: every non-final chunk must end at a sentence/clause boundary.
  for (let i = 0; i < ordered.length - 1; i++) {
    // Ignore trailing quotes/brackets/whitespace: "…God of your father.""
    // ends at the period, not the quote.
    const last = ordered[i].text.trim().replace(/[\s"')\]]+$/, "").slice(-1);
    if (!SENT_END.has(last)) {
      midSentence++;
      problems.push(`  [mid-break] ${ref}: chunk ends "…${ordered[i].text.trim().slice(-24)}"`);
    }
  }
  // Rule: no chunk may be just a stray quote mark or whitespace.
  if (ordered.some((c) => c.text.trim().length <= 3)) {
    tiny++;
    problems.push(`  [orphan] ${ref}: tiny chunk "${JSON.stringify(ordered.find((c) => c.text.trim().length <= 3)?.text)}"`);
  }
}

if (checked) {
  console.log(`\nChunk health: ${checked} unique verses checked`);
  console.log(`  reassemble exactly:      ${altered ? "FAIL " + altered : "all pass (" + checked + " verses)"}`);
  console.log(`  no mid-sentence breaks:  ${midSentence ? "FAIL " + midSentence : "all pass"}`);
  console.log(`  no tiny/orphan chunks:   ${tiny ? "FAIL " + tiny : "all pass"}`);
  if (problems.length) console.log("suspicious:\n" + problems.slice(0, 40).join("\n"));
  if (altered + midSentence + tiny > 0) {
    console.log("\nChunking health check FAILED. Inspect the flagged verses before generating audio.");
    process.exit(1);
  }
}