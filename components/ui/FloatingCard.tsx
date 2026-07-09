"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
};

export default function FloatingCard({
  title,
  text,
  icon: Icon,
  className = "",
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur lg:block ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Icon size={20} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-500">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}