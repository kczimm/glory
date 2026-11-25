/**
 * The chapter-on-demand contract, shared by /api/chapter, the chapter reader,
 * and the tests.
 *
 * Why this exists: a study page used to receive the full text of every one of
 * its passages, in both readings, as props for a reader that starts collapsed.
 * Measured on the built site, that was ~39 KB of unnecessary payload on the
 * heaviest study page and the whole King James text even for a reader who has
 * WEB selected. The chapter is now fetched the first time it is actually
 * opened (or chained into by the audio player), which is the same pattern
 * /memorize already uses through /api/passage.
 */

import { canonicalBook } from "@/data/ref";
import { BIBLE_BOOKS } from "@/data/books";
import type { ChapterBackground } from "@/data/types";

/** One verse of a chapter, in both readings. The reader shows its choice. */
export interface ChapterVerse {
  n: number;
  web: string | null;
  kjv: string | null;
}

/**
 * What a chapter load carries: the text, and whatever reading tools have been
 * written for that chapter. `background` is null for the chapters that have
 * none yet, which is most of them, so the reader must treat it as optional.
 */
export interface ChapterPayload {
  verses: ChapterVerse[];
  background: ChapterBackground | null;
}

/** Upper bound on a chapter number; the longest chapter is Psalm 119. */
const MAX_CHAPTER = 200;

export type ChapterRequest =
  | { ok: true; book: string; chapter: number }
  | { ok: false; error: string };

/**
 * Validate a chapter request. Pure, so the route and the tests cannot drift:
 * the route answers 400 on `ok: false` and only then asks the data layer
 * whether that chapter exists (404 when it does not).
 */
export function parseChapterParams(
  book: string | null | undefined,
  chapter: string | null | undefined,
): ChapterRequest {
  const name = canonicalBook((book ?? "").trim());
  if (!name) return { ok: false, error: "Missing book" };
  if (!(BIBLE_BOOKS as readonly string[]).includes(name)) {
    return { ok: false, error: "Unknown book" };
  }
  const n = Number(chapter);
  if (!Number.isInteger(n) || n < 1 || n > MAX_CHAPTER) {
    return { ok: false, error: "Chapter must be an integer from 1 to 200" };
  }
  return { ok: true, book: name, chapter: n };
}

/** In-flight and settled chapter loads, so several readers on one page (and a
 *  repeated open) share a single request. Failures are not kept, so a reader
 *  can retry after a network blip. */
const loads = new Map<string, Promise<ChapterPayload | null>>();

/** Fetch a chapter's text from /api/chapter, cached per (book, chapter). */
export function loadChapterData(
  book: string,
  chapter: number,
): Promise<ChapterPayload | null> {
  const key = `${canonicalBook(book)} ${chapter}`;
  const cached = loads.get(key);
  if (cached) return cached;

  const request = fetch(
    `/api/chapter?book=${encodeURIComponent(book)}&chapter=${chapter}`,
    { headers: { accept: "application/json" } },
  )
    .then((res) => (res.ok ? res.json() : null))
    .then((data: ChapterPayload | null) =>
      data?.verses?.length
        ? { verses: data.verses, background: data.background ?? null }
        : null,
    )
    .catch(() => null)
    .then((payload) => {
      if (!payload) loads.delete(key);
      return payload;
    });

  loads.set(key, request);
  return request;
}
