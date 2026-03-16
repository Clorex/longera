import Link from "next/link";
import { Suspense } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ClearCartOnSuccess } from "@/components/sections/clear-cart-on-success";
import { OrderSuccessDetails } from "@/components/sections/order-success-details";

export default function CheckoutSuccessPage() {
  return (
    <SiteShell>
      <ClearCartOnSuccess />

      <PageHero
        eyebrow="Order Confirmed"
        title="Thank you for your order."
        description="Your payment was successful. A receipt and future order communication will be sent by email."
      />

      <section className="section-space">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="card-soft p-8 md:p-10">
              <h2 className="text-3xl font-semibold text-[hsl(var(--brand-deep))]">
                Your order has been received
              </h2>

              <p className="mt-4 text-base md:text-lg">
                Please check your email for your payment confirmation and order details.
              </p>

              <Suspense fallback={<div className="card-soft mt-8 p-6">Loading order...</div>}>
                <OrderSuccessDetails />
              </Suspense>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/">
                  <Button>Back to Homepage</Button>
                </Link>

                <Link href="/shop">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}