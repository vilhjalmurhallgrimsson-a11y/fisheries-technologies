import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import {
  Database,
  ShieldCheck,
  Radar,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    title: "Operational data",
    text: "Collect structured fisheries data from landing sites, vessels, mobile apps and integrated systems.",
    icon: Database,
  },
  {
    title: "Governance workflows",
    text: "Manage vessels, parties, licences, permits, inspections and administrative processes.",
    icon: ShieldCheck,
  },
  {
    title: "Monitoring",
    text: "Support VMS, AIS, alerts, observations and compliance-oriented operational monitoring.",
    icon: Radar,
  },
  {
    title: "Decision support",
    text: "Turn fisheries data into dashboards, KPIs, reports and intelligence for managers.",
    icon: BarChart3,
  },
];

export default function Capabilities() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>
        <SectionHeader
          eyebrow="Capability areas"
          title="From data collection to fisheries intelligence."
          text="TFM supports the full operational lifecycle of modern fisheries management."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <Card
                key={capability.title}
                className="border-white/10 bg-white/5 text-white"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold">{capability.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {capability.text}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}