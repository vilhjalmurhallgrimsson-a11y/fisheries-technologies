"use client";

import CountUp from "react-countup";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");

  return (
    <div>
      <p className="text-3xl font-bold text-slate-900">
        <CountUp
          end={numericValue}
          duration={2}
          decimals={value.includes(".") ? 1 : 0}
        />
        {suffix}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}