import { verses } from "@/data/scripture";
import { canonicalBook } from "@/lib/audio-text";

/**
 * Client-side verse text lookup (the server-only one lives in
 * data/server.ts). Supports "John 3:16" and ranges "John 14:16-17";
 * returns null when any verse of the range is missing.
 */
export function passageText(ref: string): string | null {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const book = canonicalBook(m[1]);
  const chapter = Number(m[2]);
  const start = Number(m[3]);
  const end = Number(m[4] ?? m[3]);
  const parts: string[] = [];
  for (let v = start; v <= end; v++) {
    const t = verses[`${book} ${chapter}:${v}`];
    if (!t) return null;
    parts.push(t.replace(/\n+/g, " "));
  }
  return parts.join(" ");
}
