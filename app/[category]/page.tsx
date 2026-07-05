import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categoryRegistry } from "@/lib/data";
import type { CategorySlug } from "@/lib/types";
import { CategoryPageClient } from "@/components/features/CategoryPageClient";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categoryRegistry).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = slug as CategorySlug;
  const entry = categoryRegistry[category];
  if (!entry) return {};

  return {
    title: `${entry.title} — AI Directory`,
    description: entry.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = slug as CategorySlug;
  const entry = categoryRegistry[category];

  if (!entry) notFound();

  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al directorio
        </Link>

        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
            {entry.title}
          </h1>
          <p className="max-w-2xl text-text-secondary">{entry.description}</p>
        </div>

        <CategoryPageClient items={entry.data} color={entry.color} category={category} />
      </div>
    </main>
  );
}
