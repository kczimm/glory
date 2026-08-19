"use client";

import { useState } from "react";
import Link from "next/link";
import { getConnections, connectionKindLabel, getPassageText, verseSlug } from "@/data";
import type { ConnectionKind } from "@/data/types";

/**
 * The knowledge graph on each verse: shows how this verse connects to others,
 * HOW they connect, and why it matters. Scripture interpreting Scripture.
 */
export default function VerseConnections({ verse }: { verse: string }) {
  const [open, setOpen] = useState(false);
  const edges = getConnections(verse);
  if (!edges.length) return null;

  return (
    <div className="mt-3 border-t border-dashed border-gold/30 pt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-[12px] font-medium text-gold-deep transition-colors hover:text-gold"
        aria-expanded={open}
      >
        <span aria-hidden>✦</span>
        Cross-references ({edges.length})
        <span className={`transition-transform ${open ? "rotate-90" : ""}`} aria-hidden>
          ›
        </span>
      </button>
      {open && (
        <ul className="mt-2.5 space-y-3">
          {edges.map((edge) => (
            <ConnectionRow key={edge.target} target={edge.target} kind={edge.kind} note={edge.note} />
          ))}
        </ul>
      )}
    </div>
  );
}

function ConnectionRow({
  target,
  kind,
  note,
}: {
  target: string;
  kind: ConnectionKind;
  note: string;
}) {
  const text = getPassageText(target);
  return (
    <li className="rounded-lg bg-parchment/80 px-3 py-2.5">
      <p className="flex items-baseline gap-2">
        <span className="shrink-0 rounded-full border border-gold/40 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-gold-deep">
          {connectionKindLabel[kind]}
        </span>
        <Link
          href={`/verses/${verseSlug(target)}`}
          className="text-[12.5px] font-semibold text-gold-deep underline-offset-2 hover:underline"
        >
          {target}
        </Link>
      </p>
      <p className="mt-1 text-[13px] leading-snug text-ink-soft">{note}</p>
      {text && (
        <p className="mt-1.5 border-l border-gold/40 pl-2.5 font-display text-[13.5px] italic leading-snug text-ink">
          “{text}”
        </p>
      )}
    </li>
  );
}
