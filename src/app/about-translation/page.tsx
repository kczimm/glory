import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why the World English Bible?",
  description:
    "Glory reads from the World English Bible: a faithful, public domain translation that lets us share the whole of Scripture freely.",
};

export default function AboutTranslationPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <header className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-deep sm:text-[12px] sm:tracking-[0.3em]">
          ✦ About this translation
        </p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          Why the World English Bible?
        </h1>
      </header>

      <div className="space-y-8 text-[15.5px] leading-[1.85] text-ink">
        <p>
          Every verse on Glory is quoted from the{" "}
          <a
            href="https://ebible.org/web/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-deep underline-offset-4 hover:underline"
          >
            World English Bible
          </a>{" "}
          (WEB). It was not chosen because it is the best English Bible for
          every reader; it was chosen because of one unusual quality: it is in
          the <strong>public domain</strong>.
        </p>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Public domain means we can give it away
          </h2>
          <p className="mt-3">
            Well-loved translations like the ESV, NIV, or NLT are excellent,
            but they are copyrighted works. Quoting them at length, or
            reproducing them inside an app, requires a license and usually a
            fee. The WEB carries no such restriction: anyone may copy, print,
            quote, and redistribute it without permission.
          </p>
          <p className="mt-3">
            That matters to how Glory works. The entire Bible, all 66 books, is
            built into this site so that every chapter you read and every verse
            you open loads instantly, works offline, and can be shared freely
            with anyone, anywhere, with no strings attached. That is only
            possible with a public domain text.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            A trustworthy lineage
          </h2>
          <p className="mt-3">
            The WEB is a modern English update of the American Standard
            Version of 1901, which itself stands in the tradition of the
            Revised Version. It is a literal, word-for-word style translation
            completed by Michael Paul Johnson and volunteers, and it has been
            in open development since 1997. You can read more about it and
            download it in many formats at{" "}
            <a
              href="https://ebible.org/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-deep underline-offset-4 hover:underline"
            >
              ebible.org/web
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Read alongside what you know
          </h2>
          <p className="mt-3">
            If your heart belongs to another translation, keep reading it. The
            differences between faithful translations are matters of wording,
            not of message, and comparing renderings is one of the oldest and
            richest habits in Bible study. If a question ever turns on how a
            word is rendered, we say so plainly rather than hiding behind one
            version.
          </p>
          <p className="mt-3">
            Our study,{" "}
            <Link
              href="/questions/why-do-bible-translations-differ"
              className="font-medium text-gold-deep underline-offset-4 hover:underline"
            >
              Why do Bible translations differ?
            </Link>
            , takes up that question in Scripture itself.
          </p>
        </section>
      </div>
    </div>
  );
}
