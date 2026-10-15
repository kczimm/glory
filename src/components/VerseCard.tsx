import { getPassageText } from "@/data/server";
import { verseSlug, getConnections } from "@/data";
import Link from "next/link";
import VerseConnections, { type ConnectionRowData } from "./VerseConnections";
import MemorizeButton from "./MemorizeButton";
import VerseText from "./VerseText";
import { TRANSLATIONS } from "@/lib/translation-shared";

/**
 * A scripture callout: the reference, the exact text, and any
 * cross-reference connections from the knowledge graph. Verse text and
 * connection rows are resolved here on the server.
 *
 * Both readings of every passage are rendered and CSS shows the reader's
 * choice (see VerseText), so this component needs no knowledge of the active
 * translation. That keeps every page that contains a verse card cacheable.
 */
export default function VerseCard({ verse }: { verse: string }) {
  if (!getPassageText(verse, "web")) return null;
  const rows: ConnectionRowData[] = getConnections(verse).map((edge) => ({
    target: edge.target,
    kind: edge.kind,
    note: edge.note,
    text: <VerseText verse={edge.target} />,
  }));
  return (
    <figure className="border-l-2 border-gold/60 bg-cream/50 py-3 pl-4 pr-5">
      <blockquote className="font-display text-[17px] italic leading-relaxed text-ink">
        <VerseText verse={verse} />
      </blockquote>
      <figcaption className="mt-1.5 text-[13px]">
        <Link
          href={`/verses/${verseSlug(verse)}`}
          className="font-semibold tracking-wide text-gold-deep underline-offset-2 hover:underline"
        >
          {verse}
        </Link>
        <span className="text-ink-faint">
          {" · "}
          <Link
            href="/about-translation"
            className="underline-offset-2 hover:underline"
          >
            <span data-v="web">{TRANSLATIONS.web.shortName}</span>
            <span data-v="kjv">{TRANSLATIONS.kjv.shortName}</span>
          </Link>
        </span>
        <span className="ml-2 align-middle">
          <MemorizeButton verse={verse} />
        </span>
      </figcaption>
      <VerseConnections verse={verse} rows={rows} />
    </figure>
  );
}
