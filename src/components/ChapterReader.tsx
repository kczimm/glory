"use client";

import { useState } from "react";
import type { Passage } from "@/data/types";
import { getChapter } from "@/data";

/**
 * An expandable full-chapter reader. This is where the learner actually
 * goes "through relevant verses and chapters of the Bible".
 */
export default function ChapterReader({ passage }: { passage: Passage }) {
  const [open, setOpen] = useState(false);
  const chapter = getChapter(passage.book, passage.chapter);
  if (!chapter) return null;

  const focusStart = passage.focus
    ? Number(passage.focus.split("-")[0])
    : -1;
  const focusEnd = passage.focus
    ? Number(passage.focus.split("-")[1] ?? passage.focus.split("-")[0])
    : -1;

  return (
    <div className="rounded-xl border border-line bg-white/50">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
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
      {open && (
        <div className="reader-scroll max-h-[420px] overflow-y-auto border-t border-line px-6 py-5">
          {chapter.map((v) => {
            const focused = v.n >= focusStart && v.n <= focusEnd;
            return (
              <p
                key={v.n}
                className={`mb-3 font-display text-[16.5px] leading-relaxed text-ink ${
                  focused ? "rounded-md bg-gold-wash/60 px-3 py-1.5" : ""
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
