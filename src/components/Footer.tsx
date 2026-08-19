import { translation, translationNote } from "@/data/scripture";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-display text-lg text-ink">
          Glory <span className="text-gold">✦</span>
        </p>
        <p className="max-w-md text-[13px] leading-relaxed text-ink-faint">
          Scripture quotations are from the {translation} ({translationNote}).
          Study with the Bereans in mind: “searching the Scriptures daily to
          see whether these things were so” (Acts 17:11).
        </p>
      </div>
    </footer>
  );
}
