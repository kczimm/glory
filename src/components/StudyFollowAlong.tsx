"use client";

import { useEffect, useRef } from "react";
import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  subscribe,
} from "@/lib/speech";

/**
 * Follow-along for "Listen to this study": as each chunk is read, scroll the
 * matching point/verse (by targetId) into view and highlight it, clearing the
 * previous highlight. Only scrolls when the target is mostly off-screen, so it
 * never fights the reader's own scrolling.
 */
export default function StudyFollowAlong({ sourceId }: { sourceId: string }) {
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const last = useRef<string | null>(null);

  const active = speech.sourceId === sourceId && speech.status !== "idle";
  const targetId = active ? speech.queue[speech.index]?.targetId : undefined;

  useEffect(() => {
    if (!targetId) return;
    if (last.current && last.current !== targetId) {
      document.getElementById(last.current)?.removeAttribute("data-reading");
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.setAttribute("data-reading", "true");
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const offScreen = r.top < vh * 0.25 || r.bottom > vh * 0.8;
      if (offScreen) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    last.current = targetId;
  }, [targetId]);

  // Clear the highlight when this study is no longer the active source.
  useEffect(() => {
    if (active) return;
    if (last.current) {
      document.getElementById(last.current)?.removeAttribute("data-reading");
      last.current = null;
    }
  }, [active, sourceId]);

  return null;
}