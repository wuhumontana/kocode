export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/home-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/10 to-black/30" />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl items-center px-6 pt-28 pb-16">
        <div className="flex max-w-2xl flex-col gap-4 text-white">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
            Algorithm Tutorials
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Learn algorithms with a cleaner path from basics to interviews.
          </h1>
          <p className="text-base leading-7 text-white/80 sm:text-lg">
            Build a focused learning experience with curated lessons, walkthroughs,
            and practice that feels approachable from the first click.
          </p>
        </div>
      </div>
    </section>
  );
}
