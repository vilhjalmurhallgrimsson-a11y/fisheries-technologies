import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { Globe2, Landmark, Network } from "lucide-react";

const projects = [
  {
    region: "Caribbean",
    title: "National fisheries operations",
    text: "Supporting fisheries authorities with landing surveys, master data, operational workflows and digital transformation.",
    icon: Landmark,
  },
  {
    region: "Europe",
    title: "EU innovation projects",
    text: "Working with partners on e-logbooks, landing declarations, VMS, AI and emerging fisheries technologies.",
    icon: Network,
  },
  {
    region: "Global",
    title: "Governance maturity",
    text: "Helping fisheries administrations move from fragmented data collection to integrated governance platforms.",
    icon: Globe2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Built for real fisheries operations."
          text="TFM is designed around practical implementation, national systems, regional cooperation and operational sustainability."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card key={project.title} className="p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {project.region}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {project.text}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}