"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DirectoryItem, CategorySlug } from "@/lib/types";

interface Props {
  items: DirectoryItem[];
  color: string;
  category: CategorySlug;
}

const borderMap: Record<string, string> = {
  models: "border-l-models",
  agents: "border-l-agents",
  mcp: "border-l-mcp",
  skills: "border-l-skills",
};

const badgeMap: Record<string, string> = {
  models: "bg-models-dim text-models",
  agents: "bg-agents-dim text-agents",
  mcp: "bg-mcp-dim text-mcp",
  skills: "bg-skills-dim text-skills",
};

export function CategoryPageClient({ items, color, category }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Link href={`/${category}/${item.slug}`}>
            <div
              className={`glass glass-hover group cursor-pointer rounded-xl border-l-2 p-5 transition-all duration-200 ${borderMap[color]}`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-text-muted">{item.creator}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeMap[color]}`}
                >
                  {item.license}
                </span>
              </div>
              <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.metrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="rounded-md bg-surface px-2 py-1 font-mono text-[10px] tabular-nums text-text-muted"
                  >
                    {metric.label}: {metric.value}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
