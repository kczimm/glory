#!/usr/bin/env node
/**
 * Verifies src/data/background.ts, the chapter-level reading notes.
 *
 * These notes are prose, so they cannot be checked the way a study point is
 * (that one is grounded by an explicit verse list). Instead this script holds
 * them to the rules that keep prose honest:
 *
 *  1. Every key is a real chapter of the vendored WEB (`"Book Chapter"`).
 *  2. Every `term` occurs in a single verse of that chapter, on word
 *     boundaries, so a word study cannot be attached to a passage that does
 *     not use the word (or match across two verses).
 *  3. Every `original` is a Latin-alphabet transliteration (diacritics and
 *     hyphens allowed), not Greek or Hebrew script that nothing here can check.
 *  4. Every `verse N` / `verses N and M` citation points inside the chapter,
 *     so a note cannot cite a verse the chapter does not have.
 *  5. Every entry quotes scripture at least once, and every quoted span occurs
 *     verbatim somewhere in the WEB (split on ellipses). Requiring the quote is
 *     what keeps this check alive: a file with no quotation marks is a file
 *     where the rule silently checks nothing. Rendering scripture in prose
 *     without quotation marks is the drift this project has already suffered.
 *  6. No em dashes in any rendered string, and word caps, so an entry stays a
 *     note and not an essay.
 *  7. `sources` is non-empty, unique, and bounded: the claim has a home.
 *
 * Exit codes: 0 = notes healthy, 1 = violations found.
 */
import { background } from "../src/data/background.ts";
import { verses } from "../src/data/scripture.ts";
import { BIBLE_BOOKS } from "../src/data/books.ts";

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();

const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;

const CAPS = {
  setting: 110,
  genre: 100,
  reception: 120,
  note: 45,
  gloss: 30,
};

const errors = [];
const fail = (msg) => errors.push(msg);

/** Every verse, normalized once, for the quoted-span check. */
const corpus = Object.values(verses).map(norm);

/** Per-chapter verse text, so a term must land in one verse, not across two. */
const chapters = new Map();
/** Verse numbers the WEB actually contains; four chapters skip a verse. */
const chapterVerseNumbers = new Map();
for (const [ref, text] of Object.entries(verses)) {
  const m = /^(.+) (\d+):(\d+)$/.exec(ref);
  if (!m) continue;
  const key = `${m[1]} ${m[2]}`;
  const list = chapters.get(key) ?? [];
  list.push(norm(text));
  chapters.set(key, list);
  const numbers = chapterVerseNumbers.get(key) ?? new Set();
  numbers.add(Number(m[3]));
  chapterVerseNumbers.set(key, numbers);
}

const entries = Object.entries(background);
if (entries.length === 0) {
  fail("no entries found; the file is no longer being checked");
}

const seenTerms = new Map();

for (const [key, entry] of entries) {
  const where = `background["${key}"]`;
  const m = /^(.+) (\d+)$/.exec(key);
  if (!m) {
    fail(`${where}: key is not "Book Chapter"`);
    continue;
  }
  const [, book, chapter] = m;
  if (!BIBLE_BOOKS.includes(book)) {
    fail(`${where}: "${book}" is not a book of the canon`);
    continue;
  }
  const chapterVerses = chapters.get(key);
  if (!chapterVerses) {
    fail(`${where}: ${book} ${chapter} is not in the vendored WEB`);
    continue;
  }

  for (const field of ["setting", "genre"]) {
    const value = entry[field];
    if (typeof value !== "string" || value.trim().length < 20) {
      fail(`${where}.${field}: missing or too short to be useful`);
      continue;
    }
    if (words(value) > CAPS[field]) {
      fail(`${where}.${field}: ${words(value)} words, cap is ${CAPS[field]}`);
    }
  }

  if (entry.reception !== undefined) {
    if (typeof entry.reception !== "string" || entry.reception.trim().length < 20) {
      fail(`${where}.reception: present but too short to be useful`);
    } else if (words(entry.reception) > CAPS.reception) {
      fail(`${where}.reception: ${words(entry.reception)} words, cap is ${CAPS.reception}`);
    }
  }

  if (!Array.isArray(entry.sources) || entry.sources.length === 0) {
    fail(`${where}.sources: every entry must name what it rests on`);
  } else if (entry.sources.length > 6) {
    fail(`${where}.sources: ${entry.sources.length} entries, cap is 6`);
  } else if (new Set(entry.sources).size !== entry.sources.length) {
    fail(`${where}.sources: duplicated entry`);
  } else {
    entry.sources.forEach((s, i) => {
      if (typeof s !== "string" || s.trim().length < 3) {
        fail(`${where}.sources[${i}]: empty or too short`);
      }
    });
  }

  const terms = entry.terms ?? [];
  for (const [i, t] of terms.entries()) {
    const at = `${where}.terms[${i}]`;
    if (typeof t.term !== "string" || !t.term.trim()) {
      fail(`${at}.term: empty`);
      continue;
    }
    const termRe = new RegExp(`\\b${norm(t.term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
    if (!chapterVerses.some((v) => termRe.test(v))) {
      fail(`${at}.term: "${t.term}" does not occur in ${key}`);
    }
    if (typeof t.original !== "string" || !/^[A-Za-z][A-Za-z\u0100-\u024F -]*$/.test(t.original)) {
      fail(`${at}.original: "${t.original}" is not a Latin-alphabet transliteration`);
    }
    if (typeof t.gloss !== "string" || !t.gloss.trim()) {
      fail(`${at}.gloss: empty`);
    } else if (words(t.gloss) > CAPS.gloss) {
      fail(`${at}.gloss: ${words(t.gloss)} words, cap is ${CAPS.gloss}`);
    }
    if (typeof t.note !== "string" || t.note.trim().length < 10) {
      fail(`${at}.note: missing or too short to be useful`);
    } else if (words(t.note) > CAPS.note) {
      fail(`${at}.note: ${words(t.note)} words, cap is ${CAPS.note}`);
    }
    const termKey = `${key}|${norm(t.term)}`;
    if (seenTerms.has(termKey)) fail(`${at}.term: "${t.term}" is already an entry`);
    seenTerms.set(termKey, true);
  }

  // Every rendered string, for the em dash and quote rules.
  const prose = [
    entry.setting,
    entry.genre,
    entry.reception,
    ...terms.flatMap((t) => [t.term, t.original, t.gloss, t.note]),
  ].filter((s) => typeof s === "string");

  // Sources are rendered too, so they are screened for em dashes. Their
  // quoted titles are bibliography, not scripture, so they are not searched.
  for (const source of entry.sources ?? []) {
    if (typeof source === "string" && source.includes("\u2014")) {
      fail(`${where}: em dash in copy`);
    }
  }

  let quoteCount = 0;
  for (const text of prose) {
    if (text.includes("\u2014")) fail(`${where}: em dash in copy`);
    for (const [, span] of text.matchAll(/[“"]([^”"]+)[”"]/g)) {
      const fragments = span
        .split(/ ?\.\.\.? ?| ?\u2026 ?/)
        .map(norm)
        .filter((f) => f.split(" ").length >= 3);
      if (fragments.length === 0) {
        fail(`${where}: quoted "${span.trim()}" is too short to check`);
        continue;
      }
      quoteCount += 1;
      for (const fragment of fragments) {
        if (!corpus.some((v) => v.includes(fragment))) {
          fail(`${where}: quoted "${fragment}" is not in the vendored WEB`);
        }
      }
    }
  }
  if (quoteCount === 0) {
    fail(`${where}: no quoted span; wrap scripture you render so it can be checked`);
  }

  // Verse citations must land inside this chapter.
  const notes = [entry.setting, entry.genre, entry.reception, ...terms.map((t) => t.note)]
    .filter((s) => typeof s === "string")
    .join(" ");
  const cited = [
    ...notes.matchAll(/\bverses? (\d+)(?:\s*(?:and|,|-|through|to)\s*(\d+))?/gi),
  ];
  const numbers = chapterVerseNumbers.get(key);
  for (const [, a, b] of cited) {
    for (const n of [a, b].filter(Boolean).map(Number)) {
      if (!numbers.has(n)) fail(`${where}: cites verse ${n}, which ${key} does not have`);
    }
  }
}

const termCount = entries.reduce((n, [, e]) => n + (e.terms?.length ?? 0), 0);
console.log(
  `checked ${entries.length} chapter note(s) and ${termCount} word note(s) against ${chapters.size} chapters`,
);

if (errors.length) {
  for (const e of errors) console.error(`\n${e}`);
  console.error(`\nverify:background: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log("chapter notes healthy");
