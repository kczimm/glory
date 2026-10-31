// Fast validation for the content layer (no network, no Next build).
// Usage: node scripts/validate.mjs
//
// Checks:
//  1. Every verse ref in questions.ts (verses[], keyVerses[], passage focus) resolves
//     against the vendored scripture.ts.
//  2. Every passage book/chapter exists in scripture.ts.
//  3. raises / followsFrom / related slugs all resolve to real questions.
//  4. No em dash (—) in questions.ts copy (scripture.ts is exempt, it's quoted WEB).
//  5. Every question has at least one outgoing edge: raises[] or planned[] non-empty
//     (the "trail never dead-ends" rule).
//  6. planned[] entries do not match an existing question (no stale "Coming soon").
//  7. Duplicate slugs, duplicate orders within a category.

import { parseFocus } from "../src/lib/focus.ts";
import {
  allLists,
  canonicalBook,
  field,
  list,
  loadQuestionBlocks,
  loadScripture,
  parseRef,
  readSource,
  verseKeys,
} from "./lib/source.mjs";

const questionsSrc = readSource("src/data/questions.ts");

// ---- parse vendored verse keys -------------------------------------------------
const { verses, chapters } = loadScripture();

// ---- parse questions.ts --------------------------------------------------------
const questions = [];
for (const { slug, body: b } of loadQuestionBlocks(questionsSrc)) {
  questions.push({
    slug,
    question: field(b, "question"),
    category: field(b, "category"),
    summary:
      b.match(/summary:\s*\n?\s*"([\s\S]*?)",\n\s*passages/)?.[1] ??
      field(b, "summary"),
    order: b.match(/order: (\d+)/)?.[1] ?? null,
    passages: (() => {
      const pm = b.match(/passages: \[([\s\S]*?)\n\s*\],/);
      if (!pm) return [];
      // Each block is one passage object's fields; fields are scalar strings, so
      // splitting on "{" is safe and lets us read each passage's OWN focus.
      return pm[1].split("{").filter((blk) => blk.includes("book:")).map((blk) => ({
        book: blk.match(/book: "([^"]+)"/)?.[1],
        chapter: +blk.match(/chapter: (\d+)/)?.[1],
        focus: blk.match(/focus: "([^"]+)"/)?.[1],
      }));
    })(),
    verses: [...new Set([...allLists(b, "verses"), ...allLists(b, "keyVerses")])],
    raises: list(b, "raises"),
    followsFrom: list(b, "followsFrom"),
    related: list(b, "related"),
    planned: list(b, "planned"),
  });
}

const bySlug = new Map(questions.map((q) => [q.slug, q]));
const problems = [];
const ok = (cond, msg) => {
  if (!cond) problems.push(msg);
};

// ---- 1 & 2: verse refs and passages resolve ------------------------------------
for (const q of questions) {
  for (const ref of q.verses) {
    const parsed = parseRef(ref);
    if (!parsed) {
      ok(false, `${q.slug}: unparseable ref "${ref}"`);
      continue;
    }
    for (const key of verseKeys(parsed)) {
      ok(verses.has(key), `${q.slug}: missing verse ${key} (ref "${ref}")`);
    }
  }
  for (const p of q.passages) {
    const ckey = `${canonicalBook(p.book)} ${p.chapter}`;
    ok(chapters.has(ckey), `${q.slug}: missing chapter ${p.book} ${p.chapter}`);
    if (!p.focus) continue;
    // The focus grammar lives in src/lib/focus.ts, shared with the reader and
    // the audio queue; null means it could not be parsed.
    const ranges = parseFocus(p.focus);
    ok(ranges !== null, `${q.slug}: unparseable focus "${p.focus}" in ${p.book} ${p.chapter}`);
    const len = chapters.get(ckey) ?? 0;
    for (const r of ranges ?? []) {
      ok(r.start >= 1 && r.end <= len, `${q.slug}: focus ${p.focus} out of bounds for ${p.book} ${p.chapter} (chapter has ${len ? len : "unknown"} verses)`);
    }
  }
}

// ---- 3: edges resolve -----------------------------------------------------------
for (const q of questions) {
  for (const slug of [...q.raises, ...q.followsFrom, ...q.related]) {
    ok(bySlug.has(slug), `${q.slug}: edge to unknown slug "${slug}"`);
  }
}

// ---- 4: no em dashes in copy ----------------------------------------------------
for (const m of questionsSrc.matchAll(/—/g)) {
  const lineStart = questionsSrc.lastIndexOf("\n", m.index) + 1;
  const line = questionsSrc.slice(lineStart, questionsSrc.indexOf("\n", m.index));
  ok(false, `em dash in questions.ts: ${line.trim()}`);
}

// ---- 5: trail never dead-ends ---------------------------------------------------
for (const q of questions) {
  ok(q.raises.length > 0 || q.planned.length > 0, `${q.slug}: dead-end trail (no raises, no planned)`);
}

// ---- 6: planned entries are not stale ------------------------------------------
// Only flag near-identical matches (equality, or containment where the contained
// phrase is long enough to be a real overlap, e.g. exact titles).
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
const containsReal = (longer, shorter) =>
  shorter.length >= 25 && longer.includes(shorter);
for (const q of questions) {
  for (const p of q.planned) {
    const np = norm(p);
    for (const other of questions) {
      const no = norm(other.question ?? "");
      if (no && (no === np || containsReal(no, np) || containsReal(np, no))) {
        ok(false, `${q.slug}: planned "${p}" matches existing question "${other.question}" (stale Coming soon)`);
      }
    }
  }
}

// ---- 7: duplicate slugs / duplicate orders per category ------------------------
const seen = new Set();
for (const q of questions) {
  ok(!seen.has(q.slug), `duplicate slug "${q.slug}"`);
  seen.add(q.slug);
}
const orders = new Map();
for (const q of questions) {
  const key = `${q.category}:${q.order}`;
  ok(!orders.has(key), `duplicate order ${q.order} in category ${q.category} (${q.slug})`);
  orders.set(key, q.slug);
}

// ---- report ---------------------------------------------------------------------
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log(`OK: ${questions.length} questions; all refs, edges, copy, and trail rules pass.`);
