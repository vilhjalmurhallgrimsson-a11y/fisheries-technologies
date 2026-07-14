"use client";



import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

import {

  ArrowRight,

  BarChart3,

  Check,

  Database,

  RadioTower,

  ShieldCheck,

  Sparkles,

} from "lucide-react";



const highlights = [

  "National Fisheries Systems",

  "Regional Governance",

  "Mobile Data Collection",

  "Monitoring & Compliance",

  "Analytics & AI Assistance",

];



const aiCapabilities = [

  {

    label: "AI Assistance",

    icon: Sparkles,

  },

  {

    label: "Data Quality",

    icon: Database,

  },

  {

    label: "Monitoring",

    icon: RadioTower,

  },

  {

    label: "Decision Support",

    icon: BarChart3,

  },

];



const aiInsights = [

  "Species confidence 98%",

  "Landing anomaly detected",

  "Catch forecast updated",

  "Recommendation generated",

];



export default function Hero() {

  return (

    <section

      id="solutions"

      className="relative isolate overflow-hidden bg-white"

    >

      <div

        aria-hidden="true"

        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_25%,rgba(219,234,254,0.9),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(224,242,254,0.8),transparent_38%),linear-gradient(to_bottom,#ffffff,#f8fafc)]"

      />



      <div

        aria-hidden="true"

        className="absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl"

      />



      <div

        aria-hidden="true"

        className="absolute -right-32 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-200/30 blur-3xl"

      />



      <div className="mx-auto flex min-h-[760px] max-w-[1500px] items-center px-6 py-24 lg:min-h-[820px] lg:px-10 lg:py-28 xl:px-14">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:grid-cols-[0.68fr_1.32fr] xl:gap-16">

          <motion.div

            initial={{ opacity: 0, y: 18 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.7 }}

            className="relative z-10"

          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">

              <Sparkles className="h-4 w-4 text-blue-600" />



              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">

                Integrated fisheries governance platform

              </span>

            </div>



            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[64px] xl:text-[72px]">

              Governing Fisheries

              <span className="mt-2 block text-blue-600">

                at Every Scale

              </span>

            </h1>



            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">

              Supporting fisheries authorities with AI-assisted data

              collection, intelligent monitoring and modern governance across

              every scale of fisheries.

            </p>



            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link

                href="mailto:info@fishtech.is"

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold !text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:!text-white"

              >

                Request a demo

                <ArrowRight className="h-4 w-4" />

              </Link>



              <Link

                href="#platform"

                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white"

              >

                Explore the platform

              </Link>

            </div>



            <div className="mt-10 grid gap-3 sm:grid-cols-2">

              {highlights.map((item) => (

                <div

                  key={item}

                  className="flex items-center gap-3 text-sm font-medium text-slate-700"

                >

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">

                    <Check className="h-3.5 w-3.5 text-blue-700" />

                  </span>



                  <span>{item}</span>

                </div>

              ))}

            </div>

          </motion.div>



          <motion.div

            initial={{ opacity: 0, x: 24 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8, delay: 0.15 }}

            className="relative w-full lg:-mr-10 lg:scale-[1.06] xl:-mr-16 xl:scale-[1.1]"

          >

            <div className="relative aspect-[16/9.7] w-full overflow-hidden rounded-[30px] border border-white/70 bg-slate-200 shadow-[0_40px_110px_-35px_rgba(15,23,42,0.38)]">

              <Image

                src="/images/hero/fisheries-governance.png"

                alt="Fisheries governance platform connecting vessels, field operations, monitoring and analytics"

                fill

                priority

                sizes="(max-width: 1024px) 100vw, 66vw"

                className="object-cover"

              />



              <div

                aria-hidden="true"

                className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/5"

              />



              <div className="absolute left-4 right-4 top-4 hidden grid-cols-4 gap-2 lg:grid">

                {aiCapabilities.map(({ label, icon: Icon }) => (

                  <div

                    key={label}

                    className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-slate-950/55 px-3 py-2.5 text-white shadow-lg backdrop-blur-md"

                  >

                    <Icon className="h-4 w-4 text-cyan-300" />



                    <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em]">

                      {label}

                    </span>

                  </div>

                ))}

              </div>



           <div className="absolute right-1 top-66 z-20 hidden origin-top-right scale-[0.7] xl:block">

  <AIInsights />

</div>



              <div className="absolute bottom-5 left-5 hidden items-center gap-3 rounded-2xl border border-white/25 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl md:flex">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">

                  <ShieldCheck className="h-[18px] w-[18px]" />

                </div>



                <div>

                  <p className="text-xs font-semibold text-slate-900">

                    Connected governance

                  </p>



                  <p className="mt-0.5 text-[10px] text-slate-500">

                    Field, fleet and authority operations

                  </p>

                </div>

              </div>

            </div>



            <div

              aria-hidden="true"

              className="absolute -bottom-8 left-8 right-8 -z-10 h-24 rounded-full bg-blue-500/20 blur-3xl"

            />

          </motion.div>

        </div>

      </div>

    </section>

  );

}



function AIInsights() {

  return (

    <motion.div

      initial={{ opacity: 0, y: 16, scale: 0.98 }}

      animate={{ opacity: 1, y: 0, scale: 1 }}

      transition={{ duration: 0.65, delay: 0.75 }}

      className="absolute bottom-5 right-5 hidden w-[285px] rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-5 text-white shadow-2xl backdrop-blur-xl md:block xl:w-[300px]"

    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/10">

          <Sparkles className="h-5 w-5 text-cyan-300" />

        </div>



        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-cyan-300">

            AI Insights

          </p>



          <p className="mt-0.5 text-[11px] text-slate-400">

            Live operational intelligence

          </p>

        </div>

      </div>



      <div className="mt-5 space-y-3">

        {aiInsights.map((insight, index) => (

          <motion.div

            key={insight}

            initial={{ opacity: 0, x: 8 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{

              duration: 0.4,

              delay: 0.95 + index * 0.1,

            }}

            className="flex items-start gap-2.5"

          >

            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">

              <Check className="h-3 w-3 text-emerald-300" />

            </span>



            <span className="text-xs leading-5 text-slate-200">

              {insight}

            </span>

          </motion.div>

        ))}

      </div>



      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">

        <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">

          Updated moments ago

        </span>



        <span className="relative flex h-2 w-2">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

        </span>

      </div>

    </motion.div>

  );

}