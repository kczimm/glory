"use client";

import type { SpeechItem } from "@/lib/speech";
import ListenButton from "@/components/ListenButton";
import StudyFollowAlong from "@/components/StudyFollowAlong";

/**
 * "Listen to this study": reads each point (heading, body, and its grounding
 * verses) aloud, starting with the first point. A follow-along scrolls to and
 * highlights the region of the page being read. The outro poses the questions
 * the study raises and scrolls the page to the "you may wonder" panel; when
 * the queue ends, VisitChain's continuation turns the player bar into the
 * "What next?" panel. Pairs with the per-chapter Listen controls: chapters
 * are read from the chapter cards, and VisitChain chains them forward into
 * this study's queue.
 *
 * The queue is prebuilt on the server (it needs verse text).
 */
export default function StudyListen({
  slug,
  items,
}: {
  slug: string;
  items: SpeechItem[];
}) {
  return (
    <>
      <ListenButton sourceId={`study:${slug}`} items={items} label="Listen to this study" />
      <StudyFollowAlong sourceId={`study:${slug}`} />
    </>
  );
}
