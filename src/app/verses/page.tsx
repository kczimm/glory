import Link from "next/link";
import type { Metadata } from "next";
import { BIBLE_BOOKS, bookSlug } from "@/data/books";
import { parseRef } from "@/data/ref";
import { graphVerseRefs } from "@/data/server";

export const metadata: Metadata = {
  title: "The Word, connected",
  description:
    "Browse the cross-reference knowledge graph of Glory: every verse and the other scriptures it connects to, book by book.",
};

/** Prerendered once: the graph's book tally does not change per request. */
function bookCounts() {
  const counts = new Map<string, number>();
  for (const ref of graphVerseRefs()) {
    const book = parseRef(ref)?.book;
    if (book) counts.set(book, (counts.get(book) ?? 0) + 1);
  }
  return counts;
}

/**
 * The hub of the verse index: one card per book, with the number of verses
 * the graph touches in it.
 *
 * This page used to list all of the graph's refs inline, which made it 1.7 MB
 * of HTML for 3,359 links. The per-book lists now live on /verses/book/[book]
 * (see that page), so the hub stays small and each book page is the size of a
 * normal reading page.
 */
export default function VersesIndex() {
  const counts = bookCounts();
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  const books = BIBLE_BOOKS.filter((b) => counts.has(b));

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
          ✦ The Word connected
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          Scripture opens Scripture
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          Every verse below has its own page: where it is studied, and the
          cross-references that tie it to the rest of the Word. {total} verses
          in the graph so far, across {books.length} books. Pick a book to walk
          them, or{" "}
          <Link
            href="/bible"
            className="text-gold-deep underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
          >
            read any chapter of the Bible →
          </Link>{" "}
          Or wander where Scripture connects to Scripture in{" "}
          <Link
            href="/connections"
            className="text-gold-deep underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
          >
            Connections
          </Link>
          .
        </p>
      </header>

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <section key={book}>
            <h2 className="font-display text-lg font-medium text-ink">
              <Link
                href={`/verses/book/${bookSlug(book)}`}
                className="transition-colors hover:text-gold-deep"
              >
                {book}
              </Link>
            </h2>
            <p className="mt-1 text-[13px] text-ink-soft">
              <Link
                href={`/verses/book/${bookSlug(book)}`}
                className="underline decoration-line underline-offset-4 transition-colors hover:text-gold-deep"
              >
                {counts.get(book)}{" "}
                {counts.get(book) === 1 ? "verse" : "verses"} in the graph
              </Link>
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
