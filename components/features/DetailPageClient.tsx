"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, BarChart3 } from "lucide-react";
import type { DirectoryItem, CategorySlug } from "@/lib/types";

interface Props {
  item: DirectoryItem;
  category: CategorySlug;
  color: string;
}

const sectionColorMap: Record<string, string> = {
  models: "border-models/30 bg-models-dim",
  agents: "border-agents/30 bg-agents-dim",
  mcp: "border-mcp/30 bg-mcp-dim",
  skills: "border-skills/30 bg-skills-dim",
};

const iconColorMap: Record<string, string> = {
  models: "text-models",
  agents: "text-agents",
  mcp: "text-mcp",
  skills: "text-skills",
};

export function DetailPageClient({ item, category, color }: Props) {
  return (
    <div className="space-y-8">
      {/* Métricas */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Ficha Técnica</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-xl border p-4 ${sectionColorMap[color]}`}
            >
              <p className="mb-1 text-xs text-text-muted">{metric.label}</p>
              <p className="font-mono text-lg font-bold tabular-nums text-text-primary">
                {metric.value}
              </p>
            </div>
          ))}
          <div className="rounded-xl border border-white/5 bg-surface p-4">
            <p className="mb-1 text-xs text-text-muted">Licencia</p>
            <p className="text-lg font-bold text-text-primary">{item.license}</p>
          </div>
        </div>
      </motion.section>

      {/* Descripción */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Descripción</h2>
        <p className="leading-relaxed text-text-secondary">{item.description}</p>
      </motion.section>

      {/* Casos de Uso */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <Briefcase className={`h-5 w-5 ${iconColorMap[color]}`} />
          <h2 className="text-lg font-semibold tracking-tight">
            Casos de Uso Empresariales
          </h2>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="leading-relaxed text-text-secondary">{item.useCase}</p>
        </div>
      </motion.section>

      {/* Estado de Adopción */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className={`h-5 w-5 ${iconColorMap[color]}`} />
          <h2 className="text-lg font-semibold tracking-tight">
            Estado de Adopción Real
          </h2>
        </div>
        <div className="glass rounded-xl p-5">
          <p className="leading-relaxed text-text-secondary">
            {item.adoptionStatus}
          </p>
        </div>
      </motion.section>

      {/* Resumen visual */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className={`h-5 w-5 ${iconColorMap[color]}`} />
          <h2 className="text-lg font-semibold tracking-tight">Resumen</h2>
        </div>
        <div className="glass rounded-xl p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs text-text-muted">Categoría</p>
              <p className="font-medium text-text-primary capitalize">
                {category === "mcp"
                  ? "Servidores MCP"
                  : category === "models"
                  ? "Modelos Fundacionales"
                  : category === "agents"
                  ? "Frameworks de Agentes"
                  : "Skills / Funciones"}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs text-text-muted">Creador</p>
              <p className="font-medium text-text-primary">{item.creator}</p>
            </div>
            <div>
              <p className="mb-1 text-xs text-text-muted">Licencia</p>
              <p className="font-medium text-text-primary">{item.license}</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
