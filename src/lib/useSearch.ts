"use client";

import { useEffect, useState } from "react";

export interface SearchHit {
  ref: string;
  href: string;
  before: string;
  match: string;
  after: string;
}

export interface StudyHit {
  slug: string;
  question: string;
  summary: string;
  categoryTitle: string;
}

export interface ApiResults {
  verses: SearchHit[];
  questions: StudyHit[];
}

const EMPTY: ApiResults = { verses: [], questions: [] };

/**
 * Debounced, abortable search against /api/search. The Bible index lives on
 * the server; the browser only ever sees the matched slice.
 */
export function useSearch(term: string, verseLimit = 5, qLimit = 4): ApiResults {
  const [results, setResults] = useState<ApiResults>(EMPTY);

  useEffect(() => {
    const ctrl = new AbortController();
    // One timer covers both clearing and fetching, so state changes never
    // happen synchronously inside the effect body.
    const timer = window.setTimeout(async () => {
      if (!term.trim()) {
        setResults(EMPTY);
        return;
      }
      try {
        const params = new URLSearchParams({ q: term.trim() });
        if (verseLimit !== 8) params.set("verses", String(verseLimit));
        if (qLimit !== 6) params.set("studies", String(qLimit));
        const res = await fetch(`/api/search?${params}`, { signal: ctrl.signal });
        if (!res.ok) return;
        setResults((await res.json()) as ApiResults);
      } catch {
        /* aborted or offline: keep previous results */
      }
    }, term.trim() ? 140 : 0);
    return () => {
      ctrl.abort();
      window.clearTimeout(timer);
    };
  }, [term, verseLimit, qLimit]);

  return results;
}
