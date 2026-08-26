import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MemorizeNavLink from "./MemorizeNavLink";
import TranslationToggle from "./TranslationToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-parchment/90 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-5">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="shrink-0 self-center text-gold"
          >
            <path
              d="M12 2.6l2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9z"
              fill="currentColor"
            />
          </svg>
          <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Glory
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink-faint lg:inline">
            a study of the Word
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link
            href="/bible"
            aria-label="Read the Bible"
            title="Read the Bible"
            className="inline-flex items-center text-ink-soft transition-colors hover:text-gold sm:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </Link>
          <Link
            href="/verses"
            className="hidden text-ink-soft transition-colors hover:text-gold sm:inline"
          >
            Verses
          </Link>
          <Link
            href="/connections"
            className="hidden text-ink-soft transition-colors hover:text-gold sm:inline"
          >
            Connections
          </Link>
          <Link
            href="/search"
            aria-label="Search"
            title="Search"
            className="inline-flex items-center text-ink-soft transition-colors hover:text-gold sm:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </Link>
          <Link
            href="/search"
            className="hidden text-ink-soft transition-colors hover:text-gold sm:inline"
          >
            Search
          </Link>
          <Link
            href="/questions"
            className="text-ink-soft transition-colors hover:text-gold"
          >
            Questions
          </Link>
          <MemorizeNavLink />
          <ThemeToggle />
          <TranslationToggle />
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
