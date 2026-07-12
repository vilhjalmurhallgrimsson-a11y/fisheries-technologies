"use client";

import { motion } from "framer-motion";
import { Brain, CheckCircle2 } from "lucide-react";

const insights = [
  "Species confidence 98%",
  "Landing anomaly detected",
  "Catch forecast updated",
  "Recommendation generated",
];

export default function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="
        w-72
        rounded-2xl
        border
        border-cyan-400/20
        bg-slate-950/75
        p-5
        text-white
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-300/15">
          <Brain className="h-4 w-4 text-cyan-300" />
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
            AI Insights
          </h3>

          <p className="text-[9px] text-slate-400">
            Live operational intelligence
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {insights.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />

            <span className="text-[10px] leading-4 text-slate-200">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-white/10 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-[8px] uppercase tracking-[0.15em] text-slate-500">
            Updated moments ago
          </span>

          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}