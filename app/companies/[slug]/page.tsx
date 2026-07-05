import type { Metadata } from "next";
import { CompanyPageClient } from "@/components/features/CompanyPageClient";
import { companiesData } from "@/data/companies";

export async function generateStaticParams() {
  return companiesData.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);

  if (!company) {
    return { title: "Empresa no encontrada" };
  }

  return {
    title: `${company.name} — Información, Productos y Noticias | AI Directory`,
    description: company.description,
    openGraph: {
      title: `${company.name} — AI Directory`,
      description: company.description,
      type: "website",
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CompanyPageClient slug={slug} />;
}
