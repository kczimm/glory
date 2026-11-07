"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { SpeechItem } from "@/lib/speech";
import {
  playPassage,
  presentChoices,
  registerContinuation,
  stop,
} from "@/lib/speech";
import { loadOptionQueues } from "@/lib/optionQueues";


/**
 * Forward chaining for the question page: whichever entry point the listener
 * used (chapter 1, 2, 3, or the study), the visit plays forward from there.
 * Each passage's queue registers a continuation into the next passage, and
 * the last passage continues into the study, which closes the visit with a
 * visible "What next?" menu in the player bar.
 *
 * Every queue is prebuilt on the server (it needs verse text) and arrives as
 * serializable props: this component only wires the playback graph together.
 * The one exception is the "What next?" options: their queues are fetched when
 * the reader picks one (see @/lib/optionQueues), because prebuilding them
 * serialized several whole studies into every study page.
 *
 * The study's continuation is always the visual menu (`presentChoices`): it
 * needs no microphone and no user gesture, so it works on every browser,
 * including iOS Safari where arming recognition mid-listen fails.
 * Picking an option navigates to that question (so
 * the page matches the audio) and starts its first chapter or study queue;
 * from there the new visit chains forward under its own VisitChain,
 * indefinitely.
 *
 * Renders nothing. Registrations are keyed by the exact sourceIds the
 * ListenButtons use, so the player bar, chapter readers, and follow-along
 * track every chained source with no coordination between them. Unmounting
 * unregisters every link.
 */

export interface ChainQueue {
  sourceId: string;
  items: SpeechItem[];
}

export interface ChainOption {
  slug: string;
  /** the choice label shown in the player-bar "What next?" panel */
  label: string;
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
    // question to offer).
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
              // The queue is built on demand: a pick may outlive this
              // component (navigation unmounts it), so the promise is not
              // gated on the disposed flag. The player is a module singleton.
              void loadOptionQueues(next.slug).then((queues) => {
                if (!queues) return;
                const queue = queues.firstChapter ?? queues.study;
                playPassage(queue.sourceId, queue.items);
              });
            },
          );
        })
      );
    }

    return () => {
      disposed = true;
      unsub.forEach((u) => u());
    };
  }, [segments, options, router, slug]);

  return null;
}
