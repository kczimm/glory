import Link from "next/link";
import { dailyPick } from "@/lib/daily";
import { verseSlug } from "@/data";
import { categoryOf } from "@/data/server";

/**
 * The "Today" card on the home page: one question and its key verse,
 * chosen for the day. An entry point into the study graph.
 */
export default function DailyCard() {
  const pick = dailyPick();
  if (!pick) return null;
  const category = categoryOf(pick.question);

  return (
    <section className="mx-auto max-w-5xl px-5 pb-4">
      <div className="rounded-2xl border border-gold/40 bg-gradient-to-b from-gold-wash/60 to-cream/60 p-7 sm:p-9">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep sm:text-[12px] sm:tracking-[0.24em]">
          Today
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
          {pick.question.question}
        </h2>
        {pick.verseText && (
          <blockquote className="mt-5 border-l-2 border-gold/60 pl-4 font-display text-[16.5px] italic leading-relaxed text-ink sm:text-[17.5px]">
            {pick.verseText}
            <span className="mt-1 block text-[13px] not-italic">
              <Link
                href={`/verses/${verseSlug(pick.verse)}`}
                className="font-semibold tracking-wide text-gold-deep underline-offset-2 hover:underline"
              >
                {pick.verse}
              </Link>
            </span>
          </blockquote>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={`/questions/${pick.question.slug}`}
            className="rounded-full bg-gold-deep px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink"
          >
            Explore this question →
          </Link>
          {category && (
            <span className="text-[12.5px] uppercase tracking-[0.14em] text-ink-faint">
              From the {category.title} trail
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
