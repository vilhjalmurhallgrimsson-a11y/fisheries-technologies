import type { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Fisheries Resources and White Papers",
  description:
    "Explore fisheries governance publications, white papers and practical frameworks from Fisheries Technologies.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Fisheries Resources and White Papers",
    description:
      "Publications, frameworks and practical insights for fisheries governance, institutional development and digital transformation.",
    url: "/resources",
    images: [
      {
        url: "/images/resources/resources-hero2.png",
        width: 1200,
        height: 630,
        alt: "Fisheries Technologies publications and resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisheries Resources and White Papers",
    description:
      "Publications and practical frameworks for fisheries governance and digital transformation.",
    images: ["/images/resources/resources-hero2.png"],
  },
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}