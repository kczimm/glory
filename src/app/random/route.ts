import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { randomPick } from "@/lib/daily";

// Fresh roll on every visit: never cache the redirect.
export const dynamic = "force-dynamic";

/**
 * "/random": for the reader who doesn't want to look for anything but just
 * wants to get into a study. Drops them straight into an unexpected question,
 * skipping today's daily pick.
 *
 * The browser may send its locally-kept journey as ?skip=slug,slug: those
 * questions are excluded too, so the surprise is one they haven't walked yet.
 */
export function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("skip") ?? "";
  const skip = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 50);
  const q = randomPick(skip);
  redirect(q ? `/questions/${q.slug}` : "/questions");
}
