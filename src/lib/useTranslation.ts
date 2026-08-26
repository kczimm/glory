"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  getVersionFromURL,
  resolveVersion,
  setVersionInStorage,
  type TranslationCode,
} from "./translation";

/**
 * Client hook for the active translation: exposes the current version and a
 * setter that persists it (localStorage + cookie) and navigates with the
 * ?version= URL param. On first load it syncs an explicit URL param into the
 * cookie/localStorage, so a visitor who arrives via a shared KJV link stays
 * in KJV across all internal navigation.
 */

/** Subscribe/unsubscribe stub for useSyncExternalStore. */
function subscribe(): () => void {
  return () => {};
}
function getSnapshot(): string {
  return typeof window !== "undefined"
    ? resolveVersion(new URLSearchParams(window.location.search))
    : "web";
}
function getServerSnapshot(): string {
  return "web";
}

/** Set the translation cookie so server components pick up the preference. */
function setVersionCookie(code: TranslationCode) {
  document.cookie = `glory:translation=${code}; path=/; max-age=31536000; SameSite=Lax`;
}

export function useTranslation() {
  const version = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  ) as TranslationCode;

  // Persist an explicit ?version= URL param (e.g. a shared KJV link opened
  // by someone with no cookie) so the whole session stays in that version.
  useEffect(() => {
    const urlVersion = getVersionFromURL(
      new URLSearchParams(window.location.search)
    );
    if (urlVersion) {
      setVersionInStorage(urlVersion);
      setVersionCookie(urlVersion);
    }
  }, []);

  // Guard against the browser's back/forward cache: a page frozen before a
  // translation switch can be restored by the Back button without any
  // script re-running, so it would show the previous translation. Tag the
  // rendered page with its translation and, on a bfcache restore, reload if
  // the current preference no longer matches.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.translation = version;
    const onShow = (e: PageTransitionEvent) => {
      if (
        e.persisted &&
        root.dataset.translation !==
          resolveVersion(new URLSearchParams(window.location.search))
      ) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", onShow);
    return () => window.removeEventListener("pageshow", onShow);
  }, [version]);


  /** Apply a translation: persist it and navigate so the server re-renders. */
  const setVersion = (next: TranslationCode) => {
    setVersionInStorage(next);
    setVersionCookie(next);
    const params = new URLSearchParams(window.location.search);
    if (next === "web") {
      params.delete("version"); // web is the default; no param needed
    } else {
      params.set("version", next);
    }
    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.location.href = newUrl;
  };

  return { version, setVersion };
}
