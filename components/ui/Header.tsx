"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Brain, Newspaper, BarChart3, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Directorio" },
  { href: "/models", label: "Modelos" },
  { href: "/agents", label: "Agentes" },
  { href: "/mcp", label: "MCP" },
  { href: "/skills", label: "Skills" },
  { href: "/benchmarks", label: "Benchmarks" },
  { href: "/news", label: "Noticias" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-models-dim border border-models/20 transition-colors group-hover:bg-models/20">
            <Brain className="h-4 w-4 text-models" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-text-primary">
            AI Directory
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
                isActive(item.href)
                  ? "bg-surface-hover text-text-primary"
                  : "text-text-muted hover:text-text-secondary hover:bg-surface"
              )}
            >
              <span className="flex items-center gap-1.5">
                {item.label === "Noticias" && (
                  <Newspaper className="h-3 w-3" />
                )}
                {item.label === "Benchmarks" && (
                  <BarChart3 className="h-3 w-3" />
                )}
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center h-8 w-8 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150",
                isActive(item.href)
                  ? "bg-surface-hover text-text-primary"
                  : "text-text-muted hover:text-text-secondary hover:bg-surface"
              )}
            >
              {item.label === "Noticias" && (
                <Newspaper className="h-4 w-4" />
              )}
              {item.label === "Benchmarks" && (
                <BarChart3 className="h-4 w-4" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
