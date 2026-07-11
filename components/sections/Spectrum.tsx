import {
  Anchor,
  Building2,
  Globe2,
  Radar,
  Ship,
  Waves,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

const spectrumItems = [
  {
    eyebrow: "Community Fisheries",
    title: "Artisanal Fisheries",
    description:
      "Accessible tools for community-based fisheries, beach landings and local data collection.",
    image: "/images/spectrum/artisinal-fisheries.png",
    imageAlt:
      "Artisanal fishers operating a small coastal fishing boat",
    icon: Waves,
    href: "#platform",
  },
  {
    eyebrow: "Coastal Operations",
    title: "Small-Scale Fisheries",
    description:
      "Mobile-first workflows for fishers, field officers, landing sites and local authorities.",
    image: "/images/spectrum/small-scale.png",
    imageAlt:
      "Small-scale fishing vessel operating close to shore",
    icon: Anchor,
    href: "#platform",
  },
  {
    eyebrow: "Fleet Operations",
    title: "Commercial Fisheries",
    description:
      "Connected reporting for vessels, trips, catches, landings and commercial fishing activity.",
    image: "/images/spectrum/commercial.png",
    imageAlt:
      "Commercial fishing vessel operating at sea",
    icon: Ship,
    href: "#platform",
  },
  {
    eyebrow: "Large-Scale Operations",
    title: "Industrial Fisheries",
    description:
      "Scalable monitoring, compliance and operational oversight for complex industrial fleets.",
    image: "/images/spectrum/industrial-fisheries.png",
    imageAlt:
      "Modern industrial fishing vessel operating offshore",
    icon: Radar,
    href: "#platform",
  },
  {
    eyebrow: "Public Administration",
    title: "National Governance",
    description:
      "A shared national environment for fisheries administration, monitoring and decision support.",
    image: "/images/spectrum/National-fisheries.png",
    imageAlt:
      "National fisheries authority and government administration environment",
    icon: Building2,
    href: "#projects",
  },
  {
    eyebrow: "Regional Cooperation",
    title: "Regional Governance",
    description:
      "Secure data exchange and coordinated governance across jurisdictions and regional organisations.",
    image: "/images/spectrum/regional-fisheries.png",
    imageAlt:
      "Regional fisheries cooperation represented by multiple national flags",
    icon: Globe2,
    href: "#projects",
  },
];

export default function Spectrum() {
  return (
    <section className="site-section site-section--soft">
      <div className="site-container">
        <SectionHeader
          eyebrow="Fisheries Spectrum"
          title={
            <>
              One platform.
              <span> Every fisheries context.</span>
            </>
          }
          description="TFM supports fisheries governance from local landing sites and small-scale operations to industrial fleets, national authorities and regional organisations."
        />

        <div className="spectrum-grid">
          {spectrumItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}