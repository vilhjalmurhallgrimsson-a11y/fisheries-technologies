import { CheckCircle2 } from "lucide-react";

type RecentSubmission = {
  vessel: string;
  type: string;
  status: string;
};

type RecentSubmissionsProps = {
  items: RecentSubmission[];
};

export default function RecentSubmissions({ items }: RecentSubmissionsProps) {
  return (
    <div className="mt-5 rounded-2xl bg-white/10 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold">Recent submissions</p>
        <CheckCircle2 size={16} className="text-emerald-300" />
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.vessel}
            className="grid grid-cols-3 rounded-xl bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10"
          >
            <span>{item.vessel}</span>
            <span className="text-slate-400">{item.type}</span>
            <span className="text-right text-emerald-300">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}