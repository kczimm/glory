import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { verseSlug } from "@/data";
import { questions, refFromSlug, graphVerseTexts, graphUsages, citedVersesBySlug } from "@/data/server";
import ConnectionGraph from "@/components/ConnectionGraph";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Seed pages for the refs most worth starting from: connection sources.
  return [...new Set(questions.flatMap((q) => q.keyVerses))].map((ref) => ({
    slug: verseSlug(ref),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ref = refFromSlug(slug);
  return {
    title: ref ? `${ref} in Scripture's own words` : "Connections",
    description:
      "An interactive map of how Scripture interprets Scripture: cross references, echoes, fulfillments, and contrasts.",
    robots: { index: false },
  };
}

export default async function ConnectionsPage({ params }: Props) {
  const { slug } = await params;
  const ref = refFromSlug(slug);
  if (!ref) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
        The knowledge graph
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
        How {ref} connects
      </h1>
      <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">
        Scripture interprets Scripture. Each line is a typed connection with a
        reason: an echo, a fulfillment, a contrast. Click any verse to keep
        walking the map.
      </p>
      <div className="mt-8">
        <ConnectionGraph
          startRef={ref}
          graph={{
            texts: graphVerseTexts(),
            usages: graphUsages(),
            cited: citedVersesBySlug(),
          }}
        />
      </div>
      <p className="mt-8 text-[13px] text-ink-faint">
        Prefer to read?{" "}
        <Link
          href={`/verses/${slug}`}
          className="font-semibold text-gold-deep underline-offset-2 hover:underline"
        >
          Open the verse page
        </Link>{" "}
        or{" "}
        <Link href="/" className="font-semibold text-gold-deep underline-offset-2 hover:underline">
          start from a question
        </Link>
        .
      </p>
    </div>
  );
}
