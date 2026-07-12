import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Database,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Network,
  Radar,
  Users,
  Waves,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Fisheries Manager | Fisheries Technologies",
  description:
    "Meet the Fisheries Technologies team and explore The Fisheries Manager platform.",
  robots: {
    index: false,
    follow: false,
  },
};

const team = [
  {
    name: "Vilhjálmur Hallgrímsson",
    role: "Chief Executive Officer (CEO)",
    area: "Business Strategy & Partnerships",
    email: "vh@fishtech.is",
    image: "/images/tfm/staff/villi4_Staff.png",
    responsibilities: [
      "Business strategy",
      "Partnerships",
      "International projects",
    ],
  },
  {
    name: "Sachin Raibole",
    role: "Chief Technology Officer (TCO)",
    area: "Technology & Architecture",
    email: "sachin.raibole@fishtech.is",
    image: "/images/tfm/staff/sachin3_Staff.png",
    responsibilities: [
      "Platform architecture",
      "Integrations",
      "Security and technology",
    ],
  },
  {
    name: "Ravi Mundhe",
    role: "Head of market & Sales - APAC",
    area: "Implementation & Delivery",
    email: "ravi.mundhe@fishtech.is",
    image: "/images/tfm/staff/Ravi_Staff3.png",
    responsibilities: [
      "Business Development",
      "Strategic Partnerships",
      "Customer Engagement",
    ],
  },
  {
    name: "Mahesh Mankar",
    role: "Head of Development - APAC",
    area: "Product Development",
    email: "mahesh.mankar@fishtech.is",
    image: "/images/tfm/staff/Mahesh_Staff.png",
    responsibilities: [
      "Market Expansion",
      "Requirements",
      "Strategic Growth",
    ],
  },
];

const platformAreas = [
  {
    eyebrow: "Operational Data",
    title: "Reliable data from the field to the national level",
    description:
      "Capture landing surveys, electronic logbooks, landing declarations and operational fisheries data through connected mobile and web applications.",
    image: "/images/tfm/one-platform.png",
    icon: Database,
  },
  {
    eyebrow: "Governance",
    title: "One environment for fisheries administration",
    description:
      "Manage vessels, fishers, licences, permits, reference data and configurable workflows that reflect national and regional requirements.",
    image: "/images/tfm/one-env.png",
    icon: Building2,
  },
  {
    eyebrow: "Monitoring & Compliance",
    title: "A clearer operational picture",
    description:
      "Bring VMS, AIS, inspections, alerts, observations and case management together in a single monitoring environment.",
    image: "/images/tfm/mon-compl.png",
    icon: Radar,
  },
  {    eyebrow: "Analytics",
    title: "Turn fisheries data into decisions",
    description:
      "Use operational dashboards, reporting, data-quality controls and analytics to strengthen planning and decision-making.",
    image: "/images/tfm/analytics2.png",
    icon: BarChart3,
  },
  {
    eyebrow: "Regional Cooperation",
    title: "Connect organisations and systems",
    description:
      "Support secure information exchange across national authorities, regional organisations, research initiatives and external platforms.",
    image: "/images/tfm/regionalop2.png",
    icon: Network,  
  },
];

const audiences = [
  "National fisheries authorities",
  "Regional fisheries organisations",
  "Research and innovation projects",
  "Small-scale fisheries",
  "Commercial and industrial fisheries",
  "Electronic reporting programmes",
  "Mobile field-data collection",
  "Analytics and decision support",
];

const projects = [
  {
    name: "Jamaica",
    organisation: "National Fisheries Authority",
    image: "/images/projects/nfa2.png",
  },
  {
    name: "Saint Kitts and Nevis",
    organisation: "Fisheries Department",
    image: "/images/projects/skn3.png",
  },
  {
    name: "Cooperation",
    organisation: "Regional Fisheries Cooperation",
    image: "/images/projects/regional2.png",
  },
  {
    name: "FIDEL",
    organisation: "Horizon Europe",
    image: "/images/projects/fidel_eu2.png",
  },
];

export default function TFMPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Hero />
      <Introduction />
      <TeamSection />
      <PlatformSection />
      <HowWeHelp />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#031b33] text-white lg:min-h-[820px]">
      <Image
        src="/images/tfm/tfm-hero2.png"
        alt="Fisheries professionals using digital fisheries technology"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,27,51,.68) 0%, rgba(3,27,51,.38) 38%, rgba(3,27,51,.12) 72%, rgba(3,27,51,0) 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#031b33]/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col px-6 py-8 lg:min-h-[820px] lg:px-10">
  <header className="flex items-center justify-between">
    <Link
      href="https://www.fishtech.is"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fisheries Technologies home"
    >
      <Image
        src="/images/logo/SquarelogosWhite.png"
        alt="Fisheries Technologies"
        width={130}
        height={40}
        priority
        className="h-auto w-[120px] sm:w-[130px]"
      />
    </Link>

    <Link
  href="https://www.fishtech.is"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-sky-400"
>
  Visit the main website
  <ExternalLink className="h-4 w-4" />
</Link>
  </header>

        <div className="my-auto max-w-2xl py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Thank you for connecting with us
          </p>

          <h1
            className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            style={{
              textShadow: "0 6px 30px rgba(0,0,0,.28)",
            }}
          >
            It was great meeting you.
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-8 text-white/90"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,.25)",
            }}
          >
            Thank you for taking the time to connect with Fisheries
            Technologies.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,.2)",
            }}
          >
            Whether we discussed national fisheries systems, digital
            transformation, mobile data collection or fisheries governance,
            this page introduces the team and platform behind our work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#platform"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-sky-400"
            >
              Explore The Fisheries Manager
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#team"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 bg-slate-950/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Users className="h-4 w-4" />
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            Welcome to FishTech
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Technology built around real fisheries operations.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            Fisheries Technologies is an Icelandic technology company
            specialising in digital solutions for fisheries management,
            monitoring and governance.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We work with fisheries authorities, regional organisations and
            research partners to improve how fisheries data is collected,
            managed, shared and used.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-sky-600" />
              Icelandic fisheries expertise
            </span>

            <span className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-sky-600" />
              International experience
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-transparent to-blue-50 blur-2xl" />

          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
            <Image
              src="/images/tfm/intro.png"
              alt="The Fisheries Manager dashboard"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            The FishTech team
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            The people you will be working with
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            You work directly with the people designing, building and
            implementing the platform—not through a separate sales
            organisation.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <article key={member.email} className="group">
              <div className="relative aspect-[3/5] overflow-hidden rounded-3xl bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>

              <div className="px-1 pt-6">
                <p className="text-sm font-semibold text-sky-600">
                  {member.role}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {member.area}
                </p>

                <div className="mt-5 space-y-2">
                  {member.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Check className="h-4 w-4 text-sky-600" />
                      {responsibility}
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:${member.email}?subject=Continuing our FishTech conversation`}
                   target="_blank"
  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-sky-600"
                >
                  <Mail className="h-4 w-4" />
                  {member.email}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">
          <p className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
            Whoever you met, you have the full FishTech team behind you.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            The Fisheries Manager
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">
            One platform. Every fisheries context.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            TFM connects field data, operational workflows, governance,
            monitoring and analytics in one configurable platform.
          </p>
        </div>

        <div className="mt-20 space-y-28 lg:space-y-36">
          {platformAreas.map((area, index) => {
            const Icon = area.icon;
            const reverse = index % 2 !== 0;

            return (
              <article
                key={area.title}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-slate-100">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="max-w-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
                    {area.eyebrow}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                    {area.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {area.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  return (
    <section className="bg-[#f4f8fc] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
            How we help
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
            Designed for fisheries at every scale
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            The platform can be configured around the operational,
            administrative and reporting needs of each organisation.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="flex items-center gap-4 border-b border-slate-200 py-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                <Check className="h-4 w-4" />
              </div>

              <span className="text-base font-semibold text-slate-800">
                {audience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
              International experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Selected international work
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Working with national authorities, regional organisations and
              European research partners.
            </p>
          </div>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-sky-600"
          >
            View more projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.name}
              href="/#projects"
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                  {project.name}
                </p>

                <h3 className="mt-2 text-xl font-semibold leading-tight">
                  {project.organisation}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold opacity-0 transition duration-300 group-hover:opacity-100">
                  Explore project
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#031b33] py-24 text-white lg:py-32"
    >
      <Image
        src="/images/tfm/contact-background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-[#031b33]/78" />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,27,51,.98) 0%, rgba(3,27,51,.86) 48%, rgba(3,27,51,.45) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Continue the conversation
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Let&apos;s continue from where we left off.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            Whether you would like a platform demonstration, a technical
            discussion or an initial assessment of your fisheries
            requirements, our team would be pleased to continue the
            conversation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:info@fishtech.is?subject=Continuing our FishTech conversation"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              <Mail className="h-4 w-4" />
              Email our team
            </a>

            <a
              href="https://www.linkedin.com/company/fisheries-technologies"
              target="_blank"
             rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
            
              Connect on LinkedIn
            </a>

            <Link
              href="/"
              target="_blank"
  rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Visit FishTech
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <a
              key={member.email}
              href={`mailto:${member.email}?subject=Continuing our FishTech conversation`}
              className="group"
            >
              <p className="text-sm font-semibold text-white">{member.name}</p>
              <p className="mt-1 text-sm text-white/50">{member.role}</p>

              <div className="mt-3 flex items-center gap-2 text-sm text-sky-300 transition group-hover:text-sky-200">
                <Mail className="h-4 w-4" />
                Contact
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#02172b] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-9 md:flex-row md:items-center md:justify-between lg:px-10">
        <Link href="/">
          <Image
            src="/images/logo/SquareLogosWhite.png"
            alt="Fisheries Technologies"
            width={82}
            height={25}
            className="h-auto w-[75px]"
          />
        </Link>

        <div className="flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
          <a
            href="mailto:info@fishtech.is"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
            info@fishtech.is
          </a>

          <Link
            href="/"
              target="_blank"
  rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Globe2 className="h-4 w-4" />
            www.fishtech.is
          </Link>

          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Reykjavík, Iceland
          </span>
        </div>
      </div>
    </footer>
  );
}