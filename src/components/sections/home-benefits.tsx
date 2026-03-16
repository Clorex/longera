import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { InfoCard } from "@/components/ui/info-card";

export function HomeBenefits() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <SectionHeading
          eyebrow="Why it stands out"
          title="A minimalist product story with clear performance benefits."
          description="Longera is positioned around science, skin respect, practical confidence, and stronger value on multi-buy orders."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="10 percent off on 2 to 4 items"
            description="Customers buying 2, 3, or 4 units receive a built-in discount for better value."
          />
          <InfoCard
            title="Free shipping on 3 to 4 items"
            description="Orders with 3 or 4 units qualify for free shipping messaging and stronger conversion."
          />
          <InfoCard
            title="Science-backed odour control"
            description="Built around real odour control instead of fragrance masking."
          />
          <InfoCard
            title="No aluminium"
            description="The product positioning stays clean and simple without aluminium."
          />
          <InfoCard
            title="No baking soda"
            description="Supports a gentler feel for customers seeking a cleaner routine."
          />
          <InfoCard
            title="Built for daily life and heat"
            description="The black and green variants support different routines and conditions."
          />
        </div>
      </Container>
    </section>
  );
}
