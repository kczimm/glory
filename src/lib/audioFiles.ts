"use client";

/**
 * The file-based audio sink: plays pre-generated sample files (e.g. hosted
 * on Cloudflare R2) for each spoken chunk. The speech engine decides when to
 * use it and falls back to native TTS when a file is missing.
 *
 * URL contract (the generation pipeline must produce exactly these paths):
 *
 *   {NEXT_PUBLIC_AUDIO_ROOT}/v1/{NEXT_PUBLIC_AUDIO_VOICE}/{sha1(text)}.m4a
 *
 * Example with root https://pub-abc123.r2.dev/glory and voice "grace":
 *   https://pub-abc123.r2.dev/glory/v1/grace/8f14e45fceea167a5a36dedd4bea2543.m4a
 *
 * - The hash is lowercase hex SHA-1 of the chunk text, computed with the
 *   small pure-JS implementation below. It is synchronous so the very first
 *   play() happens inside the user's tap (iOS only unlocks a media element
 *   from a user gesture), and it is identical in every context, including
 *   plain-http LAN dev where crypto.subtle does not exist. Node's crypto
 *   sha1 produces the same bytes, so the generation pipeline can compute
 *   the same URLs.
 * - Content-addressed URLs never go stale: regenerated audio is a new URL,
 *   and the browser/CDN cache stays warm across listens.
 * - When NEXT_PUBLIC_AUDIO_ROOT is unset the sink is disabled and the engine
 *   speaks everything with the native Web Speech API.
 */

import { sha1Hex } from "./audio-text";
import type { SpeechItem } from "./speech";

// ---- pure-JS SHA-1 lives in audio-text.mjs (shared with the pipeline) ------

const AUDIO_ROOT = (process.env.NEXT_PUBLIC_AUDIO_ROOT ?? "").replace(/\/+$/, "");
const AUDIO_VOICE = process.env.NEXT_PUBLIC_AUDIO_VOICE ?? "default";

export function audioEnabled(): boolean {
  return AUDIO_ROOT.length > 0;
}

/** The sample-file URL for a chunk, or null when the sink is disabled. */
export function audioUrlFor(item: SpeechItem): string | null {
  if (!audioEnabled()) return null;
  return `${AUDIO_ROOT}/v1/${AUDIO_VOICE}/${sha1Hex(item.text)}.m4a`;
}

// ---- a single shared <audio> element --------------------------------------
// One player element keeps iOS satisfied (start once from the user's tap,
// then re-src it per chunk). Forward chunks are fully fetched into a memory
// Blob so transitions are gapless (no just-in-time network fetch). Elements
// are not created when the sink is disabled.

const player =
  audioEnabled() && typeof Audio !== "undefined" ? new Audio() : null;
if (player) {
  player.preload = "auto";
  try {
    player.preservesPitch = true;
  } catch {
    /* older engines */
  }
}

let playToken = 0;
let timeoutTimer: number | undefined;
let endCb: (() => void) | null = null;
let errCb: (() => void) | null = null;
/** Duration in seconds of the current src, once known (for the watchdog). */
let loadedDuration: number | null = null;
/** url -> object URL for chunks already fully fetched into memory. */
const blobCache = new Map<string, string>();

/** Fully fetch a chunk and cache it as an in-memory Blob (gapless). */
async function cacheBlob(url: string): Promise<string | null> {
  const cached = blobCache.get(url);
  if (cached) return cached;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = await res.arrayBuffer();
    const objectUrl = URL.createObjectURL(new Blob([buf], { type: "audio/x-m4a" }));
    blobCache.set(url, objectUrl);
    return objectUrl;
  } catch {
    // CORS not configured or offline: leave un-cached and play the URL directly.
    return null;
  }
}

/** Object URL when available, otherwise the plain URL. */
function sourceFor(url: string): string {
  return blobCache.get(url) ?? url;
}

function clearTimers() {
  if (timeoutTimer !== undefined) window.clearTimeout(timeoutTimer);
  timeoutTimer = undefined;
}

function handleEnded() {
  const cb = endCb;
  clearTimers();
  endCb = null;
  errCb = null;
  loadedDuration = null;
  cb?.();
}

function handleError() {
  const cb = errCb;
  clearTimers();
  endCb = null;
  errCb = null;
  loadedDuration = null;
  cb?.();
}

export function playAudioFile(
  url: string,
  rate: number,
  onEnd: () => void,
  onError: () => void
) {
  if (!player) {
    onError();
    return;
  }
  const token = ++playToken;
  endCb = onEnd;
  errCb = onError;
  loadedDuration = null;

  player.removeEventListener("ended", handleEnded);
  player.removeEventListener("error", handleError);

  player.addEventListener("ended", handleEnded, { once: true });
  player.addEventListener("error", handleError, { once: true });
  player.addEventListener(
    "loadedmetadata",
    () => {
      if (token !== playToken) return;
      if (Number.isFinite(player.duration)) loadedDuration = player.duration;
    },
    { once: true }
  );

  // Play from the in-memory Blob when the chunk was prefetched, for gapless
  // transitions; otherwise the plain URL (fetched just in time).
  player.src = sourceFor(url);
  player.load();
  try {
    player.playbackRate = rate;
  } catch {
    /* noop */
  }
  const p: unknown = player.play();
  if (p && typeof (p as Promise<void>).then === "function") {
    (p as Promise<void>).then(
      () => {
        // Playback started; disarm the start timeout. It only exists to
        // catch files that never begin (missing/blocked/dead network).
        if (token === playToken) clearTimers();
      },
      () => {
        if (token === playToken) handleError();
      }
    );
  }
  timeoutTimer = window.setTimeout(() => {
    if (token !== playToken) return;
    handleError();
  }, 8000);
}

export function stopAudio() {
  playToken++;
  clearTimers();
  for (const objectUrl of blobCache.values()) {
    try {
      URL.revokeObjectURL(objectUrl);
    } catch {
      /* noop */
    }
  }
  blobCache.clear();
  if (!player) return;
  player.removeEventListener("ended", handleEnded);
  player.removeEventListener("error", handleError);
  player.pause();
  player.removeAttribute("src");
  player.load();
  endCb = null;
  errCb = null;
  loadedDuration = null;
}

/** Duration in seconds of the current chunk file, when known. */
export function audioDurationSeconds(): number | null {
  return loadedDuration;
}

/** Forget any known duration, so a fresh chunk cannot inherit a stale one. */
export function resetAudioDuration() {
  loadedDuration = null;
}

/** Fully fetch a coming chunk into memory so transitions stay gapless. */
export function prefetchAudio(url: string) {
  void cacheBlob(url);
}