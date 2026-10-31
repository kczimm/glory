/**
 * Passage focus parsing, shared by the chapter reader (highlighting) and
 * the audio queue builder (which verses to include).
 *
 * A focus is a single verse ("16"), a contiguous range ("5-15"), or a
 * comma-separated list of those ("1-4, 12").
 */

export type FocusRange = { start: number; end: number };

/**
 * Parse a focus string into inclusive ranges; null when absent or unparseable.
 *
 * The two null cases are deliberately treated alike (there is no focus to
 * apply) and each caller decides what that means: the audio queue keeps the
 * whole chapter, while the reader highlights nothing. That is the behaviour
 * both surfaces have always had; only the parser is shared.
 */
export function parseFocus(focus: string | undefined): FocusRange[] | null {
  if (!focus) return null;
  const ranges: FocusRange[] = [];
  for (const part of focus.split(",")) {
    const m = part.trim().match(/^(\d+)(?:-(\d+))?$/);
    if (!m) return null;
    const start = Number(m[1]);
    const end = Number(m[2] ?? m[1]);
    if (end < start) return null;
    ranges.push({ start, end });
  }
  return ranges.length ? ranges : null;
}

/** Is `verse` inside any of the parsed ranges? Unfocused passages include all. */
export function inFocus(ranges: FocusRange[] | null, verse: number): boolean {
  if (!ranges) return true;
  return ranges.some((r) => verse >= r.start && verse <= r.end);
}
