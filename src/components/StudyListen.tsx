"use client";

import { useMemo } from "react";
import type { SpeechItem } from "@/lib/speech";
import { replySupported } from "@/lib/reply";
import ListenButton from "@/components/ListenButton";
import StudyFollowAlong from "@/components/StudyFollowAlong";

/**
 * "Listen to this study": reads each point (heading, body, and its grounding
 * verses) aloud, starting with the first point. A follow-along scrolls to and
 * highlights the region of the page being read. The outro poses the questions
 * the study raises and scrolls the page to the "you may wonder" panel. Pairs
 * with the per-chapter Listen controls: chapters are read from the chapter
 * cards, and VisitChain chains them forward into this study's queue.
 *
 * The queue is prebuilt on the server (it needs verse text); only the
 * optional hands-free menu chunk is appended here, since recognition support
 * is a client capability.
 */
export default function StudyListen({
  slug,
  items,
  menuChunk,
}: {
  slug: string;
  items: SpeechItem[];
  menuChunk: SpeechItem | null;
}) {
  const queue = useMemo<SpeechItem[]>(
    () => (replySupported() && menuChunk ? [...items, menuChunk] : items),
    [items, menuChunk]
  );

  return (
    <>
      <ListenButton sourceId={`study:${slug}`} items={queue} label="Listen to this study" />
      <StudyFollowAlong sourceId={`study:${slug}`} />
    </>
  );
}
