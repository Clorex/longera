import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BannerCard } from "@/components/ui/banner-card";
import { BrandPill } from "@/components/ui/brand-pill";
import { InfoCard } from "@/components/ui/info-card";
import { LogoWatermark } from "@/components/ui/logo-watermark";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomePlaceholder() {
  return (
    <>
      <section className="relative overflow-hidden section-space">
        <Container>
          <div className="banner-gradient brand-panel relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
            <LogoWatermark className="right-4 top-4" />

            <BrandPill>Science-backed protection</BrandPill>

            <div className="mt-6 max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-[hsl(var(--brand-deep))] md:text-6xl">
                Real odour control, grounded in biology — not fragrance.
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg">
                Longéra is built for people who want clean, effective deodorant
                support without aluminium, baking soda, harsh chemicals, or
                overpowering fragrance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button>Shop Best Sellers</Button>
                </Link>
                <Link href="/science">
                  <Button variant="outline">Discover the Science</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Why Longéra"
            title="Built for daily confidence, sport, heat, and sensitive skin."
            description="Your website structure, banners, product content, and science-backed storytelling will be expanded in the next batches."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Fragrance-free focus"
              description="Designed for real odour control instead of covering body odour with perfume."
            />
            <InfoCard
              title="No harsh extras"
              description="Crafted without aluminium, baking soda, and harsh chemicals."
            />
            <InfoCard
              title="Made for real life"
              description="Built for everyday wear, active use, humid conditions, and long-lasting freshness."
            />
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <BannerCard
            eyebrow="Explore the formula"
            title="See the science behind the odour-control approach."
            description="Learn how sweat, skin bacteria, and odour-forming compounds interact — and how Longéra is designed to help."
            ctaLabel="Read the Science"
            ctaHref="/science"
            variant="cream"
          />

          <BannerCard
            eyebrow="Start with the essentials"
            title="Shop minimalist care with a premium natural feel."
            description="Browse product variants, future bundles, and gifting options in a clean shopping experience."
            ctaLabel="Browse Products"
            ctaHref="/shop"
            variant="green"
          />
        </Container>
      </section>
    </>
  );
}