"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { passageText } from "@/lib/verse-text";
import {
  dueCards,
  getServerSnapshot,
  getSnapshot,
  gradeVerse,
  removeVerse,
  subscribe,
  type Grade,
  type MemoryCard,
} from "@/lib/memory";

/**
 * The review room: hold verses in three stages (read, first letters, blank)
 * and grade yourself. Invitational by design: no streaks, no goals; the
 * verses simply wait for you.
 */

type Stage = "read" | "letters" | "blank";

const STAGE_ORDER: Stage[] = ["read", "letters", "blank"];
const STAGE_LABEL: Record<Stage, string> = {
  read: "Read it",
  letters: "First letters",
  blank: "From memory",
};

function firstLetters(text: string): string {
  return text
    .split(/\s+/)
    .map((w) => {
      const first = w.match(/[a-z]/i)?.[0];
      return first ? `${first.toUpperCase()}…` : w;
    })
    .join(" ");
}

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

// A coarse clock as an external store: keeps due/days-remaining labels honest
// without calling Date.now() during render, and refreshes every minute.
const CLOCK_TICK_MS = 60_000;
function subscribeClock(cb: () => void): () => void {
  const id = setInterval(cb, CLOCK_TICK_MS);
  return () => clearInterval(id);
}
function useNow(): number {
  return (
    useSyncExternalStore(
      subscribeClock,
      () => Math.floor(Date.now() / CLOCK_TICK_MS),
      () => 0
    ) * CLOCK_TICK_MS
  );
}

export default function MemorizePage() {
  const cards = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = useNow();
  const [queue, setQueue] = useState<MemoryCard[] | null>(null);
  const [stageIdx, setStageIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // The session queue: fixed at start so grading doesn't reshuffle mid-review.
  // `cards` is intentionally included so the session recomputes once the
  // browser store hydrates (the SSR snapshot is empty).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const session = useMemo(() => (queue ?? dueCards()), [queue, cards]);
  const card = session[0];
  const text = card ? passageText(card.ref) : null;
  const stage = STAGE_ORDER[Math.min(stageIdx, STAGE_ORDER.length - 1)];

  function nextCard() {
    setQueue(session.slice(1));
    setStageIdx(0);
    setRevealed(false);
  }

  function handleGrade(g: Grade) {
    if (!card) return;
    gradeVerse(card.ref, g);
    if (g === 0 || g === 1) {
      // Needs another pass: re-queue from the store so the card carries its
      // updated schedule. "Again" retries immediately (front of queue);
      // "Almost" goes to the back so other verses come up first.
      const updated = getSnapshot().find((c) => c.ref === card.ref) ?? { ...card };
      setQueue(g === 0 ? [updated, ...session.slice(1)] : [...session.slice(1), updated]);
    } else {
      nextCard();
    }
    setStageIdx(0);
    setRevealed(false);
  }

  
  const remaining = session.length;

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
      <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
        Hold these in your heart
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
        Review
      </h1>
      <p className="mt-3 max-w-[55ch] text-[15px] leading-relaxed text-ink-soft">
        Recite at your own pace: read it, then the first letters, then just
        the reference. Grade yourself honestly; the verses come back when
        they should.
      </p>

      {/* The waiting verse */}
      {card && text ? (
        <section className="mt-8 rounded-3xl border border-gold/30 bg-gradient-to-b from-gold-wash/50 to-cream/50 p-7 sm:p-9">
          <div className="flex items-center justify-between gap-3">
            <div role="group" aria-label={`Stage ${stageIdx + 1} of 3`} className="flex gap-1.5">
              {STAGE_ORDER.map((s, i) => (
                <span
                  key={s}
                  className={`h-1.5 w-8 rounded-full ${i <= stageIdx ? "bg-gold" : "bg-line"}`}
                  title={STAGE_LABEL[s]}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => speak(text)}
              className="text-[12.5px] font-medium text-ink-faint transition-colors hover:text-gold-deep"
            >
              ▶ Hear it
            </button>
          </div>

          <p className="mt-5 font-display text-xl font-medium text-ink">
            {card.ref}
          </p>

          {stage === "read" && (
            <blockquote className="mt-4 font-display text-[18px] italic leading-relaxed text-ink">
              {text}
            </blockquote>
          )}
          {stage === "letters" && (
            <blockquote className="mt-4 font-display text-[16px] leading-loose tracking-wide text-ink">
              {firstLetters(text)}
            </blockquote>
          )}
          {stage === "blank" && (
            <blockquote className="mt-4 min-h-[4rem] font-display text-[16px] italic leading-relaxed text-ink-faint">
              {revealed ? text : "Recite it from memory."}
            </blockquote>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {stageIdx < STAGE_ORDER.length - 1 ? (
              <button
                type="button"
                onClick={() => setStageIdx((i) => i + 1)}
                className="rounded-full bg-gold-deep px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink"
              >
                I can say it →
              </button>
            ) : revealed ? (
              <>
                <span className="mr-1 text-[12px] uppercase tracking-[0.14em] text-ink-faint">
                  How did it go?
                </span>
                {(
                  [
                    [0, "Again"],
                    [1, "Almost"],
                    [2, "Held it"],
                  ] as [Grade, string][]
                ).map(([g, label]) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleGrade(g)}
                    className="rounded-full border border-line bg-surface px-4 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-gold/60 hover:text-gold-deep"
                  >
                    {label}
                  </button>
                ))}
              </>
            ) : (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="rounded-full border border-line bg-surface px-5 py-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:border-gold/60 hover:text-gold-deep"
              >
                Show the verse
              </button>
            )}
            <button
              type="button"
              onClick={nextCard}
              className="ml-auto text-[12.5px] text-ink-faint transition-colors hover:text-gold-deep"
            >
              Skip for now →
            </button>
          </div>
        </section>
      ) : (
        <section className="mt-8 rounded-3xl border border-line bg-cream/40 p-8 text-center">
          <p className="font-display text-xl text-ink">Nothing is waiting.</p>
          <p className="mx-auto mt-2 max-w-[45ch] text-[14px] leading-relaxed text-ink-soft">
            All clear for now. When you study a verse you want to carry with
            you, press &ldquo;Hold&rdquo; on its card and it will wait here.
          </p>
          <Link
            href="/questions"
            className="mt-5 inline-block rounded-full bg-gold-deep px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-ink"
          >
            Find a question to study →
          </Link>
        </section>
      )}

      {remaining > 0 && (
        <p className="mt-4 text-center text-[12.5px] text-ink-faint">
          {remaining} {remaining === 1 ? "verse" : "verses"} left this session
        </p>
      )}

      {/* Everything being held */}
      {cards.length > 0 && (
        <section className="mt-12 border-t border-line pt-8">
          <h2 className="font-display text-xl font-medium text-ink">
            Verses you hold ({cards.length})
          </h2>
          <ul className="mt-4 space-y-2">
            {cards.map((c) => {
              const due = c.due <= now;
              return (
                <li
                  key={c.ref}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface/50 px-4 py-3"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[15px] font-medium text-ink">
                      {c.ref}
                    </span>
                    <span className="text-[11.5px] text-ink-faint">
                      {due ? "waiting" : `next in ${Math.max(1, Math.round((c.due - now) / 86_400_000))} day(s)`}
                      {c.reps > 0 ? ` · held ${c.reps}x` : ""}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    {!due && (
                      <button
                        type="button"
                        onClick={() => gradeVerse(c.ref, 2)}
                        className="text-[11.5px] font-medium text-ink-faint transition-colors hover:text-gold-deep"
                        title="I said it well today"
                      >
                        Say it now
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => removeVerse(c.ref)}
                      className="text-[11.5px] font-medium text-ink-faint transition-colors hover:text-red-700"
                      title="Stop holding this verse"
                    >
                      Release
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
