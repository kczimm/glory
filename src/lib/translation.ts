"use client";

/**
 * Translation selector: manages the user's preferred Bible translation.
 *
 * Priority:
 * 1. URL param `?version=kjv` (explicit, shareable)
 * 2. localStorage `glory:translation` (persisted preference)
 * 3. Default: "web" (World English Bible)
 *
 * This module is client-only (uses localStorage). Server components should
 * use the server-safe variant in `@/data/translation-server.ts`.
 */

// Re-export shared types and utilities
export type { TranslationCode, TranslationInfo } from "./translation-shared";
export { TRANSLATIONS, getTranslationInfo, hasAudio, isValidTranslationCode } from "./translation-shared";

import type { TranslationCode } from "./translation-shared";
import { VALID_CODES } from "./translation-shared";

const STORAGE_KEY = "glory:translation";

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
    /* private mode / quota: fail silently */
  }
  return "web";
}

/** Save the translation code to localStorage. */
export function setVersionInStorage(code: TranslationCode): void {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* private mode / quota: fail silently */
  }
}

/**
 * Resolve the current translation code.
 * Call from a client component with the current URL search params.
 */
export function resolveVersion(searchParams?: URLSearchParams): TranslationCode {
  return getVersionFromURL(searchParams) ?? getVersionFromStorage();
}
