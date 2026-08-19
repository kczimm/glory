"use client";

/**
 * Glory speech engine: text-to-speech over the Web Speech API.
 *
 * The queue is spoken one chunk at a time (a verse, or a sentence-sized
 * piece of a long verse). Chunking:
 *  - never hits the per-utterance length limits some browsers impose,
 *  - lets the UI highlight and scroll to the verse being read,
 *  - makes pause/resume reliable: iOS cannot resume a paused utterance, so
 *    pause cancels and resume re-speaks the same chunk.
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

export interface SpeechItem {
  /** stable id, e.g. "John 3:16", or "John 3:16|2" for a chunk of a long verse */
  id: string;
  /** short label shown in the player, e.g. "John 3:16" */
  label: string;
  /** the words to speak */
  text: string;
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
const CHUNK_MAX = 160;

/** Voices known to read Scripture well; the first one on the device wins. */
const PREFERRED_VOICES = [
  "Microsoft Aria Online (Natural) - English (United States)",
  "Google US English",
  "Samantha",
  "Ava",
  "Allison",
  "Karen",
  "Daniel",
  "Microsoft Jenny Online (Natural) - English (United States)",
  "Google UK English Female",
  "Microsoft Zira - English (United States)",
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

function pickVoice(voices: VoiceInfo[]): string | null {
  if (!voices.length) return null;
  const hit = voices.find((v) => PREFERRED_VOICES.includes(v.name));
  if (hit) return hit.uri;
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  return (en[0] ?? voices[0]).uri;
}

/** Start loading device voices (they arrive asynchronously). Idempotent. */
export function ensureVoices() {
  const s = synth();
  if (!s || voiceLoadStarted) return;
  voiceLoadStarted = true;
  const refresh = () => {
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
  };
  s.addEventListener("voiceschanged", refresh);
  refresh();
}

// ---- playback -------------------------------------------------------------

function voiceFor(uri: string | null): SpeechSynthesisVoice | null {
  const s = synth();
  if (!s || !uri) return null;
  return s.getVoices().find((v) => v.voiceURI === uri) ?? null;
}

function advance(sess: number) {
  if (sess !== session) return;
  const next = state.index + 1;
  if (next < state.queue.length) {
    speakAt(next, sess);
  } else {
    stopInternal();
  }
}

function speakAt(i: number, sess: number) {
  const s = synth();
  const item = state.queue[i];
  if (!s || !item) return;
  const u = new SpeechSynthesisUtterance(item.text);
  u.rate = state.rate;
  const v = voiceFor(state.voiceURI);
  if (v) u.voice = v;
  u.onend = () => {
    if (sess !== session) return;
    advance(sess);
  };
  u.onerror = (e) => {
    if (sess !== session) return;
    if (e.error === "interrupted" || e.error === "canceled") return;
    advance(sess);
  };
  s.speak(u);
  commit({ ...state, status: "playing", index: i });
  // Watchdog: if the engine never fires onend (a browser cutoff, or an iOS
  // stall after a lock/cancel), move on so the queue never silently dies.
  const est = Math.max(14000, item.text.length * 100);
  window.setTimeout(() => {
    if (sess !== session) return;
    if (state.status !== "playing" || state.index !== i) return;
    advance(sess);
  }, est);
}

/** Chrome can drop an utterance spoken immediately after cancel(); defer it. */
function speakAfterCancel(i: number, sess: number) {
  window.setTimeout(() => {
    if (sess !== session) return;
    speakAt(i, sess);
  }, 60);
}

function restartCurrent() {
  if (state.queue.length === 0 || state.status !== "playing") return;
  session++;
  synth()?.cancel();
  speakAfterCancel(state.index, session);
}

function stopInternal() {
  session++;
  synth()?.cancel();
  commit({ ...state, status: "idle", sourceId: null, queue: [], index: 0 });
}

// ---- actions --------------------------------------------------------------

export function playPassage(sourceId: string, items: SpeechItem[]) {
  const s = synth();
  if (!s || !items.length) return;
  const wasActive = state.status !== "idle";
  session++;
  if (wasActive) s.cancel();
  commit({ ...state, status: "playing", sourceId, queue: items, index: 0 });
  if (wasActive) speakAfterCancel(0, session);
  else speakAt(0, session);
}

export function pause() {
  if (state.status !== "playing") return;
  session++;
  synth()?.cancel();
  commit({ ...state, status: "paused" });
}

export function resume() {
  if (state.status !== "paused" || !state.queue.length) return;
  speakAt(state.index, session);
}

export function stop() {
  stopInternal();
}

export function seek(i: number) {
  if (state.status === "idle" || !state.queue.length) return;
  const clamped = Math.max(0, Math.min(state.queue.length - 1, i));
  const wasPlaying = state.status === "playing";
  session++;
  if (wasPlaying) synth()?.cancel();
  if (wasPlaying) speakAfterCancel(clamped, session);
  else speakAt(clamped, session);
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

/** Split text into sentence-sized chunks for utterance-length safety. */
export function chunkText(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  if (clean.length <= CHUNK_MAX) return [clean];
  const sentences = clean.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [clean];
  const parts: string[] = [];
  let current = "";
  for (const raw of sentences) {
    const piece = raw.trim();
    if (!piece) continue;
    const candidate = current ? `${current} ${piece}` : piece;
    if (candidate.length > CHUNK_MAX && current) {
      parts.push(current);
      current = piece;
    } else {
      current = candidate;
    }
  }
  if (current) parts.push(current);
  return parts.flatMap((p) => (p.length > CHUNK_MAX ? hardSplit(p) : [p]));
}

function hardSplit(text: string): string[] {
  const out: string[] = [];
  let current = "";
  for (const word of text.split(" ")) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > CHUNK_MAX && current) {
      out.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) out.push(current);
  return out;
}

/** Format a verse ref for the ear: "John chapter 3, verse 16". */
export function speechRef(ref: string): string {
  const m = ref.match(/^(.+?)\s(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return ref;
  const book = m[1];
  const chapter = Number(m[2]);
  const start = Number(m[3]);
  const end = Number(m[4] ?? m[3]);
  return start === end
    ? `${book} chapter ${chapter}, verse ${start}`
    : `${book} chapter ${chapter}, verses ${start} through ${end}`;
}

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