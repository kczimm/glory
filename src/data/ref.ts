/**
 * Pure reference utilities: parsing and slugging verse refs.
 * Dependency-free so client components can import them without pulling
 * in the vendored Bible or the study corpus. This is the single home for
 * ref syntax: server lookups (data/server.ts) and client lookups
 * (lib/verse-text.ts) both build on it, so they can never drift.
 */

export const BOOK_ALIASES: Record<string, string> = { Psalm: "Psalms" };

export interface ParsedRef {
  book: string;
  chapter: number;
  from: number;
  to: number;
}

const REF_RE = /^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/;

/**
 * Parse "John 3:16" or "John 14:16-17" keeping the book exactly as written.
 * Used where the surface form matters: speechRef feeds the pre-generated
 * audio pipeline, whose filenames hash the spoken text, so "Psalm" must not
 * silently become "Psalms".
 */
export function parseRefRaw(ref: string): ParsedRef | null {
  const m = ref.match(REF_RE);
  return m ? { book: m[1], chapter: +m[2], from: +m[3], to: +(m[4] ?? m[3]) } : null;
}

/** content book name -> canonical scripture key ("Psalm 23" -> "Psalms 23"). */
export function canonicalBook(book: string): string {
  return BOOK_ALIASES[book] ?? book;
}

/** Like parseRefRaw, but with the book canonicalized (Psalm -> Psalms). */
export function parseRef(ref: string): ParsedRef | null {
  const p = parseRefRaw(ref);
  return p ? { ...p, book: canonicalBook(p.book) } : null;
}

/** Every single-verse key covered by a parsed ref: "John 14:16-17" -> ["John 14:16", "John 14:17"]. */
export function verseKeys(p: ParsedRef): string[] {
  const keys: string[] = [];
  for (let v = p.from; v <= p.to; v++) keys.push(`${p.book} ${p.chapter}:${v}`);
  return keys;
}

/**
 * Join the texts of every verse in a parsed range using `lookup`;
 * null when any verse of the range is missing. Newlines collapse to spaces.
 */
export function joinPassage(
  lookup: (key: string) => string | null | undefined,
  p: ParsedRef
): string | null {
  const parts: string[] = [];
  for (const key of verseKeys(p)) {
    const t = lookup(key);
    if (!t) return null;
    parts.push(t.replace(/\n+/g, " "));
  }
  return parts.join(" ");
}

/** A URL-safe slug for a verse ref, e.g. "John 3:16" -> "john-3.16". */
export function verseSlug(ref: string): string {
  return ref.trim().toLowerCase().replace(/\s+/g, "-").replace(/:/g, ".");
}
