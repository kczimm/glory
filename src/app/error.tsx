"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Segment-level error boundary: catches unexpected runtime errors in any
 * route below the root layout and offers a way back instead of Next's
 * default crash screen.
 */
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Something went wrong
        </p>
        <h1 className="mt-2 font-display text-2xl font-medium text-ink">
          This page stumbled
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
          An unexpected error interrupted the study. You can try again, or
          return home and pick up where you left off.
        </p>
        {error.digest && (
          <p className="mt-2 text-[11px] text-ink-faint">Ref: {error.digest}</p>
        )}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={retry}
            className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-cream transition-opacity hover:opacity-85"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-line px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-gold-wash/40"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
