"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Directorio" },
  { href: "/models", label: "Modelos" },
  { href: "/agents", label: "Agentes" },
  { href: "/mcp", label: "MCP" },
  { href: "/skills", label: "Skills" },
  { href: "/news", label: "Noticias" },
];

export function Header() {
  const pathname = usePathname();

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

        <nav className="flex items-center gap-1">
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
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
