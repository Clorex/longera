import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Checkout Cancelled"
        title="Your checkout was not completed."
        description="Your cart has been kept so you can continue whenever you're ready."
      />

      <section className="section-space">
        <Container>
          <div className="card-soft mx-auto max-w-3xl p-8 text-center md:p-10">
            <h2 className="text-3xl font-semibold text-[hsl(var(--brand-deep))]">
              Payment not completed
            </h2>

            <p className="mt-4 text-base md:text-lg">
              You can return to your cart, adjust your items, and try again when ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/cart">
                <Button>Return to Cart</Button>
              </Link>

              <Link href="/shop">
                <Button variant="outline">Browse Products</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}