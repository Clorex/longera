import { Container } from "@/components/layout/container";
import { BannerCard } from "@/components/ui/banner-card";

export function HomeBanners() {
  return (
    <section className="pb-14 md:pb-20">
      <Container className="space-y-6">
        <BannerCard
          eyebrow="Save more"
          title="Get 10 percent off when you buy 2 to 4 items."
          description="Multi-buy pricing helps customers stock up while increasing cart value."
          ctaLabel="Shop the Range"
          ctaHref="/shop"
          variant="gold"
        />

        <BannerCard
          eyebrow="Free shipping"
          title="Enjoy free shipping when you buy 3 to 4 items."
          description="Higher-quantity orders unlock even more value with free shipping messaging."
          ctaLabel="Explore Products"
          ctaHref="/shop"
          variant="green"
        />

        <BannerCard
          eyebrow="Choose your formula"
          title="Pick Longera Black for daily use or Longera Green for heat, sport, and active routines."
          description="Two product directions, one clean and science-backed brand approach."
          ctaLabel="Browse All Products"
          ctaHref="/shop"
          variant="cream"
        />
      </Container>
    </section>
  );
}
