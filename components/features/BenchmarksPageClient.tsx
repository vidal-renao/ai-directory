"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  Filter,
  ExternalLink,
  Clock,
  Info,
} from "lucide-react";
import {
  benchmarks,
  benchmarkCategories,
  modelColors,
  type Benchmark,
  type BenchmarkCategory,
} from "@/data/benchmarks";
import { cn } from "@/lib/utils";

function TrendIcon({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up")
    return <TrendingUp className="h-3 w-3 text-emerald-400" />;
  if (trend === "down")
    return <TrendingDown className="h-3 w-3 text-red-400" />;
  return <Minus className="h-3 w-3 text-text-muted" />;
}

function ScoreBar({
  percentaje,
  color,
  animate = true,
}: {
  percentaje: number;
  color: string;
  animate?: boolean;
}) {
  return (
    <div className="h-2 w-full rounded-full bg-surface overflow-hidden">
      <motion.div
        initial={animate ? { width: 0 } : false}
        animate={{ width: `${percentaje}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function BenchmarkCard({ benchmark }: { benchmark: Benchmark }) {
  const category = benchmarkCategories.find(
    (c) => c.id === benchmark.category
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-mcp-dim px-2.5 py-0.5 text-[10px] font-medium text-mcp">
            {category?.name}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-text-muted">
            <Clock className="h-2.5 w-2.5" />
            {benchmark.lastUpdated}
          </span>
          <span className="text-[10px] text-text-muted">
            Fuente: {benchmark.source}
          </span>
        </div>
        <h3 className="text-base font-semibold text-text-primary mb-1">
          {benchmark.name}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {benchmark.description}
        </p>
      </div>

      <div className="space-y-4">
        {benchmark.results.map((result, idx) => (
          <div key={result.model} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: modelColors[result.model],
                    boxShadow: `0 0 0 2px var(--color-background), 0 0 0 3px ${modelColors[result.model]}`,
                  }}
                />
                <div>
                  <span className="text-sm font-medium text-text-primary">
                    {result.model}
                  </span>
                  <span className="ml-2 text-[10px] text-text-muted">
                    {result.creator}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {result.change && (
                  <span
                    className={cn(
                      "flex items-center gap-0.5 text-[10px] font-medium",
                      result.trend === "up" && "text-emerald-400",
                      result.trend === "down" && "text-red-400"
                    )}
                  >
                    <TrendIcon trend={result.trend} />
                    {result.change}
                  </span>
                )}
                <span className="font-mono text-sm tabular-nums font-semibold text-text-primary">
                  {result.percentaje}%
                </span>
                {idx === 0 && (
                  <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-medium text-amber-400">
                    #1
                  </span>
                )}
              </div>
            </div>
            <ScoreBar
              percentaje={result.percentaje}
              color={modelColors[result.model]}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function BenchmarksPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBenchmarks = selectedCategory
    ? benchmarks.filter((b) => b.category === selectedCategory)
    : benchmarks;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mcp-dim border border-mcp/20">
            <BarChart3 className="h-4 w-4 text-mcp" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Benchmarks IA
          </h1>
        </div>
        <p className="text-sm text-text-secondary max-w-2xl">
          Comparativa real de modelos en producción. Datos actualizados semanalmente
          de fuentes oficiales y verificadas.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
            selectedCategory === null
              ? "bg-mcp-dim text-mcp border border-mcp/20"
              : "text-text-muted hover:text-text-secondary hover:bg-surface border border-transparent"
          )}
        >
          <Filter className="h-3 w-3" />
          Todos
        </button>
        {benchmarkCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat.id ? null : cat.id)
            }
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              selectedCategory === cat.id
                ? "bg-mcp-dim text-mcp border border-mcp/20"
                : "text-text-muted hover:text-text-secondary hover:bg-surface border border-transparent"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 rounded-xl glass p-4">
        <Info className="h-4 w-4 text-mcp mt-0.5 shrink-0" />
        <div className="text-xs text-text-secondary leading-relaxed">
          <strong className="text-text-primary">Sobre los benchmarks:</strong>{" "}
          Los datos provienen de fuentes oficiales (GitHub repos, papers, sitios
          de benchmarks). Se actualizan semanalmente. Para datos en tiempo real
          sobre precios y latencia, consulta la documentación de cada proveedor.
        </div>
      </div>

      {/* Benchmarks grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredBenchmarks.map((benchmark) => (
            <BenchmarkCard key={benchmark.id} benchmark={benchmark} />
          ))}
        </AnimatePresence>
      </div>

      {/* Model comparison summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-6"
      >
        <h3 className="text-base font-semibold text-text-primary mb-4">
          Resumen por Modelo
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(modelColors).map(([model, color]) => {
            const modelResults = benchmarks.flatMap((b) =>
              b.results.filter((r) => r.model === model)
            );
            const avgScore =
              modelResults.reduce((acc, r) => acc + r.percentaje, 0) /
              modelResults.length;
            const wins = modelResults.filter(
              (r) =>
                r.percentaje ===
                Math.max(
                  ...benchmarks
                    .find((b) =>
                      b.results.some((res) => res.model === model)
                    )
                    ?.results.map((res) => res.percentaje) || [0]
                )
            ).length;

            return (
              <div
                key={model}
                className="rounded-lg bg-surface p-4 border border-border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium text-text-primary">
                    {model}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] text-text-muted">
                      Media
                    </span>
                    <p className="font-mono text-lg font-bold tabular-nums text-text-primary">
                      {avgScore.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted">
                      Benchmarks
                    </span>
                    <p className="font-mono text-lg font-bold tabular-nums text-text-primary">
                      {modelResults.length}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
