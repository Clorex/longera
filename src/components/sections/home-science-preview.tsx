import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/ui/logo-watermark";
import { scienceContent } from "@/data/brand";

export function HomeSciencePreview() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="card-soft relative overflow-hidden p-8 md:p-10 lg:p-12">
          <LogoWatermark className="right-4 top-4" />

          <p className="eyebrow">The science</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-[hsl(var(--brand-deep))] md:text-5xl">
            {scienceContent.heroSubtitle}
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg">
            {scienceContent.intro[0]}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <h3 className="text-xl font-semibold">Sweat doesn’t smell</h3>
              <p className="mt-3 text-sm">
                Odour forms when bacteria break down specific compounds in sweat.
              </p>
            </div>

            <div className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <h3 className="text-xl font-semibold">Biology over perfume</h3>
              <p className="mt-3 text-sm">
                Longéra is positioned to address odour formation rather than mask it.
              </p>
            </div>

            <div className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <h3 className="text-xl font-semibold">Built for real routines</h3>
              <p className="mt-3 text-sm">
                Everyday and sport-focused variants support different lifestyles.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/science">
              <Button>Read the Full Science Story</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}