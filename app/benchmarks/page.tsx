import type { Metadata } from "next";
import { BenchmarksPageClient } from "@/components/features/BenchmarksPageClient";

export const metadata: Metadata = {
  title: "Benchmarks IA — Comparativa de Modelos | AI Directory",
  description:
    "Comparativa real de rendimiento de modelos IA en producción. SWE-bench, HumanEval, MATH, MMMU, TAU-bench y más. Datos actualizados semanalmente.",
  openGraph: {
    title: "Benchmarks IA — AI Directory",
    description:
      "Comparativa real de rendimiento de modelos IA en producción.",
    type: "website",
  },
};

export default function BenchmarksPage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <BenchmarksPageClient />
      </div>
    </main>
  );
}
