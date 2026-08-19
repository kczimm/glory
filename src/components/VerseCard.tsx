import { getPassageText } from "@/data";
import VerseConnections from "./VerseConnections";

/**
 * A scripture callout — the reference, the exact text (WEB), and any
 * cross-reference connections from the knowledge graph.
 */
export default function VerseCard({ verse }: { verse: string }) {
  const text = getPassageText(verse);
  if (!text) return null;
  return (
    <figure className="border-l-2 border-gold/60 bg-cream/50 py-3 pl-4 pr-5">
      <blockquote className="font-display text-[17px] italic leading-relaxed text-ink">
        {text}
      </blockquote>
      <figcaption className="mt-1.5 text-[13px] font-semibold tracking-wide text-gold-deep">
        — {verse}
      </figcaption>
      <VerseConnections verse={verse} />
    </figure>
  );
}
