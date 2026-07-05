"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Globe,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Rocket,
  Newspaper,
  Package,
  Map,
} from "lucide-react";
import { companiesData, type CompanyInfo } from "@/data/companies";

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    available: "bg-emerald-500/10 text-emerald-400",
    beta: "bg-amber-500/10 text-amber-400",
    coming_soon: "bg-mcp-dim text-mcp",
    deprecated: "bg-red-500/10 text-red-400",
  };
  const labels: Record<string, string> = {
    available: "Disponible",
    beta: "Beta",
    coming_soon: "Próximamente",
    deprecated: "Obsoleto",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

export function CompanyPageClient({ slug }: { slug: string }) {
  const company = companiesData.find((c) => c.slug === slug);

  if (!company) {
    return (
      <main className="relative min-h-screen">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">
              Empresa no encontrada
            </h1>
            <Link href="/" className="text-sm text-models hover:underline">
              ← Volver al directorio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-3 w-3" />
          Volver al directorio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary mb-2">
                {company.name}
              </h1>
              <p className="text-sm text-text-secondary max-w-2xl">
                {company.description}
              </p>
            </div>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-models to-mcp px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-models/25 transition-all duration-200 hover:shadow-xl hover:scale-105 shrink-0"
            >
              <Globe className="h-4 w-4" />
              Visitar sitio oficial
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Company info grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            <div className="rounded-xl glass p-4">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-3.5 w-3.5 text-text-muted" />
                <span className="text-[10px] text-text-muted">Fundada</span>
              </div>
              <p className="text-sm font-semibold text-text-primary">{company.founded}</p>
            </div>
            <div className="rounded-xl glass p-4">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-3.5 w-3.5 text-text-muted" />
                <span className="text-[10px] text-text-muted">Sede</span>
              </div>
              <p className="text-sm font-semibold text-text-primary">{company.headquarters}</p>
            </div>
            <div className="rounded-xl glass p-4">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-3.5 w-3.5 text-text-muted" />
                <span className="text-[10px] text-text-muted">CEO</span>
              </div>
              <p className="text-sm font-semibold text-text-primary">{company.ceo}</p>
            </div>
            {company.valuation && (
              <div className="rounded-xl glass p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-3.5 w-3.5 text-text-muted" />
                  <span className="text-[10px] text-text-muted">Valoración</span>
                </div>
                <p className="text-sm font-semibold text-text-primary">{company.valuation}</p>
              </div>
            )}
            {company.employees && (
              <div className="rounded-xl glass p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-3.5 w-3.5 text-text-muted" />
                  <span className="text-[10px] text-text-muted">Empleados</span>
                </div>
                <p className="text-sm font-semibold text-text-primary">{company.employees}</p>
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Products */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="products"
            >
              <div className="flex items-center gap-2 mb-4">
                <Package className="h-4 w-4 text-models" />
                <h2 className="text-lg font-semibold text-text-primary">Productos</h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {company.products.map((product) => (
                  <div
                    key={product.name}
                    className="glass rounded-xl p-4 hover:bg-surface-hover transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-text-primary">
                        {product.name}
                      </h3>
                      <StatusBadge status={product.status} />
                    </div>
                    <p className="text-xs text-text-secondary">{product.description}</p>
                    {product.launchDate && (
                      <div className="mt-2 flex items-center gap-1 text-[10px] text-text-muted">
                        <Clock className="h-2.5 w-2.5" />
                        Lanzamiento: {new Date(product.launchDate).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Recent News */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="news"
            >
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="h-4 w-4 text-amber-400" />
                <h2 className="text-lg font-semibold text-text-primary">Noticias Recientes</h2>
              </div>
              <div className="space-y-3">
                {company.recentNews.map((news, idx) => (
                  <div
                    key={idx}
                    className="glass rounded-xl p-4 hover:bg-surface-hover transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-text-primary">{news.title}</h3>
                      <span className="shrink-0 rounded-full bg-surface px-2 py-0.5 text-[10px] text-text-muted">
                        {news.source}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mb-2">{news.summary}</p>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted">
                      <Calendar className="h-2.5 w-2.5" />
                      {new Date(news.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="events"
            >
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-4 w-4 text-mcp" />
                <h2 className="text-lg font-semibold text-text-primary">Próximos Eventos</h2>
              </div>
              <div className="space-y-3">
                {company.upcomingEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="glass rounded-xl p-4 border-l-2 border-l-mcp"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
                        event.type === "release" ? "bg-emerald-500/10 text-emerald-400" : "bg-mcp-dim text-mcp"
                      }`}>
                        {event.type === "release" ? "Lanzamiento" : "Evento"}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">{event.name}</h3>
                    <p className="text-xs text-text-secondary mb-2">{event.description}</p>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted">
                      <Calendar className="h-2.5 w-2.5" />
                      {new Date(event.date).toLocaleDateString("es-ES", { day: "numeric", month: "long" })}
                      {event.endDate && (
                        <> — {new Date(event.endDate).toLocaleDateString("es-ES", { day: "numeric", month: "long" })}</>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Roadmap */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              id="roadmap"
            >
              <div className="flex items-center gap-2 mb-4">
                <Map className="h-4 w-4 text-agents" />
                <h2 className="text-lg font-semibold text-text-primary">Roadmap</h2>
              </div>
              <div className="glass rounded-xl p-4">
                <ul className="space-y-3">
                  {company.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-agents-dim border border-agents/20 mt-0.5">
                        <span className="text-[10px] font-bold text-agents">{idx + 1}</span>
                      </div>
                      <span className="text-xs text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Quick links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="glass rounded-xl p-4">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Enlaces rápidos</h3>
                <div className="space-y-2">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    Sitio oficial
                    <ExternalLink className="h-2.5 w-2.5 ml-auto" />
                  </a>
                  <Link
                    href="/benchmarks"
                    className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <TrendingUp className="h-3 w-3" />
                    Ver benchmarks
                    <ArrowRight className="h-2.5 w-2.5 ml-auto" />
                  </Link>
                  <Link
                    href="/news"
                    className="flex items-center gap-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Newspaper className="h-3 w-3" />
                    Más noticias
                    <ArrowRight className="h-2.5 w-2.5 ml-auto" />
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
