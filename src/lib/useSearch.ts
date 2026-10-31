"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/useTranslation";

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

export type SearchStatus = "idle" | "loading" | "ready" | "error";

const EMPTY: ApiResults = { verses: [], questions: [] };

export interface SearchState extends ApiResults {
  status: SearchStatus;
}

/**
 * Debounced, abortable search against /api/search. The Bible index lives on
 * the server; the browser only ever sees the matched slice. `status` lets
 * callers show pending and failure UI instead of a silently empty dropdown.
 *
 * The active translation is a real dependency (and a subscription, via
 * useTranslation): snippets are rendered in the language the API returned, so
 * switching WEB/KJV with results on screen has to refetch. Reading the version
 * inside the fetch without depending on it left stale-language snippets until
 * the reader retyped.
 */
export function useSearch(term: string, verseLimit = 5, qLimit = 4): SearchState {
  const { version } = useTranslation();
  const [results, setResults] = useState<ApiResults>(EMPTY);
  const [status, setStatus] = useState<SearchStatus>("idle");

  useEffect(() => {
    const ctrl = new AbortController();
    // One timer covers both clearing and fetching, so state changes never
    // happen synchronously inside the effect body.
    const timer = window.setTimeout(async () => {
      if (!term.trim()) {
        setResults(EMPTY);
        setStatus("idle");
        return;
      }
      setStatus("loading");
      try {
        const params = new URLSearchParams({ q: term.trim() });
        if (verseLimit !== 8) params.set("verses", String(verseLimit));
        if (qLimit !== 6) params.set("studies", String(qLimit));
        if (version !== "web") params.set("version", version);
        const res = await fetch(`/api/search?${params}`, { signal: ctrl.signal });
        if (!res.ok) {
          setStatus("error");
          return;
        }
        setResults((await res.json()) as ApiResults);
        setStatus("ready");
      } catch (err) {
        // Aborted keystrokes are normal; only real failures surface as errors.
        if ((err as Error)?.name === "AbortError") return;
        setStatus("error");
      }
    }, term.trim() ? 140 : 0);
    return () => {
      ctrl.abort();
      window.clearTimeout(timer);
    };
  }, [term, verseLimit, qLimit, version]);

  return { ...results, status };
}
