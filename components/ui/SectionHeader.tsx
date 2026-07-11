import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center" ? "section-header--centered" : "";

  return (
    <header
      className={`section-header ${alignmentClass} ${className}`.trim()}
    >
      <span className="section-eyebrow">{eyebrow}</span>

      {align === "left" ? (
        <div className="section-heading-row">
          <h2 className="section-title">{title}</h2>

          {description ? (
            <p className="section-description">{description}</p>
          ) : null}
        </div>
      ) : (
        <>
          <h2 className="section-title">{title}</h2>

          {description ? (
            <p className="section-description">{description}</p>
          ) : null}
        </>
      )}
    </header>
  );
}