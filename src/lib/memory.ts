"use client";

/**
 * The memory store: verses the reader is holding onto, with a light
 * spaced-repetition schedule (SM-2 lite). Browser-local only, same external
 * store pattern as journey.ts: no accounts, no streaks, no guilt. The review
 * is invitational; the app never nags.
 *
 * Grading: 2 = held (recited confidently), 1 = almost, 0 = again.
 */

export interface MemoryCard {
  ref: string;
  addedAt: number;
  /** Next due timestamp (ms epoch). New cards are due immediately. */
  due: number;
  /** Current interval in days. */
  interval: number;
  /** SM-2 ease factor, clamped to [1.3, 2.8]. */
  ease: number;
  reps: number;
}

export type Grade = 0 | 1 | 2;

const KEY = "glory:memory";
const CAP = 300;

function read(): MemoryCard[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is MemoryCard =>
        typeof e === "object" &&
        e !== null &&
        typeof (e as MemoryCard).ref === "string" &&
        typeof (e as MemoryCard).due === "number"
    );
  } catch {
    return [];
  }
}

function write(list: MemoryCard[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* private mode / quota: fail silently */
  }
}

// ---- external store -------------------------------------------------------
let cache: MemoryCard[] | null = null;
const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}

const EMPTY: MemoryCard[] = [];

export function getServerSnapshot(): MemoryCard[] {
  return EMPTY;
}

export function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function getSnapshot(): MemoryCard[] {
  if (cache === null) cache = read();
  return cache;
}

function commit(next: MemoryCard[]) {
  // At the cap, evict the least-recently-due cards rather than the
  // oldest-added, so long-held verses keep their scheduling progress.
  cache = (next.length > CAP
    ? [...next].sort((a, b) => b.due - a.due).slice(0, CAP)
    : next
  ).slice();
  write(cache);
  notify();
}

/** Begin holding a verse (idempotent); it is due for first review at once. */
export function addVerse(ref: string): void {
  const cards = getSnapshot();
  if (cards.some((c) => c.ref === ref)) return;
  commit([...cards, { ref, addedAt: Date.now(), due: Date.now(), interval: 0, ease: 2.5, reps: 0 }]);
}

/** Stop holding a verse. */
export function removeVerse(ref: string): void {
  commit(getSnapshot().filter((c) => c.ref !== ref));
}

/** Cards due now, oldest due first. */
export function dueCards(now: number = Date.now()): MemoryCard[] {
  return getSnapshot()
    .filter((c) => c.due <= now)
    .sort((a, b) => a.due - b.due);
}

/** How many verses are waiting (for a quiet, invitational badge). */
export function dueCount(now: number = Date.now()): number {
  return dueCards(now).length;
}

/**
 * Apply a grade with SM-2-lite scheduling:
 * again resets to due today; almost halves the step; held grows the
 * interval (1 -> 3 -> 7 -> interval * ease days) and nudges ease.
 */
export function gradeVerse(ref: string, grade: Grade, now: number = Date.now()): void {
  const card = getSnapshot().find((c) => c.ref === ref);
  if (!card) return;
  let { interval, ease } = card;

  if (grade === 0) {
    interval = 0;
    ease = Math.max(1.3, ease - 0.2);
  } else if (grade === 1) {
    interval = interval > 1 ? Math.round(interval / 2) : 1;
    ease = Math.max(1.3, ease - 0.05);
  } else {
    ease = Math.min(2.8, ease + 0.1);
    if (card.reps === 0) interval = 1;
    else if (card.reps === 1) interval = 3;
    else if (interval < 7) interval = 7;
    else interval = Math.round(interval * ease);
  }

  const dayMs = 86_400_000;
  const next: MemoryCard = {
    ...card,
    interval,
    ease,
    reps: grade === 0 ? 0 : card.reps + 1,
    due: grade === 0 ? now + 10 * 60 * 1000 : now + Math.max(interval, grade === 1 ? 1 : 0) * dayMs,
  };
  commit(getSnapshot().map((c) => (c.ref === ref ? next : c)));
}
