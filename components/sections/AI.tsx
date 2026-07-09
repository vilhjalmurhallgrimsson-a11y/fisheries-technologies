import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Bot, ScanSearch, ShieldAlert, LineChart } from "lucide-react";

const aiItems = [
  {
    title: "AI-assisted capture",
    text: "Support faster registration and reduce manual entry in operational workflows.",
    icon: ScanSearch,
  },
  {
    title: "Species recognition",
    text: "Use image-based recognition to support species identification and validation.",
    icon: Bot,
  },
  {
    title: "Data quality monitoring",
    text: "Detect missing, inconsistent or suspicious submissions across the platform.",
    icon: ShieldAlert,
  },
  {
    title: "Decision intelligence",
    text: "Transform operational data into insights for fisheries managers and authorities.",
    icon: LineChart,
  },
];

export default function AI() {
  return (
    <section id="insights" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="AI & Innovation"
          title="Turning fisheries data into actionable intelligence."
          text="TFM can support AI-assisted data capture, validation, monitoring and analytics to improve data quality and operational decision-making."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aiItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}