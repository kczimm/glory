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
import { useTranslation } from "@/lib/useTranslation";
import { hasAudio } from "@/lib/translation-shared";

/**
 * A small Listen control. Starts reading `items` (tagged with `sourceId`),
 * then flips to pause/resume plus stop while this source is the active one.
 * Hidden entirely for translations without audio (e.g. KJV).
 *
 * `prepare` is for callers whose queue is not known until the moment of the
 * click: the chapter reader fetches its text on demand, so it hands over a
 * resolver instead of a prebuilt queue. Either one works; `items` is the
 * cheap path for callers that already hold a server-built queue.
 */
export default function ListenButton({
  sourceId,
  items,
  prepare,
  label = "Listen",
  onStart,
}: {
  sourceId: string;
  items?: SpeechItem[];
  prepare?: () => Promise<SpeechItem[]>;
  label?: string;
  onStart?: () => void;
}) {
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { version } = useTranslation();
  const audioAvailable = hasAudio(version);

  useEffect(() => {
    ensureVoices();
  }, []);

  if (!speech.supported || !audioAvailable) return null;

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

  const start = async () => {
    const queue = prepare ? await prepare() : (items ?? []);
    if (queue.length === 0) return;
    playPassage(sourceId, queue);
    onStart?.();
  };

  return (
    <button
      type="button"
      onClick={() => void start()}
      className="flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
    >
      <PlayIcon size={11} />
      {label}
    </button>
  );
}