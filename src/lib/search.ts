import { verses, questions, getCategory, type Question } from "@/data";

/**
 * Search over the vendored World English Bible and over the study questions.
 * Pure data logic: safe to run on the server (build/request) or client.
 * The Bible index is built lazily on first search and cached.
 */

interface Entry {
  ref: string;
  haystack: string;
}

let index: Entry[] | null = null;

function buildIndex(): Entry[] {
  if (index) return index;
  index = new Array(Object.keys(verses).length);
  let i = 0;
  for (const ref of Object.keys(verses)) {
    index[i++] = { ref, haystack: `${ref} ${verses[ref]}`.toLowerCase() };
  }
  return index;
}

export interface VerseHit {
  ref: string;
  text: string;
}

/** Case-insensitive substring search of the whole Bible. */
export function searchScripture(term: string, limit = 8): VerseHit[] {
  const t = term.trim().toLowerCase().replace(/\s+/g, " ");
  if (!t) return [];
  const idx = buildIndex();
  const out: VerseHit[] = [];
  for (const e of idx) {
    if (e.haystack.includes(t)) {
      out.push({ ref: e.ref, text: verses[e.ref] });
      if (out.length >= limit) break;
    }
  }
  return out;
}

/**
 * Broad text surface searched for a question: the question itself, summary,
 * study points, key verses, every passage title + lookFor (the topic wording
 * learners type), and the category title.
 */
function questionHaystack(q: Question): string {
  return [
    q.question,
    q.summary,
    getCategory(q.category)?.title ?? q.category,
    ...q.keyVerses,
    ...q.points.flatMap((p) => [p.heading, p.body]),
    ...q.passages.flatMap((p) => [p.title, p.lookFor]),
  ]
    .join(" ")
    .toLowerCase();
}

/** Reduce a word to a common root so singular/plural and verb forms match. */
function stem(w: string): string {
  const s = w.toLowerCase().replace(/['']s$/, "");
  if (s.endsWith("ies") && s.length > 4) return s.slice(0, -3) + "y";
  if (s.endsWith("es") && s.length > 3) return s.slice(0, -2);
  if (s.endsWith("s") && s.length > 3) return s.slice(0, -1);
  return s;
}

/**
 * Match a term against haystack: substring, or (word-form tolerant) token
 * match. Multi-word terms require every word to appear, tolerating plu-/sing.
 */
function matchesTerm(term: string, haystack: string): boolean {
  const t = term.trim().toLowerCase().replace(/\s+/g, " ");
  if (!t) return false;
  const hay = haystack.toLowerCase();
  const words = t.split(" ");
  if (words.length === 1) {
    if (hay.includes(t)) return true;
    return hay.split(/\W+/).some((tok) => tok && stem(tok) === stem(t));
  }
  if (hay.includes(t)) return true;
  const tokens = new Set(hay.split(/\W+/).map(stem));
  return words.every((w) => (w.length < 2 ? true : tokens.has(stem(w))));
}

/** Search questions by title, summary, topics, study points, and key verses. */
export function searchQuestions(term: string, limit = 6): Question[] {
  const t = term.trim().toLowerCase();
  if (!t) return [];
  return questions
    .filter((q) => matchesTerm(t, questionHaystack(q)))
    .slice(0, limit);
}

export interface SearchResults {
  verses: VerseHit[];
  questions: Question[];
}

export function searchAll(term: string, verseLimit = 8, qLimit = 6): SearchResults {
  const t = term.trim().toLowerCase();
  if (!t) return { verses: [], questions: [] };
  return {
    verses: searchScripture(t, verseLimit),
    questions: searchQuestions(t, qLimit),
  };
}

export interface Snippet {
  before: string;
  match: string;
  after: string;
}

/** Extract the matched phrase with a small neighbourhood for display. */
export function snippet(text: string, term: string, radius = 60): Snippet {
  const t = term.trim().toLowerCase();
  const low = text.toLowerCase();
  const i = low.indexOf(t);
  if (i < 0) return { before: "", match: "", after: text };
  const start = Math.max(0, i - radius);
  const end = Math.min(text.length, i + t.length + radius);
  return {
    before: (start > 0 ? "…" : "") + text.slice(start, i),
    match: text.slice(i, i + t.length),
    after: text.slice(i + t.length, end) + (end < text.length ? "…" : ""),
  };
}
