"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSyncExternalStore } from "react";
import type { Passage } from "@/data/types";
import { chapterSlug } from "@/data/books";
import { chapterItems, filterFocus } from "@/lib/audio-text";
import { inFocus, parseFocus } from "@/lib/focus";
import { loadChapterData } from "@/lib/chapter";
import type { ChapterPayload, ChapterVerse } from "@/lib/chapter";
import ChapterNotes from "@/components/ChapterNotes";
import {
  getServerSnapshot,
  getSnapshot,
  matchesVerse,
  subscribe,
} from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import { useTranslation } from "@/lib/useTranslation";
import { hasAudio } from "@/lib/translation-shared";

/**
 * An expandable full-chapter reader. This is where the learner actually
 * goes "through relevant verses and chapters of the Bible". The Listen
 * control reads the chapter aloud (or just the focus range); the verse
 * being read is highlighted and kept in view.
 *
 * The chapter text is NOT passed in as props. A study page typically carries
 * three or four passages, and the reader starts collapsed, so shipping every
 * chapter (in both readings) inside the page meant several tens of kilobytes
 * of payload the reader might never open. The text is fetched from
 * /api/chapter the first time the chapter is opened, or when the audio player
 * chains into it, and cached for the rest of the session by `loadChapter`.
 * The vendored Bible still never enters the client bundle.
 */
export default function ChapterReader({
  passage,
  hasNotes = false,
}: {
  passage: Passage;
  /** Whether this chapter has reading notes, so the collapsed header can say so. */
  hasNotes?: boolean;
}) {
  const [opened, setOpened] = useState(false);
  // The loaded key travels with the data, so a passage change cannot show a
  // previous chapter's text or notes even if the caller forgets to key this
  // component (the study page does key it, but the invariant lives here).
  const [chapter, setChapter] = useState<{ key: string; payload: ChapterPayload } | null>(null);
  // Status is keyed like the payload, so a passage swap cannot inherit the
  // previous chapter's spinner or failure panel.
  const [status, setStatus] = useState<{ key: string; loading: boolean; failed: boolean } | null>(
    null,
  );
  const pending = useRef<{ key: string; request: Promise<ChapterPayload | null> } | null>(null);
  const mounted = useRef(true);
  const listRef = useRef<HTMLDivElement>(null);
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { version } = useTranslation();
  const audioAvailable = hasAudio(version);

  const sourceId = `chapter:${passage.book} ${passage.chapter}`;
  const domId = `reader-${sourceId.replace(/[^a-z0-9]+/gi, "-")}`;
  const verses = chapter?.key === sourceId ? chapter.payload.verses : null;
  const background = chapter?.key === sourceId ? chapter.payload.background : null;
  const loading = status?.key === sourceId && status.loading;
  const failed = status?.key === sourceId && status.failed;

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  /** Load the chapter once; later calls reuse the settled promise or state. */
  const ensure = useCallback(async (): Promise<ChapterVerse[] | null> => {
    if (verses) return verses;
    const inflight = pending.current?.key === sourceId ? pending.current.request : null;
    const request = inflight ?? loadChapterData(passage.book, passage.chapter);
    pending.current = { key: sourceId, request };
    if (mounted.current) setStatus({ key: sourceId, loading: true, failed: false });
    const payload = await request;
    if (!mounted.current) return payload?.verses ?? null;
    if (payload) {
      setChapter({ key: sourceId, payload });
      setStatus({ key: sourceId, loading: false, failed: false });
    } else {
      // Keep a failure retryable: the next open starts a fresh request.
      if (pending.current?.request === request) pending.current = null;
      setStatus({ key: sourceId, loading: false, failed: true });
    }
    return payload?.verses ?? null;
  }, [passage.book, passage.chapter, sourceId, verses]);

  // Speech is pre-generated from the WEB text and only WEB has an audio
  // catalog, so the queue is built from `web` whichever reading is on screen.
  // Only the focus range is spoken (mirroring the pre-generated catalog); the
  // full chapter stays visible for reading.
  const queueFor = useCallback(
    (loaded: ChapterVerse[]): SpeechItem[] =>
      chapterItems(
        passage.book,
        passage.chapter,
        filterFocus(
          loaded.map((v) => ({ n: v.n, text: v.web ?? "" })),
          passage.focus,
        ),
      ),
    [passage.book, passage.chapter, passage.focus],
  );

  const active = speech.sourceId === sourceId && speech.status !== "idle";
  const activeId = active ? speech.queue[speech.index]?.id : undefined;
  // Playback of this chapter opens the reader (derived, so the highlight is
  // visible while it reads); the user can still collapse it when idle.
  const open = opened || active;

  // Chained playback can arrive before the text was ever opened here.
  useEffect(() => {
    if (active && !verses) void ensure();
  }, [active, verses, ensure]);

  // Keep the spoken verse in view inside the scroll container.
  useEffect(() => {
    if (!open) return;
    if (speech.sourceId !== sourceId || speech.status === "idle") return;
    const itemId = speech.queue[speech.index]?.id;
    if (!itemId) return;
    const container = listRef.current;
    if (!container) return;
    const el = container.querySelector<HTMLElement>(
      `[data-verse-id="${CSS.escape(itemId.split("|")[0])}"]`
    );
    if (!el) return;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    if (eRect.top < cRect.top || eRect.bottom > cRect.bottom) {
      container.scrollTo({
        top:
          container.scrollTop +
          (eRect.top - cRect.top) -
          cRect.height / 2 +
          el.offsetHeight / 2,
        behavior: "smooth",
      });
    }
  }, [speech, open, sourceId, verses]);

  const toggle = () => {
    // `open` can be true because playback is reading (active), not because the
    // reader opened it. Toggle the intent against what is visible, so a click
    // never inverts it into "keep open after playback".
    const next = !open;
    setOpened(next);
    if (next && !verses) void ensure();
  };

  // Focus "5-15", "16", or "1-4, 12" (same parser as the audio queue). A focus
  // that cannot be parsed highlights nothing, so the reader is never shown a
  // highlight the passage did not ask for.
  const focusRanges = parseFocus(passage.focus);

  return (
    <div className="rounded-xl border border-line bg-surface/50">
      <div className="flex items-center gap-2 px-4 py-4 sm:px-5">
        <button
          type="button"
          onClick={toggle}
          className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          aria-expanded={open}
          aria-controls={domId}
        >
          <div>
            <p className="flex flex-wrap items-center gap-2 font-display text-lg font-medium text-ink">
              {passage.book} {passage.chapter}
              {hasNotes && (
                <span className="rounded-full border border-gold/40 bg-gold-wash px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Notes
                </span>
              )}
            </p>
            <p className="text-[13px] text-ink-soft">
              {passage.title}: {passage.lookFor}
            </p>
          </div>
          <span
            className={`shrink-0 text-gold transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
        </button>
        {audioAvailable && (
          <ListenButton
            sourceId={sourceId}
            prepare={async () => {
              const loaded = await ensure();
              // Build the queue at click time: the text may not have been
              // fetched when this button was rendered.
              return loaded ? queueFor(loaded) : [];
            }}
            onStart={() => setOpened(true)}
          />
        )}
      </div>
      {/* Without JavaScript this reader cannot expand, and the chapter text is
          fetched on open rather than shipped in the page. Point those readers
          at the prerendered chapter instead of leaving them on a dead button. */}
      <noscript>
        <p className="border-t border-line px-4 py-3 text-[13.5px] text-ink-soft sm:px-5">
          Read{" "}
          <a
            href={`/bible/${chapterSlug(passage.book, passage.chapter)}`}
            className="font-semibold text-gold-deep underline underline-offset-2"
          >
            {passage.book} {passage.chapter}
          </a>{" "}
          in the reader.
        </p>
      </noscript>
      {open && (
        <>
          <div
            ref={listRef}
            id={domId}
            className="reader-scroll max-h-[420px] overflow-y-auto border-t border-line px-6 py-5"
          >
            {verses ? (
              <>
                {verses.map((v) => {
                  const vId = `${passage.book} ${passage.chapter}:${v.n}`;
                  const focused = focusRanges ? inFocus(focusRanges, v.n) : false;
                  const speaking = matchesVerse(activeId, vId);
                  return (
                    <p
                      key={v.n}
                      data-verse-id={vId}
                      className={`mb-3 font-display text-[16.5px] leading-relaxed text-ink ${
                        speaking
                          ? "rounded-md bg-gold-wash/80 px-3 py-1.5 ring-1 ring-gold/40"
                          : focused
                            ? "rounded-md bg-gold-wash/60 px-3 py-1.5"
                            : ""
                      }`}
                    >
                      <span
                        className={`mr-2 align-super text-[11px] font-semibold ${
                          focused ? "text-gold-deep" : "text-ink-faint"
                        }`}
                      >
                        {v.n}
                      </span>
                      {((version === "kjv" ? v.kjv : v.web) ?? v.web ?? "").replace(/\n+/g, " ")}
                    </p>
                  );
                })}
                {passage.focus && (
                  <p className="mt-2 text-[12px] italic text-ink-faint">
                    Highlighted verses {passage.focus} are the heart of this reading.
                  </p>
                )}
              </>
            ) : failed ? (
              <p className="text-[13.5px] text-ink-soft">
                Could not load this chapter.{" "}
                <button
                  type="button"
                  onClick={() => void ensure()}
                  className="font-semibold text-gold-deep underline underline-offset-2 hover:text-gold"
                >
                  Try again
                </button>
              </p>
            ) : (
              <p className="text-[13.5px] text-ink-faint" aria-live="polite">
                {loading ? "Loading the chapter…" : "Chapter"}
              </p>
            )}
          </div>
          {background && (
            <div className="border-t border-line px-6 py-5">
              <ChapterNotes background={background} chapterId={domId} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
