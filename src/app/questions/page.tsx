import type { Metadata } from "next";
import { redirect } from "next/navigation";
import QuestionsIndex from "@/components/QuestionsIndex";
import { categories, getCategory } from "@/data";
import { teasers, questionsByCategory } from "@/data/server";

export const metadata: Metadata = {
  title: "All Questions",
  description:
    "Every question in Glory: a question-driven study of who God is and our relationship with Him, grounded in Scripture.",
};

export default async function QuestionsIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ trail?: string | string[] }>;
}) {
  // Legacy deep links: /questions?trail=<slug> now lives at /trails/<slug>.
  const raw = (await searchParams).trail;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  if (slug && getCategory(slug)) redirect(`/trails/${slug}`);

  const counts = Object.fromEntries(
    categories.map((c) => [c.slug, questionsByCategory(c.slug).length])
  );
  return <QuestionsIndex categories={categories} teasers={teasers()} counts={counts} />;
}
