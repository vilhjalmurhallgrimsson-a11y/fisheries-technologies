import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-blue-700 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
            Get started
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Ready to modernize fisheries governance?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Talk to Fisheries Technologies about TFM, national fisheries systems,
            regional governance and practical implementation.
          </p>

          <div className="mt-10">
            <Button href="mailto:info@fishtech.is" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}