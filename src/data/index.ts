import { verses, chapters } from "./scripture";
import { categories, getCategory } from "./categories";
import { questions } from "./questions";
import type { Category, Question } from "./types";

export { categories, questions, verses, chapters, getCategory };
export type { Category, Question };

/** content book name -> canonical scripture.ts key */
const BOOK_ALIASES: Record<string, string> = {
  Psalm: "Psalms",
};

export function canonicalBook(book: string): string {
  return BOOK_ALIASES[book] ?? book;
}

export interface ParsedRef {
  book: string;
  chapter: number;
  verseStart: number;
  verseEnd: number;
}

/** Parse "John 3:16", "John 14:16-17" into parts. */
export function parseVerseRef(ref: string): ParsedRef | null {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  return {
    book: canonicalBook(m[1]),
    chapter: Number(m[2]),
    verseStart: Number(m[3]),
    verseEnd: Number(m[4] ?? m[3]),
  };
}

/** Full text of a single verse, or null if we don't have it. */
export function getVerseText(ref: string): string | null {
  const p = parseVerseRef(ref);
  if (!p) return null;
  return verses[`${p.book} ${p.chapter}:${p.verseStart}`] ?? null;
}

/** Text of a verse or range ("John 14:16-17"), joined with spaces. */
export function getPassageText(ref: string): string | null {
  const p = parseVerseRef(ref);
  if (!p) return null;
  const parts: string[] = [];
  for (let v = p.verseStart; v <= p.verseEnd; v++) {
    const t = verses[`${p.book} ${p.chapter}:${v}`];
    if (!t) return null;
    parts.push(t.replace(/\n+/g, " "));
  }
  return parts.join(" ");
}

/** Whole chapter as verse list, or null. */
export function getChapter(book: string, chapter: number): { n: number; text: string }[] | null {
  return chapters[`${canonicalBook(book)} ${chapter}`] ?? null;
}

/** Verses from a chapter within an optional focus range. */
export function getChapterFocus(
  book: string,
  chapter: number,
  focus?: string
): { n: number; text: string }[] | null {
  const ch = getChapter(book, chapter);
  if (!ch) return null;
  if (!focus) return ch;
  const m = focus.match(/^(\d+)(?:-(\d+))?$/);
  if (!m) return ch;
  const start = Number(m[1]);
  const end = Number(m[2] ?? m[1]);
  return ch.filter((v) => v.n >= start && v.n <= end);
}

// ---- questions ------------------------------------------------------------

export function getQuestion(slug: string): Question | undefined {
  return questions.find((q) => q.slug === slug);
}

export function questionsByCategory(categorySlug: string): Question[] {
  return questions
    .filter((q) => q.category === categorySlug)
    .sort((a, b) => a.order - b.order);
}

export function resolveQuestions(slugs: string[]): Question[] {
  const seen = new Set<string>();
  return slugs
    .map((s) => getQuestion(s))
    .filter((q): q is Question => {
      if (!q || seen.has(q.slug)) return false;
      seen.add(q.slug);
      return true;
    });
}

export function categoryOf(q: Question): Category | undefined {
  return getCategory(q.category);
}

export function trailOf(q: Question): { prev?: Question; next?: Question } {
  const siblings = questionsByCategory(q.category);
  const i = siblings.findIndex((s) => s.slug === q.slug);
  return {
    prev: i > 0 ? siblings[i - 1] : undefined,
    next: i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : undefined,
  };
}
