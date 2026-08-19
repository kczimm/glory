"use client";

/**
 * The journey record: a persistent, local-only trail of the questions you've
 * explored — "you started here, came through here, now here."
 *
 * A tiny external store (React `useSyncExternalStore`) over localStorage so the
 * components can render it without setState-in-effect. Runs only in the
 * browser; SSR snapshot is empty, so there's no hydration mismatch.
 */
export interface JourneyEntry {
  slug: string;
  at: number;
}

const KEY = "glory:journey";
const CAP = 60;

function read(): JourneyEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as JourneyEntry[]) : [];
  } catch {
    return [];
  }
}

function write(list: JourneyEntry[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* private mode / quota — fail silently */
  }
}

// ---- external store -------------------------------------------------------
let cache: JourneyEntry[] | null = null;
const listeners = new Set<() => void>();
function notify() {
  listeners.forEach((l) => l());
}

const EMPTY: JourneyEntry[] = [];

/** SSR snapshot — always empty (the journey is browser-local only). */
export function getServerSnapshot(): JourneyEntry[] {
  return EMPTY;
}

/** React `subscribe` — returns an unsubscribe. */
export function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

/** React `getSnapshot` — referentially stable until the journey changes. */
export function getSnapshot(): JourneyEntry[] {
  if (cache === null) cache = read();
  return cache;
}

function commit(next: JourneyEntry[]) {
  cache = next.slice(-CAP);
  write(cache);
  notify();
}

/** Record a visit, moving the slug to the most-recent position. */
export function recordVisit(slug: string): JourneyEntry[] {
  const next = [...getSnapshot().filter((e) => e.slug !== slug), { slug, at: Date.now() }];
  commit(next);
  return cache!;
}

/** Wipe the journey and start fresh. */
export function clearJourney() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* noop */
  }
  cache = [];
  notify();
}
