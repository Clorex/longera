import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { CartView } from "@/components/sections/cart-view";

export default function CartPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Cart"
        title="Review your selections before checkout."
        description="Guest checkout with Stripe will be connected in the next batch."
      />

      <section className="section-space">
        <Container>
          <CartView />
        </Container>
      </section>
    </SiteShell>
  );
}