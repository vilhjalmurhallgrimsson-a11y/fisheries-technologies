import {
  Anchor,
  Building2,
  Globe2,
  Ship,
} from "lucide-react";

type SpectrumItem = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  accent: string;
};

const spectrumItems: SpectrumItem[] = [
  {
    title: "Artisanal",
    description:
      "Empowering local communities and supporting sustainable livelihoods.",
    image: "/images/spectrum/artisinal-fisheries.png",
    icon: Anchor,
    accent: "#25b7dd",
  },
  {
    title: "Small-scale",
    description:
      "Streamlining operations and improving data collection and reporting.",
    image: "/images/spectrum/small-scale-II.png",
    icon: Ship,
    accent: "#1685dc",
  },
  {
    title: "Commercial",
    description:
      "Enhancing efficiency and compliance across commercial fleets.",
    image: "/images/spectrum/commercial.png",
    icon: Ship,
    accent: "#1671cf",
  },
  {
    title: "Industrial",
    description:
      "Managing complex operations with robust monitoring and control.",
    image: "/images/spectrum/industrial-fisheries.png",
    icon: Ship,
    accent: "#1766c1",
  },
  {
    title: "National",
    description:
      "Enabling data-driven decisions and effective fisheries management.",
    image: "/images/spectrum/national-fisheries.png",
    icon: Building2,
    accent: "#17b7a5",
  },
  {
    title: "Regional",
    description:
      "Connecting data and people for collaborative regional governance.",
    image: "/images/spectrum/regional-fisheries.png",
    icon: Globe2,
    accent: "#12a999",
  },
];

export default function FisheriesSpectrum() {
  return (
    <section className="fisheries-spectrum" id="fisheries-spectrum">
      <div className="fisheries-spectrum__container">
        <header className="fisheries-spectrum__header">
          <span className="fisheries-spectrum__eyebrow">
            Fisheries Spectrum
          </span>

          <span className="fisheries-spectrum__header-line" />

          <h2>One platform. Every fisheries context.</h2>

          <p>
            TFM supports governance from local landing sites to national
            authorities and regional fisheries organizations.
          </p>
        </header>

        <div className="fisheries-spectrum__grid">
          {spectrumItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="spectrum-card"
                style={
                  {
                    "--card-accent": item.accent,
                  } as React.CSSProperties
                }
              >
                <div className="spectrum-card__image-container">
                  <img
                    src={item.image}
                    alt={`${item.title} fisheries`}
                    className="spectrum-card__image"
                  />

                  <div className="spectrum-card__image-shade" />
                </div>

                <div className="spectrum-card__body">
                  <div className="spectrum-card__icon">
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  <h3>{item.title}</h3>

                  <span className="spectrum-card__line" />

                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}