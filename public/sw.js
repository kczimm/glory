/*
 * Glory service worker: offline support for the installed PWA.
 *
 * Strategy:
 *   - App shell + icons: precached at install (small).
 *   - Immutable build assets (/_next/static/*): cache-first.
 *   - Page navigations: network-first, fall back to the last cached copy,
 *     then to /offline when there is nothing cached at all.
 *   - RSC/prefetch payloads: stale-while-revalidate, capped.
 *   - Everything else (API routes, server actions, cross-origin audio):
 *     passed straight through to the network.
 *
 * Bump CACHE_VERSION whenever the shell changes in a way the runtime
 * caching would not pick up on its own.
 */

const CACHE_VERSION = "v1";
const STATIC_CACHE = `glory-static-${CACHE_VERSION}`;
const PAGES_CACHE = `glory-pages-${CACHE_VERSION}`;

// Small, stable, always-useful set. Scripture content itself ships inside
// the JS bundles under /_next/static, so caching the shell plus whatever
// the reader has visited gives real offline coverage without a huge
// upfront install.
const PRECACHE_URLS = ["/", "/bible", "/questions", "/offline"];

// Upper bound on cached RSC payloads / pages so storage stays reasonable.
const PAGES_CACHE_LIMIT = 80;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      // Cache entries one by one: one failed URL should not abort install.
      await Promise.all(
        PRECACHE_URLS.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => {}),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(
            (name) => name !== STATIC_CACHE && name !== PAGES_CACHE,
          )
          .map((name) => caches.delete(name)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // Cross-origin (R2 audio etc.) is content-addressed and CDN-cached;
  // leave it to the browser HTTP cache.
  if (url.origin !== self.location.origin) return;
  // Server actions and API routes must reach the server.
  if (url.pathname.startsWith("/api/")) return;
  if (request.headers.has("next-action")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (isImmutableAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Remaining same-origin GETs (RSC payloads, prefetches): serve from
  // cache while refreshing in the background.
  event.respondWith(staleWhileRevalidate(request));
});

function isImmutableAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/icon.svg"
  );
}

async function handleNavigation(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(PAGES_CACHE);
      cache.put(request, response.clone()).then(() => trim(PAGES_CACHE));
    }
    return response;
  } catch {
    const cached =
      (await caches.match(request)) ||
      (await caches.match("/offline", { ignoreSearch: true }));
    if (cached) return cached;
    throw new Error("offline and nothing cached");
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        const cache = await caches.open(PAGES_CACHE);
        cache.put(request, response.clone()).then(() => trim(PAGES_CACHE));
      }
      return response;
    })
    .catch(() => undefined);
  return cached || (await network) || Response.error();
}

async function trim(cacheName) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - PAGES_CACHE_LIMIT; i++) {
    await cache.delete(keys[i]);
  }
}
