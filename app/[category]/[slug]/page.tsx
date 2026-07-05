import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { categoryRegistry, getItemBySlug } from "@/lib/data";
import type { CategorySlug } from "@/lib/types";
import { DetailPageClient } from "@/components/features/DetailPageClient";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const [cat, entry] of Object.entries(categoryRegistry)) {
    for (const item of entry.data) {
      params.push({ category: cat, slug: item.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, slug } = await params;
  const category = catSlug as CategorySlug;
  const item = getItemBySlug(category, slug);
  if (!item) return {};

  return {
    title: `${item.name} — AI Directory`,
    description: item.description,
  };
}

export default async function DetailPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const category = catSlug as CategorySlug;
  const entry = categoryRegistry[category];
  const item = getItemBySlug(category, slug);

  if (!entry || !item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: item.name,
    description: item.description,
    applicationCategory: entry.title,
    creator: {
      "@type": "Organization",
      name: item.creator,
    },
    offers: {
      "@type": "Offer",
      price: item.license === "Open Source" ? "0" : undefined,
      priceCurrency: item.license === "Open Source" ? "USD" : undefined,
    },
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <Link
          href={`/${category}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a {entry.title}
        </Link>

        <div className="mb-10 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                {item.name}
              </h1>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  category === "models"
                    ? "bg-models-dim text-models"
                    : category === "agents"
                    ? "bg-agents-dim text-agents"
                    : category === "mcp"
                    ? "bg-mcp-dim text-mcp"
                    : "bg-skills-dim text-skills"
                }`}
              >
                {item.license}
              </span>
            </div>
            <p className="text-text-muted">
              {item.creator}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors"
                >
                  Sitio web <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </p>
          </div>
        </div>

        <DetailPageClient item={item} category={category} color={entry.color} />
      </div>
    </main>
  );
}
