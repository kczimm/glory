import { expect, test } from "@playwright/test";

/**
 * The app shell and the one thing every keyboard reader meets first.
 */
test("home renders and the skip link is the first stop", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("navigation")).toBeVisible();

  await page.keyboard.press("Tab");
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
  expect(focused).toBe("Skip to content");

  // Following it lands on the main landmark, not the nav.
  await page.keyboard.press("Enter");
  const main = await page.evaluate(() => document.activeElement?.id);
  expect(main).toBe("main");
});
