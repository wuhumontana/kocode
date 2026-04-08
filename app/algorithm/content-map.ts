const lessonImports = {
  "binary-search": () => import("@/content/algorithms/binary-search.mdx"),
};

export function getLessonImport(slug: string) {
  return lessonImports[slug as keyof typeof lessonImports];
}
