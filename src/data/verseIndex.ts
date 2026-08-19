import { questions } from "./questions";
import { connections } from "./connections";
import type { Connection } from "./types";

/**
 * Helpers for the verse explorer: resolving references, finding which
 * studies use a verse, and the graph edges that point to it.
 */

const BOOK_ALIASES: Record<string, string> = { Psalm: "Psalms" };

export interface ParsedRef {
  book: string;
  chapter: number;
  from: number;
  to: number;
}

export function parseRef(ref: string): ParsedRef | null {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  return m
    ? { book: BOOK_ALIASES[m[1]] ?? m[1], chapter: +m[2], from: +m[3], to: +(m[4] ?? m[3]) }
    : null;
}

/** Do two parsed refs share any verse? */
function overlap(a: ParsedRef, b: ParsedRef): boolean {
  return a.book === b.book && a.chapter === b.chapter && a.from <= b.to && b.from <= a.to;
}

export interface Usage {
  slug: string;
  question: string;
}

/** The studies whose key verses / study points cite this verse (or a range overlapping it). */
export function questionsUsing(ref: string): Usage[] {
  const target = parseRef(ref);
  if (!target) return [];
  const out: Usage[] = [];
  for (const q of questions) {
    const cited = [...q.keyVerses, ...q.points.flatMap((p) => p.verses)];
    if (cited.some((r) => { const p = parseRef(r); return p && overlap(p, target); })) {
      out.push({ slug: q.slug, question: q.question });
    }
  }
  return out;
}

/** The edges (from other verses) that point TO this verse. */
export function incomingConnections(ref: string): (Connection & { from: string })[] {
  const out: (Connection & { from: string })[] = [];
  for (const [from, edges] of Object.entries(connections)) {
    for (const e of edges) {
      if (e.target === ref) out.push({ ...e, from });
    }
  }
  return out;
}

/** All verse refs worth a static page: every connection source, target, and cited verse. */
export function graphVerseRefs(): string[] {
  const set = new Set<string>();
  for (const edges of Object.values(connections)) for (const e of edges) set.add(e.target);
  for (const ref of Object.keys(connections)) set.add(ref);
  for (const q of questions) {
    for (const r of q.keyVerses) set.add(r);
    for (const p of q.points) for (const r of p.verses) set.add(r);
  }
  return [...set];
}

/**
 * A URL-safe slug for a verse ref, e.g. "John 3:16" -> "john-3.16".
 * Used in the /verses/[slug] route so links survive refresh, new-tab, and
 * direct navigation (raw "Book c:v" strings with spaces/colons 404 in
 * dynamic segments).
 */
export function verseSlug(ref: string): string {
  return ref.trim().toLowerCase().replace(/ /g, "-").replace(/:/g, ".");
}

/** Reverse: find the canonical ref for a slug. */
export function refFromSlug(slug: string): string | undefined {
  return graphVerseRefs().find((r) => verseSlug(r) === slug);
}
