import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bookFromSlug, bookSlug } from "@/data/books";
import { parseRef, verseSlug } from "@/data/ref";
import { getConnections } from "@/data";
import { incomingConnections, graphVerseRefs } from "@/data/server";

interface Props {
  params: Promise<{ book: string }>;
}

/** Which books have refs in the graph, and how many, computed once. */
const byBook = (() => {
  const map = new Map<string, string[]>();
  for (const ref of graphVerseRefs()) {
    // parseRef canonicalizes the content's aliases, so refs written as
    // "Psalm 23:1" are filed under Psalms instead of silently dropped.
    const book = parseRef(ref)?.book;
    if (!book) continue;
    const refs = map.get(book);
    if (refs) refs.push(ref);
    else map.set(book, [ref]);
  }
  for (const refs of map.values()) {
    refs.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }
  return map;
})();

/**
 * One book of the verse index: every verse the graph touches in that book,
 * with how many cross-reference edges reach or leave it.
 *
 * This route family exists so /verses can stay a small hub. Inlining all
 * 3,359 refs on one page produced 1.7 MB of HTML; a book page is a normal
 * reading page, and the links are still plain server-rendered anchors, so
 * they work without JavaScript.
 */
export function generateStaticParams() {
  return [...byBook.keys()].map((book) => ({ book: bookSlug(book) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { book: slug } = await params;
  const book = bookFromSlug(slug);
  const refs = book ? byBook.get(book) : undefined;
  if (!book || !refs) return {};
  const title = `${book}: verses in the graph`;
  return {
    title,
    description: `The ${refs.length} verses of ${book} with cross-references in Glory's knowledge graph, each with its own page.`,
    alternates: { canonical: `/verses/book/${bookSlug(book)}` },
  };
}

export default async function VersesBook({ params }: Props) {
  const { book: slug } = await params;
  const book = bookFromSlug(slug);
  const refs = book ? byBook.get(book) : undefined;
  if (!book || !refs) notFound();

  const degree = new Map<string, number>();
  for (const ref of refs) {
    degree.set(ref, getConnections(ref).length + incomingConnections(ref).length);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <nav className="text-[12.5px] text-ink-faint">
        <Link
          href="/verses"
          className="transition-colors hover:text-gold-deep"
        >
          ✦ The Word connected
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-ink-soft">{book}</span>
      </nav>

      <header className="mt-4 mb-8 max-w-2xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {book}
        </h1>
        <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
          {refs.length} {refs.length === 1 ? "verse" : "verses"} of {book} carry
          cross-references in the graph. The number after a verse is how many
          edges reach or leave it.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {refs.map((ref) => (
          <Link
            key={ref}
            href={`/verses/${verseSlug(ref)}`}
            className="rounded-full border border-line bg-surface/60 px-3 py-1 text-[13px] text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
          >
            {ref}
            {(degree.get(ref) ?? 0) > 0 && (
              <span className="ml-1 text-[10.5px] text-gold">
                · {degree.get(ref)}
              </span>
            )}
          </Link>
        ))}
      </div>

      <p className="mt-10 text-[14px] text-ink-soft">
        Looking for a verse that is not yet in the graph?{" "}
        <Link
          href="/bible"
          className="text-gold-deep underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
        >
          Read any chapter of the Bible →
        </Link>
      </p>
    </div>
  );
}
