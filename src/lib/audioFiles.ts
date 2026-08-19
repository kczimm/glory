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

import type { SpeechItem } from "./speech";

const AUDIO_ROOT = (process.env.NEXT_PUBLIC_AUDIO_ROOT ?? "").replace(/\/+$/, "");
const AUDIO_VOICE = process.env.NEXT_PUBLIC_AUDIO_VOICE ?? "default";

const hashCache = new Map<string, string>();

export function audioEnabled(): boolean {
  return AUDIO_ROOT.length > 0;
}

// ---- pure-JS SHA-1 (RFC 3174) ---------------------------------------------

function rotl32(x: number, n: number): number {
  return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function hex32(x: number): string {
  return (x >>> 0).toString(16).padStart(8, "0");
}

function sha1Hex(text: string): string {
  const cached = hashCache.get(text);
  if (cached) return cached;

  const bytes = new TextEncoder().encode(text);
  const blockCount = Math.ceil((bytes.length + 9) / 64);
  const padded = new Uint8Array(blockCount * 64);
  padded.set(bytes);
  padded[bytes.length] = 0x80; // append 0x80, then zeros, then the bit length
  const dv = new DataView(padded.buffer);
  const bits = bytes.length * 8;
  dv.setUint32(padded.length - 8, Math.floor(bits / 0x100000000) >>> 0, false);
  dv.setUint32(padded.length - 4, bits >>> 0, false);

  let h0 = 0x67452301;
  let h1 = 0xefcdab89;
  let h2 = 0x98badcfe;
  let h3 = 0x10325476;
  let h4 = 0xc3d2e1f0;
  const w = new Int32Array(80);

  for (let i = 0; i < padded.length; i += 64) {
    for (let t = 0; t < 16; t++) w[t] = dv.getInt32(i + t * 4, false);
    for (let t = 16; t < 80; t++) {
      w[t] = rotl32(w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16], 1);
    }
    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    for (let t = 0; t < 80; t++) {
      const f =
        t < 20
          ? (b & c) | (~b & d)
          : t < 40
            ? b ^ c ^ d
            : t < 60
              ? (b & c) | (b & d) | (c & d)
              : b ^ c ^ d;
      const k = t < 20 ? 0x5a827999 : t < 40 ? 0x6ed9eba1 : t < 60 ? 0x8f1bbcdc : 0xca62c1d6;
      const tmp = (rotl32(a, 5) + f + e + k + w[t]) | 0;
      e = d;
      d = c;
      c = rotl32(b, 30);
      b = a;
      a = tmp;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
  }

  const hex = hex32(h0) + hex32(h1) + hex32(h2) + hex32(h3) + hex32(h4);
  hashCache.set(text, hex);
  return hex;
}

/** The sample-file URL for a chunk, or null when the sink is disabled. */
export function audioUrlFor(item: SpeechItem): string | null {
  if (!audioEnabled()) return null;
  return `${AUDIO_ROOT}/v1/${AUDIO_VOICE}/${sha1Hex(item.text)}.m4a`;
}

// ---- a single shared <audio> element --------------------------------------
// One player element keeps iOS satisfied (start once from the user's tap,
// then re-src it per chunk), and one prefetcher warms the cache so chunk
// transitions stay gapless. Neither is created when the sink is disabled.

const player =
  audioEnabled() && typeof Audio !== "undefined" ? new Audio() : null;
const prefetcher =
  audioEnabled() && typeof Audio !== "undefined" ? new Audio() : null;
if (player) {
  player.preload = "auto";
  try {
    player.preservesPitch = true;
  } catch {
    /* older engines */
  }
}
if (prefetcher) prefetcher.preload = "auto";

let playToken = 0;
let timeoutTimer: number | undefined;
let endCb: (() => void) | null = null;
let errCb: (() => void) | null = null;
/** Duration in seconds of the current src, once known (for the watchdog). */
let loadedDuration: number | null = null;

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

  player.src = url;
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

/** Warm the cache for a coming chunk so transitions stay gapless. */
export function prefetchAudio(url: string) {
  if (!prefetcher) return;
  try {
    prefetcher.src = url;
    prefetcher.load();
  } catch {
    /* noop */
  }
}