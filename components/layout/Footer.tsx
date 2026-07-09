import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Container className="grid gap-8 md:grid-cols-3 md:items-start">
        <div>
          <p className="text-sm font-bold text-slate-950">
            Fisheries Technologies
          </p>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            The Fisheries Manager platform for modern fisheries governance,
            monitoring and operational intelligence.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-500">
          <a href="#platform" className="hover:text-slate-950">
            Platform
          </a>
          <a href="#solutions" className="hover:text-slate-950">
            Solutions
          </a>
          <a href="#projects" className="hover:text-slate-950">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </div>

        <div className="text-sm text-slate-500 md:text-right">
          <p>
            <a href="mailto:info@fishtech.is" className="hover:text-slate-950">
              info@fishtech.is
            </a>
          </p>

          <p className="mt-2">
            <a href="https://www.fishtech.is" className="hover:text-slate-950">
              www.fishtech.is
            </a>
          </p>

          <p className="mt-6">
            © 2026 Fisheries Technologies. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}