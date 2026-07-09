import {
  Activity,
  AlertTriangle,
  Ship,
} from "lucide-react";

export const dashboardMetrics = [
  { label: "Submissions", value: "18.4k", icon: Activity },
  { label: "Active vessels", value: "2,341", icon: Ship },
  { label: "Open alerts", value: "47", icon: AlertTriangle },
];

export const regionalActivity = [
  { region: "Jamaica", value: 92 },
  { region: "Saint Kitts", value: 74 },
  { region: "Mauritius", value: 81 },
  { region: "EU pilots", value: 58 },
];

export const recentSubmissions = [
  { vessel: "JAM-2041", type: "Landing Survey", status: "Validated" },
  { vessel: "SKN-118", type: "eLogbook", status: "Review" },
  { vessel: "MUS-774", type: "VMS Track", status: "Live" },
];
export const dashboardQuality = {
  label: "Data quality",
  value: "98%",
};