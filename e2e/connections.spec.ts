import { expect, test } from "@playwright/test";

/**
 * The connection map: it renders, and it can be driven from the keyboard.
 * The nodes used to be `<g onClick>` with no focus path at all, so this test
 * is the guard on that.
 */
test("the map renders and a node expands on Enter", async ({ page }) => {
  await page.goto("/connections/john-8.58");

  const nodes = page.locator("[data-graph-node]");
  await expect(nodes.first()).toBeVisible();
  const before = await nodes.count();
  expect(before).toBeGreaterThan(0);

  // Every node is an accessible button, not a bare SVG group.
  await expect(nodes.first()).toHaveRole("button");
  await expect(nodes.first()).toHaveAttribute(
    "aria-label",
    /connections?\. Expand in the map$/,
  );

  const start = page.getByRole("button", { name: /^John 8:58,/ });
  await start.focus();
  await page.keyboard.press("Enter");

  await expect
    .poll(async () => nodes.count(), { timeout: 10_000 })
    .toBeGreaterThan(before);
});

test("the map settles without motion when reduced motion is requested", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/connections/john-8.58");

  const nodes = page.locator("[data-graph-node]");
  await expect(nodes.first()).toBeVisible();
  const node = nodes.first();

  const before = await node.getAttribute("transform");
  await page.waitForTimeout(600);
  // No simulation frames: the node holds the position expand() gave it.
  expect(await node.getAttribute("transform")).toBe(before);
  await context.close();
});
