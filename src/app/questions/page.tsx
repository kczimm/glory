import type { Metadata } from "next";
import QuestionsIndex from "@/components/QuestionsIndex";
import { categories } from "@/data";
import { teasers, questionsByCategory } from "@/data/server";

export const metadata: Metadata = {
  title: "All Questions",
  description:
    "Every question in Glory: a question-driven study of who God is and our relationship with Him, grounded in Scripture.",
};

export default function QuestionsIndexPage() {
  const counts = Object.fromEntries(
    categories.map((c) => [c.slug, questionsByCategory(c.slug).length])
  );
  return <QuestionsIndex categories={categories} teasers={teasers()} counts={counts} />;
}
