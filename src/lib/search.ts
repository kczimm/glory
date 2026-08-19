import { verses, questions, type Question } from "@/data";

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

/** Search questions by title, summary, study points, and key verses. */
export function searchQuestions(term: string, limit = 6): Question[] {
  const t = term.trim().toLowerCase();
  if (!t) return [];
  return questions
    .filter((q) => {
      const hay = [
        q.question,
        q.summary,
        ...q.keyVerses,
        ...q.points.flatMap((p) => [p.heading, p.body]),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(t);
    })
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
