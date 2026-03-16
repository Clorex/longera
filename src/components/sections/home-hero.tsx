"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BrandPill } from "@/components/ui/brand-pill";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/ui/logo-watermark";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden section-space">
      <Container>
        <div className="brand-panel banner-gradient relative overflow-hidden px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <LogoWatermark className="right-4 top-4" />
          <LogoWatermark className="bottom-6 left-6 hidden md:block opacity-[0.03]" />

          <div className="max-w-4xl">
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[hsl(var(--brand-deep))] md:text-6xl lg:text-7xl">
              Real odour control without fragrance, aluminium, or harsh extras.
            </h1>

            <p className="mt-6 max-w-2xl text-base md:text-lg">
              Longera Black and Longera Green are designed for clean, effective
              odour control with a premium minimalist feel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>
              <Link href="/science">
                <Button variant="outline">Discover the Science</Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <BrandPill>10 percent off on 2 to 4 items</BrandPill>
              <BrandPill>Free shipping on 3 to 4 items</BrandPill>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
