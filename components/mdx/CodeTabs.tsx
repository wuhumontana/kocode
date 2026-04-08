"use client";

import { useId, useState } from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/lib/utils";

SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("go", go);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("python", python);

export type CodeSnippet = {
  code: string;
  label: string;
  language: "c" | "cpp" | "go" | "java" | "javascript" | "python";
};

export default function CodeTabs({
  snippets,
}: Readonly<{
  snippets: CodeSnippet[];
}>) {
  const tabsId = useId();
  const [activeLabel, setActiveLabel] = useState(snippets[0]?.label ?? "");
  const activeSnippet =
    snippets.find((snippet) => snippet.label === activeLabel) ?? snippets[0];

  if (!activeSnippet) {
    return null;
  }

  return (
    <div className="my-6 overflow-hidden rounded-2xl border bg-zinc-950 text-zinc-50">
      <div
        role="tablist"
        aria-label="Code examples by language"
        className="flex flex-wrap gap-1 border-b border-zinc-800 bg-zinc-900 p-2"
      >
        {snippets.map((snippet) => {
          const isActive = snippet.label === activeSnippet.label;
          const tabId = `${tabsId}-${snippet.label}-tab`;
          const panelId = `${tabsId}-${snippet.label}-panel`;

          return (
            <button
              key={snippet.label}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-100 text-zinc-950"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              )}
              onClick={() => setActiveLabel(snippet.label)}
            >
              {snippet.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${tabsId}-${activeSnippet.label}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-${activeSnippet.label}-tab`}
      >
        <SyntaxHighlighter
          language={activeSnippet.language}
          style={oneDark}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: "1rem",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
            },
          }}
          showLineNumbers
          wrapLongLines
        >
          {activeSnippet.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
