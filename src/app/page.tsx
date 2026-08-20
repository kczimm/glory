import Link from "next/link";
import { categories, questions, resolveQuestions, questionsByCategory } from "@/data";
import SearchBox from "@/components/SearchBox";
import QuestionCard from "@/components/QuestionCard";
import VerseCard from "@/components/VerseCard";
import JourneyHomeCard from "@/components/JourneyHomeCard";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-cream/80 to-parchment">
        {/* paper-grain noise + warm vignette (pure CSS, no assets) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: [
              `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>")`,
              "radial-gradient(ellipse 130% 100% at 50% -20%, transparent 55%, rgba(214, 194, 148, 0.5))",
            ].join(", "),
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-12 text-center sm:pb-20 sm:pt-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
            A question-driven study of the Word
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-[2.5rem] font-medium leading-[1.06] tracking-tight text-ink sm:text-6xl">
            Come with a question.
            <br />
            <span className="italic text-gold-deep">Leave with Scripture.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:mt-6 sm:text-[16px]">
            Ask what you genuinely want to know: who Jesus is, how we come to
            know Him, what the Holy Spirit does. Then read the passages that
            answer it, and let the Word itself raise the next question.
          </p>
          <div className="mt-8 sm:mt-10">
            <SearchBox />
          </div>
          <div className="mt-10 flex justify-center sm:mt-12">
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
              d: "No reading plan, no guilt. Ask what you actually want to understand: about God, about Jesus, about your own soul.",
            },
            {
              n: "2",
              t: "Read the Scripture",
              d: "Every answer sends you into the Word itself: whole chapters to read, and every point grounded in specific verses.",
            },
            {
              n: "3",
              t: "Let the Word lead",
              d: "What you read raises the next question. Follow it: question by question, Scripture by Scripture, deeper into the knowledge of God.",
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
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft sm:text-[14px]">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Continue the journey */}
      <JourneyHomeCard />

      {/* Trails */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep sm:text-[12px] sm:tracking-[0.24em]">
              Begin a trail
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
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
            const count = questionsByCategory(c.slug).length;
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
                <Link
                  href="/questions"
                  className="mt-auto flex items-center gap-1.5 pt-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-faint transition-colors hover:text-gold-deep"
                >
                  {count} {count === 1 ? "question" : "questions"} in this trail
                  <span className="text-gold">→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* All questions */}
      <section className="border-t border-line bg-cream/40">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep sm:text-[12px] sm:tracking-[0.24em]">
                The questions
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
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
