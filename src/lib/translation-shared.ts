/**
 * Shared translation utilities that work on both server and client.
 * This file does NOT use "use client" so it can be imported anywhere.
 */

export type TranslationCode = "web" | "kjv";

export interface TranslationInfo {
  code: TranslationCode;
  name: string;
  shortName: string;
  hasAudio: boolean;
}

export const TRANSLATIONS: Record<TranslationCode, TranslationInfo> = {
  web: {
    code: "web",
    name: "World English Bible",
    shortName: "WEB",
    hasAudio: true,
  },
  kjv: {
    code: "kjv",
    name: "King James Version",
    shortName: "KJV",
    hasAudio: false,
  },
};

export const VALID_CODES: Set<string> = new Set(Object.keys(TRANSLATIONS));

/** Get full info for a translation code. */
export function getTranslationInfo(code: TranslationCode): TranslationInfo {
  return TRANSLATIONS[code] ?? TRANSLATIONS.web;
}

/** Check if a translation code is valid. */
export function isValidTranslationCode(code: string): code is TranslationCode {
  return VALID_CODES.has(code);
}

/** Check if a translation has audio support. */
export function hasAudio(code: TranslationCode): boolean {
  return TRANSLATIONS[code]?.hasAudio ?? false;
}
