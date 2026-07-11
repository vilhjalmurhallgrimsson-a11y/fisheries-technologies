"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Platform", href: "#platform" },
  { name: "AI & Innovation", href: "#ai-innovation" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between px-8 lg:px-12 xl:px-16">
        <Link href="#solutions" className="flex items-center gap-3">
          <Image
            src="/images/FTSquareDark.png"
            alt="Fisheries Technologies"
            width={42}
            height={42}
            priority
          />

          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              Fisheries Technologies
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Fisheries Management Platform
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="mailto:info@fishtech.is?subject=Request%20Demo"
            target="_blank"
            className="header-demo-button inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold transition-colors hover:bg-blue-800"
          >
            Request Demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}