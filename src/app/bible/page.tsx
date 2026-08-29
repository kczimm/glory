import type { Metadata } from "next";
import Link from "next/link";
import { chapterSlug } from "@/data/books";
import { bibleBooks } from "@/data/server";
import {
  getTranslationInfo,
  versionedUrl,
  type TranslationCode,
} from "@/lib/translation-shared";
import { resolveServerTranslation } from "@/lib/translation-server";

export const metadata: Metadata = {
  title: "Read the Word",
  description:
    "Read any chapter of the Bible offline: all 66 books, whole chapters, with cross-references into the studies.",
};

interface Props {
  searchParams?: Promise<{ version?: string }>;
}

export default async function BibleIndex({ searchParams }: Props) {
  const sp = await searchParams;
  const version: TranslationCode = await resolveServerTranslation(
    sp as Record<string, string | undefined> | undefined,
  );
  const translationInfo = getTranslationInfo(version);
  const books = bibleBooks(version);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
          ✦ Read the Word
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          Whole chapters, whole Word
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          Every chapter of the {translationInfo.name} is here, ready offline.
          Pick a book and read at length; verses that appear in a study or a
          cross-reference lead you back into the questions.
        </p>
      </header>

      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map(({ book, chapters }) => (
          <section key={book}>
            <h2 className="font-display text-lg font-medium text-ink">
              {book}
            </h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {Array.from({ length: chapters }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={versionedUrl(`/bible/${chapterSlug(book, n)}`, version)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface/60 text-[12px] text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
                >
                  {n}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
