import { Container } from "@/components/layout/container";
import { LogoWatermark } from "@/components/ui/logo-watermark";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))]/50 py-14 md:py-20">
      <Container className="relative">
        <LogoWatermark className="right-0 top-0 hidden md:block" />
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>
    </section>
  );
}