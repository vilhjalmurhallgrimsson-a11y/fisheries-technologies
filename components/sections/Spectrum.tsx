import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const spectrumItems = [
  "Artisanal",
  "Small-scale",
  "Commercial",
  "Industrial",
  "National",
  "Regional",
];

export default function Spectrum() {
  return (
    <section id="solutions" className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Fisheries spectrum"
          title="One platform. Every fisheries context."
          text="TFM supports governance from local landing sites to national authorities and regional fisheries organizations."
          align="center"
        />

        <div className="mt-16 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-6">
            {spectrumItems.map((item, index) => (
              <div
                key={item}
                className="relative rounded-3xl bg-slate-50 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="text-sm font-bold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}