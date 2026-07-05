"use client";

import Link from "next/link";
import { Brain, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  categories: [
    { label: "Modelos Fundacionales", href: "/models" },
    { label: "Frameworks de Agentes", href: "/agents" },
    { label: "Servidores MCP", href: "/mcp" },
    { label: "Skills / Funciones", href: "/skills" },
    { label: "Benchmarks", href: "/benchmarks" },
    { label: "Noticias", href: "/news" },
  ],
  resources: [
    { label: "Guía de Modelos", href: "/models" },
    { label: "Documentación MCP", href: "/mcp" },
    { label: "Benchmarks IA", href: "/benchmarks" },
    { label: "Newsletter", href: "#newsletter" },
  ],
  company: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-16 lg:mt-24 border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-models-dim border border-models/20">
                <Brain className="h-4 w-4 text-models" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                AI Directory
              </span>
            </Link>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Centro de Comando del Ecosistema IA. Modelos, Agentes, MCPs y
              Skills — todo lo que necesitas para construir con IA.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-border text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Categorías
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Recursos
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-[10px] text-text-muted">
            © 2026 AI Directory. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Todos los sistemas operativos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
