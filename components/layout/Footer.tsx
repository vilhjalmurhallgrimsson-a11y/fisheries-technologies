import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "AI & Innovation", href: "#ai-innovation" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  { label: "Data Collection", href: "#platform" },
  { label: "Governance", href: "#platform" },
  { label: "Monitoring & Compliance", href: "#platform" },
  { label: "Analytics & Intelligence", href: "#platform" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-[#07142c] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(13,93,244,0.24),transparent_30%),radial-gradient(circle_at_88%_15%,rgba(47,173,235,0.14),transparent_28%)]"
      />

      <div className="relative mx-auto w-[min(1440px,calc(100%-40px))]">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1fr] lg:gap-16 lg:py-20">
          {/* BRAND */}
          <div className="max-w-[430px]">
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/FTSquareDark.png"
                alt="Fisheries Technologies"
                width={58}
                height={58}
                className="rounded-xl border border-white/10 shadow-lg"
              />

              <div>
                <div className="text-lg font-extrabold tracking-[-0.025em]">
                  Fisheries Technologies
                </div>
                <div className="mt-1 text-sm text-white/55">
                  The Fisheries Manager
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-[410px] text-[15px] leading-7 text-white/62">
              One connected platform for fisheries data collection, governance,
              monitoring, compliance and operational intelligence.
            </p>

            <Link
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#73b7ff] transition hover:text-white"
            >
              Request a demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* NAVIGATION */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/45">
              Navigation
            </h2>

            <nav className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/45">
              Capabilities
            </h2>

            <nav className="mt-5 grid gap-3">
              {capabilities.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/45">
              Contact
            </h2>

            <div className="mt-5 grid gap-4">
              <Link
                href="mailto:info@fishtech.is"
                target="_blank"
                className="flex items-start gap-3 text-sm text-white/68 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#73b7ff]"
                  aria-hidden="true"
                />
                info@fishtech.is
              </Link>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/68">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#73b7ff]"
                  aria-hidden="true"
                />
                <span>Reykjavík, Iceland</span>
              </div>

              <Link
                href="https://www.fishtech.is"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-white/68 transition hover:text-white"
              >
                <ArrowUpRight
                  size={18}
                  className="mt-0.5 shrink-0 text-[#73b7ff]"
                  aria-hidden="true"
                />
                www.fishtech.is
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Fisheries Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>

            <span>
              Built on Icelandic fisheries expertise
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}