type RegionalActivityItem = {
  region: string;
  value: number;
};

type MapPreviewProps = {
  items: RegionalActivityItem[];
};

export default function MapPreview({ items }: MapPreviewProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Regional activity</p>
        <span className="text-xs text-slate-400">Live overview</span>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-900/80 p-4">
        <div className="relative h-32 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(59,130,246,0.35),_transparent_30%),radial-gradient(circle_at_65%_55%,_rgba(16,185,129,0.25),_transparent_30%)]" />

          <svg
            viewBox="0 0 600 220"
            className="absolute inset-0 h-full w-full opacity-40"
            aria-hidden="true"
          >
            <path
              d="M40 95 C120 60 180 70 240 95 C310 125 380 80 455 110 C510 130 560 105 590 95"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-300"
            />
            <path
              d="M70 140 C160 110 230 150 300 125 C370 95 450 150 540 125"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-emerald-300"
            />
          </svg>

          <div className="absolute left-[22%] top-[42%] h-3 w-3 animate-pulse rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
<div className="absolute left-[38%] top-[55%] h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
<div className="absolute left-[62%] top-[45%] h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
<div className="absolute left-[78%] top-[58%] h-3 w-3 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(129,140,248,0.9)]" />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <div key={item.region}>
            <div className="mb-1 flex justify-between text-xs text-slate-400">
              <span>{item.region}</span>
              <span>{item.value}%</span>
            </div>

            <div className="h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-blue-400"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}