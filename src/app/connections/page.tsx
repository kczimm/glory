import Link from "next/link";
import type { Metadata } from "next";
import { connections, verseSlug } from "@/data";
import { connectionKindLabel } from "@/data/connections";
import type { ConnectionKind } from "@/data/types";
import { edgesOf, shortRef } from "@/lib/graph";

export const metadata: Metadata = {
  title: "Connections: how Scripture interprets Scripture",
  description:
    "Entry points into the knowledge graph: the most connected verses, with echoes, fulfillments, patterns, and contrasts.",
};

/** The kinds present on a verse's edges, for a compact card subtitle. */
function kindSummary(ref: string): ConnectionKind[] {
  const kinds = new Set<ConnectionKind>();
  for (const e of edgesOf(ref)) kinds.add(e.kind);
  return [...kinds].slice(0, 3);
}

/**
 * The hub of the knowledge graph: the most connected verses as entry points
 * into the interactive map at /connections/[slug].
 */
export default function ConnectionsIndexPage() {
  const ranked = Object.keys(connections)
    .map((ref) => ({ ref, degree: edgesOf(ref).length }))
    .filter((r) => r.degree >= 2)
    .sort((a, b) => b.degree - a.degree)
    .slice(0, 24);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
        The knowledge graph
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
        Scripture interprets Scripture
      </h1>
      <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">
        Every verse below is woven into others by echoes, fulfillments,
        patterns, and contrasts. Pick one to open its connection map: click any
        verse to keep walking.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ranked.map(({ ref, degree }) => (
          <Link
            key={ref}
            href={`/connections/${verseSlug(ref)}`}
            className="group flex flex-col rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:bg-surface hover:shadow-sm"
          >
            <p className="font-display text-lg font-medium text-ink transition-colors group-hover:text-gold-deep">
              {shortRef(ref)}
            </p>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-faint">
              {kindSummary(ref)
                .map((k) => connectionKindLabel[k])
                .join(" · ")}
            </p>
            <p className="mt-auto pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {degree} connections
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
