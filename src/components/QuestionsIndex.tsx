"use client";

import { useMemo, useState } from "react";
import { categories, questions, questionsByCategory } from "@/data";
import QuestionCard from "@/components/QuestionCard";

const ALL = "all";

function queryTerms(term: string): string[] {
  return term.toLowerCase().split(/\s+/).filter(Boolean);
}

/**
 * Every question, filterable: type to narrow, tap a category chip to jump to
 * one trail. With 120 questions across a dozen trails, filtering beats
 * scrolling.
 */
export default function QuestionsIndex() {
  const [cat, setCat] = useState<string>(ALL);
  const [q, setQ] = useState("");

  const terms = useMemo(() => queryTerms(q), [q]);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of categories) m.set(c.slug, questionsByCategory(c.slug).length);
    return m;
  }, []);

  const haystack = useMemo(() => {
    const m = new Map<string, string>();
    for (const question of questions) {
      const title =
        categories.find((c) => c.slug === question.category)?.title ?? "";
      m.set(
        question.slug,
        [
          question.question,
          question.summary,
          title,
          question.keyVerses.join(" "),
        ]
          .join(" ")
          .toLowerCase()
      );
    }
    return m;
  }, []);

  const matches = useMemo(() => {
    if (!terms.length) return null;
    const filtered = questions.filter(
      (question) =>
        (cat === ALL || question.category === cat) &&
        terms.every((t) => haystack.get(question.slug)!.includes(t))
    );
    return filtered.length ? filtered : [];
  }, [terms, cat, haystack]);

  const visibleCategories = useMemo(
    () => categories.filter((c) => (cat === ALL || c.slug === cat) && (counts.get(c.slug) ?? 0) > 0),
    [cat, counts]
  );

  const total = questions.length;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <header className="mb-8 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
          The questions
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          Every question leads to Scripture
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          Each question is answered by reading the Word itself: whole chapters,
          and study points grounded in specific verses. And what you read will
          raise the next question. With {total} questions now, filter to find
          yours.
        </p>
      </header>

      {/* Filter + category jump */}
      <div className="sticky top-14 z-30 -mx-5 border-b border-line/60 bg-parchment/95 px-5 py-3 backdrop-blur-sm sm:top-16">
        <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-2.5 focus-within:border-gold/60">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#98917f" strokeWidth="2" className="shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Filter ${total} questions…`}
            className="w-full bg-transparent text-[14.5px] text-ink outline-none placeholder:text-ink-faint"
            aria-label="Filter questions"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="shrink-0 text-[12px] font-medium text-gold-deep hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        <div className="mt-2.5 flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={cat === ALL} onClick={() => setCat(ALL)}>
            All · {total}
          </Chip>
          {categories.map((c) => (
            <Chip
              key={c.slug}
              active={cat === c.slug}
              onClick={() => setCat(c.slug)}
            >
              {c.title} · {counts.get(c.slug) ?? 0}
            </Chip>
          ))}
        </div>
      </div>

      {matches !== null ? (
        // Flattened, filtered results
        <div className="mt-8">
          <p className="text-[13px] text-ink-faint">
            {matches.length === 0
              ? `No question matches “${q.trim()}”.`
              : `${matches.length} of ${total} questions match${
                  cat !== ALL
                    ? ` in ${categories.find((c) => c.slug === cat)?.title}`
                    : ""
                }`}
          </p>
          {matches.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-line bg-cream/50 p-6 text-center text-[14px] leading-relaxed text-ink-soft">
              Try a different word or two: “grace”, “pray”, “rapture”, “who is
              Jesus”. Or{" "}
              <button onClick={() => { setQ(""); setCat(ALL); }} className="font-medium text-gold-deep hover:underline">
                clear the filter
              </button>{" "}
              and browse.
            </p>
          ) : (
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((question) => (
                <QuestionCard key={question.slug} question={question} />
              ))}
            </div>
          )}
        </div>
      ) : (
        // Grouped by category
        <div className="mt-10 space-y-14">
          {visibleCategories.map((c, ci) => {
            const qs = questionsByCategory(c.slug);
            return (
              <section key={c.slug}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-2xl italic text-gold">
                    {ci + 1}.
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-ink">
                      {c.title}
                    </h2>
                    <p className="text-[13.5px] text-ink-soft">{c.tagline}</p>
                  </div>
                  <span className="ml-auto inline-flex shrink-0 items-center rounded-full border border-line bg-white px-3 py-1 text-[12px] font-semibold text-ink-faint">
                    {qs.length} {qs.length === 1 ? "question" : "questions"}
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {qs.map((question) => (
                    <QuestionCard key={question.slug} question={question} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      <p className="mt-16 rounded-2xl border border-line bg-cream/50 p-6 text-center text-[13.5px] leading-relaxed text-ink-soft">
        More questions are being gathered: the Bible always has more to show
        us. If you have a question of your own, bring it: the Word has an
        answer.
      </p>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
        active
          ? "border-gold bg-gold-wash text-gold-deep"
          : "border-line bg-white text-ink-soft hover:border-gold/40 hover:text-gold-deep"
      }`}
    >
      {children}
    </button>
  );
}