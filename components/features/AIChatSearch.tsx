"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Send,
  X,
  ArrowRight,
  Calendar,
  ExternalLink,
  Bot,
  User,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import {
  companiesData,
  type CompanyInfo,
} from "@/data/companies";
import { modelsData } from "@/data/models";
import { agentsData } from "@/data/agents";
import { mcpData } from "@/data/mcp";
import { skillsData } from "@/data/skills";
import { newsData } from "@/data/news";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  results?: SearchResult[];
  suggestions?: string[];
}

interface SearchResult {
  type: "company" | "model" | "agent" | "mcp" | "skill" | "news" | "event";
  title: string;
  description: string;
  href: string;
  externalUrl?: string;
  tags?: string[];
  date?: string;
  badge?: string;
}

const allSearchTerms = [
  ...companiesData.map((c) => c.name),
  ...companiesData.flatMap((c) => c.tags),
  ...modelsData.map((m) => m.name),
  ...modelsData.map((m) => m.creator),
  ...agentsData.map((a) => a.name),
  ...agentsData.map((a) => a.creator),
  ...mcpData.map((m) => m.name),
  ...mcpData.map((m) => m.creator),
  ...skillsData.map((s) => s.name),
  ...newsData.map((n) => n.title),
  "anthropic",
  "claude",
  "gpt",
  "openai",
  "gemini",
  "google",
  "meta",
  "llama",
  "mistral",
  "deepseek",
  "mcp",
  "agentes",
  "benchmarks",
  "modelos",
  "skills",
];

function findSimilarTerms(query: string): string[] {
  const q = query.toLowerCase();
  return allSearchTerms
    .filter((term) => {
      const t = term.toLowerCase();
      return (
        t.includes(q) ||
        q.includes(t) ||
        t.split(" ").some((word) => q.includes(word)) ||
        q.split(" ").some((word) => t.includes(word))
      );
    })
    .slice(0, 5);
}

function searchQuery(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  if (q.length < 2) return results;

  companiesData.forEach((company) => {
    if (
      company.name.toLowerCase().includes(q) ||
      company.tags.some((tag) => tag.includes(q)) ||
      company.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "company",
        title: company.name,
        description: company.description,
        href: `/companies/${company.slug}`,
        externalUrl: company.website,
        tags: [company.founded, company.valuation || ""].filter(Boolean),
      });

      company.upcomingEvents.forEach((event) => {
        const eventEnd = event.endDate
          ? ` hasta el ${new Date(event.endDate).toLocaleDateString("es-ES", { day: "numeric", month: "long" })}`
          : "";
        results.push({
          type: "event",
          title: `${event.name} — ${company.name}`,
          description: `${event.description}${eventEnd}`,
          href: `/companies/${company.slug}#events`,
          date: event.date,
          badge: event.type === "release" ? "Lanzamiento" : "Evento",
        });
      });

      company.recentNews.forEach((news) => {
        results.push({
          type: "news",
          title: news.title,
          description: news.summary,
          href: `/companies/${company.slug}#news`,
          date: news.date,
          badge: news.source,
        });
      });

      if (company.nextSteps.length > 0) {
        results.push({
          type: "company",
          title: `Próximos pasos de ${company.name}`,
          description: company.nextSteps.slice(0, 3).join(" • "),
          href: `/companies/${company.slug}#roadmap`,
          badge: "Roadmap",
        });
      }
    }
  });

  modelsData.forEach((model) => {
    if (
      model.name.toLowerCase().includes(q) ||
      model.creator.toLowerCase().includes(q) ||
      model.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "model",
        title: model.name,
        description: model.description,
        href: `/models/${model.slug}`,
        externalUrl: model.url,
        tags: model.metrics.map((m) => `${m.label}: ${m.value}`),
        badge: model.license,
      });
    }
  });

  agentsData.forEach((agent) => {
    if (
      agent.name.toLowerCase().includes(q) ||
      agent.creator.toLowerCase().includes(q) ||
      agent.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "agent",
        title: agent.name,
        description: agent.description,
        href: `/agents/${agent.slug}`,
        externalUrl: agent.url,
        tags: agent.metrics.map((m) => `${m.label}: ${m.value}`),
        badge: agent.license,
      });
    }
  });

  mcpData.forEach((mcp) => {
    if (
      mcp.name.toLowerCase().includes(q) ||
      mcp.creator.toLowerCase().includes(q) ||
      mcp.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "mcp",
        title: mcp.name,
        description: mcp.description,
        href: `/mcp/${mcp.slug}`,
        externalUrl: mcp.url,
        tags: mcp.metrics.map((m) => `${m.label}: ${m.value}`),
        badge: mcp.license,
      });
    }
  });

  skillsData.forEach((skill) => {
    if (
      skill.name.toLowerCase().includes(q) ||
      skill.description.toLowerCase().includes(q)
    ) {
      results.push({
        type: "skill",
        title: skill.name,
        description: skill.description,
        href: `/skills/${skill.slug}`,
        tags: skill.metrics.map((m) => `${m.label}: ${m.value}`),
        badge: skill.license,
      });
    }
  });

  newsData.forEach((article) => {
    if (
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.tags.some((tag) => tag.toLowerCase().includes(q))
    ) {
      results.push({
        type: "news",
        title: article.title,
        description: article.excerpt,
        href: `/news/${article.slug}`,
        date: article.date,
        badge: article.tags[0],
      });
    }
  });

  return results.slice(0, 10);
}

function generateResponse(
  query: string,
  results: SearchResult[]
): { text: string; suggestions: string[] } {
  const q = query.toLowerCase();
  const companies = results.filter((r) => r.type === "company");
  const events = results.filter((r) => r.type === "event");
  const models = results.filter((r) => r.type === "model");

  if (results.length === 0) {
    const similar = findSimilarTerms(query);
    let text = `No encontré resultados exactos para "${query}".`;
    if (similar.length > 0) {
      text += `\n\n¿Quizás buscabas algo de esto?`;
    } else {
      text += `\n\nPrueba con nombres como:`;
    }
    return {
      text,
      suggestions: similar.length > 0 ? similar : [
        "Anthropic",
        "Claude",
        "GPT-5",
        "Gemini",
        "Llama 4",
        "MCP",
        "LangGraph",
        "benchmarks",
      ],
    };
  }

  let response = `Encontré ${results.length} resultado${results.length > 1 ? "s" : ""} para "${query}".`;

  if (companies.length > 0) {
    const company = companies[0];
    const companyData = companiesData.find(
      (c) => c.name.toLowerCase() === company.title.toLowerCase()
    );
    if (companyData) {
      response += `\n\n**${companyData.name}**: ${companyData.description}`;
      if (companyData.valuation) {
        response += `\nValoración: ${companyData.valuation} • CEO: ${companyData.ceo}`;
      }
      if (companyData.recentNews.length > 0) {
        response += `\n\nNoticias recientes:`;
        companyData.recentNews.slice(0, 2).forEach((news) => {
          response += `\n• ${news.title} (${news.date})`;
        });
      }
      if (companyData.upcomingEvents.length > 0) {
        response += `\n\nPróximos eventos:`;
        companyData.upcomingEvents.forEach((event) => {
          const eventDate = new Date(event.date).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
          });
          const eventEnd = event.endDate
            ? ` hasta el ${new Date(event.endDate).toLocaleDateString("es-ES", { day: "numeric", month: "long" })}`
            : "";
          response += `\n• ${event.name}: ${event.description}${eventEnd} (${eventDate})`;
        });
      }
      if (companyData.products.length > 0) {
        response += `\n\nProductos:`;
        companyData.products.slice(0, 3).forEach((p) => {
          response += `\n• ${p.name} — ${p.status}`;
        });
      }
      if (companyData.nextSteps.length > 0) {
        response += `\n\nRoadmap:`;
        companyData.nextSteps.slice(0, 2).forEach((step) => {
          response += `\n• ${step}`;
        });
      }
    }
  }

  if (events.length > 0 && companies.length === 0) {
    response += `\n\nEventos encontrados:`;
    events.forEach((event) => {
      response += `\n• ${event.title}`;
    });
  }

  if (models.length > 0 && companies.length === 0) {
    response += `\n\nModelos encontrados:`;
    models.slice(0, 3).forEach((model) => {
      response += `\n• ${model.title} — ${model.description.substring(0, 80)}...`;
    });
  }

  const suggestions = companies.length > 0
    ? [companies[0].title, "Claude", "MCP", "benchmarks"]
    : ["Anthropic", "OpenAI", "Claude", "GPT-5"];

  return { text: response, suggestions };
}

const typeIcons: Record<string, React.ReactNode> = {
  company: <Sparkles className="h-4 w-4 text-models" />,
  model: <Sparkles className="h-4 w-4 text-models" />,
  agent: <Sparkles className="h-4 w-4 text-agents" />,
  mcp: <Sparkles className="h-4 w-4 text-mcp" />,
  skill: <Sparkles className="h-4 w-4 text-skills" />,
  news: <Sparkles className="h-4 w-4 text-amber-400" />,
  event: <Calendar className="h-4 w-4 text-mcp" />,
};

const typeColors: Record<string, string> = {
  company: "bg-models-dim text-models",
  model: "bg-models-dim text-models",
  agent: "bg-agents-dim text-agents",
  mcp: "bg-mcp-dim text-mcp",
  skill: "bg-skills-dim text-skills",
  news: "bg-amber-500/10 text-amber-400",
  event: "bg-mcp-dim text-mcp",
};

export function AIChatSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearch = async (searchText?: string) => {
    const q = searchText || query;
    if (!q.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: q,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsSearching(true);

    await new Promise((resolve) => setTimeout(resolve, 400));

    const results = searchQuery(q);
    const { text, suggestions } = generateResponse(q, results);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: text,
      results: results,
      suggestions,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsSearching(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const quickSuggestions = [
    "Anthropic",
    "Claude",
    "GPT-5",
    "Gemini",
    "Llama 4",
    "MCP",
    "LangGraph",
    "benchmarks",
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl border border-border bg-surface py-3.5 px-4 text-sm text-text-muted transition-all duration-200 hover:border-models/30 hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-models/20 text-left flex items-center gap-3"
      >
        <Search className="h-5 w-5 text-text-muted" />
        <span>Pregúntale a la IA sobre cualquier herramienta...</span>
        <kbd className="ml-auto hidden sm:inline-flex items-center gap-1 rounded-md bg-surface px-2 py-0.5 text-[10px] text-text-muted border border-border">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-models to-mcp">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      Asistente IA
                    </h3>
                    <p className="text-[10px] text-text-muted">
                      Busca en el ecosistema de IA
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="h-[50vh] overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Bot className="h-12 w-12 text-text-muted mb-4" />
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      ¿Qué quieres saber?
                    </h4>
                    <p className="text-sm text-text-secondary mb-6 max-w-md">
                      Pregúntame sobre empresas, modelos, herramientas, MCPs,
                      benchmarks o cualquier cosa del ecosistema IA.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {quickSuggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => handleSearch(s)}
                          className="rounded-lg bg-surface px-3 py-1.5 text-xs text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors border border-border"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.type === "assistant" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-models to-mcp">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-3 ${
                        message.type === "user"
                          ? "bg-models text-white"
                          : "bg-surface border border-border"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line text-text-primary">
                        {message.content}
                      </p>

                      {message.suggestions && message.suggestions.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {message.suggestions.map((s) => (
                            <button
                              key={s}
                              onClick={() => handleSearch(s)}
                              className="flex items-center gap-1 rounded-lg bg-background/50 px-2.5 py-1 text-[11px] text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors border border-border/50"
                            >
                              <Lightbulb className="h-3 w-3" />
                              {s}
                            </button>
                          ))}
                        </div>
                      )}

                      {message.results && message.results.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {message.results.map((result, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg bg-background/50 p-3 border border-border/50"
                            >
                              <div className="flex items-start gap-2">
                                {typeIcons[result.type]}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-xs font-semibold text-text-primary truncate">
                                      {result.title}
                                    </h4>
                                    {result.badge && (
                                      <span
                                        className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${typeColors[result.type]}`}
                                      >
                                        {result.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-text-secondary line-clamp-2">
                                    {result.description}
                                  </p>
                                  {result.tags && result.tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                      {result.tags.slice(0, 3).map((tag) => (
                                        <span
                                          key={tag}
                                          className="rounded bg-surface px-1.5 py-0.5 text-[9px] text-text-muted"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  {result.date && (
                                    <div className="mt-1.5 flex items-center gap-1 text-[10px] text-text-muted">
                                      <Calendar className="h-2.5 w-2.5" />
                                      {new Date(result.date).toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="mt-2 flex items-center gap-2">
                                <Link
                                  href={result.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-1 text-[10px] font-medium text-models hover:underline"
                                >
                                  Ver más detalles <ArrowRight className="h-2.5 w-2.5" />
                                </Link>
                                {result.externalUrl && (
                                  <a
                                    href={result.externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[10px] font-medium text-text-muted hover:text-text-primary transition-colors"
                                  >
                                    Página oficial <ExternalLink className="h-2.5 w-2.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.type === "user" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface border border-border">
                        <User className="h-4 w-4 text-text-muted" />
                      </div>
                    )}
                  </div>
                ))}

                {isSearching && (
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-models to-mcp">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="rounded-xl bg-surface border border-border px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-models animate-pulse" />
                        <div className="h-2 w-2 rounded-full bg-models animate-pulse [animation-delay:150ms]" />
                        <div className="h-2 w-2 rounded-full bg-models animate-pulse [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-border p-4">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Pregunta sobre IA, modelos, herramientas..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 rounded-lg bg-surface border border-border px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-models/20"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSearch()}
                    disabled={!query.trim() || isSearching}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-models to-mcp text-white transition-all duration-200 hover:shadow-lg hover:shadow-models/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-2 text-[10px] text-text-muted text-center">
                  Presiona Enter para buscar • Esc para cerrar
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
