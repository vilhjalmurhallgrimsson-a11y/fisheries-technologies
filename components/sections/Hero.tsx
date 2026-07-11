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
    <section
      id="solutions"
      className="relative isolate scroll-mt-20 overflow-hidden bg-white pt-20"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(191,219,254,0.45),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-48 -top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-100/40 blur-3xl"
      />

      <div className="mx-auto grid w-[min(1540px,calc(100%-40px))] grid-cols-1 items-center gap-12 py-10 sm:py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-12">
        {/* Left */}
        <div className="relative z-10 max-w-[660px]">
          <span className="inline-flex min-h-8 items-center rounded-full bg-[#eaf3ff] px-4 py-2 text-[11px] font-extrabold uppercase leading-none tracking-[0.1em] text-[#0d5df4] sm:text-xs">
            Integrated Fisheries Governance Platform
          </span>

          <h1 className="mt-6 text-[clamp(3.4rem,5.6vw,5.8rem)] font-extrabold leading-[0.93] tracking-[-0.06em] text-[#07142c]">
            Governing Fisheries
            <span className="block text-[#0d5df4]">
              at Every Scale
            </span>
          </h1>

          <p className="mt-6 max-w-[590px] text-[1.05rem] leading-8 text-[#607087] sm:text-[1.18rem]">
            Supporting artisanal fisheries, commercial fleets, national
            authorities and regional organisations through one connected
            fisheries governance platform.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="mailto:info@fishtech.is?subject=Request%20a%20TFM%20Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0d5df4] px-6 text-sm font-bold !text-white no-underline shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a4ed4] hover:!text-white"
            >
              Request a Demo
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="text-white"
              />
            </Link>

            <Link
              href="#platform"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-bold text-[#07142c] no-underline transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-[#0d5df4]"
            >
              Explore the Platform
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-semibold text-[#344963]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <Check
                    size={12}
                    strokeWidth={3}
                    aria-hidden="true"
                    className="text-[#0d5df4]"
                  />
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative min-w-0 lg:-mr-[110px] lg:w-[calc(100%+110px)]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 -z-10 rounded-[36px] bg-blue-100/40 blur-2xl"
          />

          <div className="relative aspect-video overflow-hidden rounded-[24px] border border-slate-200 bg-[#dfeaf5] shadow-[0_30px_70px_rgba(31,66,110,0.16)] sm:rounded-[30px]">
            <Image
              src={image}
              alt="Integrated fisheries governance across field operations, fleets and national monitoring"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0d5df4]">
                One Connected Platform
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