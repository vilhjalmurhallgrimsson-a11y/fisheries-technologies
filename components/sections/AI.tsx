import {
  Bot,
  ChartNoAxesCombined,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

const aiItems = [
  {
    eyebrow: "Assisted Workflows",
    title: "AI-Assisted Fisheries Data Capture",
    description:
      "Support faster fisheries data collection, reduce manual entry and improve consistency across landing surveys, electronic reporting and operational workflows.",
    image: "/images/capabilities/ai-assisted-capture.png",
    imageAlt:
      "AI-assisted fisheries data collection and operational workflow support",
    icon: Bot,
    items: [
      "Smart field assistance",
      "Reduced manual entry",
      "Workflow guidance",
    ],
    href: "#contact",
  },
  {
    eyebrow: "Recognition",
    title: "AI Species Recognition",
    description:
      "Use image-assisted recognition to support species identification, classification and validation across fisheries operations.",
    image: "/images/capabilities/species-recognition.png",
    imageAlt:
      "AI species recognition and classification for fisheries operations",
    icon: ScanSearch,
    items: [
      "Image-assisted identification",
      "Classification support",
      "Validation checks",
    ],
    href: "#contact",
  },
  {
    eyebrow: "Data Quality",
    title: "Fisheries Data Quality Monitoring",
    description:
      "Detect missing, inconsistent or suspicious submissions across connected fisheries data sources and operational systems.",
    image: "/images/capabilities/data-quality-monitoring.png",
    imageAlt:
      "AI fisheries data quality monitoring and anomaly detection dashboard",
    icon: ShieldCheck,
    items: [
      "Completeness checks",
      "Anomaly detection",
      "Consistency monitoring",
    ],
    href: "#contact",
  },
  {
    eyebrow: "Decision Support",
    title: "Fisheries Analytics & Decision Intelligence",
    description:
      "Turn operational fisheries data into actionable insights for fisheries managers, analysts and authorities.",
    image: "/images/capabilities/decision-intelligence.png",
    imageAlt:
      "AI fisheries analytics and decision intelligence for fisheries governance",
    icon: ChartNoAxesCombined,
    items: [
      "Operational insights",
      "Trend analysis",
      "Decision support",
    ],
    href: "#contact",
  },
];

export default function AI() {
  return (
    <section
      id="ai-innovation"
      aria-labelledby="ai-heading"
      className="site-section site-section--white"
    >
      <div className="site-container">
        <SectionHeader
          eyebrow="AI for Fisheries Management"
          title={
            <>
              Turning fisheries data
              <span> into actionable intelligence.</span>
            </>
          }
          description="The Fisheries Manager applies practical AI assistance across fisheries data collection, species recognition, data quality monitoring, fisheries analytics and operational decision support."
        />

        <div className="ai-grid">
          {aiItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}