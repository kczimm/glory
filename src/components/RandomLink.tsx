"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe } from "@/lib/journey";

/**
 * How many of the most recently visited questions to send along as
 * already-read. Caps the URL; the route skips these when it rolls.
 */
const SKIP_CAP = 24;

/**
 * A link into "/random" that carries the reader's local journey with it:
 * questions they've already walked are passed as ?skip=slugs so a surprise
 * pick lands somewhere new to them. Server render (and first paint) links to
 * plain "/random"; the skip list is attached from localStorage after hydration.
 */
export default function RandomLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const entries = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const skip = entries.slice(-SKIP_CAP).map((e) => e.slug);
  const href = skip.length ? `/random?skip=${encodeURIComponent(skip.join(","))}` : "/random";
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
