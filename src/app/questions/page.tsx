import type { Metadata } from "next";
import QuestionsIndex from "@/components/QuestionsIndex";

export const metadata: Metadata = {
  title: "All Questions",
  description:
    "Every question in Glory: a question-driven study of who God is and our relationship with Him, grounded in Scripture.",
};

export default function QuestionsIndexPage() {
  return <QuestionsIndex />;
}