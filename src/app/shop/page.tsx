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
    "Browse Longéra deodorant variants designed for daily wear, sensitive skin, sport, heat, and humidity.",
};

export default function ShopPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shop"
        title="Choose the Longéra formula that fits your lifestyle."
        description="Browse variants designed for daily wear, sensitive skin, sport, heat, and humidity."
      />

      <section className="section-space">
        <Container className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <BannerCard
            eyebrow="Gifting available"
            title="Add gift wrap and a personal note directly from the product page."
            description="Longéra includes gifting options in the purchase journey for a more premium customer experience."
            ctaLabel="Explore Products"
            ctaHref="/shop"
            variant="gold"
          />
        </Container>
      </section>
    </SiteShell>
  );
}