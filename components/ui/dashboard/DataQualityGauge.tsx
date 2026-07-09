type DataQualityGaugeProps = {
  label: string;
  value: string;
};

export default function DataQualityGauge({
  label,
  value,
}: DataQualityGaugeProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-5">
      <p className="text-sm font-semibold">
        {label}
      </p>

      <div className="mt-5 flex h-28 items-center justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-emerald-400 text-3xl font-bold shadow-[0_0_25px_rgba(52,211,153,0.35)]">
          {value}
        </div>
      </div>
    </div>
  );
}