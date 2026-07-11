import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type HeroProps = {
  image?: string;
};

const highlights = [
  "National Fisheries Systems",
  "Regional Governance",
  "Mobile Data Collection",
  "Interoperability",
];

export default function Hero({
  image = "/images/hero/fisheries-governance.png",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(191,219,254,0.45),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="mx-auto grid min-h-[760px] w-[min(1540px,calc(100%-40px))] grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[0.72fr_1.28fr]">
        {/* LEFT */}
        <div className="relative z-10 max-w-[660px]">
          <span className="inline-flex rounded-full bg-[#eaf3ff] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#0d5df4]">
            Integrated Fisheries Governance Platform
          </span>

          <h1 className="mt-7 text-[clamp(3.6rem,5.6vw,5.8rem)] font-extrabold leading-[0.93] tracking-[-0.06em] text-[#07142c]">
            Governing Fisheries
            <span className="block text-[#0d5df4]">
              at Every Scale
            </span>
          </h1>

          <p className="mt-7 max-w-[590px] text-[1.18rem] leading-8 text-[#607087]">
            Supporting artisanal fisheries, commercial fleets, national
            authorities and regional organisations through one connected
            fisheries governance platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#0d5df4] px-6 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0a4ed4]"
            >
              Request a demo
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              href="#platform"
              className="inline-flex h-12 items-center rounded-xl border border-slate-300 bg-white px-6 font-bold text-[#07142c] transition hover:border-blue-300 hover:text-[#0d5df4]"
            >
              Explore the platform
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-semibold text-[#344963]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <Check
                    size={12}
                    strokeWidth={3}
                    className="text-[#0d5df4]"
                    aria-hidden="true"
                  />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image flows beyond the normal content width */}
        <div className="relative lg:-mr-[110px] lg:w-[calc(100%+110px)]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[36px] bg-blue-100/40 blur-2xl"
          />

          <div className="relative aspect-video overflow-hidden rounded-[30px] border border-slate-200 bg-[#dfeaf5] shadow-[0_30px_70px_rgba(31,66,110,0.16)]">
            <Image
              src={image}
              alt="Integrated fisheries governance across field operations, fleets and national monitoring"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-contain object-center"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d5df4]">
                One connected platform
              </span>
              <p className="mt-1 text-sm font-bold text-[#07142c]">
                From field operations to national governance
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#7b8ba1]">
                Built on
              </span>
              <p className="mt-1 text-sm font-semibold text-[#344963]">
                Icelandic fisheries expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}