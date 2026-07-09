import Badge from "./Badge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Badge>{eyebrow}</Badge>

      <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        {text}
      </p>
    </div>
  );
}