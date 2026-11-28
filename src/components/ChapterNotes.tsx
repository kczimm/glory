import type { ChapterBackground } from "@/data/types";

/**
 * The reading tools for a chapter: setting, genre, the original-language
 * words that decide the passage, and how the church has read it.
 *
 * Deliberately collapsed and placed after the verses. Glory's thesis is that
 * you read first and the text raises the question; commentary that arrives
 * before the chapter turns the reader into an audience. Nothing here is
 * spoken: the audio catalog is built from study points, so adding notes never
 * changes a chunk hash.
 */
export default function ChapterNotes({
  background,
  chapterId,
  headingLevel = 3,
}: {
  background: ChapterBackground;
  chapterId: string;
  /** The heading level the surrounding page expects (study uses h2 above it,
   *  the Bible page has only h1), so the outline never skips a level. */
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <details
      id={`notes-${chapterId}`}
      className="group rounded-lg border border-line bg-cream/60 px-4 py-3 sm:px-5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-gold-deep [&::-webkit-details-marker]:hidden">
        Notes on this chapter
        <span className="text-gold transition-transform duration-200 group-open:rotate-45" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </summary>

      <div className="mt-4 space-y-4 border-t border-line pt-4 text-[14px] leading-relaxed text-ink-soft">
        <section>
          <Heading className="mb-1 font-display text-[15px] font-medium text-ink">The setting</Heading>
          <p>{background.setting}</p>
        </section>

        <section>
          <Heading className="mb-1 font-display text-[15px] font-medium text-ink">How to read it</Heading>
          <p>{background.genre}</p>
        </section>

        {background.terms && background.terms.length > 0 && (
          <section>
            <Heading className="mb-2 font-display text-[15px] font-medium text-ink">Words worth knowing</Heading>
            <dl className="space-y-3">
              {background.terms.map((t) => (
                <div key={t.term}>
                  <dt className="text-[14px] text-ink">
                    <span className="font-semibold">{t.term}</span>
                    <span className="text-ink-faint"> · {t.original}</span>
                    <span className="text-ink-soft">, {t.gloss}</span>
                  </dt>
                  <dd className="mt-0.5 text-[13.5px] text-ink-soft">{t.note}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {background.reception && (
          <section>
            <Heading className="mb-1 font-display text-[15px] font-medium text-ink">
              How the church has read it
            </Heading>
            <p>{background.reception}</p>
          </section>
        )}

        <section>
          <Heading className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
            Sources
          </Heading>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[12.5px] text-ink-soft">
            {background.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </div>
    </details>
  );
}
