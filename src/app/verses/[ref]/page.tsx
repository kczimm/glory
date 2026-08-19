import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPassageText,
  getConnections,
  connectionKindLabel,
  questionsUsing,
  incomingConnections,
  graphVerseRefs,
  refFromSlug,
  verseSlug,
} from "@/data";

interface Props {
  params: Promise<{ ref: string }>;
}

export async function generateStaticParams() {
  return graphVerseRefs().map((ref) => ({ ref: verseSlug(ref) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params;
  const verse = refFromSlug(ref);
  if (!verse) return {};
  const text = getPassageText(verse);
  if (!text) return {};
  return {
    title: verse,
    description: `${verse} — read in the World English Bible, with the study questions and cross-references that connect to it.`,
  };
}

export default async function VersePage({ params }: Props) {
  const { ref } = await params;
  const verse = refFromSlug(ref);
  if (!verse) notFound();
  const text = getPassageText(verse);
  if (!text) notFound();

  const used = questionsUsing(verse);
  const outgoing = getConnections(verse);
  const incoming = incomingConnections(verse);

  return (
    <article>
      <header className="border-b border-line bg-gradient-to-b from-cream/70 to-parchment">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-8 sm:pb-12 sm:pt-12">
          <Link
            href="/verses"
            className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-deep hover:underline"
          >
            ✦ The Word connected
          </Link>
          <p className="mt-6 font-display text-[22px] italic leading-relaxed text-ink sm:text-[28px]">
            {text}
          </p>
          <p className="mt-3 text-[14px] font-semibold tracking-wide text-gold-deep">
            — {verse} (World English Bible)
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5">
        {/* Where this verse is studied */}
        <section className="border-b border-line py-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
            Where you find this verse
          </p>
          {used.length > 0 ? (
            <div className="mt-4 space-y-2.5">
              {used.map((u) => (
                <Link
                  key={u.slug}
                  href={`/questions/${u.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-white/60 px-4 py-3 transition-colors hover:border-gold/50 hover:bg-white"
                >
                  <span className="font-display text-[15px] font-medium text-ink group-hover:text-gold-deep">
                    {u.question}
                  </span>
                  <span className="ml-auto text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-[14px] text-ink-soft">
              Not yet the focus of a full study — but it is connected in the
              Word below.
            </p>
          )}
        </section>

        {/* Leaves this verse */}
        {outgoing.length > 0 && (
          <section className="border-b border-line py-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
              From this verse, the Word reaches
            </p>
            <div className="mt-4 space-y-3">
              {outgoing.map((e) => (
                <VerseConnectionRow key={e.target} target={e.target} note={e.note} kindLabel={connectionKindLabel[e.kind]} />              ))}
            </div>
          </section>
        )}

        {/* Points to this verse */}
        {incoming.length > 0 && (
          <section className="border-b border-line py-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
              That reaches back to this verse
            </p>
            <div className="mt-4 space-y-3">
              {incoming.map((e) => (
                <VerseConnectionRow
                  key={e.from}
                  target={e.from}
                  note={e.note}
                  kindLabel={`${connectionKindLabel[e.kind]} (this verse)`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function VerseConnectionRow({
  target,
  note,
  kindLabel,
}: {
  target: string;
  note: string;
  kindLabel: string;
}) {
  const text = getPassageText(target);
  return (
    <div className="rounded-xl border border-line bg-white/60 px-4 py-3">
      <p className="flex items-baseline gap-2">
        <span className="shrink-0 rounded-full border border-gold/40 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-gold-deep">
          {kindLabel}
        </span>
        <Link
          href={`/verses/${verseSlug(target)}`}
          className="text-[13px] font-semibold text-gold-deep underline-offset-2 hover:underline"
        >
          {target}
        </Link>
      </p>
      <p className="mt-1.5 text-[13.5px] leading-snug text-ink-soft">{note}</p>
      {text && (
        <p className="mt-2 border-l border-gold/40 pl-2.5 font-display text-[14.5px] italic leading-snug text-ink">
          “{text}”
        </p>
      )}
    </div>
  );
}
