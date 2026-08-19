import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-5">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Glory
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink-faint lg:inline">
            a study of the Word
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          <Link
            href="/verses"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            Verses
          </Link>
          <Link
            href="/search"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            Search
          </Link>
          <Link
            href="/questions"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            Questions
          </Link>
          <Link
            href="/"
            className="hidden rounded-full border border-gold/40 px-4 py-1.5 text-[13px] font-medium text-gold-deep transition-colors hover:bg-gold-wash sm:inline-block"
          >
            Start with a question
          </Link>
        </nav>
      </div>
    </header>
  );
}
