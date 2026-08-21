"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearch } from "@/lib/useSearch";

/**
 * Search the Word: matches both Scripture text (the vendored WEB) and the
 * study questions. Live, grouped; the index lives server-side, so this
 * component ships no Bible.
 */
export default function SearchBox() {
  const [q, setQ] = useState("");

  const term = q.trim();
  const { verses, questions } = useSearch(term, 5, 4);

  const empty = term.length > 0 && verses.length === 0 && questions.length === 0;

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_2px_20px_-8px_rgba(125,95,33,0.3)] focus-within:border-gold/60">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-faint)" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask a question… or search the Word"
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-faint"
          aria-label="Search the Bible and studies"
        />
      </div>

      {term && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-surface shadow-xl">
          {empty && (
            <p className="px-5 py-4 text-sm text-ink-faint">
              No match for “{term}” yet. Try “grace”, “born again”, or “Who is
              Jesus?”
            </p>
          )}

          {questions.length > 0 && (
            <div className="border-b border-line px-5 py-3">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Questions · {questions.length}
              </p>
              {questions.map((question) => (
                <Link
                  key={question.slug}
                  href={`/questions/${question.slug}`}
                  className="-mx-5 block border-b border-line/70 px-5 py-2.5 transition-colors last:border-b-0 hover:bg-gold-wash/50"
                >
                  <p className="flex items-baseline gap-2 font-display text-[14.5px] font-medium text-ink">
                    <span>{question.question}</span>
                    <span className="ml-auto shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                      {question.categoryTitle}
                    </span>
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[12.5px] text-ink-faint">
                    {question.summary}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {verses.length > 0 && (
            <div className="px-5 pb-1 pt-3">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Scripture · {verses.length}
              </p>
              {verses.map((v) => (
                <Link
                  key={v.ref}
                  href={v.href}
                  className="-mx-5 block border-b border-line/70 px-5 py-2.5 transition-colors last:border-b-0 hover:bg-gold-wash/50"
                >
                  <span className="text-[12px] font-semibold text-gold-deep">
                    {v.ref}
                  </span>{" "}
                  <span className="text-[13px] leading-snug text-ink">
                    {v.before}
                    <em className="rounded bg-gold-wash px-0.5 not-italic text-gold-deep">
                      {v.match}
                    </em>
                    {v.after}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {!empty && (
            <Link
              href={`/search?q=${encodeURIComponent(term)}`}
              className="block border-t border-line px-5 py-3 text-center text-[13px] font-medium text-gold-deep transition-colors hover:bg-gold-wash/40"
            >
              Search all of Scripture →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
