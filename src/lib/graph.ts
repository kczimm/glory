import { connections } from "@/data/connections";
import type { ConnectionKind } from "@/data/types";
import { canonicalRef, parseRef } from "../data/ref";

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

/**
 * One undirected adjacency, built once: every edge appears under both of its
 * endpoints, both endpoints are canonical refs, and nothing is listed twice.
 *
 * The previous version walked `connections` raw on every call (memoized per
 * ref, but re-scanning all 478 keys for the incoming half) and compared
 * target strings exactly, so a verse written "Psalm 23:1" in one place and
 * "Psalms 23:1" in another produced two nodes, and an edge could be counted
 * twice when both directions existed.
 */
let adjacency: Map<string, GraphEdge[]> | null = null;

function graphEdges(): Map<string, GraphEdge[]> {
  if (adjacency) return adjacency;
  const map = new Map<string, GraphEdge[]>();
  const add = (at: string, edge: GraphEdge) => {
    const rows = map.get(at);
    if (rows) rows.push(edge);
    else map.set(at, [edge]);
  };
  for (const [from, edges] of Object.entries(connections)) {
    const source = canonicalRef(from);
    for (const e of edges) {
      const edge: GraphEdge = {
        source,
        target: canonicalRef(e.target),
        kind: e.kind,
        note: e.note,
      };
      add(edge.source, edge);
      if (edge.target !== edge.source) add(edge.target, edge);
    }
  }
  adjacency = map;
  return map;
}

/** All edges touching a verse, either direction, deduped. */
export function edgesOf(ref: string): GraphEdge[] {
  return graphEdges().get(canonicalRef(ref)) ?? [];
}

/** A short label for a ref: "1 Corinthians 15:3-4" -> "1 Corinthians 15:3". */
export function shortRef(ref: string): string {
  const p = parseRef(ref);
  return p ? `${p.book} ${p.chapter}:${p.from}` : ref;
}
