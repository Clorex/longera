import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/ui/product-card";
import { BannerCard } from "@/components/ui/banner-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Natural Deodorant",
  description:
    "Browse Longera deodorant variants designed for daily wear, sensitive skin, sport, heat, and humidity.",
};

export default function ShopPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shop"
        title="Choose the Longera formula that fits your lifestyle."
        description="Browse variants designed for daily wear, sensitive skin, sport, heat, and humidity."
      />

      <section className="section-space">
        <Container className="space-y-8">
          <div id="products" className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <BannerCard
            eyebrow="Thoughtful gifting"
            title="Gift someone Longera Black or Green today."
            description="Show love with a thoughtful daily essential designed for confidence, freshness, and clean care."
            ctaLabel="Explore Products"
            ctaHref="#products"
            variant="gold"
          />
        </Container>
      </section>
    </SiteShell>
  );
}
