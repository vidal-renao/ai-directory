import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { newsData } from "@/data/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} — AI Directory`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      tags: article.tags,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "AI Directory",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Directory",
    },
    keywords: article.tags.join(", "),
  };

  const tagColorMap: Record<string, string> = {
    Modelos: "bg-models-dim text-models",
    Agentes: "bg-agents-dim text-agents",
    MCP: "bg-mcp-dim text-mcp",
    Industria: "bg-surface text-text-secondary",
    "Open Source": "bg-agents-dim text-agents",
    Enterprise: "bg-models-dim text-models",
  };

  const formattedDate = new Date(article.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <Link
          href="/news"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a noticias
        </Link>

        <article className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-medium ${tagColorMap[tag] || "bg-surface text-text-secondary"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
            {article.title}
          </h1>

          <div className="mb-8 flex items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="glass rounded-xl p-8">
            <div className="prose prose-invert prose-sm max-w-none">
              {article.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="mb-3 mt-6 text-xl font-semibold tracking-tight text-text-primary"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="mb-4 space-y-2">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-models" />
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.includes("**:")) {
                  const [label, ...rest] = paragraph.split(":");
                  return (
                    <p key={i} className="mb-2 text-sm leading-relaxed text-text-secondary">
                      <strong className="text-text-primary">{label.replace(/\*\*/g, "")}:</strong>
                      {rest.join(":")}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="mb-4 text-sm leading-relaxed text-text-secondary"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
