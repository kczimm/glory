/**
 * Pure reference utilities: parsing and slugging verse refs.
 * Dependency-free so client components can import them without pulling
 * in the vendored Bible or the study corpus.
 */

export const BOOK_ALIASES: Record<string, string> = { Psalm: "Psalms" };

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

/** A URL-safe slug for a verse ref, e.g. "John 3:16" -> "john-3.16". */
export function verseSlug(ref: string): string {
  return ref.trim().toLowerCase().replace(/\s+/g, "-").replace(/:/g, ".");
}
