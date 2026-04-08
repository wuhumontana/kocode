import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getLessonImport } from "../content-map";
import { allLessons, getLessonBySlug } from "../data";

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/algorithm/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {};
  }

  return {
    title: `${lesson.title} | KO Code`,
    description: lesson.description,
  };
}

export default async function AlgorithmLessonPage({
  params,
}: PageProps<"/algorithm/[slug]">) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  const loadLesson = getLessonImport(slug);

  if (!lesson || !loadLesson) {
    notFound();
  }

  const { default: Content } = await loadLesson();

  return (
    <article className="rounded-2xl border bg-card p-6 text-card-foreground sm:p-8">
      <div className="mb-8 flex flex-col gap-3 border-b pb-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>{lesson.trackTitle}</span>
          <span>/</span>
          <span>{lesson.topicTitle}</span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              {lesson.title}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              {lesson.description}
            </p>
          </div>
          <span className="text-sm text-muted-foreground">{lesson.count}</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Content />
      </div>
    </article>
  );
}
