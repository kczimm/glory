import Link from "next/link";

/** Custom 404 for unmatched routes and notFound() calls. */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
        Page not found
      </p>
      <h1 className="mt-2 font-display text-3xl font-medium text-ink">
        Seek, and you will find
      </h1>
      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
        Just not on this page. The address may be mistyped, or the study you
        are looking for has moved.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-cream transition-opacity hover:opacity-85"
        >
          Go home
        </Link>
        <Link
          href="/questions"
          className="rounded-full border border-line px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-gold-wash/40"
        >
          Browse questions
        </Link>
      </div>
    </div>
  );
}
