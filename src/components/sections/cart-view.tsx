"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/cart";
import {
  getCart,
  removeCartItem,
  updateCartItemQuantity,
} from "@/lib/cart";
import { formatPrice, getTierPricingSummary } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

export function CartView() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const syncCart = () => setCart(getCart());
    syncCart();
    window.addEventListener("cartUpdated", syncCart);
    return () => window.removeEventListener("cartUpdated", syncCart);
  }, []);

  const summary = useMemo(() => {
    return cart.reduce(
      (acc, item) => {
        const pricing = getTierPricingSummary(item.variant, item.quantity, item.price);
        acc.subtotal += pricing.subtotal;
        acc.discount += pricing.discountAmount;
        acc.finalTotal += pricing.finalTotal;
        if (pricing.freeShipping) acc.hasFreeShipping = true;
        return acc;
      },
      { subtotal: 0, discount: 0, finalTotal: 0, hasFreeShipping: false },
    );
  }, [cart]);

  if (!cart.length) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Start with one of the Longera variants designed for everyday life, heat, or active use."
        ctaLabel="Shop Products"
        ctaHref="/shop"
      />
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="space-y-5">
        {cart.map((item) => {
          const pricing = getTierPricingSummary(item.variant, item.quantity, item.price);

          return (
            <div
              key={item.id}
              className="card-soft flex flex-col gap-5 p-5 md:flex-row"
            >
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-[20px] bg-[hsl(var(--brand-cream))] md:w-28">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-contain p-3"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[hsl(var(--brand-deep))]">
                  {item.shortName}
                </h3>

                <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                  Variant: {item.variant} | {item.sizeLabel}
                </p>

                {item.giftWrap ? <p className="mt-2 text-sm">Gift wrap added</p> : null}

                {item.giftNote ? (
                  <p className="mt-2 text-sm">
                    Gift note: <span className="italic">{item.giftNote}</span>
                  </p>
                ) : null}

                <div className="mt-2 text-sm text-[hsl(var(--brand-deep))]">
                  {pricing.discountPercent > 0 ? (
                    <p>
                      {pricing.discountPercent}% discount applied
                      {pricing.freeShipping ? " + free shipping" : ""}
                    </p>
                  ) : (
                    <p>Standard pricing</p>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="flex items-center overflow-hidden rounded-full border border-[hsl(var(--border))]">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() =>
                        updateCartItemQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-4 py-2"
                    >
                      -
                    </button>
                    <span className="min-w-12 px-4 text-center">{item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() =>
                        updateCartItemQuantity(item.id, Math.min(4, item.quantity + 1))
                      }
                      className="px-4 py-2"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="text-sm font-medium text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                {pricing.discountAmount > 0 ? (
                  <>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] line-through">
                      {formatPrice(pricing.subtotal, item.currency)}
                    </p>
                    <p className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                      {formatPrice(pricing.finalTotal, item.currency)}
                    </p>
                  </>
                ) : (
                  <p className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    {formatPrice(pricing.finalTotal, item.currency)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <aside className="card-soft h-fit p-6 md:p-7">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          Order Summary
        </h2>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(summary.subtotal)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span>
              {summary.discount > 0 ? `- ${formatPrice(summary.discount)}` : "None"}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-3 font-semibold text-[hsl(var(--brand-deep))]">
            <span>Total</span>
            <span>{formatPrice(summary.finalTotal)}</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          {summary.hasFreeShipping
            ? "Free shipping applies to qualifying multi-buy items."
            : "Guest checkout only. Secure payment is processed by Stripe."}
        </p>

        <Link href="/checkout">
          <Button className="mt-6 w-full">Proceed to Checkout</Button>
        </Link>
      </aside>
    </div>
  );
}
