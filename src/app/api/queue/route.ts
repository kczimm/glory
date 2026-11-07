import { NextRequest, NextResponse } from "next/server";
import { optionQueues } from "@/data/server";
import { rateLimit, clientIp } from "@/lib/rateLimit";

/**
 * The speech queues for one study, built on demand.
 *
 * The player chains a finished visit into the "What next?" menu, and picking
 * an option used to be instant because every option's queues were prebuilt
 * into the study page. That cost a whole study's spoken text per option in the
 * page payload (about 40 KB on the heaviest page) for a menu most listeners
 * never reach. The menu now carries slugs; the pick fetches this.
 *
 * A study's queues are static content, so the answer is cacheable.
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

  const slug = (req.nextUrl.searchParams.get("study") ?? "").trim();
  if (!slug) {
    return NextResponse.json({ error: "Missing study" }, { status: 400 });
  }

  const queues = optionQueues(slug);
  if (!queues) {
    return NextResponse.json({ error: "No such study" }, { status: 404 });
  }

  return NextResponse.json(queues);
}
