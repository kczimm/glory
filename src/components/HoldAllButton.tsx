"use client";

import { useState, useSyncExternalStore } from "react";
import { addVerse, getSnapshot, getServerSnapshot, subscribe } from "@/lib/memory";

/**
 * Hold every key verse of a study at once: offered after the key-verses
 * section of a study page. Quiet and reversible (the review room can
 * release any verse).
 */
export default function HoldAllButton({ verses }: { verses: string[] }) {
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [justAdded, setJustAdded] = useState(false);

  if (!verses.length) return null;

  function handleAdd() {
    for (const v of verses) addVerse(v);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-surface px-4 py-2 text-[13px] font-medium text-gold-deep transition-colors hover:bg-gold-wash"
      title="Add all of these verses to your review"
    >
      {justAdded ? (
        <>They are waiting in Review →</>
      ) : (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 3h12v18l-6-4-6 4z" strokeLinejoin="round" />
          </svg>
          Hold all {verses.length} verses
        </>
      )}
    </button>
  );
}
