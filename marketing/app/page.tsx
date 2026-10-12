import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { SelfHostingSection } from "@/components/sections/self-hosting-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ProductPreviewSection } from "@/components/sections/product-preview-section";
import "@/components/marketing/marketing.css";

export default function Home() {
  return (
    <div className="marketing-site holding-page">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductPreviewSection />
        <SelfHostingSection />
        <BenefitsSection />
      </main>
    </div>
  );
}
