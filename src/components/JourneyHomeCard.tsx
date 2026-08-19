"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { getQuestion } from "@/data";
import { subscribe, getSnapshot, getServerSnapshot } from "@/lib/journey";

/**
 * "Continue your journey": appears on the home page when the reader has
 * been walking a trail. Picks up where they left off.
 */
export default function JourneyHomeCard() {
  const entries = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const stops = entries
    .map((e) => {
      const q = getQuestion(e.slug);
      return q ? { slug: q.slug, question: q.question } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .slice(-4);

  if (stops.length === 0) return null;
  const current = stops[stops.length - 1];

  return (
    <section className="mx-auto max-w-5xl px-5 pb-14">
      <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-gold-wash/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Pick up where you left off
          </p>
          <p className="mt-1 font-display text-xl font-medium text-ink">
            {current.question}
          </p>
          <p className="mt-1 text-[13px] text-ink-soft">
            {stops.length} {stops.length === 1 ? "step" : "steps"} behind you
            in this journey
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={`/questions/${current.slug}`}
            className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-parchment transition-colors hover:bg-gold-deep"
          >
            Continue →
          </Link>
          <Link
            href="/questions"
            className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-gold-deep hover:underline"
          >
            All questions
          </Link>
        </div>
      </div>
    </section>
  );
}
