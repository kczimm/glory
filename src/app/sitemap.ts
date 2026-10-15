import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { questions } from "@/data/server";
import { categories } from "@/data";

/**
 * The sitemap lists the pages worth landing on: the study corpus, the trails,
 * and the two browsing indexes. It deliberately does not list the deep reader
 * or graph URLs (see the note below).
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/questions`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/verses`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/bible`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const questionRoutes: MetadataRoute.Sitemap = questions.map((q) => ({
    url: `${SITE_URL}/questions/${q.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /* The deep reader and graph pages are deliberately NOT listed.
     /bible enumerates 1,189 chapters and /verses roughly 1,800 hubs; feeding
     those lists to crawlers drove the crawl of the two heaviest route
     families on the site without bringing readers. Both indexes stay listed
     below, and every verse and chapter is still reachable by following links
     from the studies, so the pages are discoverable without being advertised
     as a corpus to enumerate. */

  const trailRoutes: MetadataRoute.Sitemap = [...categories]
    .sort((a, b) => a.order - b.order)
    .map((c) => ({
      url: `${SITE_URL}/trails/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...trailRoutes, ...questionRoutes];
}
