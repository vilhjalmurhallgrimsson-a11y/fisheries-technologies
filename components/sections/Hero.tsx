"use client";

import { motion } from "framer-motion";
import { FileText, Radar, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import DashboardPreview from "@/components/ui/DashboardPreview";
import FloatingCard from "@/components/ui/FloatingCard";

import { heroStats } from "@/data/stats";
const showDashboard = false;
const showFloatingCards = false;

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-28"
      style={{
        backgroundImage: "url('/images/top.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/20" />
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/20 to-transparent" />


      <Container>
        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <Badge>The Fisheries Manager</Badge>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Governing Fisheries
              <br />
              at Every Scale
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              Supporting artisanal fisheries, industrial fleets, national
              authorities and regional organizations through one integrated
              fisheries governance platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">Book a Demo</Button>

              <Button href="#platform" variant="secondary">
                Explore Platform
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">
              {heroStats.map((stat) => (
                <StatCard
  key={stat.label}
  value={stat.value}
  label={stat.label}
  light
/>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {showDashboard && <DashboardPreview />}
            {showFloatingCards && (
              <>

            <FloatingCard
              title="Electronic Logbooks"
              text="Real-time reporting"
              icon={FileText}
              className="-left-10 top-12"
              delay={0.5}
            />

            <FloatingCard
              title="VMS Tracking"
              text="Live vessel positions"
              icon={Radar}
              className="-right-10 top-24"
              delay={0.7}
            />

            <FloatingCard
              title="AI Validation"
              text="Data quality checks"
              icon={ShieldCheck}
              className="bottom-12 left-10"
              delay={0.9}
            />
            </>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}