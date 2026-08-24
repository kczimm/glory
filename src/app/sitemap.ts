import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { verseSlug } from "@/data";
import { questions, graphVerseRefs } from "@/data/server";
import { categories } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/questions`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/verses`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const questionRoutes: MetadataRoute.Sitemap = questions.map((q) => ({
    url: `${SITE_URL}/questions/${q.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Every cross-reference hub and cited verse already has a static /verses page.
  const verseRoutes: MetadataRoute.Sitemap = graphVerseRefs().map((ref) => ({
    url: `${SITE_URL}/verses/${verseSlug(ref)}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  const trailRoutes: MetadataRoute.Sitemap = [...categories]
    .sort((a, b) => a.order - b.order)
    .map((c) => ({
      url: `${SITE_URL}/trails/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...trailRoutes,
    ...questionRoutes,
    ...verseRoutes,
  ];
}
