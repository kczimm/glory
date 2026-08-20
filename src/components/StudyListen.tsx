"use client";

import { useMemo } from "react";
import type { Question } from "@/data/types";
import { getPassageText, getQuestion, voiceMenu } from "@/data";
import { studyItems } from "@/lib/speech";
import { replySupported } from "@/lib/reply";
import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import StudyFollowAlong from "@/components/StudyFollowAlong";

/**
 * "Listen to this study": reads each point (heading, body, and its grounding
 * verses) aloud, starting with the first point. A follow-along scrolls to and
 * highlights the region of the page being read. The outro poses the questions
 * the study raises and scrolls the page to the "you may wonder" panel. Pairs
 * with the per-chapter Listen controls: chapters are read from the chapter
 * cards, and VisitChain chains them forward into this study's queue.
 */
export default function StudyListen({ question }: { question: Question }) {
  const items = useMemo<SpeechItem[]>(
    () =>
      studyItems(question, getPassageText, {
        outroTargetId: "raises",
        resolveTitle: (slug) => getQuestion(slug)?.question ?? null,
        menu: replySupported()
          ? voiceMenu(question).map((q) => q.question)
          : [],
      }),
    [question]
  );

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