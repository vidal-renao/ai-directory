"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

const tagColorMap: Record<string, string> = {
  Modelos: "bg-models-dim text-models",
  Agentes: "bg-agents-dim text-agents",
  MCP: "bg-mcp-dim text-mcp",
  Industria: "bg-surface text-text-secondary",
  "Open Source": "bg-agents-dim text-agents",
  Enterprise: "bg-models-dim text-models",
};

interface Props {
  articles: NewsArticle[];
}

export function NewsListClient({ articles }: Props) {
  const featured = articles.filter((a) => a.featured);
  const regular = articles.filter((a) => !a.featured);

  return (
    <div className="space-y-8">
      {featured.length > 0 && (
        <section>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Destacadas
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {featured.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FeaturedCard article={article} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Últimas noticias
        </h2>
        <div className="space-y-3">
          {regular.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({ article }: { article: NewsArticle }) {
  const formattedDate = new Date(article.date).toLocaleDateString("es-ES", {
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/news/${article.slug}`}>
      <div className="glass glass-hover group cursor-pointer rounded-xl p-6 transition-all duration-200 hover:glow-models h-full">
        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${tagColorMap[tag] || "bg-surface text-text-secondary"}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-text-primary group-hover:text-white transition-colors">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-text-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}

function NewsCard({ article }: { article: NewsArticle }) {
  const formattedDate = new Date(article.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/news/${article.slug}`}>
      <div className="glass glass-hover group flex cursor-pointer items-center justify-between rounded-xl px-5 py-4 transition-all duration-200">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tagColorMap[tag] || "bg-surface text-text-secondary"}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mb-1 text-sm font-semibold text-text-primary group-hover:text-white transition-colors truncate">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span>{formattedDate}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        <ArrowRight className="ml-4 h-4 w-4 shrink-0 text-text-muted group-hover:text-text-primary transition-colors" />
      </div>
    </Link>
  );
}
