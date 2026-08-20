"use client";

/**
 * Glory speech engine: text-to-speech with two sinks.
 *
 *  - Native: the Web Speech API (device voices, works offline).
 *  - Files: pre-generated sample files (see audioFiles.ts) when a catalog
 *    is configured via NEXT_PUBLIC_AUDIO_ROOT, with per-chunk fallback to
 *    native when a file is missing.
 *
 * The queue is spoken one chunk at a time (a verse, or a sentence-sized
 * piece of a long verse). Chunking:
 *  - never hits the per-utterance length limits some browsers impose,
 *  - lets the UI highlight and scroll to the verse being read,
 *  - makes pause/resume reliable: iOS cannot resume a paused utterance, so
 *    pause cancels and resume re-speaks the same chunk.
 *
 * Continuations: a source may register a forward continuation; when its
 * queue ends, the next queue plays after a short beat of silence (visit
 * chaining: chapter 2 -> chapter 3 -> study). Stopping, pausing, or seeking
 * during the beat cancels the handoff.
 *
 * Exposed as a tiny external store for React `useSyncExternalStore`,
 * mirroring the journey store: components call the actions below, then
 * subscribe to snapshot state. The SSR snapshot is the inert initial state,
 * so there is no hydration mismatch.
 *
 * Deliberately does not import `@/data`: it is mounted in the root layout,
 * so importing the data layer here would drag the whole vendored Bible into
 * every page load.
 */

import {
  audioDurationSeconds,
  audioEnabled,
  audioUrlFor,
  playAudioFile,
  prefetchAudio,
  resetAudioDuration,
  stopAudio,
} from "./audioFiles";

export interface SpeechItem {
  /** stable id, e.g. "John 3:16", or "John 3:16|2" for a chunk of a long verse */
  id: string;
  /** short label shown in the player, e.g. "John 3:16" */
  label: string;
  /** the words to speak */
  text: string;
  /** page element id to scroll/highlight while this chunk is read (study listen) */
  targetId?: string;
}

export type SpeechStatus = "idle" | "playing" | "paused";

export interface VoiceInfo {
  uri: string;
  name: string;
  lang: string;
}

export interface SpeechState {
  supported: boolean;
  status: SpeechStatus;
  /** caller-provided key for the current queue, e.g. "chapter:John 3" */
  sourceId: string | null;
  queue: SpeechItem[];
  index: number;
  rate: number;
  voiceURI: string | null;
  voices: VoiceInfo[];
}

export interface RateOption {
  value: number;
  label: string;
}

export const RATES: RateOption[] = [
  { value: 0.85, label: "Slow" },
  { value: 1, label: "Normal" },
  { value: 1.15, label: "Fast" },
];

const PREFS_KEY = "glory:speech";

/** Voices known to read Scripture well; the first one on the device wins. */
const PREFERRED_VOICES = [
  // iOS 17.4+ "Premium" downloads (most natural on iPhone/iPad)
  "Zoe Premium",
  "Allison Premium",
  "Ava Premium",
  "Aaron Premium",
  "Fred Premium",
  "Nicky Premium",
  "Susan Premium",
  "Samantha Premium",
  // iOS 17+ natural voices (non-premium fallbacks)
  "Aaron",
  "Allison",
  "Ava",
  "Fred",
  "Nicky",
  "Samantha",
  "Susan",
  "Zoe",
  // Android / Chrome
  "Google US English",
  "Google UK English Female",
  // Windows / Edge
  "Microsoft Aria Online (Natural) - English (United States)",
  "Microsoft Jenny Online (Natural) - English (United States)",
  "Microsoft Zira - English (United States)",
  // macOS
  "Alex",
  "Karen",
  "Daniel",
];

const INITIAL: SpeechState = {
  supported: typeof window !== "undefined" && "speechSynthesis" in window,
  status: "idle",
  sourceId: null,
  queue: [],
  index: 0,
  rate: 1,
  voiceURI: null,
  voices: [],
};

let state: SpeechState = INITIAL;
let session = 0;
let voiceLoadStarted = false;
/** Consecutive file-sink misses; a queue gives up on files after a couple. */
let audioMisses = 0;
/** Cancels the watchdog of the chunk currently being played, if armed. */
let currentWatch: (() => void) | null = null;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function getSnapshot(): SpeechState {
  return state;
}

export function getServerSnapshot(): SpeechState {
  return INITIAL;
}

// ---- helpers --------------------------------------------------------------

function synth(): SpeechSynthesis | null {
  return typeof window !== "undefined" && "speechSynthesis" in window
    ? window.speechSynthesis
    : null;
}

function readPrefs(): { rate?: number; voiceURI?: string } {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? (JSON.parse(raw) as { rate?: number; voiceURI?: string }) : {};
  } catch {
    return {};
  }
}

function writePrefs(patch: { rate?: number; voiceURI?: string }) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify({ ...readPrefs(), ...patch }));
  } catch {
    /* private mode / quota: fail silently */
  }
}

function commit(next: SpeechState) {
  state = next;
  notify();
}

function collectVoices(): VoiceInfo[] {
  const s = synth();
  if (!s) return [];
  return s.getVoices().map((v) => ({ uri: v.voiceURI, name: v.name, lang: v.lang }));
}

/** Compare voice names loosely (case, spaces, and parentheses ignored). */
function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function pickVoice(voices: VoiceInfo[]): string | null {
  if (!voices.length) return null;
  const exact = voices.find((v) => PREFERRED_VOICES.includes(v.name));
  if (exact) return exact.uri;
  // lenient match, e.g. "Zoe (Premium)" vs our "Zoe Premium"
  const lenient = voices.find((v) =>
    PREFERRED_VOICES.some((p) => norm(p) === norm(v.name))
  );
  if (lenient) return lenient.uri;
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  return (en[0] ?? voices[0]).uri;
}

/**
 * Re-read the device voice list and merge any changes into state. Safe to
 * call any time (e.g. after the user downloads a new voice in iOS Settings)
 * and while playback is active.
 */
export function refreshVoices() {
  const s = synth();
  if (!s) return;
  const voices = collectVoices();
  const prefs = readPrefs();
  const next: Partial<SpeechState> = {};
  if (voices.length) next.voices = voices;
  if (typeof prefs.rate === "number") next.rate = prefs.rate;
  if (prefs.voiceURI && voices.some((v) => v.uri === prefs.voiceURI)) {
    next.voiceURI = prefs.voiceURI;
  } else if (voices.length && !state.voiceURI) {
    next.voiceURI = pickVoice(voices);
  }
  state = { ...state, ...next };
  notify();
}

/** Start loading device voices (they arrive asynchronously). Idempotent. */
export function ensureVoices() {
  const s = synth();
  if (!s || voiceLoadStarted) return;
  voiceLoadStarted = true;
  s.addEventListener("voiceschanged", refreshVoices);
  refreshVoices();
}

// ---- playback -------------------------------------------------------------

function voiceFor(uri: string | null): SpeechSynthesisVoice | null {
  const s = synth();
  if (!s || !uri) return null;
  return s.getVoices().find((v) => v.voiceURI === uri) ?? null;
}

/**
 * Registered forward continuations, keyed by the source whose queue end
 * triggers them. Pages register these (e.g. VisitChain) and unregister on
 * unmount, so a chain lives exactly as long as the page that owns it.
 */
const continuations = new Map<string, () => void>();

/**
 * When the queue for `sourceId` reaches its end, call `forward` instead of
 * stopping. Returns an unsubscribe; components must call it on unmount so
 * chaining never outlives the page that registered it.
 */
export function registerContinuation(sourceId: string, forward: () => void): () => void {
  continuations.set(sourceId, forward);
  return () => {
    if (continuations.get(sourceId) === forward) continuations.delete(sourceId);
  };
}

function advance(sess: number) {
  if (sess !== session) return;
  const next = state.index + 1;
  if (next < state.queue.length) {
    playChunkAt(next, sess);
    return;
  }
  // A registered continuation keeps the visit going (e.g. chapter 2 -> 3 ->
  // study). Leave a short beat of silence so the boundary reads as a
  // transition, not a glitch; any control action during the beat bumps
  // `session` and cancels the handoff. Look the continuation up at fire
  // time so an unregister/re-register between now and then wins.
  const sourceId = state.sourceId;
  const forward = sourceId ? continuations.get(sourceId) : undefined;
  if (forward) {
    window.setTimeout(() => {
      if (sess !== session) return;
      forward();
    }, 800);
    return;
  }
  stopInternal();
}

/**
 * Pick the sink for a chunk: pre-generated files when available, otherwise
 * the native Web Speech API. `audioMisses` stops a queue from retrying the
 * network after the first couple of misses (e.g. the catalog is not
 * generated yet), while still falling back per chunk when files appear
 * progressively.
 */
function playChunkAt(i: number, sess: number) {
  const item = state.queue[i];
  if (!item) return;
  currentWatch?.();
  currentWatch = null;
  resetAudioDuration();
  commit({ ...state, status: "playing", index: i });
  if (audioEnabled() && audioMisses < 2) {
    playFileAt(i, sess);
  } else {
    speakNativeAt(i, sess);
  }
}

function speakNativeAt(i: number, sess: number) {
  const s = synth();
  const item = state.queue[i];
  if (!s || !item) return;
  const u = new SpeechSynthesisUtterance(item.text);
  u.rate = state.rate;
  const v = voiceFor(state.voiceURI);
  if (v) u.voice = v;
  u.onend = () => {
    if (sess !== session || state.index !== i) return;
    currentWatch = null;
    advance(sess);
  };
  u.onerror = (e) => {
    if (sess !== session || state.index !== i) return;
    if (e.error === "interrupted" || e.error === "canceled") return;
    currentWatch = null;
    advance(sess);
  };
  s.speak(u);
  currentWatch = watchChunk(i, sess);
}

function playFileAt(i: number, sess: number) {
  const item = state.queue[i];
  if (!item) return;
  const url = audioUrlFor(item);
  if (!url) {
    speakNativeAt(i, sess);
    return;
  }
  currentWatch = watchChunk(i, sess);
  playAudioFile(
    url,
    state.rate,
    () => {
      if (sess !== session || state.index !== i) return;
      audioMisses = 0;
      currentWatch = null;
      advance(sess);
    },
    () => {
      if (sess !== session || state.index !== i) return;
      audioMisses++;
      // Drop this chunk's watchdog before falling back: it is anchored at
      // the file attempt's start and would otherwise advance mid-phrase.
      currentWatch = null;
      speakNativeAt(i, sess);
    }
  );
  prefetchNext();
}

/** Fetch the next two chunks into memory so transitions stay gapless. */
function prefetchNext() {
  const queue = state.queue;
  for (let k = 1; k <= 2; k++) {
    const next = queue[state.index + k];
    if (!next) break;
    const url = audioUrlFor(next);
    if (url) prefetchAudio(url);
  }
}

/**
 * Safety net: if the engine never signals completion (browser cutoff, iOS
 * stall, stalled network stream), move on so the queue never silently dies.
 * Uses the real file duration once known, the text estimate otherwise.
 * Returns a function that cancels the watchdog (used when the chunk is
 * restarted through a different sink on the same index).
 */
function watchChunk(i: number, sess: number): () => void {
  let cancelled = false;
  const item = state.queue[i];
  const fallbackMs = Math.max(14000, (item?.text.length ?? 0) * 100);
  const startedAt = Date.now();
  let deadline = startedAt + fallbackMs;
  let timer: number;

  const tick = () => {
    if (cancelled || sess !== session) return;
    if (state.status !== "playing" || state.index !== i) return;
    const dur = audioDurationSeconds();
    if (dur !== null) {
      // File audio: metadata gives the true run length; wait it out.
      deadline = startedAt + dur * 1000 + 2000;
    }
    const remaining = deadline - Date.now();
    if (remaining > 0) {
      timer = window.setTimeout(tick, Math.min(2000, remaining + 60));
      return;
    }
    advance(sess);
  };
  timer = window.setTimeout(tick, 2000);
  return () => {
    cancelled = true;
    window.clearTimeout(timer);
  };
}

/** Cancel whatever the engines are doing: native utterances and audio files. */
function stopEngines() {
  synth()?.cancel();
  stopAudio();
}

/** Chrome can drop an utterance spoken immediately after cancel(); defer it. */
function speakAfterCancel(i: number, sess: number) {
  window.setTimeout(() => {
    if (sess !== session) return;
    playChunkAt(i, sess);
  }, 60);
}

function restartCurrent() {
  if (state.queue.length === 0 || state.status !== "playing") return;
  session++;
  stopEngines();
  currentWatch?.();
  currentWatch = null;
  speakAfterCancel(state.index, session);
}

function stopInternal() {
  session++;
  stopEngines();
  currentWatch?.();
  currentWatch = null;
  commit({ ...state, status: "idle", sourceId: null, queue: [], index: 0 });
}

// ---- actions --------------------------------------------------------------

export function playPassage(sourceId: string, items: SpeechItem[]) {
  const s = synth();
  if (!s || !items.length) return;
  // Re-read the voice list first: a voice downloaded while the app was open
  // may only just have become visible to the engine.
  refreshVoices();
  const wasActive = state.status !== "idle";
  audioMisses = 0;
  session++;
  if (wasActive) stopEngines();
  commit({ ...state, status: "playing", sourceId, queue: items, index: 0 });
  if (wasActive) speakAfterCancel(0, session);
  else playChunkAt(0, session);
}

export function pause() {
  if (state.status !== "playing") return;
  session++;
  stopEngines();
  currentWatch?.();
  currentWatch = null;
  commit({ ...state, status: "paused" });
}

export function resume() {
  if (state.status !== "paused" || !state.queue.length) return;
  playChunkAt(state.index, session);
}

export function stop() {
  stopInternal();
}

export function seek(i: number) {
  if (state.status === "idle" || !state.queue.length) return;
  const clamped = Math.max(0, Math.min(state.queue.length - 1, i));
  const wasPlaying = state.status === "playing";
  session++;
  if (wasPlaying) stopEngines();
  if (wasPlaying) speakAfterCancel(clamped, session);
  else playChunkAt(clamped, session);
}

export function nextItem() {
  seek(state.index + 1);
}

export function prevItem() {
  seek(state.index - 1);
}

export function cycleRate() {
  const i = RATES.findIndex((r) => r.value === state.rate);
  const next = RATES[(i + 1) % RATES.length];
  writePrefs({ rate: next.value });
  commit({ ...state, rate: next.value });
  restartCurrent();
}

export function setVoice(uri: string) {
  writePrefs({ voiceURI: uri });
  commit({ ...state, voiceURI: uri });
  restartCurrent();
}

// ---- text helpers ---------------------------------------------------------

/** Is `itemId` the given verse ref (or a chunk of one of its sentences)? */
export function matchesVerse(itemId: string | undefined, ref: string): boolean {
  return itemId === ref || (itemId !== undefined && itemId.startsWith(ref + "|"));
}

// Chunking, ref formatting, queue builders, and hashing live in the shared
// audio-text module so the generation pipeline uses byte-identical logic.
export {
  canonicalBook,
  chapterItems,
  chunkText,
  filterFocus,
  speechRef,
  studyItems,
} from "./audio-text";

// ---- background recovery --------------------------------------------------
// iOS stops TTS when the tab is hidden; when the user returns, restart the
// current verse so playback is never silently stuck.

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && state.status === "playing") {
      restartCurrent();
    }
  });
}