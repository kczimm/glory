"use client";

import { useTranslation } from "@/lib/useTranslation";
import { TRANSLATIONS, type TranslationCode } from "@/lib/translation";

/**
 * WEB/KJV switch for the always-visible nav bar so the active translation is
 * reachable on every page, even long study pages.
 *
 * On desktop a two-button segmented control shows both options. On small
 * screens the row is tight, so it collapses to a single compact pill showing
 * the current translation (tap to switch), same footprint as the theme toggle.
 */
export default function TranslationToggle() {
  const { version, setVersion } = useTranslation();
  const codes = Object.keys(TRANSLATIONS) as TranslationCode[];
  const other = codes.find((c) => c !== version) ?? "web";

  return (
    <>
      {/* Mobile: one compact button showing the CURRENT translation; tap
          toggles to the other (same footprint as the theme toggle). */}
      <button
        type="button"
        onClick={() => setVersion(other)}
        aria-label={`Switch to ${TRANSLATIONS[other].name}`}
        title={`Switch to ${TRANSLATIONS[other].name}`}
        className="sm:hidden shrink-0 rounded-full border border-line bg-surface px-2 py-1 text-[10.5px] font-semibold text-ink-soft transition-colors hover:text-gold-deep"
      >
        {TRANSLATIONS[version].shortName}
      </button>

      {/* Desktop: segmented control. */}
      <div
        role="group"
        aria-label="Bible translation"
        className="hidden shrink-0 items-center rounded-full border border-line bg-surface p-0.5 text-[11px] font-semibold sm:flex"
      >
        {codes.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setVersion(code)}
            aria-pressed={version === code}
            className={`rounded-full px-2 py-0.5 transition-colors ${
              version === code
                ? "bg-gold-deep text-white"
                : "text-ink-soft hover:text-gold-deep"
            }`}
          >
            {TRANSLATIONS[code].shortName}
          </button>
        ))}
      </div>
    </>
  );
}
