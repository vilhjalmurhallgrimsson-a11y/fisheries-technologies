
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import {
  ClipboardList,
  ShieldCheck,
  Radar,
  BarChart3,
  Smartphone,
  Bot,
  Route,
  Plug,
} from "lucide-react";

const platformAreas = [
  {
    title: "Data Collection",
    icon: ClipboardList,
    items: ["Landing Surveys", "eLogbooks", "Landing Declarations"],
  },
  {
    title: "Governance",
    icon: ShieldCheck,
    items: ["Vessels", "Fishers", "Licences", "Permits"],
  },
  {
    title: "Monitoring & Compliance",
    icon: Radar,
    items: ["VMS", "AIS", "Inspections", "Alerts"],
  },
  {
    title: "Analytics & Intelligence",
    icon: BarChart3,
    items: ["Dashboards", "KPIs", "Reports", "AI"],
  },
  {
    title: "Mobile Operations",
    icon: Smartphone,
    items: ["Android", "Offline", "Tablets"],
  },
  {
    title: "AI Assistance",
    icon: Bot,
    items: ["Validation", "Recognition", "Quality", "Insights"],
  },
  {
    title: "Traceability",
    icon: Route,
    items: ["Catch", "Landing", "Sales"],
  },
  {
    title: "Integration",
    icon: Plug,
    items: ["REST API", "FLUX", "Third-party systems"],
  },
];

export default function Platform() {
  return (
    <section id="platform" className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          eyebrow="TFM Platform"
          title="One integrated platform for fisheries governance."
          text="TFM combines operational data collection, governance workflows, monitoring, compliance, analytics and integration in one connected environment."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card key={area.title} className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-950">
                  {area.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}