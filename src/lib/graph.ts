import { connections, getConnections } from "@/data/connections";
import type { ConnectionKind } from "@/data/types";
import { parseRef } from "../data/verseIndex";

/**
 * Graph helpers for the connection explorer: the adjacency of the knowledge
 * graph, merged across direction (an incoming edge is shown from the other
 * side too, so every node can be expanded in one hop).
 */
export interface GraphEdge {
  source: string;
  target: string;
  kind: ConnectionKind;
  note: string;
}

// Adjacency memoized once at module load: the connections data is static,
// and the explorer calls edgesOf in hot loops (per frame, per node).
const edgeCache = new Map<string, GraphEdge[]>();

/** All edges touching a verse, either direction. */
export function edgesOf(ref: string): GraphEdge[] {
  const cached = edgeCache.get(ref);
  if (cached) return cached;
  const out: GraphEdge[] = [];
  for (const e of getConnections(ref)) {
    out.push({ source: ref, target: e.target, kind: e.kind, note: e.note });
  }
  for (const [from, edges] of Object.entries(connections)) {
    for (const e of edges) {
      if (e.target === ref) out.push({ source: from, target: ref, kind: e.kind, note: e.note });
    }
  }
  edgeCache.set(ref, out);
  return out;
}

/** Degree of a verse in the undirected graph (for node sizing). */
export function degreeOf(ref: string): number {
  return edgesOf(ref).length;
}

/** Short display form of a ref for graph labels ("1 Corinthians 13:4-7" stays whole; we clip in SVG). */
export function shortRef(ref: string): string {
  const p = parseRef(ref);
  return p ? `${p.book} ${p.chapter}:${p.from}` : ref;
}
