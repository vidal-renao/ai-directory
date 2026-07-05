"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, TrendingDown, Minus, BarChart3 } from "lucide-react";
import { benchmarks, modelColors, benchmarkCategories } from "@/data/benchmarks";

function TrendIcon({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up") return <TrendingUp className="h-3 w-3 text-emerald-400" />;
  if (trend === "down") return <TrendingDown className="h-3 w-3 text-red-400" />;
  return <Minus className="h-3 w-3 text-text-muted" />;
}

function ScoreBar({ percentaje, color }: { percentaje: number; color: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentaje}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function BenchmarksSection() {
  const topBenchmarks = benchmarks.slice(0, 3);

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
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-mcp-dim border border-mcp/20">
                <BarChart3 className="h-3.5 w-3.5 text-mcp" />
              </div>
              <span className="text-xs font-medium text-mcp">Benchmarks IA</span>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              Comparativa de Modelos
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Rendimiento real en producción — datos actualizados semanalmente
            </p>
          </div>
          <Link
            href="/benchmarks"
            className="flex items-center gap-1 text-xs font-medium text-mcp hover:underline"
          >
            Ver todos <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {topBenchmarks.map((benchmark, bIndex) => (
            <motion.div
              key={benchmark.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: bIndex * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-mcp-dim px-2 py-0.5 text-[10px] font-medium text-mcp">
                    {benchmarkCategories.find((c) => c.id === benchmark.category)?.name}
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {benchmark.lastUpdated}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {benchmark.name}
                </h3>
                <p className="mt-1 text-xs text-text-secondary line-clamp-2">
                  {benchmark.description}
                </p>
              </div>

              <div className="space-y-3">
                {benchmark.results.slice(0, 4).map((result) => (
                  <div key={result.model} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: modelColors[result.model] }}
                        />
                        <span className="text-xs font-medium text-text-primary">
                          {result.model}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs tabular-nums text-text-primary">
                          {result.percentaje}%
                        </span>
                        {result.change && (
                          <span className="flex items-center gap-0.5 text-[10px] text-emerald-400">
                            <TrendIcon trend={result.trend} />
                            {result.change}
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
          ))}
        </div>

        {/* Model legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-xl glass px-6 py-3"
        >
          {Object.entries(modelColors).map(([model, color]) => (
            <div key={model} className="flex items-center gap-1.5">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-[10px] text-text-muted">{model}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
