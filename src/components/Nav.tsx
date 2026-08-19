import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Glory
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink-faint sm:inline">
            a study of the Word
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/questions"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            Questions
          </Link>
          <Link
            href="/"
            className="rounded-full border border-gold/40 px-4 py-1.5 text-[13px] font-medium text-gold-deep transition-colors hover:bg-gold-wash"
          >
            Start with a question
          </Link>
        </nav>
      </div>
    </header>
  );
}
