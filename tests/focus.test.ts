import { describe, expect, it } from "vitest";
import { inFocus, parseFocus } from "../src/lib/focus";

describe("parseFocus", () => {
  it("parses a single verse, a range, and a list", () => {
    expect(parseFocus("16")).toEqual([{ start: 16, end: 16 }]);
    expect(parseFocus("5-15")).toEqual([{ start: 5, end: 15 }]);
    expect(parseFocus("1-4, 12")).toEqual([
      { start: 1, end: 4 },
      { start: 12, end: 12 },
    ]);
  });

  it("returns null for an absent or unparseable focus", () => {
    expect(parseFocus(undefined)).toBeNull();
    expect(parseFocus("")).toBeNull();
    expect(parseFocus("15-5")).toBeNull();
    expect(parseFocus("verse 5")).toBeNull();
    expect(parseFocus("5-")).toBeNull();
    expect(parseFocus("1-4, x")).toBeNull();
  });

  it("treats every verse as in focus when there is none", () => {
    expect(inFocus(null, 1)).toBe(true);
    expect(inFocus(parseFocus("5-15"), 5)).toBe(true);
    expect(inFocus(parseFocus("5-15"), 15)).toBe(true);
    expect(inFocus(parseFocus("5-15"), 4)).toBe(false);
    expect(inFocus(parseFocus("1-4, 12"), 12)).toBe(true);
    expect(inFocus(parseFocus("1-4, 12"), 6)).toBe(false);
  });
});
