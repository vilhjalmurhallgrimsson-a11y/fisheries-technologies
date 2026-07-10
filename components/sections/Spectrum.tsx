import {
  Anchor,
  Building2,
  Globe2,
  Ship,
  type LucideIcon,
} from "lucide-react";

type SpectrumItem = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  accent: string;
  imageBackground?: string;

  /**
   * Stærð myndarinnar miðað við breidd myndasvæðisins.
   *
   * 100 = myndin er jafn breið og myndasvæðið
   * 85 = zoom out
   * 120 = zoom inn
   */
  zoom?: number;

  /**
   * Lárétt færsla í pixlum.
   *
   * Jákvæð tala = til hægri
   * Neikvæð tala = til vinstri
   */
  xOffset?: number;

  /**
   * Lóðrétt færsla í pixlum.
   *
   * Jákvæð tala = niður
   * Neikvæð tala = upp
   */
  yOffset?: number;
};

const spectrumItems: SpectrumItem[] = [
  {
    title: "Artisanal",
    description:
      "Empowering local communities and supporting sustainable livelihoods.",
    image: "/images/spectrum/artisinal-fisheries.png",
    icon: Anchor,
    accent: "#25b7dd",
    imageBackground: "#dcecf5",

    zoom: 180 ,
    xOffset: 0,
    yOffset: -8,
  },
  {
    title: "Small-scale",
    description:
      "Streamlining operations and improving data collection and reporting.",
    image: "/images/spectrum/small-scale-II.png",
    icon: Ship,
    accent: "#1685dc",
    imageBackground: "#dcecf5",

    zoom: 185,
    xOffset: 0,
    yOffset: -10,
  },
  {
    title: "Commercial",
    description:
      "Enhancing efficiency and compliance across commercial fleets.",
    image: "/images/spectrum/commercial.png",
    icon: Ship,
    accent: "#1671cf",
    imageBackground: "#dcecf5",

    zoom: 180,
    xOffset: 2,
    yOffset: 8,
  },
  {
    title: "Industrial",
    description:
      "Managing complex operations with robust monitoring and control.",
    image: "/images/spectrum/industrial-fisheries.png",
    icon: Ship,
    accent: "#1766c1",
    imageBackground: "#dcecf5",

    zoom: 180,
    xOffset: -8,
    yOffset: 5,
  },
  {
    title: "National",
    description:
      "Enabling data-driven decisions and effective fisheries management.",
    image: "/images/spectrum/national-fisheries.png",
    icon: Building2,
    accent: "#17b7a5",
    imageBackground: "#dcecf5",

    zoom: 180,
    xOffset: -60,
    yOffset: -5,
  },
  {
    title: "Regional",
    description:
      "Connecting data and people for collaborative regional governance.",
    image: "/images/spectrum/regional-fisheries.png",
    icon: Globe2,
    accent: "#12a999",
    imageBackground: "#dcecf5",

    zoom: 210,
    xOffset: 0,
    yOffset: -5,
  },
];

export default function FisheriesSpectrum() {
  return (
    <section
      id="fisheries-spectrum"
      className="fisheries-spectrum"
    >
      <div className="fisheries-spectrum__container">
        <header className="fisheries-spectrum__header">
          <span className="fisheries-spectrum__eyebrow">
            Fisheries Spectrum
          </span>

          <span
            className="fisheries-spectrum__header-line"
            aria-hidden="true"
          />

          <h2>One platform. Every fisheries context.</h2>

          <p>
            TFM supports governance from local landing sites to national
            authorities and regional fisheries organizations.
          </p>
        </header>

        <div className="fisheries-spectrum__grid">
          {spectrumItems.map((item) => {
            const Icon = item.icon;

            const zoom = item.zoom ?? 100;
            const xOffset = item.xOffset ?? 0;
            const yOffset = item.yOffset ?? 0;

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
                <div
                  className="spectrum-card__image-container"
                  style={{
                    backgroundColor:
                      item.imageBackground ?? "#dcecf5",
                  }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} fisheries`}
                    className="spectrum-card__image"
                    style={{
                      width: `${zoom}%`,
                      left: "50%",
                      top: "50%",
                      transform: `translate(
                        calc(-50% + ${xOffset}px),
                        calc(-50% + ${yOffset}px)
                      )`,
                    }}
                  />

                  <div
                    className="spectrum-card__image-shade"
                    aria-hidden="true"
                  />
                </div>

                <div className="spectrum-card__body">
                  <div className="spectrum-card__icon">
                    <Icon
                      size={32}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{item.title}</h3>

                  <span
                    className="spectrum-card__line"
                    aria-hidden="true"
                  />

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