"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Modelos", value: "12", color: "text-models" },
  { label: "Agentes", value: "8", color: "text-agents" },
  { label: "MCP Servers", value: "15", color: "text-mcp" },
  { label: "Skills", value: "24", color: "text-skills" },
  { label: "Licencias OSS", value: "42", color: "text-text-primary" },
  { label: "Empresas Activas", value: "180+", color: "text-text-primary" },
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mb-16 flex flex-wrap items-center justify-center gap-8 rounded-xl glass px-8 py-5 lg:mb-24"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-2">
          <span className={`font-mono text-2xl font-bold tabular-nums ${stat.color}`}>
            {stat.value}
          </span>
          <span className="text-xs text-text-muted">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
