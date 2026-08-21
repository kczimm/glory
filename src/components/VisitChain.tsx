"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { SpeechItem } from "@/lib/speech";
import {
  playPassage,
  registerContinuation,
  stop,
} from "@/lib/speech";
import { listenForReply, replySupported } from "@/lib/reply";

/**
 * Forward chaining for the question page: whichever entry point the listener
 * used (chapter 1, 2, 3, or the study), the visit plays forward from there.
 * Each passage's queue registers a continuation into the next passage, and
 * the last passage continues into the study, which closes the visit with an
 * outro + a hands-free "keep going" menu.
 *
 * Every queue is prebuilt on the server (it needs verse text) and arrives as
 * serializable props: this component only wires the playback graph together.
 *
 * On browsers with speech recognition (Chrome/Android), the study's own
 * continuation is not a fixed next queue but the reply listener: when the
 * outro asks the question and the listener answers "one / two / three / keep
 * going / stop", we either route into the chosen next question's visit
 * (chapters -> study -> outro -> menu, indefinitely) or end gracefully.
 * Without recognition this listener isn't registered and the visit simply
 * ends after the outro, exactly as before.
 *
 * Renders nothing. Registrations are keyed by the exact sourceIds the
 * ListenButtons use, so the player bar, chapter readers, and follow-along
 * track every chained source with no coordination between them. Unmounting
 * unregisters every link and cancels any in-flight reply listen.
 */

export interface ChainQueue {
  sourceId: string;
  items: SpeechItem[];
  /**
   * The optional hands-free "keep going" chunk, appended by the client only
   * when speech recognition is available.
   */
  menuChunk: SpeechItem | null;
}

export interface ChainOption {
  slug: string;
  /** the spoken label for the hands-free menu ("say one for …") */
  label: string;
  /** prebuilt queue for the option's first chapter, if it has passages */
  firstChapter: ChainQueue | null;
  /** prebuilt study queue (with its own hands-free menu chunk) */
  study: ChainQueue | null;
}

export default function VisitChain({
  slug,
  segments,
  options,
}: {
  slug: string;
  /** chapter queues followed by the study queue, in play order */
  segments: ChainQueue[];
  options: ChainOption[];
}) {
  const router = useRouter();
  const handsfree = replySupported();

  // Append each queue's hands-free "keep going" chunk only when speech
  // recognition exists; browsers without it end gracefully after the outro.
  const withMenu = useCallback(
    (q: ChainQueue): SpeechItem[] =>
      handsfree && q.menuChunk ? [...q.items, q.menuChunk] : q.items,
    [handsfree]
  );

  const effectiveSegments = useMemo<ChainQueue[]>(
    () => segments.map((s) => ({ ...s, items: withMenu(s) })),
    [segments, withMenu]
  );

  useEffect(() => {
    const unsub: Array<() => void> = [];
    let disposed = false;
    let cancelReply: (() => void) | null = null;

    // Chapter -> next chapter -> study progression.
    const segs = effectiveSegments;
    for (let i = 0; i < segs.length - 1; i++) {
      const next = segs[i + 1];
      unsub.push(
        registerContinuation(segs[i].sourceId, () =>
          playPassage(next.sourceId, next.items)
        )
      );
    }

    // Study end -> hands-free "keep going" (only when recognition exists and
    // there is at least one next question to offer).
    if (handsfree && options.length > 0) {
      unsub.push(
        registerContinuation(`study:${slug}`, () => {
          if (disposed) return;
          cancelReply = listenForReply({
            count: options.length,
            onResult: (r) => {
              if (disposed) return;
              if (r.kind !== "choose") {
                stop();
                return;
              }
              const next = options[r.index];
              if (!next) {
                stop();
                return;
              }
              // Enter the chosen question's visit: navigate so the page (and
              // its ChapterReaders / StudyFollowAlong) matches the audio, and
              // start its first queue. From here the new visit chains forward
              // under the destination page's own VisitChain.
              router.push(`/questions/${next.slug}`);
              const queue = next.firstChapter ?? next.study;
              if (queue) playPassage(queue.sourceId, withMenu(queue));
            },
          });
        })
      );
    }

    return () => {
      disposed = true;
      cancelReply?.();
      unsub.forEach((u) => u());
    };
  }, [effectiveSegments, options, handsfree, router, slug, withMenu]);

  return null;
}
