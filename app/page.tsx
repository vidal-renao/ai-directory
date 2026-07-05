import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedToolsSection } from "@/components/sections/FeaturedToolsSection";
import { TrendingSection } from "@/components/sections/TrendingSection";
import { BenchmarksSection } from "@/components/sections/BenchmarksSection";
import { MCPIntegrationSection } from "@/components/sections/MCPIntegrationSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <HeroSection />
        <FeaturedToolsSection />
        <TrendingSection />
        <BenchmarksSection />
        <MCPIntegrationSection />
        <CategoryGrid />
        <NewsletterSection />
      </div>
    </main>
  );
}
