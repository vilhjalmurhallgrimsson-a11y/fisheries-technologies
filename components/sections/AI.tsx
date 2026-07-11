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
    title: "AI-assisted Capture",
    description:
      "Support faster registration, reduce manual entry and improve consistency across operational workflows.",
    image: "/images/capabilities/ai-assisted-capture.png",
    imageAlt: "AI-assisted fisheries data capture and workflow support",
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
    title: "Species Recognition",
    description:
      "Use image-assisted recognition to support species identification, classification and validation.",
    image: "/images/capabilities/species-recognition.png",
    imageAlt: "AI species recognition for fisheries operations",
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
    title: "Data Quality Monitoring",
    description:
      "Detect missing, inconsistent or suspicious submissions across connected fisheries data sources.",
    image: "/images/capabilities/data-quality-monitoring.png",
    imageAlt:
      "AI data quality monitoring dashboard for fisheries systems",
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
    title: "Decision Intelligence",
    description:
      "Turn operational data into actionable insights for fisheries managers, analysts and authorities.",
    image: "/images/capabilities/decision-intelligence.png",
    imageAlt: "AI decision intelligence for fisheries governance",
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
      className="site-section site-section--white"
    >
      <div className="site-container">
        <SectionHeader
          eyebrow="AI & Innovation"
          title={
            <>
              Turning fisheries data
              <span> into actionable intelligence.</span>
            </>
          }
          description="TFM applies practical AI assistance across data capture, validation, recognition, quality monitoring and operational decision support."
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