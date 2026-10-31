import { describe, expect, it } from "vitest";
import { searchScripture } from "../src/lib/search";

describe("searchScripture ranking", () => {
  it("floats a verse the studies cite as a range above an earlier incidental match", () => {
    // The graph cites Romans 8:38 as part of "Romans 8:38-39". Compared raw
    // against canonical verse keys that range never counted as known, so
    // 1 Corinthians 3:22 (earlier in the index) took the top spot.
    const refs = searchScripture("things present", 5).map((v) => v.ref);
    expect(refs[0]).toBe("Romans 8:38");
  });

  it("floats a verse the studies cite with the Psalm alias", () => {
    // Content writes "Psalm 23:1"; the verse index is keyed "Psalms 23:1".
    const refs = searchScripture("is my shepherd", 5).map((v) => v.ref);
    expect(refs[0]).toBe("Psalms 23:1");
  });
});
