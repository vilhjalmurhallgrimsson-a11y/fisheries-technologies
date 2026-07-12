import Image from "next/image";

export default function LearnMorePage() {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      <Image
        src="/images/tfm/learn-more.png"
        alt="The Fisheries Manager"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              The Fisheries Manager™
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Built for Modern Fisheries Governance
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-200">
              A complete platform for fisheries authorities—from field data
              collection to monitoring, analytics and decision support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}