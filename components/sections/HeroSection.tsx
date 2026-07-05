"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Wrench } from "lucide-react";

const categories = [
  {
    title: "Modelos Fundacionales",
    description: "LLMs, Multimodales y VLM",
    icon: Brain,
    color: "models",
    count: 12,
  },
  {
    title: "Frameworks de Agentes",
    description: "LangGraph, AutoGen, CrewAI",
    icon: Cpu,
    color: "agents",
    count: 8,
  },
  {
    title: "Servidores MCP",
    description: "Model Context Protocol",
    icon: Network,
    color: "mcp",
    count: 15,
  },
  {
    title: "Skills / Funciones",
    description: "Herramientas ejecutables",
    icon: Wrench,
    color: "skills",
    count: 24,
  },
];

export function HeroSection() {
  return (
    <section className="relative mb-16 lg:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-models-dim px-3 py-1 text-xs font-medium text-models">
            v0.1.0
          </span>
          <span className="text-xs text-text-muted">Directorio Actualizado</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
          <span className="text-gradient">Centro de Comando</span>
          <br />
          del Ecosistema IA
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
          Directorio avanzado de Modelos Fundacionales, Frameworks de Agentes,
          Servidores MCP y Skills. Fichas técnicas, casos de uso empresariales y
          estado real de adopción en producción.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  description,
  icon: Icon,
  color,
  count,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  count: number;
}) {
  const colorMap: Record<string, string> = {
    models: "text-models bg-models-dim border-models/20",
    agents: "text-agents bg-agents-dim border-agents/20",
    mcp: "text-mcp bg-mcp-dim border-mcp/20",
    skills: "text-skills bg-skills-dim border-skills/20",
  };

  const glowMap: Record<string, string> = {
    models: "hover:glow-models",
    agents: "hover:glow-agents",
    mcp: "hover:glow-mcp",
    skills: "hover:glow-skills",
  };

  return (
    <div
      className={`glass glass-hover group cursor-pointer rounded-xl p-5 transition-all duration-200 ${glowMap[color]}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg border ${colorMap[color]}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span className="font-mono text-sm tabular-nums text-text-muted">
          {count}
        </span>
      </div>
      <h3 className="mb-1 text-sm font-semibold text-text-primary">{title}</h3>
      <p className="text-xs text-text-secondary">{description}</p>
    </div>
  );
}
