#!/usr/bin/env node
/**
 * Verifies the vendored scripture against the World English Bible.
 *
 *  1. Parses src/data/scripture.ts (generated format) and checks its internal
 *     integrity: chapter/verse counts, verses map vs chapters arrays, verse
 *     numbering continuity.
 *  2. Re-fetches all 66 books from getbible.net ("web", same source as
 *     fetch-bible.mjs, identical cleaning) and diffs every verse text.
 *  3. Confirms every Bible reference used anywhere in src/ resolves.
 *
 * Quotation checking has moved to scripts/verify-quotes.mjs (npm run
 * verify:quotes): an attribution-based checker that compares every quoted
 * span word-by-word against the WEB and FAILS on misquotes. This script now
 * only verifies the vendored scripture itself plus reference resolution.
 *
 * Exit codes: 0 = verified, 1 = verification failed, 2 = could not verify
 * (network/source errors).
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = "https://api.getbible.net/v2/web";
const BOOKS = 66;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let hardFail = false;
const fail = (msg) => { console.error(`  FAIL ${msg}`); hardFail = true; };
const info = (msg) => console.log(`  --   ${msg}`);

/** Must stay byte-identical to cleanVerse() in fetch-bible.mjs. */
function cleanVerse(text) {
  return text
    .replace(/\/f\s*\+?[\s\S]*?\/f\*/g, "")
    .replace(/\\f\s*\+?[\s\S]*?\\f\*/g, "")
    .replace(/[\\/]f\*?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ---- 1. parse the generated file --------------------------------------------
console.log("== parsing src/data/scripture.ts");
const file = readFileSync(resolve(root, "src/data/scripture.ts"), "utf8");

const STR = '"(?:[^"\\\\]|\\\\.)*"';
const versesStart = file.indexOf("export const verses");
const chaptersStart = file.indexOf("export const chapters");
if (versesStart < 0 || chaptersStart < 0) {
  console.error("scripture.ts does not have the expected generated shape.");
  process.exit(2);
}
const versesBlock = file.slice(versesStart, chaptersStart);
const chaptersBlock = file.slice(chaptersStart);

const fileVerses = new Map(); // "Genesis 1:1" -> text
for (const m of versesBlock.matchAll(new RegExp(`^  (${STR}): (${STR}),$`, "gm"))) {
  fileVerses.set(JSON.parse(m[1]), JSON.parse(m[2]));
}
const fileChapters = new Map(); // "Genesis 1" -> [{n,text}]
for (const h of chaptersBlock.matchAll(new RegExp(`^  (${STR}): \\[$`, "gm"))) {
  const key = JSON.parse(h[1]);
  const end = chaptersBlock.indexOf("\n  ],", h.index);
  if (end < 0) fail(`chapter ${key}: unterminated array`);
  else {
    const rows = chaptersBlock
      .slice(h.index + h[0].length, end)
      .matchAll(/\{ n: (\d+), text: ("(?:[^"\\]|\\.)*") \}/g);
    fileChapters.set(key, [...rows].map((r) => ({ n: +r[1], text: JSON.parse(r[2]) })));
  }
}

const BOOK_NAMES = new Set([
  "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
  "1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
  "Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon",
  "Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
  "Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah",
  "Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians",
  "2 Corinthians","Galatians","Ephesians","Philippians","Colossians",
  "1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon",
  "Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation",
]);

console.log(`  parsed ${fileChapters.size} chapters, ${fileVerses.size} verses`);

// internal integrity ----------------------------------------------------------
// getbible.net names this book "Song of Songs"; our reference checks accept the
// common English name "Song of Solomon" and alias it below.
const KEY_BOOK_NAMES = new Set([...BOOK_NAMES, "Song of Songs"]);
if (fileChapters.size !== 1189) fail(`expected 1189 chapters, found ${fileChapters.size}`);
const unknownBooks = new Set(
  [...fileVerses.keys(), ...fileChapters.keys()]
    .map((k) => k.replace(/^(.*?)\s\d.*$/, "$1"))
    .filter((b) => !KEY_BOOK_NAMES.has(b)),
);
if (unknownBooks.size) fail(`unknown book names in keys: ${[...unknownBooks].join(", ")}`);

let rowMismatches = 0;
const gaps = [];
for (const [ck, rows] of fileChapters) {
  const seen = new Set();
  for (const row of rows) {
    const ref = `${ck}:${row.n}`;
    if (seen.has(row.n)) { fail(`duplicate verse number ${ref}`); break; }
    seen.add(row.n);
    if (fileVerses.get(ref) !== row.text && rowMismatches++ < 10)
      info(`chapters row differs from verses map at ${ref}`);
  }
  for (let n = 1; n <= Math.max(...rows.map((r) => r.n)); n++)
    if (!seen.has(n)) gaps.push(`${ck}:${n}`);
}
if (rowMismatches > 10) info(`... and ${rowMismatches - 10} more chapters/verses rows differing`);
info(`verses absent from numbering (${gaps.length}): ${gaps.slice(0, 8).join(", ")}${gaps.length > 8 ? " ..." : ""}`);

const orphans = [...fileVerses.keys()].filter((k) => !fileChapters.has(k.replace(/:\d+$/, "")));
if (orphans.length) fail(`${orphans.length} verses have no chapter array (e.g. ${orphans[0]})`);

// ---- 2. re-fetch the source and diff ----------------------------------------
console.log("\n== fetching WEB from getbible.net (66 books)");
const remoteVerses = new Map();
const remoteChapters = new Map();
let fetchFailed = false;

outer: for (let n = 1; n <= BOOKS; n++) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(`${BASE}/${n}.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const book = await res.json();
      if (!book.chapters?.length) throw new Error("no chapters");
      for (const ch of book.chapters) {
        const ck = `${book.name} ${ch.chapter}`;
        if (!remoteChapters.has(ck)) remoteChapters.set(ck, []);
        for (const v of ch.verses) {
          const text = cleanVerse(v.text);
          if (!text) continue;
          remoteVerses.set(`${book.name} ${v.chapter}:${v.verse}`, text);
          remoteChapters.get(ck).push({ n: v.verse, text });
        }
      }
      if (n % 22 === 0 || n === BOOKS) console.log(`  fetched ${n}/${BOOKS} books`);
      await sleep(120);
      continue outer;
    } catch (err) {
      if (attempt === 4) { console.error(`  network failure on book ${n}: ${err.message}`); fetchFailed = true; }
      else await sleep(1200 * (attempt + 1));
    }
  }
  if (fetchFailed) process.exit(2);
}

console.log("\n== comparing vendored text against source");
const missing = [], extra = [], differing = [];
for (const [k, v] of remoteVerses) {
  if (!fileVerses.has(k)) missing.push(k);
  else if (fileVerses.get(k) !== v) differing.push(k);
}
for (const k of fileVerses.keys()) if (!remoteVerses.has(k)) extra.push(k);

const show = (label, list) => {
  if (!list.length) return console.log(`  ${label}: none`);
  fail(`${label}: ${list.length}, e.g. ${list.slice(0, 5).join(", ")}`);
};
show("verses missing from vendored copy", missing);
show("verses not present upstream", extra);
show("verses whose text differs", differing);

let chapterDrift = 0;
for (const [ck, rows] of remoteChapters) {
  const mine = fileChapters.get(ck);
  if (!mine || mine.length !== rows.length ||
      rows.some((r, i) => mine[i].n !== r.n || mine[i].text !== r.text)) {
    if (chapterDrift < 5) info(`chapter array drift at ${ck}`);
    chapterDrift++;
  }
}
if (chapterDrift) fail(`${chapterDrift} chapter arrays differ from source`);

// ---- 3. every reference used in src/ resolves -------------------------------
console.log("\n== resolving references used in src/");
function sourcePaths() {
  const paths = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const p = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(entry.name) && entry.name !== "scripture.ts") paths.push(p);
    }
  };
  walk(resolve(root, "src"));
  return paths;
}
const source = sourcePaths().map((p) => readFileSync(p, "utf8")).join("\n");
/** True if the ref resolves, accepting either WEB naming of Song of Songs. */
function resolves(ref) {
  if (fileVerses.has(ref)) return true;
  const alt = ref.startsWith("Song of Songs ")
    ? ref.replace("Song of Songs", "Song of Solomon")
    : ref.replace(/^Song of Solomon/, "Song of Songs");
  return fileVerses.has(alt);
}
const unresolved = new Set();
for (const m of source.matchAll(/\b(?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?\b/g)) {
  const raw = m[0];
  const [nameRaw, range] = raw.split(/\s(\d+:\d+(?:-\d+)?)$/).filter(Boolean);
  const name = nameRaw === "Psalm" ? "Psalms" : nameRaw;
  if (!KEY_BOOK_NAMES.has(name)) continue;
  const [, c, vFrom, vTo] = range.match(/^(\d+):(\d+)(?:-(\d+))?$/);
  for (let v = +vFrom; v <= (+vTo ?? +vFrom); v++)
    if (!resolves(`${name} ${c}:${v}`)) unresolved.add(`${name} ${c}:${v}`);
}
if (unresolved.size) fail(`references that do not resolve: ${[...unresolved].slice(0, 20).join(", ")}`);
else console.log(`  all references resolve`);

// ---- 4. hand-written quotations --------------------------------------------
console.log("\n== hand-written quotations");
console.log(`  checked separately by npm run verify:quotes (scripts/verify-quotes.mjs)`);

// ---- verdict -----------------------------------------------------------------
console.log("");
if (hardFail) { console.error("VERIFICATION FAILED"); process.exit(1); }
console.log("PASS: vendored scripture matches the WEB; all references resolve.");
