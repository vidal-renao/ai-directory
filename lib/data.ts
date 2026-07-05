import type { CategorySlug, DirectoryItem } from "@/lib/types";
import { modelsData } from "@/data/models";
import { agentsData } from "@/data/agents";
import { mcpData } from "@/data/mcp";
import { skillsData } from "@/data/skills";

export const categoryRegistry: Record<
  CategorySlug,
  { title: string; description: string; color: string; data: DirectoryItem[] }
> = {
  models: {
    title: "Modelos Fundacionales",
    description: "LLMs, Modelos Multimodales y VLM para infraestructura empresarial de IA.",
    color: "models",
    data: modelsData,
  },
  agents: {
    title: "Frameworks de Agentes",
    description: "LangGraph, AutoGen, CrewAI y más para orquestación de agentes autónomos.",
    color: "agents",
    data: agentsData,
  },
  mcp: {
    title: "Servidores MCP",
    description: "Model Context Protocol — servidores y herramientas para agentes conectados.",
    color: "mcp",
    data: mcpData,
  },
  skills: {
    title: "Skills / Funciones",
    description: "Herramientas ejecutables que los agentes pueden invocar en producción.",
    color: "skills",
    data: skillsData,
  },
};

export function getItemBySlug(
  category: CategorySlug,
  slug: string
): DirectoryItem | undefined {
  return categoryRegistry[category]?.data.find((item) => item.slug === slug);
}

export function getAllItems(): { category: CategorySlug; item: DirectoryItem }[] {
  return (Object.keys(categoryRegistry) as CategorySlug[]).flatMap((cat) =>
    categoryRegistry[cat].data.map((item) => ({ category: cat, item }))
  );
}
