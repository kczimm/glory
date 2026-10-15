import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Crawl policy.
 *
 * The reader and the cross-reference graph exist for people, not for
 * enumeration: /bible holds 1,189 chapters and /verses roughly 1,800 hubs,
 * and crawlers walking them were the largest single source of traffic. They
 * stay reachable for anyone following a link, but bulk crawlers are asked to
 * stay out, and the pages with nothing to index at all are closed outright.
 */

/** Paths with no indexable content: search results, the review room,
 *  print views, and the JSON API. */
const NON_CONTENT = ["/api/", "/search", "/memorize", "/offline"];

/** Crawlers that read the whole site on a schedule for their own index.
 *  None of them send readers here, and together they were the bulk of the
 *  page requests, so they are asked not to crawl at all. */
const BULK_CRAWLERS = [
  "PetalBot",
  "Amazonbot",
  "AhrefsBot",
  "SemrushBot",
  "DataForSeoBot",
  "Bytespider",
  "MJ12bot",
  "DotBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...NON_CONTENT, "/questions/*/print"],
      },
      {
        userAgent: BULK_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
