import { questions } from "./questions";
import { connections } from "./connections";
import { verses } from "./scripture";
import { parseRef, type ParsedRef, verseSlug } from "./ref";
import type { Connection } from "./types";

/**
 * Helpers for the verse explorer: resolving references, finding which
 * studies use a verse, and the graph edges that point to it.
 * Server-side only (imports the vendored Bible); reached via `@/data/server`.
 */

export { parseRef };
export type { ParsedRef };
export { verseSlug };

/** Do two parsed refs share any verse? */
function overlap(a: ParsedRef, b: ParsedRef): boolean {
  return a.book === b.book && a.chapter === b.chapter && a.from <= b.to && b.from <= a.to;
}

export interface Usage {
  slug: string;
  question: string;
}

/**
 * Parsed citation ranges per study, built once: every question's key verses
 * and study-point citations are parsed a single time instead of on every
 * `questionsUsing` call (which the graph pages call inside loops).
 */
let citationIndex: { slug: string; question: string; cited: ParsedRef[] }[] | null = null;
function citations(): { slug: string; question: string; cited: ParsedRef[] }[] {
  if (citationIndex) return citationIndex;
  citationIndex = questions.map((q) => ({
    slug: q.slug,
    question: q.question,
    cited: [...q.keyVerses, ...q.points.flatMap((p) => p.verses)].flatMap(
      (r) => parseRef(r) ?? []
    ),
  }));
  return citationIndex;
}

/** The studies whose key verses / study points cite this verse (or a range overlapping it). */
export function questionsUsing(ref: string): Usage[] {
  const target = parseRef(ref);
  if (!target) return [];
  return citations()
    .filter(({ cited }) => cited.some((p) => overlap(p, target)))
    .map(({ slug, question }) => ({ slug, question }));
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
 * Reverse: find the canonical ref for a slug. */
export function refFromSlug(slug: string): string | undefined {
  return verseSlugIndex().get(slug);
}

/**
 * Lazy reverse index over the ENTIRE vendored Bible (plus graph refs, which
 * may be ranges). Search results can point at any of ~31k verses, so the
 * /verses/[slug] route resolves any of them (rendering on demand), not just
 * the pre-generated graph hubs.
 */
let slugIndex: Map<string, string> | null = null;
function verseSlugIndex(): Map<string, string> {
  if (slugIndex) return slugIndex;
  slugIndex = new Map();
  for (const ref of Object.keys(verses)) {
    slugIndex.set(verseSlug(ref), ref);
  }
  for (const ref of graphVerseRefs()) {
    slugIndex.set(verseSlug(ref), ref); // ranges and connection targets, e.g. "Isaiah 53:10-12"
  }
  return slugIndex;
}
