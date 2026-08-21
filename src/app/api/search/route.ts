import { NextRequest, NextResponse } from "next/server";
import { searchScripture, searchQuestions } from "@/lib/search";
import { snippet } from "@/lib/snippet";
import { verseSlug } from "@/data/ref";
import { categoryOf } from "@/data/server";

/**
 * Server-side search over the whole vendored Bible and the studies.
 * Keeps the 9.5 MB Scripture index out of the client bundle entirely:
 * the browser sends a query, the server scans its own in-memory index.
 */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
  const verseLimit = Math.min(Number(req.nextUrl.searchParams.get("verses")) || 8, 40);
  const qLimit = Math.min(Number(req.nextUrl.searchParams.get("studies")) || 6, 40);
  if (!q) return NextResponse.json({ verses: [], questions: [] });

  const verses = searchScripture(q, verseLimit).map((v) => {
    const sn = snippet(v.text, q);
    return {
      ref: v.ref,
      href: `/verses/${verseSlug(v.ref)}`,
      ...sn,
    };
  });
  const questions = searchQuestions(q, qLimit).map((question) => ({
    slug: question.slug,
    question: question.question,
    summary: question.summary,
    categoryTitle: categoryOf(question)?.title ?? "",
  }));

  return NextResponse.json({ verses, questions });
}
