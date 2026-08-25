import "server-only";
import { verses, chapters } from "./scripture";
import {
  chapterItems,
  filterFocus,
  studyItems,
  visitIntroItems,
} from "../lib/audio-text";
import type { AudioChunk } from "../lib/audio-text";
import { canonicalBook, joinPassage, parseRef } from "./ref";
import { BIBLE_BOOKS } from "./books";
import { questions } from "./questions";
import { connections } from "./connections";
import { questionsUsing, incomingConnections, graphVerseRefs, refFromSlug } from "./verseIndex";
import { getCategory as categoryLookup } from "./categories";
import type { Category, Question, QuestionTeaser } from "./types";

/**
 * Server-side data access: everything that touches the vendored Bible or
 * the full study corpus. Marked server-only so a stray client import fails
 * the build instead of silently shipping megabytes of Scripture to the
 * browser. Client-safe helpers live in `@/data` (the barrel).
 */

export { verses, chapters, questions };
export { canonicalBook, filterFocus };
export { parseRef, questionsUsing, incomingConnections, graphVerseRefs, refFromSlug };

/** Full text of a single verse, or null if we don't have it. */
export function getVerseText(ref: string): string | null {
  const p = parseRef(ref);
  if (!p) return null;
  return verses[`${p.book} ${p.chapter}:${p.from}`] ?? null;
}

/** Text of a verse or range ("John 14:16-17"), joined with spaces. */
export function getPassageText(ref: string): string | null {
  const p = parseRef(ref);
  if (!p) return null;
  return joinPassage((key) => verses[key], p);
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
  return filterFocus(ch, focus);
}

// ---- whole-Bible reader ---------------------------------------------------

/** Chapters per canonical book, computed once from the vendored chapters map. */
const chapterCounts = (() => {
  const counts = new Map<string, number>();
  for (const key of Object.keys(chapters)) {
    const cut = key.lastIndexOf(" ");
    const book = key.slice(0, cut);
    const n = Number(key.slice(cut + 1));
    if (Number.isFinite(n)) counts.set(book, Math.max(counts.get(book) ?? 0, n));
  }
  return counts;
})();

export function getChapterCount(book: string): number {
  return chapterCounts.get(canonicalBook(book)) ?? 0;
}

/** All books in canonical order with their chapter counts. */
export function bibleBooks(): { book: string; chapters: number }[] {
  return BIBLE_BOOKS.map((book) => ({ book, chapters: chapterCounts.get(book) ?? 0 }));
}

// ---- questions ------------------------------------------------------------

const questionBySlug = new Map(questions.map((q) => [q.slug, q]));

const byCategory = new Map<string, Question[]>();
for (const q of questions) {
  const list = byCategory.get(q.category) ?? [];
  list.push(q);
  byCategory.set(q.category, list);
}
for (const list of byCategory.values()) list.sort((a, b) => a.order - b.order);

export function getQuestion(slug: string): Question | undefined {
  return questionBySlug.get(slug);
}

export function questionsByCategory(categorySlug: string): Question[] {
  return byCategory.get(categorySlug) ?? [];
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
  return categoryLookup(q.category);
}


/**
 * Up to three questions offered in the "What next?" panel when a study
 * listen ends (visitChainData's options): the study's own raises first (the journey
 * continues here); falling back to the next in its trail when nothing is
 * raised in writing.
 */
export function voiceMenu(q: Question): Question[] {
  const raised = resolveQuestions(q.raises).slice(0, 3);
  if (raised.length) return raised;
  const next = trailOf(q).next;
  return next ? [next] : [];
}

export function trailOf(q: Question): { prev?: Question; next?: Question } {
  const siblings = questionsByCategory(q.category);
  const i = siblings.findIndex((s) => s.slug === q.slug);
  return {
    prev: i > 0 ? siblings[i - 1] : undefined,
    next: i >= 0 && i < siblings.length - 1 ? siblings[i + 1] : undefined,
  };
}

// ---- serializable projections for client components ------------------------

/** slug -> question title, for journey UIs that resolve localStorage entries. */
export function questionTitles(): Record<string, string> {
  return Object.fromEntries(questions.map((q) => [q.slug, q.question]));
}

/** The slim question shape safe to serialize into client components. */
export type { QuestionTeaser };

export function toTeaser(q: Question): QuestionTeaser {
  return {
    slug: q.slug,
    question: q.question,
    summary: q.summary,
    category: q.category,
    categoryTitle: categoryOf(q)?.title ?? "",
    keyVerses: q.keyVerses,
  };
}

export function teasers(): QuestionTeaser[] {
  return [...questions].sort((a, b) => a.order - b.order).map(toTeaser);
}

/** Verse text for every connection endpoint, for the client graph explorer. */
export function graphVerseTexts(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const edges of Object.values(connections)) {
    for (const e of edges) {
      for (const ref of [e.target]) {
        if (!(ref in out)) out[ref] = getPassageText(ref) ?? "";
      }
    }
  }
  for (const ref of Object.keys(connections)) {
    if (!(ref in out)) out[ref] = getPassageText(ref) ?? "";
  }
  return out;
}

/** Which studies cite each connection endpoint (slug -> title pairs). */
export function graphUsages(): Record<string, { slug: string; question: string }[]> {
  const refs = new Set<string>(Object.keys(connections));
  for (const edges of Object.values(connections)) for (const e of edges) refs.add(e.target);
  const out: Record<string, { slug: string; question: string }[]> = {};
  for (const ref of refs) {
    const used = questionsUsing(ref);
    if (used.length) out[ref] = used;
  }
  return out;
}

/** slug -> every verse ref that study cites (for the visited-nodes ring). */
export function citedVersesBySlug(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const q of questions) {
    out[q.slug] = [...q.keyVerses, ...q.points.flatMap((p) => p.verses)];
  }
  return out;
}

// ---- prebuilt speech queues -------------------------------------------------
// The TTS queues need verse text, so they are assembled here and handed to
// the client components as serializable props (see VisitChain/StudyListen).

export interface ChainQueue {
  sourceId: string;
  items: AudioChunk[];
}

function chapterQueue(book: string, chapter: number, focus?: string): ChainQueue {
  return {
    sourceId: `chapter:${book} ${chapter}`,
    items: chapterItems(book, chapter, getChapterFocus(book, chapter, focus) ?? []),
  };
}

/** Whole-visit intro queue: the question and summary, then the chapters. */
function visitIntroQueue(q: Question): ChainQueue {
  return { sourceId: `visit:${q.slug}`, items: visitIntroItems(q) };
}

/** Study queue; the visit's continuation is the player-bar choices panel. */
function studyQueue(q: Question, opts: { cue?: string } = {}): ChainQueue {
  const items = studyItems(q, getPassageText, {
    cue: opts.cue,
    outroTargetId: "raises",
    resolveTitle: (slug) => getQuestion(slug)?.question ?? null,
  });
  return {
    sourceId: `study:${q.slug}`,
    items,
  };
}

/** Props for StudyListen: the study queue. */
export function studyListenData(q: Question): { slug: string; items: AudioChunk[] } {
  const queue = studyQueue(q);
  return { slug: q.slug, items: queue.items };
}

/** Props for VisitListen: the whole-visit intro queue. */
export function visitListenData(q: Question): { slug: string; items: AudioChunk[] } {
  const queue = visitIntroQueue(q);
  return { slug: q.slug, items: queue.items };
}

/** Props for VisitChain: every queue the visit may play, fully prebuilt. */
export function visitChainData(q: Question): {
  slug: string;
  segments: ChainQueue[];
  options: {
    slug: string;
    label: string;
    firstChapter: ChainQueue | null;
    study: ChainQueue;
  }[];
} {
  // The whole visit opens with the question and summary, then VisitChain's
  // continuation carries on through each chapter and into the study.
  const segments: ChainQueue[] = [
    visitIntroQueue(q),
    ...q.passages.map((p) => chapterQueue(p.book, p.chapter, p.focus)),
  ];
  // The chained study entry keeps its original "And now, the study." cue.
  segments.push(studyQueue(q, { cue: "And now, the study." }));
  return {
    slug: q.slug,
    segments,
    options: voiceMenu(q).map((o) => {
      const first = o.passages[0];
      return {
        slug: o.slug,
        label: o.question,
        firstChapter: first
          ? chapterQueue(first.book, first.chapter, first.focus)
          : null,
        study: studyQueue(o, { cue: "And now, the study." }),
      };
    }),
  };
}
