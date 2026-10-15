"use client";

/**
 * Translation preference: the reader's WEB/KJV choice.
 *
 * The choice lives entirely in the browser (URL param, then localStorage,
 * then cookie). It deliberately never reaches the server render: a render that
 * varies by cookie or by a query parameter cannot be cached at the CDN, and
 * that is what made every page in this app cost a Function invocation and a
 * full origin transfer on every single visit.
 *
 * Both readings ship in the HTML (see components/VerseText), so switching is a
 * matter of showing one and hiding the other: `data-translation` on <html>
 * drives it in CSS, and this module's subscribers let the handful of React
 * components that need the value (audio availability, link hrefs) re-render.
 */

// Re-export shared types and utilities
export type { TranslationCode, TranslationInfo } from "./translation-shared";
export { TRANSLATIONS, getTranslationInfo, hasAudio, isValidTranslationCode } from "./translation-shared";

import type { TranslationCode } from "./translation-shared";
import { VALID_CODES } from "./translation-shared";

const STORAGE_KEY = "glory:translation";
const COOKIE_KEY = "glory:translation";

/** The active code, resolved once from the browser and then kept in memory. */
let current: TranslationCode | null = null;
const listeners = new Set<() => void>();

/** Get the translation code from the URL param, if valid. */
export function getVersionFromURL(searchParams?: URLSearchParams): TranslationCode | null {
  if (!searchParams) return null;
  const v = searchParams.get("version");
  if (v && VALID_CODES.has(v)) return v as TranslationCode;
  return null;
}

/** Get the translation code from localStorage. */
export function getVersionFromStorage(): TranslationCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_CODES.has(stored)) return stored as TranslationCode;
  } catch {
    /* private mode / quota: fall through to the cookie */
  }
  return getVersionFromCookie();
}

/** The translation cookie, for when localStorage is unavailable.
 *
 * It matters that the cookie is read here as well as in the pre-paint script:
 * if the two answered differently, the page would paint one reading while the
 * toggle and the audio controls believed another. */
function getVersionFromCookie(): TranslationCode {
  if (typeof document === "undefined") return "web";
  const match = document.cookie.match(/(?:^|; )glory:translation=([^;]*)/);
  const value = match ? decodeURIComponent(match[1]) : null;
  if (value && VALID_CODES.has(value)) return value as TranslationCode;
  return "web";
}

/** Save the translation code to localStorage. */
function setVersionInStorage(code: TranslationCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* private mode / quota: fail silently */
  }
}

/** Write the cookie the pre-paint script falls back to when localStorage is
 *  unavailable (private mode, cleared storage). */
function setVersionCookie(code: TranslationCode): void {
  try {
    document.cookie = `${COOKIE_KEY}=${code}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    /* cookies disabled: localStorage already covers it */
  }
}

/** Show one reading and hide the other, by way of the CSS in globals.css.
 *  An empty value (rather than removing the attribute) is enough: the CSS
 *  selector matches only `kjv`. */
function paint(code: TranslationCode): void {
  document.documentElement.dataset.translation = code === "kjv" ? "kjv" : "";
}

/**
 * Resolve the current translation code.
 * Pass the current URL search params when you have them; otherwise the
 * address bar is read.
 */
export function resolveVersion(searchParams?: URLSearchParams): TranslationCode {
  if (current) return current;
  if (typeof window === "undefined") return "web";
  current =
    getVersionFromURL(searchParams ?? new URLSearchParams(window.location.search)) ??
    getVersionFromStorage();
  return current;
}

/** Re-read the preference from the browser, repainting only if it moved.
 *  Used on the `storage` event (another tab) and on a bfcache restore, where
 *  the frozen DOM may no longer match the reader's choice. */
function syncFromBrowser(): void {
  const next =
    getVersionFromURL(new URLSearchParams(window.location.search)) ??
    getVersionFromStorage();
  if (next === current) return;
  current = next;
  paint(next);
  for (const listener of listeners) listener();
}

/** Subscribe to translation changes. Returns an unsubscribe function. */
export function subscribeTranslation(onChange: () => void): () => void {
  listeners.add(onChange);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== STORAGE_KEY) return;
    syncFromBrowser();
  };
  const onPageShow = (event: PageTransitionEvent) => {
    if (event.persisted) syncFromBrowser();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("pageshow", onPageShow);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("pageshow", onPageShow);
  };
}

/** The store snapshot for useSyncExternalStore. */
export function getTranslationSnapshot(): string {
  return resolveVersion();
}

/** The server snapshot: markup is prerendered showing the default reading. */
export function getTranslationServerSnapshot(): string {
  return "web";
}

/**
 * Switch translation: paint it, persist it, keep the address bar in step so
 * the URL stays shareable, and let subscribers re-render. No reload.
 */
export function applyVersion(code: TranslationCode): void {
  current = code;
  setVersionInStorage(code);
  setVersionCookie(code);
  paint(code);

  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    if (code === "web") params.delete("version");
    else params.set("version", code);
    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      query ? `${window.location.pathname}?${query}` : window.location.pathname,
    );
  }

  for (const listener of listeners) listener();
}
