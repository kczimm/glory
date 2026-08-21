import Link from "next/link";
import type { Question } from "@/data/types";
import { categoryOf } from "@/data";

/**
 * A question card: shows the question, short answer, and its key verses.
 */
export default function QuestionCard({ question }: { question: Question }) {
  const category = categoryOf(question);
  const verses = question.keyVerses.slice(0, 3);

  return (
    <Link
      href={`/questions/${question.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-surface hover:shadow-[0_8px_30px_-12px_rgba(125,95,33,0.25)]"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
        {category?.title}
      </p>
      <h3 className="font-display text-xl font-medium leading-snug text-ink transition-colors group-hover:text-gold-deep">
        {question.question}
      </h3>
      <p className="line-clamp-3 text-[14.5px] leading-relaxed text-ink-soft">
        {question.summary}
      </p>
      {verses.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {verses.map((v) => (
            <span
              key={v}
              className="rounded-full border border-line bg-parchment px-2.5 py-0.5 text-[11.5px] text-ink-faint"
            >
              {v}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
