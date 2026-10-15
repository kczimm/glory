import { NextResponse } from "next/server";
import {
  graphVerseTexts,
  graphUsages,
  citedVersesBySlug,
} from "@/data/server";

/**
 * The knowledge-graph payload the connection explorer needs: verse text for
 * every connection endpoint, which studies cite each node, and which verses
 * each study cites.
 *
 * This exists so the graph is downloaded once per session instead of being
 * inlined as props into every prerendered /connections/[slug] page. Before
 * this route, each of the 975 graph pages embedded the whole payload, which
 * made the server output ~3 GB per deployment; the data now lives here as a
 * single static response.
 *
 * `force-static` prerenders the GET at build time (route handlers are not
 * cached by default), so every request is served from the CDN and the graph
 * is computed exactly once per deployment.
 */
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    texts: graphVerseTexts(),
    usages: graphUsages(),
    cited: citedVersesBySlug(),
  });
}
