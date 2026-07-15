"use client";

import Image from "next/image";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowRight, Check, Mail } from "lucide-react";

const highlights = [
  "National Fisheries Management Systems",
  "Regional Fisheries Governance",
  "Electronic Logbooks & Data Collection",
  "Fisheries Monitoring, Control & Surveillance (MCS)",
  "Fisheries Analytics & AI Assistance",
];

const demoEmail =
  "mailto:info@fishtech.is?subject=Request%20a%20TFM%20Demo";

const contactEmail =
  "mailto:info@fishtech.is?subject=Fisheries%20Technologies%20Enquiry";

export default function Contact() {
  const handleDemoClick = () => {
    sendGAEvent("event", "request_demo", {
      button_location: "homepage_contact",
      page_name: "homepage",
    });
  };

  const handleContactClick = () => {
    sendGAEvent("event", "contact_click", {
      button_location: "homepage_contact",
      page_name: "homepage",
      contact_method: "email",
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_12%,rgba(191,219,254,0.55),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f7faff_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-44 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="mx-auto w-[min(1500px,calc(100%-40px))]">
        <div className="grid overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(31,66,110,0.12)] lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-14 lg:py-16">
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0d5df4]">
              Start the conversation
            </span>

            <h2
              id="contact-heading"
              className="mt-8 text-[clamp(3.2rem,4.8vw,5.6rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#07142c]"
            >
              Ready to modernise
              <span className="block text-[#0d5df4]">
                fisheries management?
              </span>
            </h2>

            <p className="mt-8 max-w-[620px] text-[18px] leading-9 text-slate-600">
              Discover how The Fisheries Manager supports fisheries
              authorities, regional organisations and international programmes
              through one configurable fisheries management system for
              electronic logbooks, landing surveys, data collection,
              governance, monitoring, control & surveillance (MCS) and fisheries analytics.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={demoEmail}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDemoClick}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0d5df4] px-7 py-4 font-semibold !text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a4ed4] hover:!text-white"
              >
                Request a demo
                <ArrowRight
                  size={18}
                  className="text-white"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href={contactEmail}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-[#07142c] no-underline transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-[#0d5df4]"
              >
                <Mail size={18} aria-hidden="true" />
                Contact us
              </Link>
            </div>

            <div className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[15px] font-semibold text-slate-700"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50">
                    <Check
                      size={13}
                      strokeWidth={3}
                      className="text-[#0d5df4]"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden bg-[#dfeaf5] sm:min-h-[560px] lg:min-h-[720px]">
            <Image
              src="/images/contact/contact-governance2.png"
              alt="Digital fisheries management system connecting field data, vessels, monitoring and fisheries governance"
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,44,0.02)_35%,rgba(7,20,44,0.38)_100%)]"
            />

            <div className="absolute bottom-6 left-6 right-6 max-w-[560px] rounded-2xl border border-white/20 bg-[#07142c]/86 px-6 py-5 text-white shadow-xl backdrop-blur-xl">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/60">
                The Fisheries Manager
              </span>

              <h3 className="mt-2 text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-tight text-white">
                One connected fisheries management system
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-white/80">
                Connecting field operations, electronic reporting, monitoring,
                control & surveillance (MCS) and national and regional fisheries governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}