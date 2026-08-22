"use client";

import { useSyncExternalStore } from "react";
import { addVerse, getServerSnapshot, getSnapshot, removeVerse, subscribe } from "@/lib/memory";

/**
 * The hold/unhold toggle on a verse card: "hold this verse" adds it to the
 * memory queue. Quiet by design: a single small control, no counters here.
 */
export default function MemorizeButton({ verse, className }: { verse: string; className?: string }) {
  const cards = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const held = cards.some((c) => c.ref === verse);

  return (
    <button
      type="button"
      onClick={() => (held ? removeVerse(verse) : addVerse(verse))}
      aria-pressed={held}
      title={held ? "Stop holding this verse" : "Hold this verse to memorize it"}
      className={
        className ??
        `inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
          held
            ? "border-gold bg-gold-wash text-gold-deep"
            : "border-line text-ink-faint hover:border-gold/50 hover:text-gold-deep"
        }`
      }
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill={held ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M6 3h12v18l-6-4-6 4z" strokeLinejoin="round" />
      </svg>
      {held ? "Held" : "Hold"}
    </button>
  );
}
