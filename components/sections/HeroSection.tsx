"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Network,
  Wrench,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const categories = [
  {
    title: "Modelos Fundacionales",
    description: "LLMs, Multimodales y VLM",
    icon: Brain,
    color: "models",
    count: 6,
    href: "/models",
  },
  {
    title: "Frameworks de Agentes",
    description: "LangGraph, AutoGen, CrewAI",
    icon: Cpu,
    color: "agents",
    count: 8,
    href: "/agents",
  },
  {
    title: "Servidores MCP",
    description: "Model Context Protocol",
    icon: Network,
    color: "mcp",
    count: 10,
    href: "/mcp",
  },
  {
    title: "Skills / Funciones",
    description: "Herramientas ejecutables",
    icon: Wrench,
    color: "skills",
    count: 12,
    href: "/skills",
  },
];

const trustedBy = [
  "Anthropic",
  "OpenAI",
  "Google DeepMind",
  "Meta AI",
  "Mistral AI",
  "DeepSeek",
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative mb-16 lg:mb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-models/10 via-mcp/5 to-transparent blur-3xl" />
      </div>

      {/* Main hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        {/* Badge */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-models-dim to-mcp-dim px-4 py-1.5 text-xs font-medium text-models border border-models/20">
            <Sparkles className="h-3 w-3" />
            Directorio Actualizado
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
          <span className="text-gradient">Todo sobre IA</span>
          <br />
          <span className="text-text-primary">en un solo lugar</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-secondary lg:text-xl">
          Explora los mejores Modelos Fundacionales, Frameworks de Agentes,
          Servidores MCP y Skills. Fichas técnicas, benchmarks y estado real de
          adopción en producción.
        </p>

        {/* Search bar */}
        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Buscar modelos, agentes, MCPs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-surface py-3.5 pl-12 pr-4 text-sm text-text-primary placeholder-text-muted transition-all duration-200 focus:border-models/50 focus:outline-none focus:ring-2 focus:ring-models/20 focus:bg-surface-hover"
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/benchmarks"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-models to-mcp px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-models/25 transition-all duration-200 hover:shadow-xl hover:shadow-models/30 hover:scale-105"
          >
            <TrendingUp className="h-4 w-4" />
            Ver Benchmarks
          </Link>
          <Link
            href="/models"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-all duration-200 hover:bg-surface-hover hover:border-border-hover"
          >
            Explorar Directorio
          </Link>
        </div>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <p className="mb-4 text-center text-xs text-text-muted uppercase tracking-wider">
          Utilizado por equipos en
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustedBy.map((company) => (
            <span
              key={company}
              className="text-sm font-medium text-text-muted/60 hover:text-text-muted transition-colors"
            >
              {company}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl glass p-6"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Brain className="h-4 w-4 text-models" />
            <span className="font-mono text-2xl font-bold tabular-nums text-models">
              6
            </span>
          </div>
          <p className="text-xs text-text-muted">Modelos Fundacionales</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Cpu className="h-4 w-4 text-agents" />
            <span className="font-mono text-2xl font-bold tabular-nums text-agents">
              8
            </span>
          </div>
          <p className="text-xs text-text-muted">Frameworks de Agentes</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Network className="h-4 w-4 text-mcp" />
            <span className="font-mono text-2xl font-bold tabular-nums text-mcp">
              10
            </span>
          </div>
          <p className="text-xs text-text-muted">Servidores MCP</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Wrench className="h-4 w-4 text-skills" />
            <span className="font-mono text-2xl font-bold tabular-nums text-skills">
              12
            </span>
          </div>
          <p className="text-xs text-text-muted">Skills / Funciones</p>
        </div>
      </motion.div>

      {/* Category cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: "easeOut",
            }}
          >
            <Link href={category.href}>
              <CategoryCard {...category} />
            </Link>
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
  href: string;
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
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colorMap[color]}`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span className="font-mono text-lg font-bold tabular-nums text-text-muted">
          {count}
        </span>
      </div>
      <h3 className="mb-1 text-sm font-semibold text-text-primary">{title}</h3>
      <p className="text-xs text-text-secondary">{description}</p>
    </div>
  );
}
