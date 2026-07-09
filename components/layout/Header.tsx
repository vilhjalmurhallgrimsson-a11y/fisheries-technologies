"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import useActiveSection from "@/hooks/useActiveSection";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const active = useActiveSection([
    "platform",
    "solutions",
    "projects",
    "contact",
  ]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
  src="/images/FTSquareDark.png"
  alt="Fisheries Technologies"
  width={60}
  height={62}
  priority
/>

          <div>
            <p className="text-sm font-bold tracking-tight text-slate-950">
              Fisheries Technologies
            </p>

            <p className="text-xs text-slate-500">
              The Fisheries Manager
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                active === item.href.replace("#", "")
                  ? "text-blue-700"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item.label}

              {active === item.href.replace("#", "") && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-700" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:block">
          <Button href="#contact">
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label="Open navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-5">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition ${
                    active === item.href.replace("#", "")
                      ? "text-blue-700"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <Button href="#contact">
                Book Demo
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}