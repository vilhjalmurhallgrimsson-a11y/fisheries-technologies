"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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

        {/* Award Banner */}
        <Link
          href="/awards"
          className="group mt-10 block overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-cyan-50 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
        >
          <div className="flex items-center gap-6 px-6 py-4">
            {/* Award image */}
            <div className="relative hidden h-20 w-28 shrink-0 md:block">
              <Image
  src="/images/awards/tfmaward.png"
  alt="Fisheries Conference & TM Innovation Award"
  fill
  className="object-contain scale-[1.7]"
/>
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                Award-winning innovation
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                Recipient of the Fisheries Conference &amp; TM Innovation Award
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Recognising innovation and the successful international
                application of Icelandic fisheries management expertise through
                The Fisheries Manager platform.
              </p>
            </div>

            {/* CTA */}
            <div className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 lg:flex">
              <span>Learn more</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Trust cards */}
        <div className="trust-grid mt-10">
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