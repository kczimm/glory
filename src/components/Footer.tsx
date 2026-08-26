"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { resolveVersion, getTranslationInfo, type TranslationCode } from "@/lib/translation";
import TranslationSelector from "./TranslationSelector";

/** Subscribe/unsubscribe stub for useSyncExternalStore. */
function subscribe(): () => void {
  return () => {};
}
function getSnapshot(): string {
  return typeof window !== "undefined" ? resolveVersion(new URLSearchParams(window.location.search)) : "web";
}
function getServerSnapshot(): string {
  return "web";
}

/** Acts 17:11 in each translation */
const ACTS_17_11: Record<TranslationCode, string> = {
  web: "searching the Scriptures daily to see whether these things were so",
  kjv: "searched the scriptures daily, whether those things were so",
};

export default function Footer() {
  const version = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) as TranslationCode;
  const info = getTranslationInfo(version);


  return (
    <footer className="border-t border-line bg-cream/60 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-col gap-2">
          <p className="font-display text-lg text-ink">
            Glory <span className="text-gold">✦</span>
          </p>
          <TranslationSelector />
        </div>
        <p className="max-w-md text-[13px] leading-relaxed text-ink-faint">
          Scripture quotations are from the{" "}
          <Link href="/about-translation" className="underline-offset-2 hover:underline">
            {info.name}
          </Link>{" "}
          (Public Domain). Study with the Bereans in mind: &ldquo;{ACTS_17_11[version]} (Acts 17:11).
        </p>
      </div>
    </footer>
  );
}
