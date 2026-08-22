"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearch } from "@/lib/useSearch";

/**
 * Search the Word: matches both Scripture text (the vendored WEB) and the
 * study questions. Live, grouped; the index lives server-side, so this
 * component ships no Bible.
 *
 * Implements the ARIA combobox pattern so the dropdown is fully keyboard
 * navigable: arrow keys move through results, Enter follows one, Escape
 * dismisses the popup.
 */
export default function SearchBox() {
  const [q, setQ] = useState("");
  // Dismissal and keyboard highlight are keyed to the query that produced
  // them, so a new keystroke resets both by derivation (no effect needed).
  const [dismissedAt, setDismissedAt] = useState<string | null>(null);
  const [active, setActive] = useState<{ q: string; i: number }>({ q: "", i: -1 });
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const term = q.trim();
  const { verses, questions, status } = useSearch(term, 5, 4);

  const dismissed = dismissedAt === q;
  const activeIndex = active.q === q ? active.i : -1;
  const moveActive = (i: number) => setActive({ q, i });

  const empty = term.length > 0 && verses.length === 0 && questions.length === 0;
  // The full-search entry point renders only alongside the result sections,
  // so keyboard navigation never points at an option that isn't on screen.
  const showFullSearch = term.length > 0 && !dismissed && !empty && status !== "loading";
  const showResults = term.length > 0 && !dismissed;

  // One flat list of destinations for keyboard navigation: studies first,
  // then verses, then the full-search page.
  const searchAll = `/search?q=${encodeURIComponent(term)}`;
  const options = [
    ...questions.map((question) => `/questions/${question.slug}`),
    ...verses.map((v) => v.href),
    ...(showFullSearch ? [searchAll] : []),
  ];

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveActive(Math.min(activeIndex + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      moveActive(Math.max(activeIndex - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && options[activeIndex]) {
        e.preventDefault();
        router.push(options[activeIndex]);
        setDismissedAt(q);
      }
      // With nothing highlighted, fall through to the form's native submit
      // to the full /search page below.
    } else if (e.key === "Escape") {
      setDismissedAt(q);
      moveActive(-1);
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Enter with nothing highlighted submits to the full /search page. */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?q=${encodeURIComponent(term)}`);
        }}
        className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_2px_20px_-8px_rgba(125,95,33,0.3)] focus-within:border-gold/60"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-faint)" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask a question… or search the Word"
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-faint"
          aria-label="Search the Bible and studies"
          role="combobox"
          aria-expanded={showResults}
          aria-controls="searchbox-results"
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? `searchbox-opt-${activeIndex}` : undefined}
        />
      </form>

      {showResults && (
        <div
          id="searchbox-results"
          role="listbox"
          aria-label="Search suggestions"
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-surface shadow-xl"
        >
          {status === "loading" && (
            <p className="px-5 py-4 text-sm italic text-ink-faint">Searching…</p>
          )}

          {status === "error" && (
            <p className="px-5 py-4 text-sm text-ink-soft">
              Search is unavailable right now.{" "}
              <button
                type="button"
                onClick={() => inputRef.current?.focus()}
                className="font-medium text-gold-deep underline underline-offset-2"
              >
                Try again in a moment.
              </button>
            </p>
          )}

          {status === "ready" && empty && (
            <p className="px-5 py-4 text-sm text-ink-faint">
              No match for “{term}” yet. Try “grace”, “born again”, or “Who is
              Jesus?”
            </p>
          )}

          {questions.length > 0 && status !== "error" && (
            <div className="border-b border-line px-5 py-3">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Questions · {questions.length}
              </p>
              {questions.map((question, i) => (
                <Link
                  key={question.slug}
                  id={`searchbox-opt-${i}`}
                  role="option"
                  aria-selected={activeIndex === i}
                  href={`/questions/${question.slug}`}
                  onClick={() => setDismissedAt(q)}
                  onMouseEnter={() => moveActive(i)}
                  className={`-mx-5 block border-b border-line/70 px-5 py-2.5 transition-colors last:border-b-0 ${
                    activeIndex === i ? "bg-gold-wash/50" : ""
                  }`}
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

          {verses.length > 0 && status !== "error" && (
            <div className="px-5 pb-1 pt-3">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Scripture · {verses.length}
              </p>
              {verses.map((v, vi) => {
                const i = questions.length + vi;
                return (
                  <Link
                    key={v.ref}
                    id={`searchbox-opt-${i}`}
                    role="option"
                    aria-selected={activeIndex === i}
                    href={v.href}
                    onClick={() => setDismissedAt(q)}
                    onMouseEnter={() => moveActive(i)}
                    className={`-mx-5 block border-b border-line/70 px-5 py-2.5 transition-colors last:border-b-0 ${
                      activeIndex === i ? "bg-gold-wash/50" : ""
                    }`}
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
                );
              })}
            </div>
          )}

          {showFullSearch && (
            <Link
              id={`searchbox-opt-${options.length - 1}`}
              role="option"
              aria-selected={activeIndex === options.length - 1}
              href={searchAll}
              onClick={() => setDismissedAt(q)}
              onMouseEnter={() => moveActive(options.length - 1)}
              className={`block border-t border-line px-5 py-3 text-center text-[13px] font-medium text-gold-deep transition-colors ${
                activeIndex === options.length - 1 ? "bg-gold-wash/40" : "hover:bg-gold-wash/40"
              }`}
            >
              Search all of Scripture →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
