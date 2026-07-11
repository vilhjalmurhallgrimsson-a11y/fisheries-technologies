import {
  Globe2,
  Landmark,
  Network,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

const projectItems = [
  {
    eyebrow: "Caribbean",
    title: "National Fisheries Operations",
    description:
      "Supporting fisheries authorities with landing surveys, master data, operational workflows and connected digital services.",
    image: "/images/projects/national-fisheries-operations.png",
    imageAlt:
      "National fisheries operations and digital fisheries administration in the Caribbean",
    icon: Landmark,
    items: [
      "Landing surveys",
      "Master data",
      "Operational workflows",
    ],
    href: "#contact",
  },
  {
    eyebrow: "Europe",
    title: "EU Innovation Projects",
    description:
      "Working with partners on eLogbooks, landing declarations, VMS, AI and emerging fisheries technologies.",
    image: "/images/projects/eu-innovation-projects.png",
    imageAlt:
      "European fisheries innovation project with connected digital technology",
    icon: Network,
    items: [
      "Electronic logbooks",
      "VMS and integrations",
      "AI-supported operations",
    ],
    href: "#contact",
  },
  {
    eyebrow: "Global",
    title: "Governance Maturity",
    description:
      "Helping fisheries administrations move from fragmented data collection to integrated governance platforms.",
    image: "/images/projects/governance-maturity.png",
    imageAlt:
      "Global fisheries governance transformation and integrated digital systems",
    icon: Globe2,
    items: [
      "Current-state assessment",
      "Digital transformation",
      "Integrated governance",
    ],
    href: "#contact",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="site-section site-section--soft"
    >
      <div className="site-container">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Built for real
              <span> fisheries operations.</span>
            </>
          }
          description="TFM supports fisheries authorities, regional organisations and innovation partnerships across national, regional and international operating contexts."
        />

        <div className="projects-grid">
          {projectItems.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}