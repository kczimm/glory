#!/usr/bin/env node
/**
 * Audio catalog guard: fails the build when any chunk the app can speak is
 * missing from the generated catalog (audio-manifest.json).
 *
 * The historical failure mode: a queue builder changed on one side only
 * (client component vs pipeline), or new content shipped before its audio,
 * and listeners silently fell back to native TTS after two misses. This
 * check reconstructs EVERY queue the app can play, exactly as each surface
 * builds it, hashes every chunk with the shared audio-text module, and
 * requires each hash to exist in the manifest:
 *
 *   - study queues, both bare (study page) and cued "And now, the study."
 *     (visit chain), including grounding verses and outros
 *   - chapter-reader queues: whole-chapter data filtered through the same
 *     focus range the reader plays
 *
 * Usage:
 *   node scripts/audio-check.mjs [--manifest audio-manifest.json]
 *
 * Exit 1 lists every uncovered hash with its source; exit 0 means every
 * playable chunk has a file in the catalog.
 */

import { readFileSync } from "node:fs";
import {
  canonicalBook,
  chapterItems,
  filterFocus,
  sha1Hex,
  studyItems,
} from "../src/lib/audio-text.ts";
import { verses, chapters } from "../src/data/scripture.ts";
import { questions } from "../src/data/questions.ts";

const MANIFEST = process.argv.includes("--manifest")
  ? process.argv[process.argv.indexOf("--manifest") + 1]
  : "audio-manifest.json";

// ---- verse text resolution (mirrors getPassageText in src/data/server.ts) --

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

function getPassageText(ref) {
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

// ---- resolve question titles (mirrors src/data/server.ts) ------------------

function resolveQuestion(slug) {
  return questions.find((x) => x.slug === slug) ?? null;
}

// ---- reconstruct every queue the app can speak ------------------------------

const CUE = "And now, the study.";

const wanted = []; // { source, id, text }

for (const q of questions) {
  // Study page queue (src/app/questions/[slug]: studyListenData -> no cue)
  for (const item of studyItems(q, getPassageText, {
    outroTargetId: "raises",
    resolveTitle: (slug) => resolveQuestion(slug)?.question ?? null,
  })) {
    wanted.push({ source: `study:${q.slug}`, id: item.id, text: item.text });
  }

  // Visit chain study segment (server.ts passes the cue explicitly)
  for (const item of studyItems(q, getPassageText, {
    cue: CUE,
    outroTargetId: "raises",
    resolveTitle: (slug) => resolveQuestion(slug)?.question ?? null,
  })) {
    wanted.push({ source: `visit:${q.slug}`, id: item.id, text: item.text });
  }

  // Chapter readers: full chapter filtered by the passage focus range,
  // exactly what ChapterReader.tsx plays after the fix.
  for (const p of q.passages) {
    const key = `${canonicalBook(p.book)} ${p.chapter}`;
    const ch = chapters[key] ?? [];
    for (const item of chapterItems(p.book, p.chapter, filterFocus(ch, p.focus))) {
      wanted.push({
        source: `chapter:${p.book} ${p.chapter} (${q.slug})`,
        id: item.id,
        text: item.text,
      });
    }
  }
}

// ---- compare against the catalog -------------------------------------------

let catalog;
try {
  catalog = JSON.parse(readFileSync(MANIFEST, "utf8"));
} catch {
  console.error(`audio-check: cannot read ${MANIFEST}. Run \`npm run audio:manifest\` first.`);
  process.exit(1);
}

const have = new Set(catalog.entries.map((e) => e.hash));
const missing = [];
for (const w of wanted) {
  const h = sha1Hex(w.text);
  if (!have.has(h)) missing.push({ ...w, hash: h });
}

if (missing.length > 0) {
  console.error(
    `\naudio-check: FAIL — ${missing.length} spoken chunk(s) are not in the catalog.\n`
  );
  const seen = new Set();
  for (const m of missing) {
    if (seen.has(m.hash)) continue;
    seen.add(m.hash);
    console.error(`  [${m.hash}] ${m.source} #${m.id}`);
    console.error(`      ${JSON.stringify(m.text.slice(0, 90))}`);
  }
  console.error(
    `\nRun \`npm run audio:manifest\`, generate + sync the missing files,\n` +
      `and commit the updated catalog before deploying.\n`
  );
  process.exit(1);
}

console.log(
  `audio-check: OK — all ${wanted.length} playable chunks (${new Set(wanted.map((w) => sha1Hex(w.text))).size} unique) are in the catalog.`
);
