import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/Header";

export const metadata: Metadata = {
  title: {
    default: "AI Directory — Centro de Comando del Ecosistema IA",
    template: "%s | AI Directory",
  },
  description:
    "Directorio avanzado de Modelos Fundacionales, Frameworks de Agentes, Servidores MCP y Skills del ecosistema de Inteligencia Artificial. Fichas técnicas, casos de uso empresariales y estado real de adopción.",
  keywords: [
    "AI directory",
    "LLM",
    "LangChain",
    "LangGraph",
    "AutoGen",
    "CrewAI",
    "MCP",
    "Model Context Protocol",
    "AI agents",
    "machine learning",
    "enterprise AI",
  ],
  authors: [{ name: "Vidal Reñao" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "AI Directory",
    title: "AI Directory — Centro de Comando del Ecosistema IA",
    description:
      "Directorio avanzado de Modelos Fundacionales, Frameworks de Agentes, Servidores MCP y Skills del ecosistema de IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Directory — Centro de Comando del Ecosistema IA",
    description:
      "Directorio avanzado de Modelos Fundacionales, Frameworks de Agentes, Servidores MCP y Skills del ecosistema de IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Directory",
    description:
      "Directorio avanzado y Centro de Comando del ecosistema de Inteligencia Artificial actual.",
    url: "https://ai-directory.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ai-directory.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Directory",
      url: "https://ai-directory.vercel.app",
    },
  };

  const softwareDirectory = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Ecosystem Directory",
    description:
      "Listado de Modelos Fundacionales, Frameworks de Agentes, Servidores MCP y Skills para infraestructura empresarial de IA.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Modelos Fundacionales",
        description: "LLMs, Modelos Multimodales y VLM para empresas",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Frameworks de Agentes Autónomos",
        description: "LangGraph, AutoGen, CrewAI y más",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Servidores MCP",
        description: "Model Context Protocol y herramientas asociadas",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skills / Funciones Ejecutables",
        description: "Herramientas que los agentes pueden invocar",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareDirectory) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
