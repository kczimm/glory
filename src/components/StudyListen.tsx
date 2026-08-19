"use client";

import { useMemo } from "react";
import type { Question } from "@/data/types";
import { getPassageText } from "@/data";
import { studyItems } from "@/lib/speech";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import StudyFollowAlong from "@/components/StudyFollowAlong";

/**
 * "Listen to this study": reads each point (heading, body, and its grounding
 * verses) aloud, starting with the first point. A follow-along scrolls to and
 * highlights the region of the page being read. Pairs with the per-chapter
 * Listen controls: chapters are read from the chapter cards.
 */
export default function StudyListen({ question }: { question: Question }) {
  const items = useMemo<SpeechItem[]>(() => studyItems(question, getPassageText), [
    question,
  ]);

  return (
    <>
      <ListenButton
        sourceId={`study:${question.slug}`}
        items={items}
        label="Listen to this study"
      />
      <StudyFollowAlong sourceId={`study:${question.slug}`} />
    </>
  );
}