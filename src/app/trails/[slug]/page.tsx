import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data";
import { questionsByCategory, resolveQuestions, toTeaser } from "@/data/server";
import QuestionCard from "@/components/QuestionCard";
import ShareButton from "@/components/ShareButton";
import { SITE_URL, SITE_NAME } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title}: Questions`,
    description: category.tagline,
    alternates: { canonical: `${SITE_URL}/trails/${slug}` },
    openGraph: {
      type: "website",
      title: `${category.title} · ${SITE_NAME}`,
      description: category.tagline,
      url: `${SITE_URL}/trails/${slug}`,
      siteName: SITE_NAME,
    },
  };
}

export default async function TrailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const qs = questionsByCategory(slug).map(toTeaser);
  const entries = resolveQuestions(category.entry);
  const begin = entries[0];

  // Trails sit in a fixed order; offer the neighbors so journeys continue.
  const ordered = [...categories].sort((a, b) => a.order - b.order);
  const i = ordered.findIndex((c) => c.slug === slug);
  const prevTrail = i > 0 ? ordered[i - 1] : undefined;
  const nextTrail = i >= 0 && i < ordered.length - 1 ? ordered[i + 1] : undefined;

  return (
    <article>
      {/* Header */}
      <header className="border-b border-line bg-gradient-to-b from-cream/70 to-parchment">
        <div className="mx-auto max-w-5xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-16">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px]">
            <Link
              href="/questions"
              className="font-semibold uppercase tracking-[0.2em] text-gold-deep hover:underline"
            >
              The questions
            </Link>
            <span className="text-gold">/</span>
            <span className="font-medium uppercase tracking-[0.2em] text-ink-soft">
              Trail
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft sm:text-[16px]">
            {category.tagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {begin && (
              <Link
                href={`/questions/${begin.slug}`}
                className="rounded-full bg-gold-deep px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink"
              >
                Begin here: {begin.question} →
              </Link>
            )}
            <ShareButton
              url={`${SITE_URL}/trails/${category.slug}`}
              title={category.title}
              text={category.tagline}
            />
            <span className="text-[12.5px] uppercase tracking-[0.14em] text-ink-faint">
              {qs.length} {qs.length === 1 ? "question" : "questions"} in this
              trail
            </span>
          </div>
        </div>
      </header>

      {/* Every question in the trail, in order */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qs.map((t) => (
            <QuestionCard key={t.slug} question={t} />
          ))}
        </div>
      </section>

      {/* Trail navigation */}
      {(prevTrail || nextTrail) && (
        <nav className="border-t border-line bg-cream/40">
          <div className="mx-auto grid max-w-5xl gap-4 px-5 py-10 sm:grid-cols-2">
            {prevTrail ? (
              <Link
                href={`/trails/${prevTrail.slug}`}
                className="group rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-gold/50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  ← Previous trail
                </p>
                <p className="mt-2 font-display text-xl font-medium text-ink group-hover:text-gold-deep">
                  {prevTrail.title}
                </p>
              </Link>
            ) : (
              <span aria-hidden />
            )}
            {nextTrail && (
              <Link
                href={`/trails/${nextTrail.slug}`}
                className="group rounded-2xl border border-line bg-surface/50 p-6 text-right transition-colors hover:border-gold/50 sm:text-left"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Next trail →
                </p>
                <p className="mt-2 font-display text-xl font-medium text-ink group-hover:text-gold-deep">
                  {nextTrail.title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      )}
    </article>
  );
}
