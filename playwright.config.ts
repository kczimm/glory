import { defineConfig, devices } from "@playwright/test";

/**
 * Smoke tests against the real production build.
 *
 * The unit suite covers pure modules; this covers the seams it cannot reach:
 * a study page fetching its chapter on open, the player wiring, the verse hub
 * walking into a book, and the connection map's keyboard path. Chromium only:
 * the point is that the pages work, not that every engine renders them.
 *
 * `npm run build` must have run first (CI does it in its own step). The server
 * is started here on a dedicated port so a dev server on 3000 does not clash.
 */
export default defineConfig({
  testDir: "e2e",
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? "list" : [["list"]],
  use: {
    baseURL: "http://localhost:3210",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npx next start -p 3210",
    url: "http://localhost:3210",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
