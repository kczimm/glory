/**
 * Minimal in-memory sliding-window rate limiter, keyed by client IP.
 *
 * Hobby tier has no Vercel WAF, so the API route protects itself. The
 * window lives in module scope: each serverless instance enforces its own
 * budget, which is not a global guarantee but is enough to make abuse of
 * the search endpoint expensive. Instances recycle regularly on Hobby,
 * which keeps the map from growing unbounded; a periodic sweep and a hard
 * cap guard the long-lived dev server case.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 90;

/**
 * Ceiling on tracked clients. A caller that varies its identity header would
 * otherwise create a bucket per request, so the map is bounded: expired
 * buckets go first, then the oldest inserted.
 */
const MAX_BUCKETS = 5_000;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
  if (buckets.size > MAX_BUCKETS) {
    // Map iteration is insertion order, so the first keys are the oldest.
    const excess = buckets.size - MAX_BUCKETS;
    let removed = 0;
    for (const key of buckets.keys()) {
      buckets.delete(key);
      if (++removed >= excess) break;
    }
  }
}

export function rateLimit(key: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    if (buckets.size >= MAX_BUCKETS && !buckets.has(key)) {
      // Still at the ceiling after the sweep: drop the oldest entry rather
      // than grow without bound.
      const oldest = buckets.keys().next();
      if (!oldest.done) buckets.delete(oldest.value);
    }
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }

  bucket.count += 1;
  if (bucket.count > MAX_REQUESTS) {
    return {
      ok: false,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }
  return { ok: true, retryAfter: 0 };
}

/**
 * Best-effort client IP for rate limiting behind Vercel's proxy.
 *
 * `x-real-ip` is set by the platform, so it is preferred. Otherwise the
 * *last* `x-forwarded-for` entry is used: the leftmost one is whatever the
 * caller chose to send, and keying on it let a caller mint a fresh budget
 * (and a fresh bucket) per request by varying the header. This is still
 * best-effort; the limiter is a cost control, not an authorization boundary.
 */
export function clientIp(req: Request): string {
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();

  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const hops = forwarded.split(",").map((hop) => hop.trim()).filter(Boolean);
    const nearest = hops[hops.length - 1];
    if (nearest) return nearest;
  }
  return "unknown";
}
