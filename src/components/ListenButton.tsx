"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  ensureVoices,
  getServerSnapshot,
  getSnapshot,
  pause,
  playPassage,
  resume,
  stop,
  subscribe,
} from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import { PauseIcon, PlayIcon, StopIcon } from "@/components/speech-icons";

/**
 * A small Listen control. Starts reading `items` (tagged with `sourceId`),
 * then flips to pause/resume plus stop while this source is the active one.
 */
export default function ListenButton({
  sourceId,
  items,
  label = "Listen",
  onStart,
}: {
  sourceId: string;
  items: SpeechItem[];
  label?: string;
  onStart?: () => void;
}) {
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    ensureVoices();
  }, []);

  if (!speech.supported) return null;

  const active = speech.sourceId === sourceId && speech.status !== "idle";
  const playing = speech.status === "playing";

  if (active) {
    return (
      <span className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={() => (playing ? pause() : resume())}
          aria-label={playing ? "Pause reading" : "Resume reading"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-parchment transition-colors hover:bg-gold-deep"
        >
          {playing ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
        </button>
        <button
          type="button"
          onClick={stop}
          aria-label="Stop reading"
          className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream hover:text-gold-deep"
        >
          <StopIcon size={13} />
        </button>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        playPassage(sourceId, items);
        onStart?.();
      }}
      className="flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
    >
      <PlayIcon size={11} />
      {label}
    </button>
  );
}