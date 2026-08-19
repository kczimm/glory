"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { getQuestion } from "@/data";
import { subscribe, getSnapshot, getServerSnapshot, recordVisit, clearJourney } from "@/lib/journey";

/**
 * "You started here, came through here, now here."
 * A persistent breadcrumb of the questions in this reader's journey.
 * Keyed by slug in the parent so it remounts (and records) on each stop.
 */
export default function JourneyBreadcrumb({ slug }: { slug: string }) {
  const entries = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Record this stop after mount. No setState here; the store notifies React.
  useEffect(() => {
    recordVisit(slug);
  }, [slug]);

  const items = entries
    .map((e) => {
      const q = getQuestion(e.slug);
      return q
        ? { slug: q.slug, question: q.question, current: q.slug === slug }
        : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (items.length === 0) return null;

  return (
    <div className="border-t border-line bg-cream/40">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-1.5 gap-y-2 px-5 py-4">
        <span className="mr-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          <span aria-hidden>✦</span> Your journey
        </span>
        {items.map((it, i) => (
          <span key={it.slug} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gold">→</span>}
            {it.current ? (
              <span className="rounded-full bg-ink px-3 py-1 text-[13px] font-medium text-parchment">
                {it.question}
              </span>
            ) : (
              <Link
                href={`/questions/${it.slug}`}
                className="rounded-full border border-line bg-white px-3 py-1 text-[13px] text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
              >
                {it.question}
              </Link>
            )}
          </span>
        ))}
        {items.length > 1 && (
          <button
            type="button"
            onClick={clearJourney}
            className="ml-auto text-[11.5px] text-ink-faint underline-offset-2 hover:underline"
            title="Start your journey over"
          >
            start over
          </button>
        )}
      </div>
    </div>
  );
}
