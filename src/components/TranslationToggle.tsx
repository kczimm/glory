"use client";

import { useTranslation } from "@/lib/useTranslation";
import { TRANSLATIONS, type TranslationCode } from "@/lib/translation";

/**
 * Compact WEB/KJV switch for the always-visible nav bar. A small segmented
 * control that surfaces the active translation on every page, so long study
 * pages don't require scrolling to the footer.
 */
export default function TranslationToggle() {
  const { version, setVersion } = useTranslation();
  const codes = Object.keys(TRANSLATIONS) as TranslationCode[];

  return (
    <div
      role="group"
      aria-label="Bible translation"
      className="flex shrink-0 items-center rounded-full border border-line bg-surface p-0.5 text-[11px] font-semibold"
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
  );
}
