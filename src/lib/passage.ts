/**
 * The request contract for /api/passage, shared by the route and its client.
 *
 * The route answers at most MAX_REFS_PER_REQUEST refs per call (it exists to
 * keep the vendored Bible out of the review room's bundle, not to stream the
 * whole Bible). Callers therefore batch: an oversized request used to have its
 * tail dropped on the server while the client marked every ref as fetched, so
 * verses past the cap could never be retried and sat on "Could not load this
 * verse" for good. Keeping the number in one place means the two sides cannot
 * disagree about it again.
 */

/** Most refs any single /api/passage request resolves. */
export const MAX_REFS_PER_REQUEST = 60;

/** Split refs into request-sized batches, preserving order. */
export function chunkRefs(
  refs: string[],
  size: number = MAX_REFS_PER_REQUEST
): string[][] {
  const out: string[][] = [];
  for (let i = 0; i < refs.length; i += size) out.push(refs.slice(i, i + size));
  return out;
}
