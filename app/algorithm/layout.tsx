import type { ReactNode } from "react";

import AlgorithmSidebar from "./components/AlgorithmSidebar";

export default function AlgorithmLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Course Library
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Algorithms</h1>
        <p className="max-w-2xl text-muted-foreground">
          Pick a topic from the left, then study one lesson at a time with notes,
          examples, and implementation patterns.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:items-start">
        <AlgorithmSidebar />
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
