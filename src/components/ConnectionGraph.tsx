"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { ConnectionKind } from "@/data/types";
import { verseSlug, connectionKindLabel } from "@/data";
import { edgesOf, shortRef, type GraphEdge } from "@/lib/graph";
import { subscribe as journeySubscribe, getSnapshot as journeySnapshot, getServerSnapshot as journeyServerSnapshot } from "@/lib/journey";

export interface GraphData {
  /** verse text for every reachable node (connection endpoints) */
  texts: Record<string, string>;
  /** studies citing each node */
  usages: Record<string, { slug: string; question: string }[]>;
  /** verses cited by each study (slug -> refs), for the visited ring */
  cited: Record<string, string[]>;
}

/**
 * The connection explorer: a local, interactive map of the knowledge graph.
 * Start at one verse; clicking any node expands its neighbors (one hop at a
 * time) and opens the side panel with the verse text and the pedagogy notes
 * on every visible edge. Pure SVG with a small hand-rolled force simulation,
 * no graph library.
 */

const ALL_KINDS: ConnectionKind[] = [
  "quotes",
  "promise",
  "fulfilled",
  "pattern",
  "parallel",
  "theme",
  "contrast",
];

// Edge styling per kind: color + dash. Uses the design tokens via CSS vars
// so dark mode works for free; contrast gets its own warm red.
const KIND_STYLE: Record<ConnectionKind, { stroke: string; dash?: string }> = {
  quotes: { stroke: "var(--color-gold-deep)" },
  fulfilled: { stroke: "#a0522d" },
  promise: { stroke: "#7a6a45", dash: "1 0" },
  pattern: { stroke: "var(--color-ink-faint)" },
  parallel: { stroke: "var(--color-ink-faint)", dash: "6 4" },
  theme: { stroke: "var(--color-gold)" },
  contrast: { stroke: "#b0432e", dash: "4 4" },
};

const W = 900;
const H = 560;

interface SimNode {
  ref: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  degree: number;
}

function radius(degree: number): number {
  return Math.min(9 + degree * 1.6, 22);
}

// Deterministic pseudo-jitter in [-0.5, 0.5]: avoids Math.random inside the
// component (render purity) while still spreading overlapping nodes apart.
let jitterSeed = 42;
function jitter(): number {
  jitterSeed = (jitterSeed * 9301 + 49297) % 233280;
  return jitterSeed / 233280 - 0.5;
}

export default function ConnectionGraph({ startRef, graph }: { startRef: string; graph: GraphData }) {
  // The node map is created once (seeded with the start verse) and then
  // mutated in place by the simulation; a tick counter drives re-renders.
  const [nodesMap] = useState<Map<string, SimNode>>(() => {
    return new Map([
      [
        startRef,
        {
          ref: startRef,
          x: W / 2,
          y: H / 2,
          vx: 0,
          vy: 0,
          degree: edgesOf(startRef).length,
        },
      ],
    ]);
  });
  const [, setTick] = useState(0);
  const [selected, setSelected] = useState<string | null>(startRef);
  const [kinds, setKinds] = useState<Set<ConnectionKind>>(new Set(ALL_KINDS));
  const journey = useSyncExternalStore(journeySubscribe, journeySnapshot, journeyServerSnapshot);

  // Verses the reader has already met, via the studies in their journey.
  const visitedVerses = useMemo(() => {
    const visited = new Set<string>();
    for (const entry of journey) {
      for (const r of graph.cited[entry.slug] ?? []) visited.add(r);
    }
    return visited;
  }, [journey, graph.cited]);

  // The force simulation: a cooling rAF loop that runs until the layout
  // settles, then stops entirely. Cheap O(n^2) repulsion is fine for the
  // dozens of nodes a hand-expanded local map holds. Any mutation (expand,
  // filter) re-heats it via heat().
  const alphaRef = useRef(1);
  const runningRef = useRef(false);
  function heat(amount = 1) {
    alphaRef.current = Math.max(alphaRef.current, amount);
    if (!runningRef.current) {
      runningRef.current = true;
      requestAnimationFrame(step);
    }
  }
  function step() {
    const alpha = alphaRef.current;
    const nodes = [...nodesMap.values()];
    const edges = visibleEdges();
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 1) { dx = jitter(); dy = jitter(); d2 = 1; }
        const repulse = ((2600 / d2) * alpha);
        const d = Math.sqrt(d2);
        a.vx -= (dx / d) * repulse;
        a.vy -= (dy / d) * repulse;
        b.vx += (dx / d) * repulse;
        b.vy += (dy / d) * repulse;
      }
      // gentle pull to canvas center
      a.vx += (W / 2 - a.x) * 0.002 * alpha;
      a.vy += (H / 2 - a.y) * 0.002 * alpha;
    }
    for (const e of edges) {
      const a = nodesMap.get(e.source);
      const b = nodesMap.get(e.target);
      if (!a || !b) continue;
      const ideal = 170;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
      const f = (d - ideal) * 0.02 * alpha;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.vx += fx; a.vy += fy;
      b.vx -= fx; b.vy -= fy;
    }
    let energy = 0;
    for (const n of nodes) {
      n.vx *= 0.6; n.vy *= 0.6;
      n.x = Math.min(Math.max(n.x + n.vx, 40), W - 40);
      n.y = Math.min(Math.max(n.y + n.vy, 36), H - 36);
      energy += Math.abs(n.vx) + Math.abs(n.vy);
    }
    setTick((t) => t + 1);
    alphaRef.current = alpha * 0.97;
    if (alpha > 0.02 && energy > 0.5) {
      requestAnimationFrame(step);
    } else {
      runningRef.current = false;
    }
  }

  function visibleEdges(): GraphEdge[] {
    const seen = new Set<string>();
    const out: GraphEdge[] = [];
    for (const ref of nodesMap.keys()) {
      for (const e of edgesOf(ref)) {
        if (!nodesMap.has(e.source) || !nodesMap.has(e.target)) continue;
        if (!kinds.has(e.kind)) continue;
        const key = e.source < e.target ? `${e.source}|${e.target}|${e.kind}` : `${e.target}|${e.source}|${e.kind}`;
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(e);
      }
    }
    return out;
  }

  function expand(ref: string) {
    const map = nodesMap;
    const src = map.get(ref);
    const baseAngle = jitter() * Math.PI * 2 + 3.14;
    let i = 0;
    for (const e of edgesOf(ref)) {
      if (!kinds.has(e.kind)) continue;
      const other = e.source === ref ? e.target : e.source;
      if (map.has(other)) continue;
      const angle = baseAngle + (i * 2 * Math.PI) / 7;
      map.set(other, {
        ref: other,
        x: (src?.x ?? W / 2) + Math.cos(angle) * 120 + (jitter()) * 30,
        y: (src?.y ?? H / 2) + Math.sin(angle) * 120 + (jitter()) * 30,
        vx: 0,
        vy: 0,
        degree: edgesOf(other).length,
      });
      i++;
    }
    setSelected(ref);
    heat(1);
  }

  const nodes = [...nodesMap.values()];
  const edges = visibleEdges();
  const selEdges = selected ? edges.filter((e) => e.source === selected || e.target === selected) : [];
  const selQuestions = selected ? (graph.usages[selected] ?? []) : [];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      {/* Map */}
      <div className="overflow-hidden rounded-2xl border border-line bg-cream/40">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-surface/60 px-4 py-3">
          {ALL_KINDS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setKinds((prev) => {
                  const next = new Set(prev);
                  if (next.has(k)) next.delete(k); else next.add(k);
                  return next;
                });
                heat(0.8);
              }}
              className={`flex items-center gap-1.5 text-[12px] transition-opacity ${
                kinds.has(k) ? "opacity-100" : "opacity-35"
              }`}
              title={connectionKindLabel[k]}
            >
              <svg width="18" height="6" aria-hidden>
                <line
                  x1="0" y1="3" x2="18" y2="3"
                  stroke={KIND_STYLE[k].stroke}
                  strokeWidth="2"
                  strokeDasharray={KIND_STYLE[k].dash}
                />
              </svg>
              <span className={kinds.has(k) ? "text-ink-soft" : "text-ink-faint"}>
                {connectionKindLabel[k]}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              nodesMap.clear();
              nodesMap.set(startRef, {
                ref: startRef,
                x: W / 2,
                y: H / 2,
                vx: 0,
                vy: 0,
                degree: edgesOf(startRef).length,
              });
              setSelected(startRef);
              heat(1);
            }}
            className="ml-auto text-[12px] font-medium text-ink-faint transition-colors hover:text-gold-deep"
          >
            Reset map
          </button>
        </div>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="block h-auto select-none"
            style={{ minWidth: 640, width: "100%", maxWidth: "none" }}
          >
          {/* edges */}
          {edges.map((e) => {
            const a = nodesMap.get(e.source)!;
            const b = nodesMap.get(e.target)!;
            const hot = selected === e.source || selected === e.target;
            const style = KIND_STYLE[e.kind];
            return (
              <line
                key={`${e.source}|${e.target}|${e.kind}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={style.stroke}
                strokeWidth={hot ? 2.5 : 1.4}
                strokeDasharray={style.dash}
                opacity={hot ? 0.95 : 0.4}
              />
            );
          })}
          {/* nodes */}
          {nodes.map((n) => {
            const isSel = n.ref === selected;
            const r = radius(n.degree);
            return (
              <g
                key={n.ref}
                transform={`translate(${n.x},${n.y})`}
                onClick={() => expand(n.ref)}
                className="cursor-pointer group/node"
              >
                <circle
                  r={r + 4}
                  fill="transparent"
                  stroke={isSel ? "var(--color-gold)" : "transparent"}
                  strokeWidth="2"
                  className="transition-all group-hover/node:stroke-gold"
                />
                <circle
                  r={r}
                  fill={isSel ? "var(--color-gold-deep)" : "var(--color-parchment)"}
                  stroke="var(--color-gold-deep)"
                  strokeWidth="1.5"
                />
                {visitedVerses.has(n.ref) && !isSel && (
                  <circle r={r + 3.5} fill="none" stroke="var(--color-ink-faint)" strokeWidth="1.5" strokeDasharray="2 3" />
                )}
                <text
                  y={r + 13}
                  textAnchor="middle"
                  fontSize="12.5"
                  fill={isSel ? "var(--color-gold-deep)" : "var(--color-ink-soft)"}
                  fontWeight={isSel ? 600 : 400}
                >
                  {shortRef(n.ref)}
                </text>
              </g>
            );
          })}
          </svg>
        </div>
        <p className="border-t border-line px-4 py-3 text-[12.5px] text-ink-faint">
          Click any verse to expand its connections and open it in the panel.
          Larger circles hold more connections.
        </p>
      </div>

      {/* Side panel */}
      <aside className="rounded-2xl border border-line bg-surface/60 p-5">
        {!selected ? (
          <p className="text-[14px] leading-relaxed text-ink-soft">
            Pick a verse on the map to read it and see why it is connected.
          </p>
        ) : (
          <div>
            <h2 className="font-display text-xl font-medium leading-snug text-ink">
              {selected}
            </h2>
            {graph.texts[selected] && (
              <blockquote className="mt-3 border-l-2 border-gold/60 pl-3 font-display text-[15px] italic leading-relaxed text-ink">
                {graph.texts[selected]}
              </blockquote>
            )}
            <Link
              href={`/verses/${verseSlug(selected)}`}
              className="mt-3 inline-block text-[13px] font-semibold text-gold-deep underline-offset-2 hover:underline"
            >
              Open verse page →
            </Link>

            <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Why these are connected
            </h3>
            <div className="mt-3 space-y-4">
              {selEdges.length === 0 && (
                <p className="text-[13px] text-ink-faint">No visible edges; try enabling more kinds above.</p>
              )}
              {selEdges.map((e) => {
                const other = e.source === selected ? e.target : e.source;
                return (
                  <button
                    key={`${e.source}|${e.target}|${e.kind}`}
                    type="button"
                    onClick={() => {
                      if (!nodesMap.has(other)) expand(other);
                      setSelected(other);
                    }}
                    className="block w-full text-left"
                  >
                    <span className="flex items-center gap-1.5 font-display text-[14.5px] font-medium text-ink hover:text-gold-deep">
                      {other}
                      <span aria-hidden>→</span>
                    </span>
                    <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-soft">
                      <em className="not-italic font-semibold" style={{ color: KIND_STYLE[e.kind].stroke }}>
                        {connectionKindLabel[e.kind]}:
                      </em>{" "}
                      {e.note}
                    </span>
                  </button>
                );
              })}
            </div>

            {selQuestions.length > 0 && (
              <>
                <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Studied in
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {selQuestions.slice(0, 4).map((q) => (
                    <li key={q.slug}>
                      <Link
                        href={`/questions/${q.slug}`}
                        className="text-[13.5px] text-ink-soft underline-offset-2 hover:text-gold-deep hover:underline"
                      >
                        {q.question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
