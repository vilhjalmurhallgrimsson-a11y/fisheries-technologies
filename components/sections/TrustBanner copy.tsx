import Container from "@/components/ui/Container";

const trustItems = [
  "Icelandic fisheries expertise",
  "EU innovation partner",
  "FAO-aligned approaches",
  "National fisheries systems",
  "Sustainable fisheries governance",
];

export default function TrustBanner() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">
          Supporting fisheries governance with trusted expertise
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex min-h-24 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 text-center text-sm font-semibold text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}