import { NextRequest, NextResponse } from "next/server";
import { getPassageText } from "@/data/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";

/** Most refs any single page needs at once. */
const MAX_REFS = 60;

/**
 * Verse text for a set of references, resolved on the server.
 *
 * The review room (/memorize) is a client component whose cards live in
 * localStorage, so it cannot receive the text as a server prop. This route
 * is what keeps the vendored Bible out of that page's bundle: without it,
 * `passageText` pulls the whole 9 MB Scripture module into the browser and
 * every visit downloads a 1.4 MB chunk for a handful of verses.
 *
 * Responses are cacheable: the same refs always return the same text, so a
 * repeated request is served from the CDN instead of re-rendering.
 */
export const revalidate = 3600;

export function GET(req: NextRequest) {
  const limited = rateLimit(clientIp(req));
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } },
    );
  }

  const raw = req.nextUrl.searchParams.get("refs") ?? "";
  const refs = raw
    .split("|")
    .map((r) => r.trim())
    .filter(Boolean)
    .slice(0, MAX_REFS);

  const passages: Record<string, string> = {};
  for (const ref of refs) {
    const text = getPassageText(ref);
    if (text) passages[ref] = text;
  }

  return NextResponse.json(passages);
}
