import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { verseSlug } from "@/data";
import { questions, getQuestion, categoryOf, getPassageText, getChapterFocus } from "@/data/server";
import AutoPrint from "@/components/AutoPrint";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getTranslationInfo, type TranslationCode } from "@/lib/translation-shared";
import { resolveServerTranslation } from "@/lib/translation-server";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ version?: string }>;
}

export async function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const question = getQuestion(slug);
  if (!question) return {};
  return {
    title: `${question.question} (print)`,
    robots: { index: false },
  };
}

/**
 * A clean paper handout of a study: passages in full, teaching points with
 * their grounding verses, and the key verses. Hidden from search engines;
 * opened with ?print=1 it opens the print dialog automatically.
 */
export default async function PrintStudyPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const version: TranslationCode = await resolveServerTranslation(sp as Record<string, string | undefined> | undefined);
  const translationInfo = getTranslationInfo(version);
  const question = getQuestion(slug);
  if (!question) notFound();

  const category = categoryOf(question);

  return (
    <div
      className="mx-auto max-w-3xl bg-white px-8 py-10 text-[13px] leading-relaxed text-neutral-900"
      style={{
        // Pin light paper values so dark mode never bleeds into the handout
        ["--color-parchment" as string]: "#ffffff",
        ["--color-cream" as string]: "#ffffff",
        ["--color-surface" as string]: "#ffffff",
        ["--color-ink" as string]: "#1a1a1a",
        ["--color-ink-soft" as string]: "#444444",
        ["--color-ink-faint" as string]: "#666666",
        ["--color-gold" as string]: "#7d5f21",
        ["--color-gold-deep" as string]: "#7d5f21",
        ["--color-line" as string]: "#dddddd",
      }}
    >
      <AutoPrint />
      <header className="border-b border-neutral-300 pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
          {SITE_NAME} · {category?.title}
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium leading-tight text-ink">
          {question.question}
        </h1>
        <p className="mt-3 max-w-[65ch] text-ink-soft">{question.summary}</p>
        <p className="mt-3 text-[11px] text-ink-faint">
          {SITE_URL}/questions/{slug} · Scripture quoted from the {translationInfo.name}
        </p>
      </header>

      {/* Passages */}
      <section className="mt-8">
        <h2 className="font-display text-xl font-medium text-ink">
          Begin by reading
        </h2>
        {question.passages.map((p) => {
          const verses = getChapterFocus(p.book, p.chapter, p.focus, version);
          if (!verses) return null;
          return (
            <div key={`${p.book}-${p.chapter}`} className="mt-5 break-inside-avoid-page">
              <p className="font-display text-lg font-medium text-ink">
                {p.book} {p.chapter}
                {p.focus ? `:${p.focus}` : ""}
              </p>
              <p className="text-[12px] italic text-ink-faint">
                As you read: {p.lookFor}
              </p>
              <div className="mt-2 space-y-1.5">
                {verses.map((v) => (
                  <p key={v.n} className="font-display text-[14.5px] leading-relaxed text-ink">
                    <sup className="mr-1 text-[9px] font-semibold text-ink-faint">{v.n}</sup>
                    {v.text.replace(/\n+/g, " ")}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Study points */}
      <section className="mt-10 border-t border-neutral-300 pt-6">
        <h2 className="font-display text-xl font-medium text-ink">The study</h2>
        {question.points.map((point, i) => (
          <div key={i} className="mt-6 break-inside-avoid-page">
            <h3 className="font-display text-lg font-medium text-ink">
              {i + 1}. {point.heading}
            </h3>
            <p className="mt-2 max-w-[70ch] text-ink">{point.body}</p>
            {point.verses.map((ref) => {
              const text = getPassageText(ref, version);
              return (
                <blockquote
                  key={ref}
                  className="mt-2 border-l-2 border-gold-deep pl-3 font-display text-[13.5px] italic text-ink"
                >
                  “{text}”
                  <Link href={`/verses/${verseSlug(ref)}`} className="ml-1 not-italic font-semibold text-gold-deep no-underline">
                    {ref}
                  </Link>
                </blockquote>
              );
            })}
          </div>
        ))}
      </section>

      {/* Key verses */}
      {question.keyVerses.length > 0 && (
        <section className="mt-10 border-t border-neutral-300 pt-6">
          <h2 className="font-display text-xl font-medium text-ink">
            Verses to meditate on
          </h2>
          <ul className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {question.keyVerses.map((ref) => (
              <li key={ref} className="text-ink">
                <Link href={`/verses/${verseSlug(ref)}`} className="text-gold-deep no-underline">
                  {ref}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="mt-10 border-t border-neutral-300 pt-4 text-center text-[10px] text-ink-faint print:hidden">
        <Link href={`/questions/${slug}`} className="text-gold-deep underline-offset-2 hover:underline">
          ← Back to the interactive study
        </Link>
      </footer>
    </div>
  );
}
