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

import { readFileSync } from "node:fs";

const questionsSrc = readFileSync("src/data/questions.ts", "utf8");
const scriptureSrc = readFileSync("src/data/scripture.ts", "utf8");

// ---- parse vendored verse keys -------------------------------------------------
const verseKeys = new Set(
  [...scriptureSrc.matchAll(/^\s{2}"([^"]+)": "/gm)].map((m) => m[1])
);
const chapterKeys = new Set(
  [...scriptureSrc.matchAll(/^\s{2}"([^"]+)": \[/gm)].map((m) => m[1])
);
const BOOK_ALIASES = { Psalm: "Psalms" };
const canonicalBook = (b) => BOOK_ALIASES[b] ?? b;

// ---- parse questions.ts (crude but reliable given consistent formatting) -------
const blocks = questionsSrc.split(/slug: "/).slice(1);
const questions = [];
for (const b of blocks) {
  const slug = b.slice(0, b.indexOf('"'));
  const get = (re) => {
    const m = b.match(re);
    return m ? m[1] : null;
  };
  const arr = (re) => {
    const m = b.match(re);
    return m && m[1].trim() ? [...m[1].matchAll(/"([^"]+)"/g)].map((s) => s[1]) : [];
  };
  const refs = (re) => {
    const m = b.match(re);
    return m && m[1].trim() ? [...m[1].matchAll(/"(?:[^"\\]|\\.)*"/g)].map((s) => s[0].slice(1, -1)) : [];
  };
  questions.push({
    slug,
    question: get(/question: "([^"]+)"/),
    category: get(/category: "([^"]+)"/),
    summary: get(/summary:\s*\n?\s*"([\s\S]*?)",\n\s*passages/) ?? get(/summary:\s*"([^"]+)"/),
    order: get(/order: (\d+)/),
    passages: (() => {
      const pm = b.match(/passages: \[([\s\S]*?)\n\s*\],/);
      if (!pm) return [];
      return [...pm[1].matchAll(/book: "([^"]+)",\s*\n\s*chapter: (\d+)/g)].map((m) => ({
        book: m[1],
        chapter: +m[2],
      }));
    })(),
    verses: refs(/verses: \[([^\]]*)\]/),
    keyVerses: refs(/keyVerses: \[([^\]]*)\]/),
    raises: arr(/raises: \[([^\]]*)\]/),
    followsFrom: arr(/followsFrom: \[([^\]]*)\]/),
    related: arr(/related: \[([^\]]*)\]/),
    planned: arr(/planned: \[([^\]]*)\]/),
  });
}

const bySlug = new Map(questions.map((q) => [q.slug, q]));
const problems = [];
const ok = (cond, msg) => {
  if (!cond) problems.push(msg);
};

// ---- 1 & 2: verse refs and passages resolve ------------------------------------
const REF_RE = /^(.*?)\s(\d+):(\d+)(?:-(\d+))?$/;
for (const q of questions) {
  for (const ref of [...q.verses, ...q.keyVerses]) {
    const m = ref.match(REF_RE);
    if (!m) {
      ok(false, `${q.slug}: unparseable ref "${ref}"`);
      continue;
    }
    const book = canonicalBook(m[1]);
    const c = +m[2];
    for (let v = +m[3]; v <= +(m[4] ?? m[3]); v++) {
      ok(verseKeys.has(`${book} ${c}:${v}`), `${q.slug}: missing verse ${book} ${c}:${v} (ref "${ref}")`);
    }
  }
  for (const p of q.passages) {
    ok(chapterKeys.has(`${canonicalBook(p.book)} ${p.chapter}`), `${q.slug}: missing chapter ${p.book} ${p.chapter}`);
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
