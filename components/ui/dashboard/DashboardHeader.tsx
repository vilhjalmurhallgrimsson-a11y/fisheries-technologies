import { Radio } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <p className="text-sm font-semibold">TFM Command Center</p>
        <p className="text-xs text-slate-400">Operational overview</p>
      </div>

      <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <Radio size={12} />
        Live
      </span>
    </div>
  );
}