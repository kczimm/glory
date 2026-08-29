import Link from "next/link";
import type { Metadata } from "next";
import { getConnections, verseSlug } from "@/data";
import { graphVerseRefs, incomingConnections } from "@/data/server";
import { versionedUrl } from "@/lib/translation-shared";
import { resolveServerTranslation } from "@/lib/translation-server";

export const metadata: Metadata = {
  title: "The Word, connected",
  description:
    "Browse the cross-reference knowledge graph of Glory: every verse and the other scriptures it connects to.",
};

const BOOKS = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

export default async function VersesIndex({
  searchParams,
}: {
  searchParams?: Promise<{ version?: string }>;
}) {
  const sp = await searchParams;
  const version = await resolveServerTranslation(
    sp as Record<string, string | undefined> | undefined,
  );
  const refs = graphVerseRefs();
  // How many cross-reference edges touch this verse (leaving + reaching it).
  const degreeCache = new Map<string, number>();
  for (const r of refs) {
    degreeCache.set(
      r,
      getConnections(r).length + incomingConnections(r).length,
    );
  }
  const groups = BOOKS.map((book) => ({
    book,
    refs: refs
      .filter((r) => r.startsWith(book + " "))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
  })).filter((g) => g.refs.length > 0);

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
          cross-references that tie it to the rest of the Word. {refs.length}{" "}
          verses in the graph so far. Looking for a verse that is not yet in the
          graph?{" "}
          <Link
            href="/bible"
            className="text-gold-deep underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
          >
            Read any chapter of the Bible →
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
        {groups.map((g) => (
          <section key={g.book}>
            <h2 className="font-display text-lg font-medium text-ink">
              {g.book}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.refs.map((ref) => (
                <Link
                  key={ref}
                  href={versionedUrl(`/verses/${verseSlug(ref)}`, version)}
                  className="rounded-full border border-line bg-surface/60 px-3 py-1 text-[13px] text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
                >
                  {ref}
                  {degreeCache.get(ref)! > 0 && (
                    <span className="ml-1 text-[10.5px] text-gold">
                      · {degreeCache.get(ref)}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
