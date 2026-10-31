import { describe, expect, it } from "vitest";
import { MAX_REFS_PER_REQUEST, chunkRefs } from "../src/lib/passage";

describe("chunkRefs", () => {
  it("keeps every ref, in order, exactly once", () => {
    const refs = Array.from({ length: 137 }, (_, i) => `Psalm 119:${i + 1}`);
    const batches = chunkRefs(refs);
    expect(batches.flat()).toEqual(refs);
  });

  it("never asks for more refs than one request resolves", () => {
    const refs = Array.from({ length: 137 }, (_, i) => `Psalm 119:${i + 1}`);
    for (const batch of chunkRefs(refs)) {
      expect(batch.length).toBeLessThanOrEqual(MAX_REFS_PER_REQUEST);
    }
    // 137 refs must not fit in one request: that was the dropped-tail bug.
    expect(chunkRefs(refs).length).toBe(3);
  });

  it("returns no batches for no refs", () => {
    expect(chunkRefs([])).toEqual([]);
  });
});
