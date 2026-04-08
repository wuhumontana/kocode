import type { MDXComponents } from "mdx/types";

import CodeTabs from "@/components/mdx/CodeTabs";

const components: MDXComponents = {
  CodeTabs,
  h2: (props) => (
    <h2
      className="text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-sm leading-7 text-muted-foreground sm:text-base"
      {...props}
    />
  ),
  ul: (props) => <ul className="flex list-disc flex-col gap-2 pl-5" {...props} />,
  ol: (props) => (
    <ol className="flex list-decimal flex-col gap-2 pl-5" {...props} />
  ),
  li: (props) => <li className="text-sm leading-7 text-muted-foreground sm:text-base" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 text-[0.9em] text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="overflow-x-auto rounded-2xl border bg-muted/50 p-4 text-sm text-foreground"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-border" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-border pl-4 text-sm italic text-muted-foreground"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
