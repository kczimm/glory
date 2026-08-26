"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSyncExternalStore } from "react";
import type { Passage } from "@/data/types";
import { chapterItems, filterFocus } from "@/lib/audio-text";
import {
  getServerSnapshot,
  getSnapshot,
  matchesVerse,
  subscribe,
} from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import { resolveVersion } from "@/lib/translation";
import { hasAudio, type TranslationCode } from "@/lib/translation-shared";

/** Subscribe/unsubscribe stub for useSyncExternalStore. */
function subscribeVersion(): () => void {
  return () => {};
}
function getVersionSnapshot(): string {
  return typeof window !== "undefined" ? resolveVersion(new URLSearchParams(window.location.search)) : "web";
}
function getVersionServerSnapshot(): string {
  return "web";
}

/**
 * An expandable full-chapter reader. This is where the learner actually
 * goes "through relevant verses and chapters of the Bible". The Listen
 * control reads the chapter aloud (or just the focus range); the verse
 * being read is highlighted and kept in view. The chapter text is passed
 * in from the server so the vendored Bible never enters the client bundle.
 */
export default function ChapterReader({
  passage,
  verses,
}: {
  passage: Passage;
  verses: { n: number; text: string }[] | null;
}) {
  const [opened, setOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const version = useSyncExternalStore(subscribeVersion, getVersionSnapshot, getVersionServerSnapshot) as TranslationCode;
  const audioAvailable = hasAudio(version);

  const sourceId = `chapter:${passage.book} ${passage.chapter}`;

  const items = useMemo<SpeechItem[]>(() => {
    if (!verses) return [];
    // Only the focus range is spoken (mirroring the pre-generated catalog);
    // the full chapter stays visible for reading.
    return chapterItems(
      passage.book,
      passage.chapter,
      filterFocus(verses, passage.focus)
    );
  }, [verses, passage.book, passage.chapter, passage.focus]);

  const active = speech.sourceId === sourceId && speech.status !== "idle";
  const activeId = active ? speech.queue[speech.index]?.id : undefined;
  // Playback of this chapter opens the reader (derived, so the highlight is
  // visible while it reads); the user can still collapse it when idle.
  const open = opened || active;

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
  }, [speech, open, sourceId]);

  if (!verses) return null;

  // Same semantics as filterFocus in audio-text.ts: "5-15", "16", or "1-4, 12".
  const focusRanges = (() => {
    if (!passage.focus) return null;
    const ranges: [number, number][] = [];
    for (const part of passage.focus.split(",")) {
      const m = part.trim().match(/^(\d+)(?:-(\d+))?$/);
      if (!m) return null;
      const start = Number(m[1]);
      const end = Number(m[2] ?? m[1]);
      if (end < start) return null;
      ranges.push([start, end]);
    }
    return ranges.length ? ranges : null;
  })();

  return (
    <div className="rounded-xl border border-line bg-surface/50">
      <div className="flex items-center gap-2 px-4 py-4 sm:px-5">
        <button
          type="button"
          onClick={() => setOpened((o) => !o)}
          className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          aria-expanded={open}
          aria-controls={`reader-${sourceId.replace(/[^a-z0-9]+/gi, "-")}`}
        >
          <div>
            <p className="font-display text-lg font-medium text-ink">
              {passage.book} {passage.chapter}
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
            items={items}
            onStart={() => setOpened(true)}
          />
        )}
      </div>
      {open && (
        <div
          ref={listRef}
          id={`reader-${sourceId.replace(/[^a-z0-9]+/gi, "-")}`}
          className="reader-scroll max-h-[420px] overflow-y-auto border-t border-line px-6 py-5"
        >
          {verses.map((v) => {
            const vId = `${passage.book} ${passage.chapter}:${v.n}`;
            const focused = focusRanges?.some(([s, e]) => v.n >= s && v.n <= e) ?? false;
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
                {v.text.replace(/\n+/g, " ")}
              </p>
            );
          })}
          {passage.focus && (
            <p className="mt-2 text-[12px] italic text-ink-faint">
              Highlighted verses {passage.focus} are the heart of this reading.
            </p>
          )}
        </div>
      )}
    </div>
  );
}