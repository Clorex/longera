import { SiteShell } from "@/components/layout/site-shell";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeBenefits } from "@/components/sections/home-benefits";
import { HomeBestSellers } from "@/components/sections/home-best-sellers";
import { HomeSciencePreview } from "@/components/sections/home-science-preview";
import { HomeFounderStory } from "@/components/sections/home-founder-story";
import { HomeBanners } from "@/components/sections/home-banners";
import { HomeReviewsPreview } from "@/components/sections/home-reviews-preview";
import { HomeBlogPreview } from "@/components/sections/home-blog-preview";
import { HomeCtaStrip } from "@/components/sections/home-cta-strip";
import { createOrganizationSchema } from "@/lib/seo";

export default function HomePage() {
  const schema = createOrganizationSchema();

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <HomeHero />
      <HomeBenefits />
      <HomeBestSellers />
      <HomeSciencePreview />
      <HomeFounderStory />
      <HomeBanners />
      <HomeReviewsPreview />
      <HomeBlogPreview />
      <HomeCtaStrip />
    </SiteShell>
  );
}