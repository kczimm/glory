"use client";

import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import StudyFollowAlong from "@/components/StudyFollowAlong";

/**
 * "Listen to the whole visit": speaks the question and summary at the top of
 * the page (the opening answer), then VisitChain's continuation carries on
 * through every chapter and into the study, ending at the "What next?"
 * panel. One tap plays the entire visit. The follow-along highlights the
 * header while the intro reads; ChapterReader and StudyFollowAlong take over
 * visually as the chained queues play.
 */
export default function VisitListen({
  slug,
  items,
}: {
  slug: string;
  items: SpeechItem[];
}) {
  return (
    <>
      <ListenButton sourceId={`visit:${slug}`} items={items} label="Listen to the whole visit" />
      <StudyFollowAlong sourceId={`visit:${slug}`} />
    </>
  );
}
