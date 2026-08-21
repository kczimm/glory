import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getQuestion,
  questions,
  resolveQuestions,
  trailOf,
  categoryOf,
  getPassageText,
} from "@/data";
import VerseCard from "@/components/VerseCard";
import ChapterReader from "@/components/ChapterReader";
import JourneyBreadcrumb from "@/components/JourneyBreadcrumb";
import StudyListen from "@/components/StudyListen";
import VisitChain from "@/components/VisitChain";
import ShareButton from "@/components/ShareButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const question = getQuestion(slug);
  if (!question) return {};
  return {
    title: question.question,
    description: question.summary,
    alternates: { canonical: `${SITE_URL}/questions/${slug}` },
    openGraph: {
      type: "article",
      title: question.question,
      description: question.summary,
      url: `${SITE_URL}/questions/${slug}`,
      siteName: SITE_NAME,
    },
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const question = getQuestion(slug);
  if (!question) notFound();

  const category = categoryOf(question);
  const raised = resolveQuestions(question.raises);
  const parents = resolveQuestions(question.followsFrom);
  const related = resolveQuestions(question.related);
  const { prev, next } = trailOf(question);

  return (
    <article>
      {/* Registers chapter -> chapter -> study audio continuation (renders nothing). */}
      <VisitChain question={question} />
      <JourneyBreadcrumb key={slug} slug={slug} />
      {/* Header */}
      <header className="border-b border-line bg-gradient-to-b from-cream/70 to-parchment">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-8 sm:pb-12 sm:pt-16">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]">
            <Link
              href="/questions"
              className="font-semibold uppercase tracking-[0.2em] text-gold-deep hover:underline"
            >
              The questions
            </Link>
            <span className="text-gold">/</span>
            <span className="font-medium text-ink-soft">
              Trail: {category?.title}
            </span>
            <span className="ml-auto">
              <ShareButton
                url={`${SITE_URL}/questions/${question.slug}`}
                title={question.question}
                text={question.keyVerses[0] ? getPassageText(question.keyVerses[0]) ?? question.summary : question.summary}
              />
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:mt-6 sm:text-5xl">
            {question.question}
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            {question.summary}
          </p>
          {parents.length > 0 && (
            <p className="mt-5 text-[13px] text-ink-faint">
              This question arose from studying{" "}
              {parents.map((p, i) => (
                <span key={p.slug}>
                  {i > 0 && " and "}
                  <Link
                    href={`/questions/${p.slug}`}
                    className="font-medium text-gold-deep underline-offset-4 hover:underline"
                  >
                    {p.question}
                  </Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5">
        {/* Begin by reading */}
        <section className="py-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
            Begin by reading
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Go into the Word
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
            Not a summary of these passages: the passages themselves. Read
            them, then come back to the study below.
          </p>
          <div className="mt-6 space-y-3">
            {question.passages.map((p) => (
              <ChapterReader key={`${p.book}-${p.chapter}`} passage={p} />
            ))}
          </div>
        </section>

        {/* The study */}
        <section className="border-t border-line py-12">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                The study
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                What the Scripture says
              </h2>
            </div>
            <StudyListen question={question} />
          </div>
          <div className="mt-8 space-y-10">
            {question.points.map((point, i) => (
              <div key={i} className="grid gap-5 sm:grid-cols-[44px_1fr]">
                <span className="hidden font-display text-3xl font-medium italic text-gold sm:block">
                  {i + 1}
                </span>
                <div>
                  <h3 id={`sp-${i}`} className="font-display text-xl font-medium text-ink">
                    {point.heading}
                  </h3>
                  <p id={`sp-${i}-b`} className="dropcap mt-3 max-w-[65ch] text-[15.5px] leading-[1.85] text-ink">
                    {point.body}
                  </p>
                  <div className="mt-4 space-y-2.5">
                    {point.verses.map((ref, j) => (
                      <div key={ref} id={`sp-${i}-v-${j}`}>
                        <VerseCard verse={ref} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The engine: what the Word raises */}
        <section id="raises" className="rounded-3xl border border-gold/30 bg-gold-wash/60 px-6 py-10 sm:px-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
            As you read, you may wonder…
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Scripture raises the next question
          </h2>
          <p className="mt-2 max-w-[60ch] text-[14.5px] leading-relaxed text-ink-soft">
            Studying the Word naturally opens more of it. Follow what you just
            read: it leads somewhere.
          </p>
          {(raised.length > 0 || question.planned.length > 0) && (
            <div className="mt-7 space-y-3">
              {raised.map((q) => {
                const text = getPassageText(q.keyVerses[0]);
                return (
                  <Link
                    key={q.slug}
                    href={`/questions/${q.slug}`}
                    className="group flex flex-col gap-1.5 rounded-2xl border border-line bg-white/80 px-6 py-5 transition-all hover:border-gold/60 hover:bg-white hover:shadow-sm"
                  >
                    <span className="flex items-center gap-2 font-display text-lg font-medium text-ink transition-colors group-hover:text-gold-deep">
                      {q.question}
                      <span className="text-gold transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                    {text && (
                      <span className="line-clamp-1 text-[13px] italic text-ink-faint">
                        “{text}”
                      </span>
                    )}
                  </Link>
                );
              })}
              {question.planned.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 rounded-2xl border border-dashed border-ink-faint/40 px-6 py-5"
                >
                  <span className="font-display text-[16px] italic text-ink-soft">
                    {p}
                  </span>
                  <p className="text-[13px] leading-relaxed text-ink-faint">
                    We haven&apos;t written this one yet. Take it to your church or
                    small group: the Word answers it wherever it is asked. If we
                    study it here later, all the better.
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Key verses */}
        <section className="border-t border-line py-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
            Hold onto these
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
            Verses to meditate on
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {question.keyVerses.map((ref) => (
              <VerseCard key={ref} verse={ref} />
            ))}
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-line py-12">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
              Worth visiting
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((q) => (
                <Link
                  key={q.slug}
                  href={`/questions/${q.slug}`}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
                >
                  {q.question}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Trail navigation */}
        {(prev || next) && (
          <nav className="grid gap-3 border-t border-line py-10 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/questions/${prev.slug}`}
                className="group rounded-2xl border border-line bg-white/50 p-5 transition-colors hover:bg-white"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  ← Earlier in this trail
                </p>
                <p className="mt-1.5 font-display text-[16px] font-medium text-ink group-hover:text-gold-deep">
                  {prev.question}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/questions/${next.slug}`}
                className="group rounded-2xl border border-line bg-white/50 p-5 text-right transition-colors hover:bg-white"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Next in this trail →
                </p>
                <p className="mt-1.5 font-display text-[16px] font-medium text-ink group-hover:text-gold-deep">
                  {next.question}
                </p>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </div>
    </article>
  );
}