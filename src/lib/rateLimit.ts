/**
 * Minimal in-memory sliding-window rate limiter, keyed by client IP.
 *
 * Hobby tier has no Vercel WAF, so the API route protects itself. The
 * window lives in module scope: each serverless instance enforces its own
 * budget, which is not a global guarantee but is enough to make abuse of
 * the search endpoint expensive. Instances recycle regularly on Hobby,
 * which keeps the map from growing unbounded; a periodic sweep guards the
 * long-lived dev server case.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 90;

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

function sweep(now: number) {
  if (now - lastSweep < WINDOW_MS) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export function rateLimit(key: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
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

/** Best-effort client IP for rate limiting behind Vercel's proxy. */
export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}
