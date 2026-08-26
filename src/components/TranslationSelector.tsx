"use client";

/**
 * Translation selector: a dropdown that lets users switch between
 * WEB and KJV. Persists the choice to localStorage and updates the URL.
 */

import { useSyncExternalStore } from "react";
import {
  resolveVersion,
  setVersionInStorage,
  TRANSLATIONS,
  type TranslationCode,
} from "@/lib/translation";

/** Subscribe/unsubscribe stub for useSyncExternalStore (no external store needed). */
function subscribe(): () => void {
  return () => {};
}
function getSnapshot(): string {
  return typeof window !== "undefined" ? resolveVersion(new URLSearchParams(window.location.search)) : "web";
}
function getServerSnapshot(): string {
  return "web";
}

export default function TranslationSelector() {
  const currentVersion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) as TranslationCode;

  const handleChange = (newVersion: TranslationCode) => {
    // Save to localStorage
    setVersionInStorage(newVersion);

    // Update URL with version param and force full navigation
    // This ensures the server re-renders with the new translation
    const params = new URLSearchParams(window.location.search);
    if (newVersion === "web") {
      params.delete("version"); // web is default, no need for param
    } else {
      params.set("version", newVersion);
    }
    const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
    window.location.href = newUrl;
  };

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="translation-select"
        className="text-[12px] font-medium uppercase tracking-wider text-ink-faint"
      >
        Translation
      </label>
      <select
        id="translation-select"
        value={currentVersion}
        onChange={(e) => handleChange(e.target.value as TranslationCode)}
        className="rounded-md border border-line bg-surface px-2 py-1 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50"
      >
        {Object.values(TRANSLATIONS).map((t) => (
          <option key={t.code} value={t.code}>
            {t.shortName} — {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
