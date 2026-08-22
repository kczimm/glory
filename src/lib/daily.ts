import { questions, getPassageText } from "@/data/server";
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

/**
 * A surprise pick: any question at all (minus today's daily one, so a reader
 * who finished it lands somewhere fresh), for people who don't want to browse
 * but just want to get into a study.
 */
export function randomPick(excludeSlugs: string[] = []): Question | null {
  if (!questions.length) return null;
  const skip = new Set(excludeSlugs);
  const today = dailyPick();
  if (today) skip.add(today.question.slug);
  let pool = questions.filter((q) => !skip.has(q.slug));
  if (!pool.length) pool = questions;
  return pool[Math.floor(Math.random() * pool.length)];
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
