import { describe, expect, it } from "vitest";
import { BOOK_ALIASES, parseRef, verseSlug } from "../src/data/ref";

describe("parseRef", () => {
  it("parses single verses", () => {
    expect(parseRef("John 3:16")).toEqual({
      book: "John",
      chapter: 3,
      from: 16,
      to: 16,
    });
  });

  it("parses verse ranges", () => {
    expect(parseRef("Isaiah 53:10-12")).toEqual({
      book: "Isaiah",
      chapter: 53,
      from: 10,
      to: 12,
    });
  });

  it("applies book aliases", () => {
    expect(parseRef("Psalm 23:1")?.book).toBe(BOOK_ALIASES.Psalm);
    expect(parseRef("Psalms 23:1")?.book).toBe("Psalms");
  });

  it("handles multi-word book names", () => {
    expect(parseRef("1 Corinthians 13:4")?.book).toBe("1 Corinthians");
  });

  it("returns null for malformed references", () => {
    for (const bad of ["John", "John 3", "3:16", "", "John 3:16-"]) {
      expect(parseRef(bad)).toBeNull();
    }
  });
});

describe("verseSlug", () => {
  it("slugs refs for URLs", () => {
    expect(verseSlug("John 3:16")).toBe("john-3.16");
    expect(verseSlug("1 Corinthians 13:4-7")).toBe("1-corinthians-13.4-7");
  });

  it("collapses whitespace and trims", () => {
    expect(verseSlug("  John   3:16  ")).toBe("john-3.16");
  });

  it("slugs are stable and unambiguous per ref", () => {
    expect(verseSlug("John 3:16")).toBe(verseSlug("John 3:16".trim().toLowerCase()));
    expect(verseSlug("Isaiah 53:10-12")).not.toBe(verseSlug("Isaiah 53:1-12"));
  });
});
