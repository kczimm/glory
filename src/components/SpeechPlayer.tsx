"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  RATES,
  cycleRate,
  ensureVoices,
  getServerSnapshot,
  getSnapshot,
  nextItem,
  pause,
  prevItem,
  resume,
  setVoice,
  stop,
  subscribe,
} from "@/lib/speech";
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, StopIcon } from "@/components/speech-icons";

/**
 * The global player bar, mounted in the root layout. It stays mounted across
 * client-side navigation, so reading keeps going while you move between pages.
 * Renders nothing when there is no active queue.
 */
export default function SpeechPlayer() {
  const speech = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    ensureVoices();
  }, []);

  if (!speech.supported || speech.status === "idle" || speech.queue.length === 0) {
    return null;
  }

  const item = speech.queue[speech.index];
  const playing = speech.status === "playing";
  const pct = ((speech.index + 1) / speech.queue.length) * 100;
  const rateLabel = RATES.find((r) => r.value === speech.rate)?.label ?? "Normal";

  const ctl =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-cream hover:text-gold-deep";

  return (
    <div className="sticky bottom-0 z-40 border-t border-line bg-parchment/95 backdrop-blur-sm">
      <div className="h-[3px] w-full bg-line">
        <div
          className="h-full bg-gold transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mx-auto flex max-w-3xl items-center gap-1.5 px-4 py-2.5 sm:gap-2">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[14px] font-medium leading-tight text-ink">
            {item.label}
          </p>
          <p className="text-[11px] leading-tight text-ink-faint">
            {speech.index + 1} of {speech.queue.length}
            {!playing ? ", paused" : ""}
          </p>
        </div>
        <button type="button" onClick={prevItem} aria-label="Previous verse" className={ctl}>
          <PrevIcon />
        </button>
        <button
          type="button"
          onClick={() => (playing ? pause() : resume())}
          aria-label={playing ? "Pause" : "Resume"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-parchment shadow-sm transition-colors hover:bg-gold-deep"
        >
          {playing ? <PauseIcon size={15} /> : <PlayIcon size={15} />}
        </button>
        <button type="button" onClick={nextItem} aria-label="Next verse" className={ctl}>
          <NextIcon />
        </button>
        <button type="button" onClick={stop} aria-label="Stop reading" className={ctl}>
          <StopIcon size={13} />
        </button>
        <button
          type="button"
          onClick={cycleRate}
          aria-label="Reading speed"
          className="shrink-0 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
        >
          {rateLabel}
        </button>
        {speech.voices.length > 1 && (
          <select
            value={speech.voiceURI ?? ""}
            onChange={(e) => setVoice(e.target.value)}
            aria-label="Voice"
            className="hidden max-w-[150px] shrink-0 rounded-full border border-line bg-white px-2 py-1 text-[11px] text-ink-soft sm:block"
          >
            {speech.voices.map((v) => (
              <option key={v.uri} value={v.uri}>
                {v.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}