"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { Question } from "@/data/types";
import {
  getChapterFocus,
  getPassageText,
  getQuestion,
  voiceMenu,
} from "@/data";
import {
  chapterItems,
  playPassage,
  registerContinuation,
  stop,
  studyItems,
} from "@/lib/speech";
import { listenForReply, replySupported } from "@/lib/reply";
import type { SpeechItem } from "@/lib/speech";

/**
 * Forward chaining for the question page: whichever entry point the listener
 * used (chapter 1, 2, 3, or the study), the visit plays forward from there.
 * Each passage's queue registers a continuation into the next passage, and
 * the last passage continues into the study, which closes the visit with an
 * outro + a hands-free "keep going" menu.
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

interface Segment {
  sourceId: string;
  build: () => SpeechItem[];
}

/** The study queue shared by direct-tap and chained entry points. */
function buildStudy(question: Question, menu: string[]): SpeechItem[] {
  return studyItems(question, getPassageText, {
    cue: "And now, the study.",
    outroTargetId: "raises",
    resolveTitle: (slug) => getQuestion(slug)?.question ?? null,
    menu,
  });
}

export default function VisitChain({ question }: { question: Question }) {
  const router = useRouter();
  const handsfree = replySupported();
  const options = useMemo<Question[]>(() => voiceMenu(question), [question]);
  const menu = useMemo(
    () => (handsfree ? options.map((q) => q.question) : []),
    [handsfree, options]
  );

  const segments = useMemo<Segment[]>(() => {
    const segs: Segment[] = question.passages.map((p) => ({
      sourceId: `chapter:${p.book} ${p.chapter}`,
      build: () =>
        chapterItems(
          p.book,
          p.chapter,
          getChapterFocus(p.book, p.chapter, p.focus) ?? []
        ),
    }));
    segs.push({
      sourceId: `study:${question.slug}`,
      build: () => buildStudy(question, menu),
    });
    return segs;
  }, [question, menu]);

  useEffect(() => {
    const unsub: Array<() => void> = [];
    let disposed = false;
    let cancelReply: (() => void) | null = null;

    // Chapter -> next chapter -> study progression.
    for (let i = 0; i < segments.length - 1; i++) {
      const next = segments[i + 1];
      unsub.push(
        registerContinuation(segments[i].sourceId, () =>
          playPassage(next.sourceId, next.build())
        )
      );
    }

    // Study end -> hands-free "keep going" (only when recognition exists and
    // there is at least one next question to offer).
    if (handsfree && options.length > 0) {
      unsub.push(
        registerContinuation(`study:${question.slug}`, () => {
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
              const first = next.passages[0];
              if (first) {
                playPassage(
                  `chapter:${first.book} ${first.chapter}`,
                  chapterItems(
                    first.book,
                    first.chapter,
                    getChapterFocus(first.book, first.chapter, first.focus) ?? []
                  )
                );
              } else {
                playPassage(
                  `study:${next.slug}`,
                  buildStudy(next, voiceMenu(next).map((q) => q.question))
                );
              }
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
  }, [segments, options, handsfree, router, question]);

  return null;
}