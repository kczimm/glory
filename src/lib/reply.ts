/**
 * Tiny speech-recognition wrapper for the hands-free "keep going" prompt
 * that closes each study listen on supporting browsers.
 *
 * Progressive enhancement: browsers without the Web Speech recognition API
 * (iOS Safari) never include the menu chunk or register the reply listener,
 * so playback ends gracefully exactly as before. Recognition also requires a
 * secure context (https or localhost), so LAN dev over plain http won't arm
 * it either.
 *
 * The reply is a spoken choice from the outro menu:
 *   - "continue" / "keep going" / "1" / "one"      -> option 1
 *   - "2" / "two"                                  -> option 2
 *   - "3" / "three"                                -> option 3
 *   - "stop" / "end" / "no"                        -> stop deliberately
 *   - nothing said within the budget               -> silence (stop)
 */

export type ReplyResult =
  | { kind: "choose"; index: number }
  | { kind: "stop" }
  | { kind: "silence" };

interface RecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

interface RecognitionCtor {
  new (): RecognitionLike;
}

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as Record<string, unknown>;
  const ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  return (ctor as RecognitionCtor | undefined) ?? null;
}

/** True when the device could understand a spoken reply. */
export function replySupported(): boolean {
  return recognitionCtor() !== null;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP_PHRASES = new Set(
  ["stop", "end", "done", "no", "quit", "cancel", "stop here", "thats all"].map(normalize)
);
const GO_PHRASES = new Set(
  ["continue", "keep going", "keep listening", "next", "yes", "yeah", "sure", "okay"].map(normalize)
);

/**
 * Turn a raw transcript into a menu choice: the option index (0-based),
 * "stop", or null when nothing was understood.
 */
export function parseReply(raw: string): number | "stop" | null {
  const text = normalize(raw);
  if (!text) return null;
  // Bare digits are unambiguous and common ("one", "2", "number one").
  if (text === "1" || text === "one" || text === "first" || text === "number one" || text === "option one") return 0;
  if (text === "2" || text === "two" || text === "second" || text === "number two" || text === "option two") return 1;
  if (text === "3" || text === "three" || text === "third" || text === "number three" || text === "option three") return 2;
  if (GO_PHRASES.has(text)) return 0;
  if (STOP_PHRASES.has(text)) return "stop";
  // Loose word scan for go/stop only: bare "one"/"two" scanning is skipped
  // so "no one" or "one more" can't be misread as a choice.
  const parts = text.split(" ");
  const has = (set: Set<string>) => parts.some((p) => set.has(p));
  if (has(GO_PHRASES) || text.startsWith("keep")) return 0;
  if (has(STOP_PHRASES)) return "stop";
  return null;
}

/**
 * Listen for a spoken choice after the outro menu. Chrome/Android end each
 * recognition session after ~6s of silence, so the session is re-armed while
 * inside the time budget. Returns a cancel function; cancel reports silence.
 */
export function listenForReply(opts: {
  count: number;
  timeoutMs?: number;
  onResult: (r: ReplyResult) => void;
}): () => void {
  const Ctor = recognitionCtor();
  if (!Ctor) {
    opts.onResult({ kind: "silence" });
    return () => {};
  }
  const timeoutMs = opts.timeoutMs ?? 9000;
  const startedAt = Date.now();
  let done = false;
  let rec: RecognitionLike | null = null;

  const finish = (r: ReplyResult) => {
    if (done) return;
    done = true;
    try {
      rec?.stop();
    } catch {
      /* already stopped */
    }
    opts.onResult(r);
  };

  const arm = () => {
    if (done) return;
    if (Date.now() - startedAt > timeoutMs) {
      finish({ kind: "silence" });
      return;
    }
    rec = new Ctor();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (ev) => {
      const raw = ev.results[0]?.[0]?.transcript ?? "";
      const r = parseReply(raw);
      if (r === "stop") finish({ kind: "stop" });
      else if (typeof r === "number" && r < opts.count) finish({ kind: "choose", index: r });
      // Unrecognized speech: let onend decide whether to keep listening.
    };
    rec.onerror = (ev) => {
      // Mic denied or the service is gone: give up rather than loop. Other
      // errors (no-speech, aborted, network) fall through to onend, which
      // simply re-arms while time remains.
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
        finish({ kind: "silence" });
      }
    };
    rec.onend = () => {
      if (Date.now() - startedAt < timeoutMs) arm();
      else finish({ kind: "silence" });
    };
    try {
      rec.start();
    } catch {
      finish({ kind: "silence" });
    }
  };

  arm();
  return () => finish({ kind: "silence" });
}