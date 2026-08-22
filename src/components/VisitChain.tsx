"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { SpeechItem } from "@/lib/speech";
import {
  choose,
  playPassage,
  presentChoices,
  registerContinuation,
  stop,
} from "@/lib/speech";
import { listenForReply, replySupported } from "@/lib/reply";

/**
 * Forward chaining for the question page: whichever entry point the listener
 * used (chapter 1, 2, 3, or the study), the visit plays forward from there.
 * Each passage's queue registers a continuation into the next passage, and
 * the last passage continues into the study, which closes the visit with a
 * visible "What next?" menu in the player bar.
 *
 * Every queue is prebuilt on the server (it needs verse text) and arrives as
 * serializable props: this component only wires the playback graph together.
 *
 * The study's continuation is always the visual menu (`presentChoices`): it
 * needs no microphone and no user gesture, so it works on every browser,
 * including iOS Safari where arming recognition mid-listen fails. Where
 * speech recognition genuinely works (desktop Chrome/Android), a spoken
 * "one / two / three / stop" rides on top as progressive enhancement;
 * silence, errors, or timeouts simply leave the visual panel up instead of
 * ending the visit dead. Picking an option navigates to that question (so
 * the page matches the audio) and starts its first chapter or study queue;
 * from there the new visit chains forward under its own VisitChain,
 * indefinitely.
 *
 * Renders nothing. Registrations are keyed by the exact sourceIds the
 * ListenButtons use, so the player bar, chapter readers, and follow-along
 * track every chained source with no coordination between them. Unmounting
 * unregisters every link and cancels any in-flight reply listen.
 */

export interface ChainQueue {
  sourceId: string;
  items: SpeechItem[];
}

export interface ChainOption {
  slug: string;
  /** the choice label shown in the player-bar "What next?" panel */
  label: string;
  /** prebuilt queue for the option's first chapter, if it has passages */
  firstChapter: ChainQueue | null;
  /** prebuilt study queue for the option */
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

  useEffect(() => {
    const unsub: Array<() => void> = [];
    let disposed = false;
    let cancelReply: (() => void) | null = null;

    // Chapter -> next chapter -> study progression.
    const segs = segments;
    for (let i = 0; i < segs.length - 1; i++) {
      const next = segs[i + 1];
      unsub.push(
        registerContinuation(segs[i].sourceId, () =>
          playPassage(next.sourceId, next.items)
        )
      );
    }

    // Study end -> the "What next?" panel (when there is at least one next
    // question to offer). Voice replies are layered on only where
    // recognition exists; nothing is gated on them.
    if (options.length > 0) {
      unsub.push(
        registerContinuation(`study:${slug}`, () => {
          if (disposed) return;
          presentChoices(
            options.map((o) => ({ slug: o.slug, label: o.label })),
            (index) => {
              if (disposed) {
                // The page unmounted between presenting the choices and the
                // pick (e.g. manual navigation): choose() has already reset
                // the panel, so just decline; do not hijack whatever is on
                // screen now with this page's options.
                return;
              }
              const next = options[index];
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
              if (queue) playPassage(queue.sourceId, queue.items);
            },
          );
          if (replySupported()) {
            cancelReply = listenForReply({
              count: options.length,
              onResult: (r) => {
                if (disposed) return;
                // An explicit spoken "stop" ends deliberately; silence or an
                // error falls through to the visual panel, which stays up.
                if (r.kind === "choose") choose(r.index);
                else if (r.kind === "stop") stop();
              },
            });
          }
        })
      );
    }

    return () => {
      disposed = true;
      cancelReply?.();
      unsub.forEach((u) => u());
    };
  }, [segments, options, router, slug]);

  return null;
}
