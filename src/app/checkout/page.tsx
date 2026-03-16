import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { CheckoutForm } from "@/components/sections/checkout-form";

export default function CheckoutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Checkout"
        title="Fast guest checkout with secure payment."
        description="No account required. Email is used for receipts, updates, and order tracking."
      />

      <section className="section-space">
        <Container>
          <CheckoutForm />
        </Container>
      </section>
    </SiteShell>
  );
}