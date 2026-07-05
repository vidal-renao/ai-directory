"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plug,
  Check,
  ExternalLink,
  RefreshCw,
  Database,
  Globe,
  Code,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MCPConnection {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: "available" | "connected" | "pending";
  category: string;
  dataPoints?: string[];
}

const mcpConnections: MCPConnection[] = [
  {
    id: "supabase",
    name: "Supabase MCP",
    description:
      "Conecta con tu base de datos Supabase para métricas de uso en tiempo real.",
    icon: Database,
    status: "available",
    category: "Database",
    dataPoints: ["Usuarios activos", "Consultas/día", "Latencia media"],
  },
  {
    id: "vercel",
    name: "Vercel MCP",
    description:
      "Obtén datos de deployments, Core Web Vitals y analytics de tus proyectos.",
    icon: Globe,
    status: "available",
    category: "Deploy",
    dataPoints: ["Deploys/mes", "Core Web Vitals", "Tráfico"],
  },
  {
    id: "github",
    name: "GitHub MCP",
    description:
      "Métricas de repositorios: stars, issues, PRs y actividad de contribuidores.",
    icon: Code,
    status: "available",
    category: "Code",
    dataPoints: ["Stars", "Issues abiertas", "PRs mergeados"],
  },
  {
    id: "composio",
    name: "Composio MCP",
    description:
      "250+ integraciones nativas: CRM, ERP, productividad y más.",
    icon: Server,
    status: "available",
    category: "Integration",
    dataPoints: ["Conexiones activas", "Operaciones/día", "Errores"],
  },
];

export function MCPIntegrationSection() {
  const [connections, setConnections] = useState(mcpConnections);

  const toggleConnection = (id: string) => {
    setConnections((prev) =>
      prev.map((conn) =>
        conn.id === id
          ? {
              ...conn,
              status:
                conn.status === "connected" ? "available" : "connected",
            }
          : conn
      )
    );
  };

  return (
    <section className="mt-16 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-agents-dim border border-agents/20">
              <Plug className="h-3.5 w-3.5 text-agents" />
            </div>
            <span className="text-xs font-medium text-agents">
              Integración MCP
            </span>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Conecta tus Fuentes de Datos
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Enriquece los benchmarks con datos reales de tu infraestructura
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {connections.map((connection, index) => {
            const Icon = connection.icon;
            return (
              <motion.div
                key={connection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "glass rounded-xl p-5 transition-all duration-200",
                  connection.status === "connected" &&
                    "border-agents/30 bg-agents-dim/30"
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg border",
                        connection.status === "connected"
                          ? "bg-agents-dim border-agents/20 text-agents"
                          : "bg-surface border-border text-text-muted"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">
                        {connection.name}
                      </h3>
                      <span className="text-[10px] text-text-muted">
                        {connection.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleConnection(connection.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
                      connection.status === "connected"
                        ? "bg-agents/20 text-agents border border-agents/30"
                        : "bg-surface text-text-muted hover:bg-surface-hover hover:text-text-secondary border border-border"
                    )}
                  >
                    {connection.status === "connected" ? (
                      <>
                        <Check className="h-3 w-3" />
                        Conectado
                      </>
                    ) : (
                      <>
                        <Plug className="h-3 w-3" />
                        Conectar
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  {connection.description}
                </p>

                {connection.dataPoints && (
                  <div className="flex flex-wrap gap-1.5">
                    {connection.dataPoints.map((point) => (
                      <span
                        key={point}
                        className="rounded-md bg-surface px-2 py-1 text-[10px] text-text-muted"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* MCP status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl glass px-6 py-3"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">
             {" "}
              <span className="font-mono text-text-primary">
                {connections.filter((c) => c.status === "connected").length}
              </span>{" "}
              / {connections.length} conectados
            </span>
            <div className="h-3 w-px bg-border" />
            <span className="text-xs text-text-muted">
              Última sincronización: hace 5 min
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-xs text-agents hover:underline">
            <RefreshCw className="h-3 w-3" />
            Sincronizar ahora
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
