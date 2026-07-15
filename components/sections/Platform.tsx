import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  ClipboardList,
  Plug,
  Radar,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

type Capability = {
  category: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  items: string[];
};

const capabilities: Capability[] = [
  {
    category: "OPERATIONS",
    title: "Data Collection",
    description:
      "Capture reliable fisheries data in the field, at landing sites and aboard vessels.",
    image: "/images/platform/data-collection.png",
    icon: ClipboardList,
    items: ["Landing Surveys", "eLogbooks", "Landing Declarations"],
  },
  {
    category: "GOVERNANCE",
    title: "Governance",
    description:
      "Manage the people, vessels, licences and permits that form the fisheries sector.",
    image: "/images/platform/governance.png",
    icon: ShieldCheck,
    items: ["Vessels", "Fishers", "Licences", "Permits"],
  },
  {
    category: "MONITORING",
    title: "Monitoring, Control & Surveillance (MCS)",
    description:
      "Monitor vessel activity, inspections and operational exceptions from one environment.",
    image: "/images/platform/monitoring.png",
    icon: Radar,
    items: ["VMS", "AIS", "Inspections", "Alerts"],
  },
  {
    category: "INTELLIGENCE",
    title: "Analytics & Intelligence",
    description:
      "Turn operational fisheries data into dashboards, indicators and decision support.",
    image: "/images/platform/analytics.png",
    icon: BarChart3,
    items: ["Dashboards", "KPIs", "Reports", "AI"],
  },
  {
    category: "FIELD OPERATIONS",
    title: "Mobile Operations",
    description:
      "Support field officers and data collectors through connected and offline workflows.",
    image: "/images/platform/mobile2.png",
    icon: Smartphone,
    items: ["Android", "Offline", "Tablets"],
  },
  {
    category: "ASSISTED WORKFLOWS",
    title: "AI Assistance",
    description:
      "Improve validation, identification and data quality with intelligent assistance.",
    image: "/images/platform/ai-assistance2.png",
    icon: Bot,
    items: ["Validation", "Recognition", "Quality", "Insights"],
  },
  {
    category: "VALUE CHAIN",
    title: "Traceability",
    description:
      "Connect catch, landing and sales information throughout the fisheries value chain.",
    image: "/images/platform/traceability.png",
    icon: Workflow,
    items: ["Catch", "Landing", "Sales"],
  },
  {
    category: "INTEROPERABILITY",
    title: "Integration",
    description:
      "Exchange fisheries data securely with national, regional and third-party systems.",
    image: "/images/platform/integration2.png",
    icon: Plug,
    items: ["REST API", "FLUX", "Third-party systems"],
  },
];

export default function Platform() {
  return (
    <section className="platform" id="platform">
      <div className="platform__container">
        <header className="platform__header">
          <span className="platform__eyebrow">TFM PLATFORM</span>

          <div className="platform__heading-row">
            <h2>
              One integrated platform
              <br />
              for fisheries governance<span>.</span>
            </h2>

            <p>
              The Fisheries Manager is an integrated fisheries management system connecting electronic logbooks, landing surveys, Monitoring, Control and Surveillance (MCS), governance and operational analytics to strengthen compliance and combat Illegal, Unreported and Unregulated (IUU) fishing.
            </p>
          </div>
        </header>

        <div className="platform__grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article className="platform-card" key={capability.title}>
                <div className="platform-card__image">
                  <Image
                    src={capability.image}
                    alt={`${capability.title} capability`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />

                  <div className="platform-card__overlay" />

                  <div className="platform-card__icon">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>
                </div>

                <div className="platform-card__content">
                  <span className="platform-card__category">
                    {capability.category}
                  </span>

                  <h3>{capability.title}</h3>

                  <p className="platform-card__description">
                    {capability.description}
                  </p>

                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a href="#contact">
  Learn more
  <span aria-hidden="true">→</span>
</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}