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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-28">
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.20),_transparent_60%)]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <Badge>The Fisheries Manager</Badge>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
              Governing Fisheries
              <br />
              at Every Scale
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              Supporting artisanal fisheries, industrial fleets, national
              authorities and regional organizations through one integrated
              fisheries governance platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact">
                Book a Demo
              </Button>

              <Button
                href="#platform"
                variant="secondary"
              >
                Explore Platform
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8">
              {heroStats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <DashboardPreview />
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}