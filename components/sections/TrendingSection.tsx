"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Clock, Zap } from "lucide-react";

interface TrendingItem {
  rank: number;
  name: string;
  creator: string;
  change: string;
  changeType: "up" | "down" | "new";
  category: string;
  categoryColor: string;
  metric: string;
  metricValue: string;
  href: string;
}

const trendingItems: TrendingItem[] = [
  {
    rank: 1,
    name: "Claude Sonnet 4.6",
    creator: "Anthropic",
    change: "+23%",
    changeType: "up",
    category: "Modelos",
    categoryColor: "models",
    metric: "SWE-bench",
    metricValue: "72%",
    href: "/models/claude-sonnet-4",
  },
  {
    rank: 2,
    name: "DeepSeek-V3",
    creator: "DeepSeek",
    change: "Nuevo",
    changeType: "new",
    category: "Modelos",
    categoryColor: "models",
    metric: "Precio",
    metricValue: "$0.27/1M",
    href: "/models/deepseek-v3",
  },
  {
    rank: 3,
    name: "Llama 4 Maverick",
    creator: "Meta",
    change: "+15%",
    changeType: "up",
    category: "Modelos",
    categoryColor: "models",
    metric: "HumanEval",
    metricValue: "93%",
    href: "/models/llama-4-maverick",
  },
  {
    rank: 4,
    name: "Composio",
    creator: "Composio",
    change: "250+",
    changeType: "up",
    category: "MCP",
    categoryColor: "mcp",
    metric: "Integraciones",
    metricValue: "250+",
    href: "/mcp/composio",
  },
  {
    rank: 5,
    name: "LangGraph Enterprise",
    creator: "LangChain",
    change: "Nuevo",
    changeType: "new",
    category: "Agentes",
    categoryColor: "agents",
    metric: "Uptime",
    metricValue: "99.9%",
    href: "/agents/langgraph",
  },
  {
    rank: 6,
    name: "Gemini 2.5 Pro",
    creator: "Google",
    change: "+4%",
    changeType: "up",
    category: "Modelos",
    categoryColor: "models",
    metric: "MMMU",
    metricValue: "82%",
    href: "/models/gemini-2-5-pro",
  },
];

const badgeMap: Record<string, string> = {
  models: "bg-models-dim text-models",
  agents: "bg-agents-dim text-agents",
  mcp: "bg-mcp-dim text-mcp",
  skills: "bg-skills-dim text-skills",
};

export function TrendingSection() {
  return (
    <section className="mt-16 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/10 border border-amber-500/20">
                <Flame className="h-3.5 w-3.5 text-amber-400" />
              </div>
              <span className="text-xs font-medium text-amber-400">
                Tendencia
              </span>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              Lo Más Hot en IA
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Lo que la comunidad está usando ahora mismo
            </p>
          </div>
          <Link
            href="/news"
            className="flex items-center gap-1 text-xs font-medium text-amber-400 hover:underline"
          >
            Ver novedades <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="glass rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 border-b border-border px-5 py-3 text-[10px] font-medium uppercase tracking-wider text-text-muted">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Herramienta</div>
            <div className="col-span-2">Categoría</div>
            <div className="col-span-2 text-right">Métrica</div>
            <div className="col-span-3 text-right">Cambio</div>
          </div>

          {/* Rows */}
          {trendingItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={item.href}>
                <div className="grid grid-cols-12 gap-4 border-b border-border/50 px-5 py-4 transition-colors hover:bg-surface-hover cursor-pointer">
                  <div className="col-span-1 flex items-center">
                    <span
                      className={`font-mono text-sm font-bold tabular-nums ${
                        item.rank <= 3 ? "text-amber-400" : "text-text-muted"
                      }`}
                    >
                      {item.rank}
                    </span>
                  </div>
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-border">
                      <span className="text-xs font-bold text-text-primary">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-text-muted">
                        {item.creator}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeMap[item.categoryColor]}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="col-span-2 flex items-center justify-end gap-1.5">
                    <span className="text-[10px] text-text-muted">
                      {item.metric}:
                    </span>
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      {item.metricValue}
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end">
                    <span
                      className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        item.changeType === "up"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : item.changeType === "new"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {item.changeType === "up" && (
                        <Zap className="h-2.5 w-2.5" />
                      )}
                      {item.changeType === "new" && (
                        <Clock className="h-2.5 w-2.5" />
                      )}
                      {item.change}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
