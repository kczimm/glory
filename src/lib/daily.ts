import { questions, getPassageText } from "@/data";
import type { Question } from "@/data/types";

/**
 * The daily pick: one question (and its first key verse) chosen
 * deterministically from the UTC day, so everyone sees the same pair all day.
 * Entry-point questions (nothing followsFrom them) are preferred so readers
 * don't land mid-journey; falls back to the full set.
 */
export interface DailyPick {
  dateKey: string;
  question: Question;
  verse: string;
  verseText: string | null;
}

export function dailyPick(now: number = Date.now()): DailyPick | null {
  if (!questions.length) return null;
  const entries = questions.filter((q) => q.followsFrom.length === 0);
  const pool = entries.length ? entries : questions;
  const sorted = [...pool].sort((a, b) => a.order - b.order);
  const day = Math.floor(now / 86_400_000);
  const question = sorted[day % sorted.length];
  const verse = question.keyVerses[0];
  return {
    dateKey: new Date(day * 86_400_000).toISOString().slice(0, 10),
    question,
    verse,
    verseText: verse ? getPassageText(verse) : null,
  };
}
