import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.fishtech.is";
const socialImage = "/images/opengraph-fishtech.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Fisheries Technologies | The Fisheries Manager",
    template: "%s | Fisheries Technologies",
  },

  description:
    "Fisheries Technologies provides integrated digital solutions for fisheries management, governance, monitoring, compliance, data collection, analytics and operational intelligence.",

  applicationName: "Fisheries Technologies",

  authors: [
    {
      name: "Fisheries Technologies",
      url: siteUrl,
    },
  ],

  creator: "Fisheries Technologies",
  publisher: "Fisheries Technologies",

  category: "Fisheries technology",

  keywords: [
    "fisheries management",
    "fisheries governance",
    "fisheries management system",
    "The Fisheries Manager",
    "TFM",
    "electronic logbooks",
    "fisheries monitoring",
    "fisheries compliance",
    "VMS",
    "AIS",
    "landing surveys",
    "landing declarations",
    "fisheries analytics",
    "fisheries data collection",
    "digital fisheries governance",
    "fisheries technology",
  ],

  openGraph: {
    title: "Fisheries Technologies | The Fisheries Manager",
    description:
      "Integrated digital solutions for fisheries governance, monitoring, compliance, data collection and analytics.",
    url: siteUrl,
    siteName: "Fisheries Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "The Fisheries Manager digital fisheries governance platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fisheries Technologies | The Fisheries Manager",
    description:
      "Integrated digital solutions for fisheries governance, monitoring, compliance, data collection and analytics.",
    images: [socialImage],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Fisheries Technologies",
  alternateName: "FishTech",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/FTSquareDark.png`,
  },
  image: `${siteUrl}${socialImage}`,
  description:
    "Fisheries Technologies provides integrated digital solutions for fisheries management, governance, monitoring, compliance, data collection, analytics and operational intelligence.",
  email: "info@fishtech.is",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Reykjavík",
    addressCountry: "IS",
  },
  sameAs: [
    "https://www.linkedin.com/company/fisheries-technologies",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Fisheries Technologies",
  alternateName: "FishTech",
  description:
    "Digital fisheries management, governance, monitoring, compliance and analytics.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en",
};

function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(organizationStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(websiteStructuredData),
          }}
        />

        {children}

        <GoogleAnalytics gaId="G-T1DYB0JK6H" />
      </body>
    </html>
  );
}