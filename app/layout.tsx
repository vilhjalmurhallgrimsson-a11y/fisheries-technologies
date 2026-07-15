import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fishtech.is"),

  title: {
    default: "Fisheries Technologies | The Fisheries Manager",
    template: "%s | Fisheries Technologies",
  },

  description:
    "Fisheries Technologies provides The Fisheries Manager, an integrated platform for fisheries governance, monitoring, data collection and operational intelligence.",

  keywords: [
    "fisheries management",
    "fisheries governance",
    "TFM",
    "The Fisheries Manager",
    "electronic logbooks",
    "VMS",
    "landing surveys",
    "fisheries technology",
  ],

  openGraph: {
    title: "Fisheries Technologies | The Fisheries Manager",
    description:
      "An integrated digital platform for fisheries governance, monitoring, data collection and operational intelligence.",
    url: "/",
    siteName: "Fisheries Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/fisheries-governance.png",
        width: 1200,
        height: 630,
        alt: "Fisheries Technologies digital fisheries management platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fisheries Technologies | The Fisheries Manager",
    description:
      "An integrated digital platform for fisheries governance, monitoring, data collection and operational intelligence.",
    images: ["/images/fisheries-governance.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

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
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics gaId="G-T1DYB0JK6H" />
      </body>
    </html>
  );
}