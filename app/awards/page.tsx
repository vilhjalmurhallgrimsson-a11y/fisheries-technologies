"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Medal,
  Quote,
  UserRound,
  Waves,
} from "lucide-react";

import Header from "@/components/layout/Header";

const awardDetails = [
  {
    label: "Award",
    value: "The Fisheries Manager",
    icon: Medal,
  },
  {
    label: "Recognition",
    value: "Exporting Icelandic fisheries management expertise",
    icon: Globe2,
  },
  {
    label: "Recipient",
    value: "Vilhjálmur Hallgrímsson",
    icon: UserRound,
  },
  {
    label: "Company",
    value: "Fisheries Technologies ehf.",
    icon: Building2,
  },
];

const gallery = [
  {
    src: "/images/awards/award-front.jpg",
    alt: "Front view of The Fisheries Manager award",
  },
  {
    src: "/images/awards/award-left.jpg",
    alt: "Left side view of the glass award",
  },
  {
    src: "/images/awards/award-back.jpg",
    alt: "Rear view of the glass award",
  },
  {
    src: "/images/awards/award-right.jpg",
    alt: "Right side view of the glass award",
  },
  {
    src: "/images/awards/award-angle.jpg",
    alt: "Angled view of The Fisheries Manager award",
  },
  {
    src: "/images/awards/award-plaque.jpg",
    alt: "Close-up of the inscription on the award",
  },
];

const values = [
  {
    title: "Leadership",
    description:
      "Turning fisheries expertise into practical systems that support better governance.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Combining fisheries knowledge, digital technology and operational experience.",
    icon: Lightbulb,
  },
  {
    title: "International impact",
    description:
      "Sharing Icelandic fisheries management expertise with partners internationally.",
    icon: Globe2,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-50 pt-28 lg:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(186,230,253,0.7),transparent_34%),radial-gradient(circle_at_15%_35%,rgba(219,234,254,0.8),transparent_32%),linear-gradient(to_bottom,#f8fafc,#ffffff)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-28 top-10 -z-10 h-[440px] w-[440px] rounded-full bg-cyan-200/30 blur-3xl"
        />

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10"
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to FishTech
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">
              Awards &amp; Recognition
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]">
              Excellence in fisheries management
            </h1>

            <div className="mt-8 h-px w-20 bg-sky-600" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Recognition of the work behind The Fisheries Manager and the
              international transfer of Icelandic fisheries management
              expertise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
  href="#award-story"
  className="inline-flex items-center gap-2 rounded-full bg-[#1d4ed8] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e40af] hover:shadow-lg"
>
  Read the story
  <ArrowRight className="h-4 w-4" />
</a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-sky-500 hover:text-sky-700"
              >
                View the award
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-10 bottom-0 h-24 rounded-[50%] bg-slate-900/20 blur-3xl"
            />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 bg-white/30 shadow-[0_35px_100px_-45px_rgba(15,23,42,0.5)] backdrop-blur">
              <Image
                src="/images/awards/award-main-2.png"
                alt="The Fisheries Manager glass award"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-slate-200 bg-white py-20 lg:py-28">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10"
        >
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Award className="h-8 w-8" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Recognition
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Recognition built on practical fisheries expertise
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Fisheries Technologies develops digital systems around the real
              operational requirements of fisheries authorities. The Fisheries
              Manager award recognises the successful development and export of
              Icelandic fisheries management knowledge through technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Story */}
      <section
        id="award-story"
        className="scroll-mt-24 bg-slate-950 py-24 text-white lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <Image
                src="/images/awards/award-angle.png"
                alt="Side view of The Fisheries Manager award"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden max-w-[250px] rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                The inscription
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                “The Fisheries Manager – Útflutningur á íslenskri
                fiskveiðistjórnun”
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              The story
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Bringing Icelandic fisheries expertise to the world
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300">
              The Fisheries Manager was developed to translate fisheries
              management knowledge into practical digital tools for government
              authorities and sector organisations.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The award reflects work that combines fisheries operations,
              governance, data management and technology to support
              transparency, sustainability and stronger decision-making.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Built around real fisheries operations",
                "Designed to support public-sector governance",
                "Developed from Icelandic fisheries expertise",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Award details */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Featured recognition
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              The Fisheries Manager Award
            </h2>
          </motion.div>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              {...fadeUp}
              className="flex flex-col justify-center p-8 sm:p-12 lg:p-14"
            >
              <div className="space-y-8">
                {awardDetails.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-1.5 font-semibold leading-6 text-slate-900">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative min-h-[430px] overflow-hidden bg-slate-100"
            >
              <Image
                src="/images/awards/award-right.jpg"
                alt="Detailed view of The Fisheries Manager award"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-slate-950/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              What it represents
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              More than a physical award
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-24 bg-slate-50 py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                The award
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Sculpted in glass
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              A unique glass artwork with an organic, wave-like profile and a
              stone base bearing the original inscription.
            </p>
          </motion.div>

          <div className="mt-14 grid auto-rows-[230px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-slate-200 ${
                  index === 0
                    ? "sm:row-span-2 sm:auto-rows-auto lg:col-span-2"
                    : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative isolate overflow-hidden bg-sky-950 py-24 text-white lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_35%)]"
        />

        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl px-6 text-center lg:px-10"
        >
          <Quote className="mx-auto h-11 w-11 text-sky-300" />

          <blockquote className="mt-8 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Technology creates lasting value when it strengthens the people,
            institutions and communities responsible for our fisheries.
          </blockquote>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Fisheries Technologies
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 lg:py-28">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-7xl px-6 lg:px-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-sky-500/20 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3 text-sky-300">
                <Waves className="h-6 w-6" />
                <span className="text-sm font-bold uppercase tracking-[0.18em]">
                  Work with FishTech
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Building stronger fisheries systems through technology
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Discover how Fisheries Technologies supports data collection,
                governance, monitoring and operational decision-making.
              </p>
            </div>

            <div className="relative mt-9 lg:mt-0">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}