export type AlgorithmLesson = {
  slug: string;
  title: string;
  description: string;
  count: string;
};

export type AlgorithmTopic = {
  title: string;
  lessons: AlgorithmLesson[];
};

export type AlgorithmTrack = {
  title: string;
  topics: AlgorithmTopic[];
};

export const algorithmTracks: AlgorithmTrack[] = [
  {
    title: "Foundations",
    topics: [
      {
        title: "Searching",
        lessons: [
          {
            slug: "binary-search",
            title: "Binary Search",
            description:
              "Find the turning point in sorted data and learn when half-interval elimination applies.",
            count: "12 problems",
          },
        ],
      },
    ],
  },
];

export const allLessons = algorithmTracks.flatMap((track) =>
  track.topics.flatMap((topic) =>
    topic.lessons.map((lesson) => ({
      ...lesson,
      trackTitle: track.title,
      topicTitle: topic.title,
    }))
  )
);

export function getLessonBySlug(slug: string) {
  return allLessons.find((lesson) => lesson.slug === slug);
}
