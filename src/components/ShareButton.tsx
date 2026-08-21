"use client";

import { useState } from "react";

interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
  label?: string;
  className?: string;
}

/**
 * Share a study or verse. Uses the native share sheet on mobile when
 * available, and falls back to copying a title + verse + link to the
 * clipboard. Composed copy avoids em dashes (site style).
 */
export default function ShareButton({
  url,
  title,
  text,
  label = "Share",
  className,
}: ShareButtonProps) {
  const [state, setState] = useState<"idle" | "copied">("idle");

  async function handleClick() {
    const shareData: ShareData = { title, text, url };
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or the sheet failed; fall through to copy
      }
    }
    try {
      const payload = text ? `${title}\n${text}\n${url}` : url;
      await navigator.clipboard.writeText(payload);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Share ${title}`}
      className={
        className ??
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-gold/50 hover:text-gold-deep"
      }
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
      <span>{state === "copied" ? "Link copied" : label}</span>
    </button>
  );
}
