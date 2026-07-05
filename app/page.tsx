import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { BenchmarksSection } from "@/components/sections/BenchmarksSection";
import { MCPIntegrationSection } from "@/components/sections/MCPIntegrationSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <HeroSection />
        <StatsBar />
        <BenchmarksSection />
        <MCPIntegrationSection />
        <CategoryGrid />
      </div>
    </main>
  );
}
