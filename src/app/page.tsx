import Link from "next/link";
import { categories, questions, resolveQuestions } from "@/data";
import SearchBox from "@/components/SearchBox";
import QuestionCard from "@/components/QuestionCard";
import VerseCard from "@/components/VerseCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-cream/80 to-parchment">
        <div className="mx-auto max-w-5xl px-5 pb-20 pt-16 text-center sm:pt-24">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
            A question-driven study of the Word
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Come with a question.
            <br />
            <span className="italic text-gold-deep">Leave with Scripture.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Ask what you genuinely want to know — who Jesus is, how we come to
            know Him, what the Holy Spirit does. Then read the passages that
            answer it, and let the Word itself raise the next question.
          </p>
          <div className="mt-10">
            <SearchBox />
          </div>
          <div className="mt-12 flex justify-center">
            <VerseCard verse="John 5:39" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              n: "1",
              t: "Come with a question",
              d: "No reading plan, no guilt. Ask what you actually want to understand — about God, about Jesus, about your own soul.",
            },
            {
              n: "2",
              t: "Read the Scripture",
              d: "Every answer sends you into the Word itself — whole chapters to read, and every point grounded in specific verses.",
            },
            {
              n: "3",
              t: "Let the Word lead",
              d: "What you read raises the next question. Follow it — question by question, Scripture by Scripture, deeper into the knowledge of God.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-line bg-white/50 p-6"
            >
              <span className="font-display text-2xl italic text-gold">
                {s.n}.
              </span>
              <h2 className="mt-1 font-display text-lg font-medium text-ink">
                {s.t}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trails */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
              Begin a trail
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium text-ink">
              Where do you want to begin?
            </h2>
          </div>
          <Link
            href="/questions"
            className="hidden text-sm font-medium text-gold-deep underline-offset-4 hover:underline sm:block"
          >
            Browse all questions →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((c) => {
            const qs = resolveQuestions(c.entry);
            return (
              <div
                key={c.slug}
                className="flex flex-col rounded-2xl border border-line bg-cream/50 p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  Trail
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  {c.tagline}
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  {qs.map((q) => (
                    <Link
                      key={q.slug}
                      href={`/questions/${q.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 transition-all hover:border-gold/50 hover:shadow-sm"
                    >
                      <span className="font-display text-[15.5px] font-medium leading-snug text-ink group-hover:text-gold-deep">
                        {q.question}
                      </span>
                      <span className="ml-auto text-gold opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All questions */}
      <section className="border-t border-line bg-cream/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                The questions
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink">
                Explore the essentials
              </h2>
            </div>
            <Link
              href="/questions"
              className="text-sm font-medium text-gold-deep underline-offset-4 hover:underline sm:hidden"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {questions.map((q) => (
              <QuestionCard key={q.slug} question={q} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
