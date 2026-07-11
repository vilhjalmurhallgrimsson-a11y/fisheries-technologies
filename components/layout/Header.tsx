"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] w-[min(1540px,calc(100%-40px))] items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-4 transition hover:opacity-90"
        >
          <Image
            src="/images/FTSquareDark.png"
            alt="Fisheries Technologies"
            width={56}
            height={56}
            priority
            className="rounded-xl shadow-sm"
          />

          <div className="leading-tight">

            <div className="text-[18px] font-extrabold tracking-[-0.02em] text-[#07142c]">
              Fisheries Technologies
            </div>

            <div className="mt-1 text-sm text-[#607087]">
              The Fisheries Manager
            </div>

          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative py-2 text-[15px] font-semibold transition ${
                index === 0
                  ? "text-[#07142c]"
                  : "text-[#4b6078] hover:text-[#0d5df4]"
              }`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#0d5df4]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}

        <div className="flex items-center gap-4">

          <button className="rounded-xl bg-[#0d5df4] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_26px_rgba(13,93,244,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0a4ed4]">
            Book Demo
          </button>

          {/* Mobile */}

          <button className="rounded-xl border border-slate-200 p-3 lg:hidden">
            <Menu size={22} />
          </button>

        </div>

      </div>
    </header>
  );
}