"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSyncExternalStore } from "react";
import type { Passage } from "@/data/types";
import { getChapter, getChapterFocus } from "@/data";
import {
  chapterItems,
  getServerSnapshot,
  getSnapshot,
  matchesVerse,
  subscribe,
} from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";

/**
 * An expandable full-chapter reader. This is where the learner actually
 * goes "through relevant verses and chapters of the Bible". The Listen
 * control reads the chapter aloud (or just the focus range); the verse
 * being read is highlighted and kept in view.
 */
export default function ChapterReader({ passage }: { passage: Passage }) {
  const [opened, setOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const sourceId = `chapter:${passage.book} ${passage.chapter}`;
  const chapter = getChapter(passage.book, passage.chapter);

  const verses = useMemo(
    () => (chapter ? getChapterFocus(passage.book, passage.chapter, passage.focus) : null),
    [chapter, passage.book, passage.chapter, passage.focus]
  );

  const items = useMemo<SpeechItem[]>(() => {
    if (!verses) return [];
    return chapterItems(passage.book, passage.chapter, verses);
  }, [verses, passage.book, passage.chapter]);

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

  if (!chapter) return null;

  const focusStart = passage.focus ? Number(passage.focus.split("-")[0]) : -1;
  const focusEnd = passage.focus
    ? Number(passage.focus.split("-")[1] ?? passage.focus.split("-")[0])
    : -1;

  return (
    <div className="rounded-xl border border-line bg-white/50">
      <div className="flex items-center gap-2 px-4 py-4 sm:px-5">
        <button
          type="button"
          onClick={() => setOpened((o) => !o)}
          className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          aria-expanded={open}
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
        <ListenButton
          sourceId={sourceId}
          items={items}
          onStart={() => setOpened(true)}
        />
      </div>
      {open && (
        <div
          ref={listRef}
          className="reader-scroll max-h-[420px] overflow-y-auto border-t border-line px-6 py-5"
        >
          {chapter.map((v) => {
            const vId = `${passage.book} ${passage.chapter}:${v.n}`;
            const focused = v.n >= focusStart && v.n <= focusEnd;
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