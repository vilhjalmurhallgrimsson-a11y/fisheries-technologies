import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  items?: string[];
  href?: string;
  eyebrow?: string;
  imageAlt?: string;
};

export default function FeatureCard({
  title,
  description,
  image,
  icon: Icon,
  items = [],
  href = "#",
  eyebrow,
  imageAlt,
}: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__image">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 25vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />

        <div className="feature-card__icon">
          <Icon size={24} strokeWidth={2} />
        </div>
      </div>

      <div className="feature-card__content">
        {eyebrow && (
          <span className="feature-card__eyebrow">
            {eyebrow}
          </span>
        )}

        <h3>{title}</h3>

        <p className="feature-card__description">
          {description}
        </p>

        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <Link href={href} className="feature-card__link">
          Learn more
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}