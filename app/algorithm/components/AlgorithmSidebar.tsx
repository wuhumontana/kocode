"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { algorithmTracks } from "../data";

export default function AlgorithmSidebar() {
  const pathname = usePathname();
  const activeSlug =
    pathname.split("/").filter(Boolean).at(-1) ??
    algorithmTracks[0].topics[0].lessons[0].slug;
  const [openTracks, setOpenTracks] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(algorithmTracks.map((track) => [track.title, true]))
  );
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      algorithmTracks.flatMap((track) =>
        track.topics.map((topic) => [`${track.title}:${topic.title}`, true] as const)
      )
    )
  );

  const lessonParents = useMemo<Record<string, { trackTitle: string; topicTitle: string }>>(() => {
    return Object.fromEntries(
      algorithmTracks.flatMap((track) =>
        track.topics.flatMap((topic) =>
          topic.lessons.map((lesson) => [
            lesson.slug,
            { trackTitle: track.title, topicTitle: topic.title },
          ] as const)
        )
      )
    );
  }, []);
  const activeParent = lessonParents[activeSlug];

  return (
    <aside className="top-24 h-fit rounded-2xl border bg-card p-4 text-card-foreground md:sticky">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Problem Sets
        </p>
        <h2 className="text-lg font-semibold tracking-tight">Study Tracks</h2>
        <p className="text-sm text-muted-foreground">
          Move through the core patterns most coding interviews keep revisiting.
        </p>
      </div>

      <nav className="mt-6 flex flex-col gap-3" aria-label="Algorithm topics">
        {algorithmTracks.map((track) => (
          <div key={track.title} className="flex flex-col gap-2">
            <button
              type="button"
              className="flex items-center justify-between rounded-lg px-2 py-1 text-left text-sm font-semibold text-foreground"
              onClick={() =>
                setOpenTracks((current) => ({
                  ...current,
                  [track.title]: !current[track.title],
                }))
              }
              aria-expanded={openTracks[track.title]}
            >
              <span>{track.title}</span>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                strokeWidth={2}
                className={cn(
                  "size-4 transition-transform",
                  openTracks[track.title] && "rotate-180"
                )}
              />
            </button>

            {openTracks[track.title] && (
              <div className="flex flex-col gap-2 pl-2">
                {track.topics.map((topic) => {
                  const topicKey = `${track.title}:${topic.title}`;

                  return (
                    <div key={topicKey} className="flex flex-col gap-2">
                      <button
                        type="button"
                        className={cn(
                          "flex items-center justify-between rounded-lg px-2 py-1 text-left text-sm text-muted-foreground",
                          activeParent?.trackTitle === track.title &&
                            activeParent?.topicTitle === topic.title &&
                            "text-foreground"
                        )}
                        onClick={() =>
                          setOpenTopics((current) => ({
                            ...current,
                            [topicKey]: !current[topicKey],
                          }))
                        }
                        aria-expanded={openTopics[topicKey]}
                      >
                        <span>{topic.title}</span>
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          strokeWidth={2}
                          className={cn(
                            "size-4 transition-transform",
                            openTopics[topicKey] && "rotate-180"
                          )}
                        />
                      </button>

                      {openTopics[topicKey] && (
                        <div className="flex flex-col gap-1 pl-2">
                          {topic.lessons.map((lesson) => {
                            return (
                              <Button
                                key={lesson.title}
                                variant={activeSlug === lesson.slug ? "secondary" : "ghost"}
                                className="w-full justify-start"
                                asChild
                              >
                                <Link href={`/algorithm/${lesson.slug}`}>
                                  {lesson.title}
                                </Link>
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
