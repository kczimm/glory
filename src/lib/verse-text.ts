import { verses } from "@/data/scripture";
import { joinPassage, parseRef } from "@/data/ref";

/**
 * Client-side verse text lookup (the server-only one lives in
 * data/server.ts; both share the parsing and range-expansion in data/ref).
 * Supports "John 3:16" and ranges "John 14:16-17"; returns null when any
 * verse of the range is missing.
 */
export function passageText(ref: string): string | null {
  const p = parseRef(ref);
  if (!p) return null;
  return joinPassage((key) => verses[key], p);
}
