import { NextRequest, NextResponse } from "next/server";
import { getChapterPair } from "@/data/server";
import { parseChapterParams } from "@/lib/chapter";
import { rateLimit, clientIp } from "@/lib/rateLimit";

/**
 * One chapter's text, in both readings, resolved on the server.
 *
 * The study page's chapter reader starts collapsed, so its text is a payload
 * the reader may never need. Before this route the whole chapter (and its
 * King James counterpart) travelled as props inside every study page's HTML
 * and RSC payload. Now it is fetched when the chapter is opened, and the
 * vendored Bible stays out of the browser bundle either way.
 *
 * Both readings come back in one response, so switching translation updates
 * an open chapter in place with no refetch.
 *
 * Responses are cacheable: a chapter's text never changes, so a repeat
 * request is answered from the CDN rather than re-rendering.
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

  const parsed = parseChapterParams(
    req.nextUrl.searchParams.get("book"),
    req.nextUrl.searchParams.get("chapter"),
  );
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const verses = getChapterPair(parsed.book, parsed.chapter);
  if (!verses) {
    return NextResponse.json({ error: "No such chapter" }, { status: 404 });
  }

  return NextResponse.json({
    book: parsed.book,
    chapter: parsed.chapter,
    verses,
  });
}
