export default function Loading() {
  return (
    <article className="rounded-2xl border bg-card p-6 text-card-foreground sm:p-8">
      <div className="flex animate-pulse flex-col gap-4">
        <div className="h-3 w-32 rounded bg-muted" />
        <div className="h-8 w-64 rounded bg-muted" />
        <div className="h-4 w-full max-w-2xl rounded bg-muted" />
        <div className="h-4 w-full max-w-xl rounded bg-muted" />
        <div className="mt-4 h-32 w-full rounded-xl bg-muted" />
      </div>
    </article>
  );
}
