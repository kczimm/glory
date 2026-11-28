import { expect, test } from "@playwright/test";

/**
 * The whole-Bible reader is the other place a chapter is read, and chapter
 * notes belong to the chapter rather than to a study. These pin that the
 * notes are prerendered there and absent where no entry exists.
 */
test("a chapter with notes shows them on the Bible page", async ({ page }) => {
  await page.goto("/bible/isaiah-53");

  const notes = page.locator("#notes-bible-isaiah-53");
  await expect(notes).toBeAttached();
  await expect(notes).not.toHaveAttribute("open");

  await notes.getByText("Notes on this chapter").click();
  await expect(notes).toHaveAttribute("open", "");
  // The page has one h1 and no h2 above the panel, so the panel's sections
  // must be h2 or the document outline skips a level.
  await expect(notes.locator("h3")).toHaveCount(0);
  await expect(notes.getByRole("heading", { name: "The setting", level: 2 })).toBeVisible();
  await expect(notes).toContainText("servant");
  await expect(notes).toContainText("as a lamb that is led to the slaughter");
});

test("a chapter without notes renders none", async ({ page }) => {
  const response = await page.goto("/bible/john-1");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "John 1", level: 1 })).toBeVisible();
  await expect(page.getByText("Notes on this chapter")).toHaveCount(0);
});
