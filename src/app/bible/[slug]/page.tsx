import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { chapterSlug, bookFromSlug } from "@/data/books";
import { parseRef, verseKeys, verseSlug } from "@/data/ref";
import { getChapter, bibleBooks, graphVerseRefs } from "@/data/server";
import { getTranslationInfo, type TranslationCode } from "@/lib/translation-shared";
import { resolveServerTranslation } from "@/lib/translation-server";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ version?: string }>;
}

/** Every single verse touched by a study citation or cross-reference edge. */
const graphVerses = (() => {
  const set = new Set<string>();
  for (const ref of graphVerseRefs()) {
    const p = parseRef(ref);
    if (!p) continue;
    for (const key of verseKeys(p)) set.add(key);
  }
  return set;
})();

/** The whole canon as an ordered (book, chapter) walk, for prev/next. */
function getCanon(version: TranslationCode = "web") {
  return bibleBooks(version).flatMap(({ book, chapters }) =>
    Array.from({ length: chapters }, (_, i) => ({ book, chapter: i + 1 }))
  );
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = await searchParams;
  const version: TranslationCode = await resolveServerTranslation(sp as Record<string, string | undefined> | undefined);
  const translationInfo = getTranslationInfo(version);
  const { book, chapter } = parseChapterSlug(slug) ?? {};
  if (!book || !chapter) return {};
  const title = `${book} ${chapter}`;
  return {
    title,
    description: `${title}: read the whole chapter in the ${translationInfo.name}, offline.`,
    alternates: { canonical: `/bible/${slug}` },
  };
}

function parseChapterSlug(slug: string): { book: string; chapter: number } | null {
  const m = slug.match(/^(.+)-(\d+)$/);
  if (!m) return null;
  const book = bookFromSlug(m[1]);
  return book ? { book, chapter: Number(m[2]) } : null;
}

export default async function BibleChapter({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const version: TranslationCode = await resolveServerTranslation(sp as Record<string, string | undefined> | undefined);
  const translationInfo = getTranslationInfo(version);
  const parsed = parseChapterSlug(slug);
  if (!parsed) notFound();
  const verses = getChapter(parsed.book, parsed.chapter, version);
  if (!verses) notFound();

  const canon = getCanon(version);
  const idx = canon.findIndex(
    (c) => c.book === parsed.book && c.chapter === parsed.chapter
  );
  const prev = idx > 0 ? canon[idx - 1] : null;
  const next = idx < canon.length - 1 ? canon[idx + 1] : null;

  return (
    <article>
      <header className="border-b border-line bg-gradient-to-b from-cream/70 to-parchment">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-8 sm:pb-12 sm:pt-12">
          <Link
            href="/bible"
            className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-deep hover:underline"
          >
            ✦ Read the Word
          </Link>
          <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {parsed.book} {parsed.chapter}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-[13px] text-ink-soft">
            <span>{translationInfo.shortName}</span>
            <span aria-hidden>·</span>
            <nav className="flex gap-2" aria-label="Nearby chapters">
              {prev ? (
                <Link
                  href={`/bible/${chapterSlug(prev.book, prev.chapter)}`}
                  className="transition-colors hover:text-gold-deep"
                >
                  ← {shortLabel(prev.book, prev.chapter)}
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/bible/${chapterSlug(next.book, next.chapter)}`}
                  className="transition-colors hover:text-gold-deep"
                >
                  {shortLabel(next.book, next.chapter)} →
                </Link>
              ) : null}
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="space-y-3">
          {verses.map((v) => {
            const ref = `${parsed.book} ${parsed.chapter}:${v.n}`;
            const text = v.text.replace(/\n+/g, " ");
            const studied = graphVerses.has(ref);
            return (
              <p
                key={v.n}
                id={`v-${v.n}`}
                className="text-[16.5px] leading-relaxed text-ink"
              >
                <sup className="mr-1 select-none font-sans text-[11px] font-semibold text-gold-deep">
                  {v.n}
                </sup>
                {studied ? (
                  <Link
                    href={`/verses/${verseSlug(ref)}`}
                    title={`${ref}: see where this verse is studied`}
                    className="underline decoration-gold/40 decoration-dotted underline-offset-4 transition-colors hover:text-gold-deep"
                  >
                    {text}
                  </Link>
                ) : (
                  text
                )}
              </p>
            );
          })}
        </div>

        <nav
          className="mt-12 flex items-center justify-between border-t border-line pt-6 text-sm"
          aria-label="Chapter navigation"
        >
          {prev ? (
            <Link
              href={`/bible/${chapterSlug(prev.book, prev.chapter)}`}
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
            >
              ← {shortLabel(prev.book, prev.chapter)}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/bible/${chapterSlug(parsed.book, 1)}`}
            className="hidden text-ink-faint transition-colors hover:text-gold-deep sm:inline"
          >
            {parsed.book} 1
          </Link>
          {next ? (
            <Link
              href={`/bible/${chapterSlug(next.book, next.chapter)}`}
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
            >
              {shortLabel(next.book, next.chapter)} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}

function shortLabel(book: string, chapter: number): string {
  return `${book} ${chapter}`;
}
