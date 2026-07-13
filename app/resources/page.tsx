import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const resources = [
  {
    type: "White Paper",
    title:
      "Transforming Fisheries Data into Governance, Intelligence and Sustainable Outcomes",
    description:
      "A strategic perspective on how integrated digital platforms can transform fisheries data into stronger governance, operational intelligence and sustainable outcomes.",
    image: "/images/resources/whitepaper-cover.png",
    href: "/downloads/Transforming Fisheries Data into Governance, Intelligence and Sustainable Outcomes.pdf",
    icon: FileText,
  },
  {
    type: "Framework",
    title: "CMM-FG – Capability Maturity Model for Fisheries Governance",
    description:
      "A practical maturity model for assessing fisheries governance capabilities, identifying improvement priorities and guiding institutional and digital transformation.",
    image: "/images/resources/cmmfg-cover.png",
    href: "/downloads/CMM-FG for Fisheries Governance.pdf",
    icon: Layers3,
  },
];

const highlights = [
  {
    icon: Globe2,
    title: "Real-world experience",
    description:
      "Grounded in practical work with national fisheries authorities, regional organisations and international programmes.",
  },
  {
    icon: ShieldCheck,
    title: "Governance-focused",
    description:
      "Designed to support stronger institutions, transparent processes and more effective fisheries management.",
  },
  {
    icon: BookOpen,
    title: "Knowledge sharing",
    description:
      "Sharing frameworks and insights that help organisations plan, modernise and make better use of fisheries data.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="bg-white pt-20">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="relative min-h-[430px]">
            <Image
              src="/images/resources/resources-hero2.png"
              alt="School of fish beneath the ocean surface"
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/55 via-slate-950/15 to-transparent"
            />

            <div className="mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-24 lg:px-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Resources
                </p>

                <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                  Publications and practical frameworks
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-100">
                  Insights developed through our work in digital fisheries
                  governance, institutional development and operational
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
              Knowledge centre
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Featured resources
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore our current white paper and governance framework,
              developed to support fisheries authorities, regional
              organisations and international development initiatives.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">
                      <Icon className="h-4 w-4" />
                      {resource.type}
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">
                      {resource.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {resource.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <a
                        href={resource.href}
                        download
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-semibold !text-white no-underline transition-all duration-200 hover:bg-sky-700 hover:!text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                      >
                        <Download className="h-5 w-5 shrink-0 !text-white" />
                        <span className="!text-white">Download PDF</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Why we publish */}
        <section className="bg-slate-50 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Why we publish
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Knowledge built around real fisheries governance
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our publications connect practical implementation experience
                with broader questions of institutional capability, data use
                and sustainable fisheries management.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 text-center sm:px-12 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_45%)]"
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Continue the conversation
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Interested in applying these ideas?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Talk with our team about fisheries governance, capability
                development and digital transformation.
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-4 font-semibold !text-white no-underline transition hover:bg-sky-700 hover:!text-white"
              >
                <span className="!text-white">Contact us</span>
                <ArrowRight className="h-[18px] w-[18px] !text-white" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}