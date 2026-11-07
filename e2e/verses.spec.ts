import { expect, test } from "@playwright/test";

/**
 * The verse index, walked the way a reader walks it: hub -> book -> verse.
 */
test("the verse hub walks into a book and then a verse", async ({ page }) => {
  await page.goto("/verses");

  await expect(page.getByRole("heading", { name: /Scripture opens Scripture/i })).toBeVisible();

  await page.getByRole("link", { name: "Psalms", exact: true }).click();
  await expect(page).toHaveURL(/\/verses\/book\/psalms$/);
  await expect(page.getByRole("heading", { name: "Psalms", level: 1 })).toBeVisible();

  const firstVerse = page.locator('a[href^="/verses/psalms-"]').first();
  const ref = ((await firstVerse.textContent()) ?? "").split("·")[0].trim();
  expect(ref).toMatch(/^Psalms \d+:\d+/);
  await firstVerse.click();

  await expect(page).toHaveURL(/\/verses\/psalms-/);
  // The verse page resolves the slug and shows the ref it resolved to.
  await expect(page.locator("article")).toContainText(ref);
});

test("an unknown book answers 404", async ({ page }) => {
  const response = await page.goto("/verses/book/narnia");
  expect(response?.status()).toBe(404);
});
