"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { verseSlug, getCategory } from "@/data";
import { searchAll, snippet } from "@/lib/search";

function SearchView() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");

  const term = q.trim();
  const { verses, questions } = useMemo(() => searchAll(term, 40, 40), [term]);
  const empty = term.length > 0 && verses.length === 0 && questions.length === 0;

  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
        Search the Word
      </p>
      <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
        Search the Scriptures
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-[16px]">
        Every word of the Word, offline, and the studies that point to it.
        Search the Scriptures, “because in them you think you have eternal life”
        (John 5:39).
      </p>

      <div className="mt-7 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 focus-within:border-gold/60">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#98917f" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for any word or phrase… e.g. “born of water”"
          autoFocus
          className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-faint"
          aria-label="Search the Bible"
        />
      </div>

      {term && (
        <p className="mt-4 text-[13px] text-ink-faint">
          {verses.length} {verses.length === 1 ? "verse" : "verses"} ·{" "}
          {questions.length} {questions.length === 1 ? "study" : "studies"} for
          “{term}”
        </p>
      )}

      {empty && (
        <p className="mt-6 rounded-2xl border border-line bg-cream/50 px-5 py-6 text-center text-[14px] text-ink-soft">
          No match for “{term}” in the Word we have. Try a shorter or different
          word: “grace”, “faith”, “come to the Father”.
        </p>
      )}

      <div className="mt-8 space-y-10">
        {verses.length > 0 && (
          <section>
            <h2 className="font-display text-xl font-medium text-ink">
              Scripture
            </h2>
            <div className="mt-4 space-y-2">
              {verses.map((v) => (
                <ScalableVerseRow key={v.ref} verse={v.ref} text={v.text} term={term} />
              ))}
            </div>
          </section>
        )}

        {questions.length > 0 && (
          <section>
            <h2 className="font-display text-xl font-medium text-ink">
              Studies that mention it
            </h2>
            <div className="mt-4 space-y-2.5">
              {questions.map((question) => (
                <Link
                  key={question.slug}
                  href={`/questions/${question.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-white/60 px-4 py-3 transition-colors hover:border-gold/50 hover:bg-white"
                >
                  <span className="font-display text-[15px] font-medium text-ink group-hover:text-gold-deep">
                    {question.question}
                  </span>
                  <span className="ml-auto font-display text-[13px] italic text-ink-faint">
                    {getCategory(question.category)?.title ?? ""}
                  </span>
                  <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function ScalableVerseRow({ verse, text, term }: { verse: string; text: string; term: string }) {
  const sn = snippet(text, term);
  return (
    <Link
      href={`/verses/${verseSlug(verse)}`}
      className="block rounded-xl border border-line bg-white/60 px-4 py-3 transition-colors hover:border-gold/50 hover:bg-white"
    >
      <div className="flex items-baseline gap-2">
        <span className="shrink-0 rounded-full bg-gold-wash px-2.5 py-0.5 text-[12px] font-semibold text-gold-deep">
          {verse}
        </span>
        <p className="font-display text-[15.5px] leading-relaxed text-ink">
          {sn.before}
          <em className="rounded bg-gold-wash px-0.5 not-italic text-gold-deep">
            {sn.match}
          </em>
          {sn.after}
        </p>
      </div>
    </Link>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-5 py-12 text-sm text-ink-faint">
          Loading…
        </div>
      }
    >
      <SearchView />
    </Suspense>
  );
}
