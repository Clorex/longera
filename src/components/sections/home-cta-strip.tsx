import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/ui/logo-watermark";

export function HomeCtaStrip() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="gold-gradient relative overflow-hidden rounded-[32px] p-8 md:p-10 lg:p-12">
          <LogoWatermark className="bottom-2 right-2 opacity-[0.04]" />

          <p className="eyebrow text-[hsl(var(--brand-deep))]">
            Start your routine
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[hsl(var(--brand-deep))] md:text-5xl">
            Find the variant that matches your day-to-day routine, climate, and lifestyle.
          </h2>

          <p className="mt-5 max-w-2xl text-base text-[hsl(var(--brand-deep))]/85 md:text-lg">
            Whether you need simple daily freshness or extra confidence for hot,
            humid, and active days, Longéra is built around real-life use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Why Longéra</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}