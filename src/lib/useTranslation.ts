"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  applyVersion,
  getTranslationServerSnapshot,
  getTranslationSnapshot,
  getVersionFromURL,
  subscribeTranslation,
  type TranslationCode,
} from "./translation";

/**
 * Client hook for the active translation: exposes the current version and a
 * setter that switches instantly.
 *
 * Switching is pure presentation: both readings are already in the document,
 * so this only flips `data-translation` on <html> (CSS reveals the right one)
 * and notifies the components that need the code itself. That is why it no
 * longer navigates or reloads: the server has nothing to re-render.
 *
 * On first load an explicit `?version=` param is the strongest signal, so it
 * is applied and persisted, which keeps a shared KJV link working for the
 * rest of the session.
 */
export function useTranslation() {
  const version = useSyncExternalStore(
    subscribeTranslation,
    getTranslationSnapshot,
    getTranslationServerSnapshot,
  ) as TranslationCode;

  // Persist an explicit ?version= URL param (e.g. a shared KJV link opened
  // by someone with no stored preference).
  useEffect(() => {
    const urlVersion = getVersionFromURL(
      new URLSearchParams(window.location.search),
    );
    if (urlVersion) applyVersion(urlVersion);
  }, []);

  return { version, setVersion: applyVersion };
}
