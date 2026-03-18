import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { TrackOrderForm } from "@/components/sections/track-order-form";

export default function TrackOrderPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Track Order"
        title="Check your delivery and shipping progress."
        description="Track your Longera order using your order number or courier tracking number."
      />

      <section className="section-space">
        <Container>
          <TrackOrderForm />
        </Container>
      </section>
    </SiteShell>
  );
}
