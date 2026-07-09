import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import Spectrum from "@/components/sections/Spectrum";
import Capabilities from "@/components/sections/Capabilities";
import Platform from "@/components/sections/Platform";
import AI from "@/components/sections/AI";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustBanner />
        <Spectrum />
        <Capabilities />
        <Platform />
        <AI />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}