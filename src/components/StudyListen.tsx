"use client";

import { useMemo } from "react";
import type { Question } from "@/data/types";
import { getPassageText } from "@/data";
import { studyItems } from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";

/**
 * "Listen to this study": the question, the short answer, then each point
 * with its body and grounding verses, read aloud. Pairs with the per-chapter
 * Listen controls: chapters are read from the chapter cards.
 */
export default function StudyListen({ question }: { question: Question }) {
  const items = useMemo<SpeechItem[]>(() => studyItems(question, getPassageText), [
    question,
  ]);

  return (
    <ListenButton
      sourceId={`study:${question.slug}`}
      items={items}
      label="Listen to this study"
    />
  );
}