#!/usr/bin/env node
/**
 * Vendors the FULL World English Bible (WEB) and King James Version (KJV)
 * into src/data/scripture.ts and src/data/scripture-kjv.ts.
 *
 * Source: getbible.net translations (66 books each, one request per book).
 * Run once:  node scripts/fetch-bible.mjs
 * Regenerates the complete offline Bible used across the app.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const BOOKS = 66; // the whole Bible
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Translations to fetch: WEB (default) and KJV
const TRANSLATIONS = [
  { code: "web", name: "World English Bible", note: "Public Domain", file: "scripture.ts" },
  { code: "kjv", name: "King James Version", note: "Public Domain", file: "scripture-kjv.ts" },
];

/**
 * Strip USFM footnote markup that getbible.net leaks into the plain text
 * (e.g. "cherubim/f + note about cherubim/f*") and normalize whitespace.
 */
function cleanVerse(text) {
  return text
    .replace(/\/f\s*\+?[\s\S]*?\/f\*/g, "") // slashed footnote spans
    .replace(/\\f\s*\+?[\s\S]*?\\f\*/g, "") // USFM backslash spans
    .replace(/[\\/]f\*?/g, "") // stray markers
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchTranslation(translation) {
  const BASE = `https://api.getbible.net/v2/${translation.code}`;
  const verses = new Map(); // "Genesis 1:1" -> text
  const chapters = new Map(); // "Genesis 1" -> [{n,text}]
  let failures = [];

  process.stdout.write(`\nFetching ${translation.name} (${translation.code})...\n`);

  for (let n = 1; n <= BOOKS; n++) {
    let ok = false;
    for (let attempt = 0; attempt < 6 && !ok; attempt++) {
      try {
        const res = await fetch(`${BASE}/${n}.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const book = await res.json();
        if (!book.chapters?.length) throw new Error("no chapters");
        for (const ch of book.chapters) {
          const ck = `${book.name} ${ch.chapter}`;
          if (!chapters.has(ck)) chapters.set(ck, []);
          for (const v of ch.verses) {
            const text = cleanVerse(v.text);
            if (!text) continue; // scriptural footnotes that carried a whole verse (e.g. Acts 8:37) omit it
            verses.set(`${book.name} ${v.chapter}:${v.verse}`, text);
            chapters.get(ck).push({ n: v.verse, text });
          }
        }
        ok = true;
      } catch (err) {
        if (attempt === 5) failures.push(`${n} — ${err.message}`);
        else await sleep(1500 * (attempt + 1));
      }
    }
    if (n % 10 === 0) process.stdout.write(`  fetched ${n}/${BOOKS}\n`);
  }

  if (failures.length) {
    console.error(`FAILURES (${translation.code}):`, failures);
    process.exit(1);
  }

  return { verses, chapters };
}

function writeTranslation(translation, data) {
  const { verses, chapters } = data;

  // ---- sanity checks ----------------------------------------------------------
  const chapterCount = chapters.size;
  console.log(`\n${translation.name} downloaded:`);
  console.log(`  chapters: ${chapterCount}`);
  console.log(`  verses:   ${verses.size}`);

  if (chapterCount !== 1189) {
    console.error("Chapter count mismatch — aborting.");
    process.exit(1);
  }

  // ---- make sure every reference already used in the app still resolves ------
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
  const source = sourcePaths().map((p) => readFileSync(p, "utf8")).join("\n");
  const missing = new Set();
  for (const m of source.matchAll(/\b(?:\d\s)?[A-Za-z]+(?:\s[A-Za-z]+)*\s\d+:\d+(?:-\d+)?\b/g)) {
    const raw = m[0];
    const [name, range] = raw.split(/\s(\d+:\d+(?:-\d+)?)$/).filter(Boolean);
    if (!BOOK_NAMES.has(name)) continue;
    const [, c, vFrom, vTo] = range.match(/^(\d+):(\d+)(?:-(\d+))?$/);
    for (let v = +vFrom; v <= (+vTo ?? +vFrom); v++) {
      if (!verses.has(`${name} ${c}:${v}`)) missing.add(`${name} ${c}:${v}`);
    }
  }
  if (missing.size) {
    console.error("MISSING referenced verses:", [...missing].slice(0, 20));
    process.exit(1);
  }

  // ---- write ------------------------------------------------------------------
  const verseLines = [...verses.keys()]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(verses.get(k))},`);

  const chapterLines = [...chapters.keys()]
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((k) => {
      const rows = chapters
        .get(k)
        .map((v) => `    { n: ${v.n}, text: ${JSON.stringify(v.text)} }`)
        .join(",\n");
      return `  ${JSON.stringify(k)}: [\n${rows},\n  ],`;
    });

  const header = `// GENERATED by scripts/fetch-bible.mjs — do not edit by hand.
// The complete ${translation.name} (public domain), vendored for offline use.
// Source: getbible.net (translation "${translation.code}").

export const translation = "${translation.name}";
export const translationNote = "${translation.note}";
export const translationCode = "${translation.code}";

`;

  const versesBlock = `export const verses: Record<string, string> = {\n${verseLines.join("\n")}\n};\n`;
  const chaptersBlock = `\nexport const chapters: Record<string, { n: number; text: string }[]> = {\n${chapterLines.join("\n")}\n};\n`;

  writeFileSync(resolve(root, `src/data/${translation.file}`), header + versesBlock + chaptersBlock);
  console.log(`\nWrote src/data/${translation.file}  (${((versesBlock.length + chaptersBlock.length) / 1024).toFixed(1)} KB of data)`);
}

// ---- fetch and write all translations ----
for (const translation of TRANSLATIONS) {
  const data = await fetchTranslation(translation);
  writeTranslation(translation, data);
}

console.log("\nDone! All translations vendored.");
