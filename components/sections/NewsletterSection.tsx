"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="mt-16 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-models/5 via-background to-mcp/5 p-8 lg:p-12"
      >
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-models/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-mcp/10 to-transparent blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-models to-mcp">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>

          <h2 className="mb-3 text-2xl font-bold tracking-tight text-text-primary lg:text-3xl">
            Mantente al día con la IA
          </h2>
          <p className="mb-8 text-sm text-text-secondary lg:text-base">
            Recibe semanalmente las últimas novedades en modelos, frameworks,
            benchmarks y herramientas IA. Directo a tu bandeja, sin spam.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 px-6 py-4 text-emerald-400"
            >
              <Check className="h-5 w-5" />
              <span className="font-medium">
                ¡Suscrito! Revisa tu bandeja para confirmar.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-all duration-200 focus:border-models/50 focus:outline-none focus:ring-2 focus:ring-models/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-models to-mcp px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-models/25 transition-all duration-200 hover:shadow-xl hover:shadow-models/30 hover:scale-105"
              >
                Suscribirse
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-[10px] text-text-muted">
            Únete a 2,000+ profesionales de IA. Cancela cuando quieras.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
