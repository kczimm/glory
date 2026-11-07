import type { SpeechItem } from "@/lib/speech";

/**
 * Fetch a study's speech queues when the reader actually picks it from the
 * player's "What next?" menu.
 *
 * The queues are built on the server because they need verse text (see
 * /api/queue). Shipping them with every study page meant serializing several
 * whole studies per page for a menu most listeners never reach, so the menu
 * carries slugs and this resolves one on demand. Results are cached per slug
 * for the session: picking the same study twice costs nothing.
 */
export interface OptionQueues {
  slug: string;
  label: string;
  firstChapter: { sourceId: string; items: SpeechItem[] } | null;
  study: { sourceId: string; items: SpeechItem[] };
}

const loads = new Map<string, Promise<OptionQueues | null>>();

export function loadOptionQueues(slug: string): Promise<OptionQueues | null> {
  const cached = loads.get(slug);
  if (cached) return cached;

  const request = fetch(`/api/queue?study=${encodeURIComponent(slug)}`, {
    headers: { accept: "application/json" },
  })
    .then((res) => (res.ok ? res.json() : null))
    .catch(() => null)
    .then((data: OptionQueues | null) => {
      if (!data) loads.delete(slug);
      return data;
    });

  loads.set(slug, request);
  return request;
}
