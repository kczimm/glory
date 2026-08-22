"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { dueCount, subscribe } from "@/lib/memory";

/**
 * The nav link to the review room. The due badge is invitational: a quiet
 * count of verses waiting, never an alarm.
 */
export default function MemorizeNavLink() {
  const n = useSyncExternalStore(
    subscribe,
    () => dueCount(),
    () => 0
  );
  return (
    <Link
      href="/memorize"
      className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-gold"
    >
      Hold
      {n > 0 && (
        <span className="rounded-full bg-gold-wash px-1.5 py-0.5 text-[10px] font-semibold text-gold-deep">
          {n}
        </span>
      )}
    </Link>
  );
}
