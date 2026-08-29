import { getPassageText } from "@/data/server";
import { verseSlug, getConnections } from "@/data";
import Link from "next/link";
import VerseConnections, { type ConnectionRowData } from "./VerseConnections";
import MemorizeButton from "./MemorizeButton";
import {
  getTranslationInfo,
  versionedUrl,
  type TranslationCode,
} from "@/lib/translation-shared";

/**
 * A scripture callout: the reference, the exact text, and any
 * cross-reference connections from the knowledge graph. Verse text and
 * connection rows are resolved here on the server.
 *
 * The `translation` prop controls which version is displayed.
 * If omitted, defaults to "web" for backward compatibility.
 */
export default function VerseCard({
  verse,
  translation = "web",
}: {
  verse: string;
  translation?: TranslationCode;
}) {
  const text = getPassageText(verse, translation);
  if (!text) return null;
  const rows: ConnectionRowData[] = getConnections(verse).map((edge) => ({
    target: edge.target,
    kind: edge.kind,
    note: edge.note,
    text: getPassageText(edge.target, translation),
  }));
  const translationInfo = getTranslationInfo(translation);
  return (
    <figure className="border-l-2 border-gold/60 bg-cream/50 py-3 pl-4 pr-5">
      <blockquote className="font-display text-[17px] italic leading-relaxed text-ink">
        {text}
      </blockquote>
      <figcaption className="mt-1.5 text-[13px]">
        <Link
          href={versionedUrl(`/verses/${verseSlug(verse)}`, translation)}
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
            {translationInfo.shortName}
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
