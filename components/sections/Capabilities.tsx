import {
  BarChart3,
  Database,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

type Capability = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  iconBackground: string;

  zoom?: number;
  xPosition?: number;
  yPosition?: number;
  backgroundColor?: string;
};

const capabilities: Capability[] = [
  {
    title: "Operational data",
    description:
      "Collect structured fisheries data across the value chain from landing sites, vessels, mobile apps and integrated systems.",
    image: "/images/capabilities/operational-data.png",
    icon: Database,
    accent: "#1458F5",
    iconBackground: "#E3ECFF",

    zoom: 100,
    xPosition: 50,
    yPosition: 80,
    backgroundColor: "#dceaf3",
  },
  {
    title: "Governance workflows",
    description:
      "Manage vessels, parties, licences, permits, inspections and administrative processes with built-in workflows.",
    image: "/images/capabilities/governance-workflows.png",
    icon: ShieldCheck,
    accent: "#1497B7",
    iconBackground: "#DFF3F8",

    zoom: 100,
    xPosition: 50,
    yPosition: 80,
    backgroundColor: "#dfe9ee",
  },
  {
    title: "Monitoring",
    description:
      "Support VMS, AIS, alerts, observations and compliance-oriented operational monitoring.",
    image: "/images/capabilities/monitoring.png",
    icon: Target,
    accent: "#2546D7",
    iconBackground: "#E4E8FF",

    zoom: 100,
    xPosition: 50,
    yPosition: 80,
    backgroundColor: "#dce8ef",
  },
  {
    title: "Decision support",
    description:
      "Turn fisheries data into dashboards, KPIs, reports and intelligence for better decisions.",
    image: "/images/capabilities/decision-support.png",
    icon: BarChart3,
    accent: "#18A6A5",
    iconBackground: "#DDF4F4",

    zoom: 100  ,
    xPosition: 50,
    yPosition: 80,
    backgroundColor: "#dce8ec",
  },
];

export default function CapabilityAreas() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff] py-20 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.95),transparent_45%)]" />

      {/* Topographic background */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[560px] w-[58%] bg-contain bg-right-top bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/topographic-lines.svg')",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <header className="max-w-[900px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.14em] text-[#1458f5] md:text-base">
            Capability areas
          </p>

          <div className="mb-5 h-[5px] w-14 rounded-full bg-[#1458f5]" />

          <h2 className="max-w-[820px] text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#07133f] md:text-6xl lg:text-[70px]">
            From data collection
            <br />
            to fisheries intelligence
            <span className="text-[#1458f5]">.</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#42506f] md:text-xl">
            TFM supports the full operational lifecycle of modern fisheries
            management.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            const zoom = capability.zoom ?? 100;
            const xPosition = capability.xPosition ?? 50;
            const yPosition = capability.yPosition ?? 50;

            return (
              <article
                key={capability.title}
                className="group relative flex min-h-[520px] overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_18px_60px_rgba(14,35,87,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(14,35,87,0.14)]"
              >
                {/* Image layer */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    backgroundColor:
                      capability.backgroundColor ?? "#dfe8ef",
                  }}
                >
                  <Image
                    src={capability.image}
                    alt={`${capability.title} capability`}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="absolute max-w-none transition-transform duration-700 ease-out"
                    style={{
                      width: `${zoom}%`,
                      height: "auto",
                      left: `${xPosition}%`,
                      top: `${yPosition}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>

                {/* Optional subtle hover zoom */}
                <div className="pointer-events-none absolute inset-0 transition-transform duration-700 group-hover:scale-[1.015]" />

                {/* White fade behind text */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 via-[43%] to-transparent to-[76%]" />

                {/* Slight bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06133c]/15 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col p-6 md:p-7">
                  <div
                    className="mb-6 flex h-[78px] w-[78px] items-center justify-center rounded-full"
                    style={{ backgroundColor: capability.iconBackground }}
                  >
                    <Icon
                      size={39}
                      strokeWidth={1.8}
                      style={{ color: capability.accent }}
                    />
                  </div>

                  <h3 className="text-[25px] font-semibold tracking-[-0.035em] text-[#07133f]">
                    {capability.title}
                  </h3>

                  <div
                    className="my-4 h-[3px] w-11 rounded-full"
                    style={{ backgroundColor: capability.accent }}
                  />

                  <p className="max-w-[310px] text-[16px] leading-[1.55] text-[#263452]">
                    {capability.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}