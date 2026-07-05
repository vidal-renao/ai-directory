"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modelsData } from "@/data/models";
import { agentsData } from "@/data/agents";
import { mcpData } from "@/data/mcp";
import { skillsData } from "@/data/skills";
import type { DirectoryItem } from "@/lib/types";

const sections = [
  {
    title: "Modelos Fundacionales",
    color: "models",
    data: modelsData,
    href: "/models",
  },
  {
    title: "Frameworks de Agentes",
    color: "agents",
    data: agentsData,
    href: "/agents",
  },
  {
    title: "Servidores MCP",
    color: "mcp",
    data: mcpData,
    href: "/mcp",
  },
  {
    title: "Skills / Funciones",
    color: "skills",
    data: skillsData,
    href: "/skills",
  },
];

export function CategoryGrid() {
  return (
    <section className="space-y-12">
      {sections.map((section, sIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: sIndex * 0.1 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            <Link
              href={section.href}
              className={`flex items-center gap-1 text-xs font-medium text-${section.color} hover:underline`}
            >
              Ver todo <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.data.map((item) => (
              <ItemCard
                key={item.slug}
                item={item}
                color={section.color}
                categoryHref={section.href}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function ItemCard({
  item,
  color,
  categoryHref,
}: {
  item: DirectoryItem;
  color: string;
  categoryHref: string;
}) {
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

  return (
    <Link href={`${categoryHref}/${item.slug}`}>
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
  );
}
