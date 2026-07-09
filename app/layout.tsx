import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fisheries Technologies | The Fisheries Manager",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
