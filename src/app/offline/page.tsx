import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
  description:
    "Glory could not reach the network. Pages you have already visited remain available for offline reading.",
};

/**
 * Shown by the service worker when a page is requested offline and no
 * cached copy exists. Kept static so it always loads from cache.
 */
export default function OfflinePage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <div className="flex items-center justify-center py-24">
        <div className="max-w-md text-center">
          <p
            aria-hidden
            className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]"
          >
            ✦ Offline
          </p>
          <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            You are offline
          </h1>
          <p className="mt-6 text-[15.5px] leading-[1.85] text-ink-soft">
            This page has not been saved for offline reading yet. Pages you
            have already visited, along with their Scripture, will still open.
            Reconnect once, and this page will be ready next time.
          </p>
        </div>
      </div>
    </div>
  );
}
