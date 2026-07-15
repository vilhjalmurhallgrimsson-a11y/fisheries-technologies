"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import Header from "@/components/layout/Header";

const awardValues = [
  {
    title: "Innovation",
    description: "Encouraging new ideas and innovative solutions.",
    icon: Lightbulb,
  },
  {
    title: "Value creation",
    description: "Projects that create measurable value.",
    icon: TrendingUp,
  },
  {
    title: "Sustainability",
    description: "Strengthening long-term sustainable development.",
    icon: Leaf,
  },
  {
    title: "Collaboration",
    description: "Building partnerships and sharing knowledge.",
    icon: Handshake,
  },
  {
    title: "Impact",
    description: "Positive impact on the Icelandic fisheries sector.",
    icon: Globe2,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function AwardsPageClient() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="relative isolate overflow-hidden bg-slate-50 pt-28 lg:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_18%,rgba(186,230,253,0.48),transparent_34%),linear-gradient(to_bottom,#f8fbff,#ffffff)]"
        />

        <div className="mx-auto grid min-h-[670px] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-18">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to FishTech
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Recognition
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.35rem] lg:leading-[1.02]">
              Honoured with the Fisheries Conference &amp; TM Innovation Award
            </h1>

            <div className="mt-8 h-0.5 w-20 bg-blue-600" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-700">
              Fisheries Technologies was honoured to receive the{" "}
              <strong className="font-semibold text-slate-950">
                Hvatningarverðlaun Sjávarútvegsráðstefnunnar og TM
              </strong>
              , recognising innovation and the successful international
              application of Icelandic fisheries management expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-0 h-20 rounded-[50%] bg-slate-900/15 blur-3xl"
            />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-white/30">
              <Image
                src="/images/awards/award-main-2.png"
                alt="Hvatningarverðlaun Sjávarútvegsráðstefnunnar og TM"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.95fr_1.35fr] lg:px-10">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              About the award
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
              <p>
                The Hvatningarverðlaun Sjávarútvegsráðstefnunnar og TM are
                presented to young companies or independent entrepreneurs whose
                innovation and development projects are considered to have made
                an outstanding contribution and show strong potential to
                strengthen Icelandic fisheries.
              </p>

              <p>
                The award recognises originality, value creation,
                sustainability, collaboration and positive impact on the
                fisheries sector.
              </p>
            </div>

            <a
              href="https://sjavarutvegsradstefnan.is/hvatningarverdlaun/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Learn more about the award
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3"
          >
            {awardValues.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="border-b border-slate-200 pb-8 sm:border-b-0 sm:border-l sm:pl-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-5xl items-center gap-5 px-6 lg:px-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
            <Globe2 className="h-7 w-7" />
          </div>

          <p className="text-base leading-7 text-slate-700">
            We are proud to contribute to the international sharing of
            Icelandic fisheries management experience and to help build a more
            sustainable future for global fisheries.
          </p>
        </div>
      </section>
    </main>
  );
}