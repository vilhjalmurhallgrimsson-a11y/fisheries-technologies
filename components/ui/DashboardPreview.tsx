import DashboardHeader from "@/components/ui/dashboard/DashboardHeader";
import MetricCard from "@/components/ui/dashboard/MetricCard";
import MapPreview from "@/components/ui/dashboard/MapPreview";
import DataQualityGauge from "@/components/ui/dashboard/DataQualityGauge";
import RecentSubmissions from "@/components/ui/dashboard/RecentSubmissions";

import {
  dashboardMetrics,
  dashboardQuality,
  recentSubmissions,
  regionalActivity,
} from "@/data/dashboard";

export default function DashboardPreview() {
  return (
    <div className="relative rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
      {/* Glow */}
      <div className="absolute -inset-1 -z-10 rounded-[36px] bg-blue-500/20 blur-3xl" />

      <div className="min-h-[460px] overflow-hidden rounded-2xl bg-slate-950 p-5 text-white">

        <DashboardHeader />

        {/* KPI Cards */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {dashboardMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
            />
          ))}
        </div>

        {/* Middle Row */}
        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <MapPreview items={regionalActivity} />
          </div>

          <div className="lg:col-span-2">
            <DataQualityGauge
              label={dashboardQuality.label}
              value={dashboardQuality.value}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <RecentSubmissions
          items={recentSubmissions}
        />
      </div>
    </div>
  );
}