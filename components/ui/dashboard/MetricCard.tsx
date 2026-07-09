import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export default function MetricCard({
  label,
  value,
  icon: Icon,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-blue-300">
        <Icon size={16} />
      </div>

      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}