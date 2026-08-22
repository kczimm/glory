import { describe, expect, it } from "vitest";
import { snippet } from "../src/lib/snippet";

describe("snippet", () => {
  it("extracts the match with surrounding context", () => {
    const s = snippet(
      "For God so loved the world that he gave his only Son",
      "so loved"
    );
    expect(s.match).toBe("so loved");
    expect(s.before).toContain("For God");
    expect(s.after).toContain("the world");
  });

  it("is case-insensitive but preserves original casing in the match", () => {
    const s = snippet("In the beginning was the Word", "WORD");
    expect(s.match).toBe("Word");
  });

  it("adds ellipses when text is truncated", () => {
    const long = "a".repeat(100) + " needle " + "b".repeat(100);
    const s = snippet(long, "needle", 10);
    expect(s.before.startsWith("…")).toBe(true);
    expect(s.after.endsWith("…")).toBe(true);
  });

  it("returns the whole text as after when nothing matches", () => {
    const s = snippet("hello world", "zzz");
    expect(s).toEqual({ before: "", match: "", after: "hello world" });
  });

  it("handles regex-significant characters literally", () => {
    const s = snippet("price is $3.16 (usd)", "$3.16");
    expect(s.match).toBe("$3.16");
  });
});
