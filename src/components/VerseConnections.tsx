"use client";

import { useState } from "react";
import Link from "next/link";
import { verseSlug } from "@/data";
import { connectionKindLabel } from "@/data/connections";
import type { ConnectionKind } from "@/data/types";

export interface ConnectionRowData {
  target: string;
  kind: ConnectionKind;
  note: string;
  /** target text, resolved server-side */
  text: string | null;
}

/**
 * The knowledge graph on each verse: shows how this verse connects to others,
 * HOW they connect, and why it matters. Scripture interpreting Scripture.
 * Rows (including target verse text) are prepared by the server parent.
 */
export default function VerseConnections({
  verse,
  rows,
}: {
  verse: string;
  rows: ConnectionRowData[];
}) {
  const [open, setOpen] = useState(false);
  if (!rows.length) return null;

  return (
    <div className="mt-3 border-t border-dashed border-gold/30 pt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-[12px] font-medium text-gold-deep transition-colors hover:text-gold"
        aria-expanded={open}
      >
        <span aria-hidden>✦</span>
        Cross-references ({rows.length})
        <span className={`transition-transform ${open ? "rotate-90" : ""}`} aria-hidden>
          ›
        </span>
      </button>
      {open && (
        <ul className="mt-2.5 space-y-3">
          {rows.map((row) => (
            <ConnectionRow key={row.target} row={row} />
          ))}
        </ul>
      )}
      {open && (
        <Link
          href={`/connections/${verseSlug(verse)}`}
          className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-gold-deep underline-offset-2 hover:underline"
        >
          See this verse&apos;s connection map
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}

function ConnectionRow({ row }: { row: ConnectionRowData }) {
  return (
    <li className="rounded-lg bg-parchment/80 px-3 py-2.5">
      <p className="flex items-baseline gap-2">
        <span className="shrink-0 rounded-full border border-gold/40 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-gold-deep">
          {connectionKindLabel[row.kind]}
        </span>
        <Link
          href={`/verses/${verseSlug(row.target)}`}
          className="text-[12.5px] font-semibold text-gold-deep underline-offset-2 hover:underline"
        >
          {row.target}
        </Link>
      </p>
      <p className="mt-1 text-[13px] leading-snug text-ink-soft">{row.note}</p>
      {row.text && (
        <p className="mt-1.5 border-l border-gold/40 pl-2.5 font-display text-[13.5px] italic leading-snug text-ink">
          “{row.text}”
        </p>
      )}
    </li>
  );
}
