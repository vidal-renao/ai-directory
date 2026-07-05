"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star, TrendingUp } from "lucide-react";

interface FeaturedTool {
  name: string;
  creator: string;
  description: string;
  category: string;
  categoryColor: string;
  tags: string[];
  rating: number;
  upvotes: number;
  href: string;
  externalUrl?: string;
}

const featuredTools: FeaturedTool[] = [
  {
    name: "Claude Sonnet 4.6",
    creator: "Anthropic",
    description:
      "Modelo de razonamiento avanzado con foco en seguridad. Excelente para código y análisis complejo con 200K tokens de contexto.",
    category: "Modelos",
    categoryColor: "models",
    tags: ["Razonamiento", "Código", "Seguridad"],
    rating: 4.9,
    upvotes: 1247,
    href: "/models/claude-sonnet-4",
  },
  {
    name: "GPT-4o",
    creator: "OpenAI",
    description:
      "Modelo multimodal de última generación. Procesa texto, imágenes y audio con latencia reducida.",
    category: "Modelos",
    categoryColor: "models",
    tags: ["Multimodal", "Producción", "Enterprise"],
    rating: 4.8,
    upvotes: 2103,
    href: "/models/gpt-4o",
  },
  {
    name: "LangGraph",
    creator: "LangChain",
    description:
      "Framework de agentes con grafos de estado para orquestación compleja con persistencia y monitoreo.",
    category: "Agentes",
    categoryColor: "agents",
    tags: ["Grafos", "Estado", "Enterprise"],
    rating: 4.7,
    upvotes: 892,
    href: "/agents/langgraph",
  },
  {
    name: "Supabase MCP",
    creator: "Supabase",
    description:
      "Conecta agentes IA con bases de datos PostgreSQL. Autenticación, storage y real-time.",
    category: "MCP",
    categoryColor: "mcp",
    tags: ["Database", "Real-time", "Auth"],
    rating: 4.6,
    upvotes: 634,
    href: "/mcp/supabase-mcp",
  },
  {
    name: "Composio",
    creator: "Composio",
    description:
      "250+ integraciones MCP nativas. CRM, ERP, productividad y herramientas de desarrollo.",
    category: "MCP",
    categoryColor: "mcp",
    tags: ["Integraciones", "OAuth", "250+"],
    rating: 4.5,
    upvotes: 521,
    href: "/mcp/composio",
  },
  {
    name: "Gemini 2.5 Pro",
    creator: "Google DeepMind",
    description:
      "Modelo multimodal con 1M tokens de contexto. Integración nativa en ecosistema Google.",
    category: "Modelos",
    categoryColor: "models",
    tags: ["Multimodal", "Google", "1M Context"],
    rating: 4.7,
    upvotes: 1089,
    href: "/models/gemini-2-5-pro",
  },
];

const badgeMap: Record<string, string> = {
  models: "bg-models-dim text-models",
  agents: "bg-agents-dim text-agents",
  mcp: "bg-mcp-dim text-mcp",
  skills: "bg-skills-dim text-skills",
};

export function FeaturedToolsSection() {
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
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-models-dim border border-models/20">
                <Star className="h-3.5 w-3.5 text-models" />
              </div>
              <span className="text-xs font-medium text-models">
                Más Populares
              </span>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              Herramientas Destacadas
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Las herramientas IA más utilizadas por la comunidad
            </p>
          </div>
          <Link
            href="/models"
            className="flex items-center gap-1 text-xs font-medium text-models hover:underline"
          >
            Ver todas <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={tool.href}>
                <ToolCard tool={tool} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ToolCard({ tool }: { tool: FeaturedTool }) {
  return (
    <div className="glass glass-hover group cursor-pointer rounded-xl p-5 transition-all duration-200 hover:glow-models">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border">
            <span className="text-lg font-bold text-text-primary">
              {tool.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary group-hover:text-white transition-colors">
              {tool.name}
            </h3>
            <p className="text-xs text-text-muted">{tool.creator}</p>
          </div>
        </div>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeMap[tool.categoryColor]}`}
        >
          {tool.category}
        </span>
      </div>

      <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-text-secondary">
        {tool.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface px-2 py-0.5 text-[10px] text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-text-primary">
            {tool.rating}
          </span>
        </div>
        <div className="flex items-center gap-1 text-text-muted">
          <TrendingUp className="h-3 w-3" />
          <span className="text-xs font-medium">
            {tool.upvotes.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
