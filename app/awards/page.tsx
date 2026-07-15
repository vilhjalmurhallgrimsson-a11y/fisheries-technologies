import type { Metadata } from "next";
import AwardsPageClient from "./AwardsPageClient";

export const metadata: Metadata = {
  title: "Fisheries Innovation Award",
  description:
    "Fisheries Technologies received the Fisheries Conference and TM Innovation Award, recognising innovation and the international application of Icelandic fisheries management expertise.",

  alternates: {
    canonical: "/awards",
  },

  openGraph: {
    title: "Fisheries Technologies Receives Innovation Award",
    description:
      "Recognition for innovation, value creation and the international application of Icelandic fisheries management expertise.",
    url: "/awards",
    type: "article",
    images: [
      {
        url: "/images/awards/award-main-2.png",
        width: 1200,
        height: 630,
        alt: "Fisheries Technologies Innovation Award",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fisheries Technologies Receives Innovation Award",
    description:
      "Recognition for innovation and the international application of Icelandic fisheries management expertise.",
    images: ["/images/awards/award-main-2.png"],
  },
};

export default function AwardsPage() {
  return <AwardsPageClient />;
}