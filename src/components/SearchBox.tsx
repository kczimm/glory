"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { questions } from "@/data";

/**
 * Live search over every question — come with a question, find it.
 */
export default function SearchBox() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return questions
      .filter((question) =>
        [question.question, question.summary, ...question.keyVerses]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
      .slice(0, 6);
  }, [q]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_2px_20px_-8px_rgba(125,95,33,0.3)] focus-within:border-gold/60">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#98917f" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask a question… e.g. “Who is the Holy Spirit?”"
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-faint"
          aria-label="Ask a question"
        />
      </div>
      {q.trim() && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-ink-faint">
              No question yet — but the Bible always has an answer. Try “Who is
              Jesus?” or “How can I be saved?”
            </p>
          ) : (
            results.map((question) => (
              <Link
                key={question.slug}
                href={`/questions/${question.slug}`}
                className="block border-b border-line px-5 py-3.5 transition-colors last:border-b-0 hover:bg-gold-wash/50"
              >
                <p className="font-display text-[15.5px] font-medium text-ink">
                  {question.question}
                </p>
                <p className="mt-0.5 line-clamp-1 text-[12.5px] text-ink-faint">
                  {question.summary}
                </p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
