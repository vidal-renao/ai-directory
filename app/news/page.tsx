import type { Metadata } from "next";
import { newsData } from "@/data/news";
import { NewsListClient } from "@/components/features/NewsListClient";

export const metadata: Metadata = {
  title: "Noticias — AI Directory",
  description:
    "Últimas noticias del ecosistema de Inteligencia Artificial: nuevos modelos, frameworks, MCP y tendencias de la industria.",
};

export default function NewsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
            Noticias del Ecosistema IA
          </h1>
          <p className="max-w-2xl text-text-secondary">
            Actualizaciones sobre modelos fundacionales, frameworks de agentes,
            MCP y tendencias de la industria.
          </p>
        </div>

        <NewsListClient articles={newsData} />
      </div>
    </main>
  );
}
