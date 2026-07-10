import Image from "next/image";
import {
  Landmark,
  Leaf,
  MountainSnow,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";

const trustItems = [
  {
    title: "Icelandic fisheries expertise",
    text: "Built on decades of experience in sustainable fisheries and digital innovation from Iceland.",
    image: "/images/expertise/icelandic-fisheries.png",
    icon: MountainSnow,
    accent: "bg-cyan-500",
  },
  {
    title: "EU innovation partner",
    text: "Proud partner in EU-funded projects driving innovation for the future of fisheries.",
    image: "/images/expertise/eu-innovation.png",
    icon: Sparkles,
    accent: "bg-blue-600",
  },
  {
    title: "FAO-aligned approaches",
    text: "Our solutions align with FAO guidelines, international standards and global best practices.",
    image: "/images/expertise/fao-aligned.png",
    icon: ShieldCheck,
    accent: "bg-teal-500",
  },
  {
    title: "National fisheries systems",
    text: "Supporting governments in building robust, integrated and scalable fisheries management systems.",
    image: "/images/expertise/national-fisheries.png",
    icon: Landmark,
    accent: "bg-slate-700",
  },
  {
    title: "Sustainable fisheries governance",
    text: "Empowering responsible decisions for healthy oceans and thriving coastal communities.",
    image: "/images/expertise/sustainable-fisheries.png",
    icon: Leaf,
    accent: "bg-emerald-500",
  },
];

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative wave background */}
      <div className="pointer-events-none absolute inset-x-0 top-16 h-40 opacity-40">
        <svg
          viewBox="0 0 1440 220"
          className="h-full w-full text-cyan-100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 95 C140 20 260 170 420 90 C590 5 730 170 900 90 C1080 5 1210 155 1440 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0 115 C160 40 280 190 450 110 C620 30 770 185 940 105 C1100 35 1260 175 1440 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M0 135 C160 65 310 205 480 130 C650 55 810 200 980 125 C1140 55 1280 195 1440 115"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">
            Supporting fisheries governance
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            With trusted expertise
          </h2>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-cyan-500" />
        </div>

        <div className="relative z-10 mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative flex min-h-[430px] flex-col overflow-visible rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]"
              >
                {/* Floating icon */}
                <div className="absolute left-1/2 top-0 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg">
                  <Icon size={34} strokeWidth={1.8} />
                </div>

                {/* Image */}
                <div className="relative mt-10 h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 pb-8 pt-6 text-center">
                  <h3 className="text-xl font-bold leading-7 text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-1 rounded-b-[28px] ${item.accent}`}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}