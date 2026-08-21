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
