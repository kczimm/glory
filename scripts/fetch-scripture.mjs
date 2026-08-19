#!/usr/bin/env node
/**
 * Fetches World English Bible (WEB) text from bible-api.com and generates
 * src/data/scripture.ts.
 *
 * It scans src/data/questions.ts for every verse reference and every
 * chapter used in passages, fetches the exact text for each, and writes
 * a typed data module. Run:  node scripts/fetch-scripture.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Scan all source files so verses cited anywhere in the app get fetched. */
function sourcePaths() {
  const paths = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const p = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(entry.name)) paths.push(p);
    }
  };
  walk(resolve(root, "src"));
  return paths;
}

const source = sourcePaths().map((p) => readFileSync(p, "utf8")).join("\n");

const BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua",
  "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
  "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job",
  "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah",
  "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel",
  "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah",
  "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John",
  "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians",
  "Ephesians", "Philippians", "Colossians", "1 Thessalonians",
  "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon",
  "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
  "Jude", "Revelation",
];

/** content book name -> canonical API book name */
const ALIASES = { Psalm: "Psalms" };

// ---- extract chapters used in passages ----------------------------------
const chapterRefs = new Set();
for (const m of source.matchAll(/book:\s*"([^"]+)",\s*chapter:\s*(\d+)/g)) {
  const book = ALIASES[m[1]] ?? m[1];
  chapterRefs.add(`${book} ${m[2]}`);
}

// ---- extract verse references (Book c:v or Book c:v-v) --------------------
const verseRefs = new Set();
const refRegex = /\b(?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?\b/g;
for (const m of source.matchAll(refRegex)) {
  const raw = m[0];
  const [name, range] = raw.split(/\s(\d+:\d+(?:-\d+)?)$/).filter(Boolean);
  const book = ALIASES[name] ?? name;
  if (!BOOKS.includes(book)) continue; // prose false-positives
  verseRefs.add(`${book} ${range}`);
}

// ---- fetch ----------------------------------------------------------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let globalCooldown = 0;
async function fetchRef(ref) {
  // "+ " is the API's path separator for spaces — do NOT encode it
  const url = `https://bible-api.com/${ref.toLowerCase().replace(/ /g, "+")}?translation=web`;
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      if (globalCooldown > Date.now()) await sleep(globalCooldown - Date.now());
      const res = await fetch(url);
      if (res.status === 429) {
        globalCooldown = Date.now() + 12000; // the API throttles per-minute
        throw new Error("HTTP 429 rate limited");
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (!json.verses?.length) throw new Error("no verses in response");
      return json.verses;
    } catch (err) {
      if (attempt === 7) throw new Error(`failed: ${ref} — ${err.message}`);
      await sleep(2000 * (attempt + 1));
    }
  }
}

const all = new Map(); // "Book c:v" -> text
const chapterMap = new Map(); // "Book c" -> [{n,text}]

const tasks = [...chapterRefs].map((r) => ({ kind: "chapter", ref: r }));
const covered = new Set();
for (const ref of chapterRefs) {
  const [book, ch] = ref.split(" ");
  covered.add(`${book} ${ch}`);
}
for (const ref of verseRefs) {
  const m = ref.match(/^(.+?) (\d+):(\d+)(?:-(\d+))?$/);
  if (!m) continue;
  const [, book, ch] = m;
  if (!covered.has(`${book} ${ch}`)) tasks.push({ kind: "verse", ref });
}

console.log(`Fetching ${tasks.length} references (${chapterRefs.size} chapters, ${verseRefs.size} verse refs)...`);
let done = 0;
for (const task of tasks) {
  const verses = await fetchRef(task.ref);
  for (const v of verses) {
    const key = `${v.book_name} ${v.chapter}:${v.verse}`;
    all.set(key, v.text.trim());
    if (task.kind === "chapter") {
      const ck = `${v.book_name} ${v.chapter}`;
      if (!chapterMap.has(ck)) chapterMap.set(ck, []);
      chapterMap.get(ck).push({ n: v.verse, text: v.text.trim() });
    }
  }
  done++;
  if (done % 10 === 0) console.log(`  ${done}/${tasks.length}`);
  await sleep(350 + Math.random() * 250);
}

// ---- validation ------------------------------------------------------------
const missingVerses = [...verseRefs].filter((ref) => {
  const m = ref.match(/^(.+?) (\d+):(\d+)(?:-(\d+))?$/);
  const [, book, ch, v1, v2] = m;
  for (let v = +v1; v <= (+v2 ?? +v1); v++) {
    if (!all.has(`${book} ${ch}:${v}`)) return true;
  }
  return false;
});
const missingChapters = [...chapterRefs].filter((r) => !chapterMap.has(r));
if (missingVerses.length || missingChapters.length) {
  console.error("MISSING:", { missingVerses, missingChapters });
  process.exit(1);
}

// ---- write ------------------------------------------------------------------
const verseLines = [...all.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
  .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`);

const chapterLines = [...chapterMap.entries()]
  .sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))
  .map(([k, vs]) => {
    const rows = vs.map((v) => `    { n: ${v.n}, text: ${JSON.stringify(v.text)} }`).join(",\n");
    return `  ${JSON.stringify(k)}: [\n${rows},\n  ],`;
  });

const out = `// GENERATED by scripts/fetch-scripture.mjs — do not edit by hand.
// Source: World English Bible (public domain) via bible-api.com

export const translation = "World English Bible";
export const translationNote = "Public Domain";

export const verses: Record<string, string> = {
${verseLines.join("\n")}
};

export const chapters: Record<string, { n: number; text: string }[]> = {
${chapterLines.join("\n")}
};
`;

writeFileSync(resolve(root, "src/data/scripture.ts"), out);
console.log(`\nWrote src/data/scripture.ts`);
console.log(`  ${all.size} unique verses`);
console.log(`  ${chapterMap.size} chapters`);
