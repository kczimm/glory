/**
 * Shared source parsing for the verifier scripts.
 *
 * Each verifier used to re-derive the same three things from the text of the
 * generated and hand-written modules with its own indentation- and
 * quote-shape-coupled regex: the vendored verses, the chapter index, and the
 * question blocks. A formatting change could therefore make one of those
 * regexes match nothing, and the script would not fail: it silently checked
 * less. Parsing lives here once, cross-checks its own result, and exits loudly
 * when a shape it depends on has moved.
 *
 * Ref syntax is not repeated here either: it is imported from src/data/ref.ts,
 * the same module the app resolves references with. The audio pipeline already
 * loads app TypeScript under Node's type stripping (see scripts/audio-manifest.mjs),
 * so this adds no build step.
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  canonicalBook,
  joinPassage,
  parseRef,
  verseKeys,
} from "../../src/data/ref.ts";

export { canonicalBook, joinPassage, parseRef, verseKeys };

/** Repository root, from this file's location. */
export const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/** Read a repository-relative source file. */
export function readSource(rel) {
  return readFileSync(resolve(root, rel), "utf8");
}

/** Report a broken expectation and stop. Never continue with a partial parse. */
export function fail(message) {
  console.error(message);
  process.exit(1);
}

const STR = '"(?:[^"\\\\]|\\\\.)*"';

/** Parse one string literal from a generated module, or fail with the literal. */
export function parseLiteral(literal, where) {
  try {
    return JSON.parse(literal);
  } catch {
    return fail(`${where}: could not parse string literal ${literal.slice(0, 60)}`);
  }
}

// ---- vendored scripture ------------------------------------------------------

const scriptureCache = new Map();

/**
 * Parse a generated scripture module.
 *
 * Returns `verses` (Map of ref -> text, in canonical order), `chapters`
 * (Map of "Book N" -> highest verse number), and the raw `source`.
 *
 * The parse is cross-checked against a second, independent reading of the same
 * file: the chapters block lists every verse again as `{ n, text }` entries, in
 * a different shape and in a different block, so a formatting drift that costs
 * the verses block some lines shows up as a per-chapter disagreement here
 * instead of quietly shrinking the corpus every verifier loads.
 *
 * Note on the number of verses: summing the chapter maxima is NOT a usable
 * cross-check, because verse numbering is not contiguous in the WEB. The
 * chapters block numbers each chapter to its full length (31099 in total)
 * while the verses block carries 31095, four of them absent from the WEB
 * corpus altogether (Acts 8:37, Acts 15:34, Acts 24:7, Luke 17:36). The KJV
 * agrees both ways at 31102. Counting the chapters block's verse entries is
 * exact for both files.
 */
export function loadScripture(file = "src/data/scripture.ts") {
  const cached = scriptureCache.get(file);
  if (cached) return cached;

  const source = readSource(file);
  const versesStart = source.indexOf("export const verses");
  const chaptersStart = source.indexOf("export const chapters");
  if (versesStart < 0 || chaptersStart < 0)
    fail(`${file}: could not find the "export const verses"/"chapters" blocks`);

  const verses = new Map();
  const versesBlock = source.slice(versesStart, chaptersStart);
  for (const m of versesBlock.matchAll(new RegExp(`^  (${STR}): (${STR}),$`, "gm")))
    verses.set(parseLiteral(m[1], file), parseLiteral(m[2], file));

  const chapters = new Map();
  /** verses the chapters block itself lists, per chapter */
  const chapterVerseLines = new Map();
  for (const m of source.matchAll(/^  "([^"]+)": \[([\s\S]*?)\n  \],/gm)) {
    const nums = [...m[2].matchAll(/\{ n: (\d+),/g)].map((x) => +x[1]);
    chapters.set(m[1], nums.length ? Math.max(...nums) : 0);
    chapterVerseLines.set(m[1], nums.length);
  }

  if (!verses.size || !chapters.size)
    fail(
      `${file}: parsed ${verses.size} verses and ${chapters.size} chapters; the file's shape has changed`,
    );

  // Independent count: how many verses the chapters block lists, per chapter,
  // against how many verse lines the verses block yielded for that chapter.
  const parsedPerChapter = new Map();
  for (const key of verses.keys()) {
    const chapter = key.slice(0, key.lastIndexOf(":"));
    parsedPerChapter.set(chapter, (parsedPerChapter.get(chapter) ?? 0) + 1);
  }
  for (const [chapter, listed] of chapterVerseLines) {
    const parsed = parsedPerChapter.get(chapter) ?? 0;
    if (parsed !== listed)
      fail(
        `${file}: ${chapter} lists ${listed} verses in the chapters block but ${parsed} verse lines parsed; the verses block's shape has drifted`,
      );
  }
  for (const chapter of parsedPerChapter.keys())
    if (!chapterVerseLines.has(chapter))
      fail(`${file}: parsed verses for "${chapter}", which is not a chapter in this file`);

  const loaded = { source, verses, chapters };
  scriptureCache.set(file, loaded);
  return loaded;
}

// ---- refs --------------------------------------------------------------------

/** Single-verse keys a ref covers that exist in `verses`, e.g. a range expanded. */
export function expandRef(ref, verses) {
  const parsed = parseRef(ref);
  if (!parsed) return [];
  return verseKeys(parsed).filter((key) => verses.has(key));
}

/** Single-verse keys of a whole chapter. */
export function expandChapter(book, chapter, verses) {
  const prefix = `${canonicalBook(book)} ${chapter}:`;
  const out = [];
  for (const key of verses.keys()) if (key.startsWith(prefix)) out.push(key);
  return out;
}

// ---- question blocks ---------------------------------------------------------

/**
 * Split src/data/questions.ts into study blocks.
 *
 * `body` is the block's source text, starting at the slug value. The split is
 * coupled to the file's formatting, so the result is cross-checked against a
 * count the split itself cannot lose (every study has one `slug:` line): a
 * formatting change fails the run instead of quietly parsing fewer studies.
 */
export function loadQuestionBlocks(src = readSource("src/data/questions.ts")) {
  const blocks = src
    .split(/\n\s{4}slug:\s*"/)
    .slice(1)
    .map((body) => ({ slug: body.slice(0, body.indexOf('"')), body }));

  const expected = (src.match(/\n\s+slug:\s*"/g) ?? []).length;
  if (!blocks.length || blocks.length !== expected || blocks.some((b) => !b.slug))
    fail(
      `src/data/questions.ts: parsed ${blocks.length} study blocks but found ${expected} slug lines`,
    );
  return blocks;
}

/** A quoted string field of a block: `field(body, "question")`. */
export function field(body, key) {
  return body.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`))?.[1] ?? null;
}

/** The quoted strings of a block's array field, e.g. `raises: ["a", "b"]`. */
export function list(body, key) {
  const inner = body.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "s"))?.[1];
  if (!inner || !inner.trim()) return [];
  return [...inner.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
}

/**
 * Every array field `key` in a block, concatenated. Study points each carry
 * their own `verses: [...]`, so `.match()` (first array only) would miss a
 * broken ref in every later point.
 */
export function allLists(body, key) {
  const out = [];
  for (const m of body.matchAll(new RegExp(`${key}: \\[([^\\]]*)\\]`, "g")))
    if (m[1].trim())
      out.push(...[...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1]));
  return out;
}
