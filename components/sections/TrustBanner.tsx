import {
  Building2,
  Globe2,
  Landmark,
  Leaf,
  Sparkles,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

const trustItems = [
  {
    eyebrow: "Iceland",
    title: "Icelandic Fisheries Expertise",
    description:
      "Built on decades of experience in sustainable fisheries management, operations and digital innovation.",
    image: "/images/trust/icelandic-fisheries.png",
    imageAlt:
      "Icelandic fishing vessels operating in a modern fisheries environment",
    icon: Landmark,
    href: "#about",
  },
  {
    eyebrow: "European Union",
    title: "EU Innovation Partner",
    description:
      "Supporting collaborative research and innovation through European fisheries and technology programmes.",
    image: "/images/trust/eu-innovation.png",
    imageAlt:
      "European Union fisheries innovation and international collaboration",
    icon: Sparkles,
    href: "#projects",
  },
  {
    eyebrow: "International Standards",
    title: "FAO-aligned Approaches",
    description:
      "Designed around internationally recognised fisheries governance principles and responsible data practices.",
    image: "/images/trust/fao-aligned.png",
    imageAlt:
      "Fishing vessel representing internationally aligned fisheries governance",
    icon: Globe2,
    href: "#platform",
  },
  {
    eyebrow: "National Governance",
    title: "Operating National Systems",
    description:
      "Supporting fisheries authorities with connected systems for administration, monitoring and operational oversight.",
    image: "/images/trust/national-fisheries.png",
    imageAlt:
      "National fisheries administration and modern government systems",
    icon: Building2,
    href: "#projects",
  },
  {
    eyebrow: "Sustainability",
    title: "Supporting Sustainable Fisheries",
    description:
      "Helping authorities improve transparency, data quality and evidence-based fisheries management.",
    image: "/images/trust/sustainable-fisheries.png",
    imageAlt:
      "Sustainable fisheries and healthy marine ecosystems",
    icon: Leaf,
    href: "#platform",
  },
];

export default function TrustBanner() {
  return (
    <section className="site-section site-section--white">
      <div className="site-container">
        <SectionHeader
          eyebrow="Trusted Foundations"
          title={
            <>
              Built for fisheries.
              <span> Grounded in experience.</span>
            </>
          }
          description="TFM combines Icelandic fisheries expertise, international governance principles and practical experience from national and regional fisheries systems."
        />

        <div className="trust-grid">
          {trustItems.map((item) => (
            <FeatureCard
              key={item.title}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}