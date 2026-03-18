"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getCart } from "@/lib/cart";
import { formatPrice, getTierPricingSummary } from "@/lib/utils";
import type { CartItem } from "@/types/cart";

export function CheckoutForm() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Australia",
  });

  useEffect(() => {
    setCart(getCart());
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!cart.length) {
      router.push("/cart");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout/create-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          customer: form,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      if (!data.url) {
        throw new Error("Missing Stripe checkout URL");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!cart.length) {
    return (
      <div className="card-soft p-8">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          No items in cart
        </h2>
        <p className="mt-3">Please add products before proceeding to checkout.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="card-soft p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          Guest Checkout
        </h2>

        <p className="mt-3 text-sm md:text-base">
          No account required. Email is used for receipts, shipping updates, and order tracking.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">First name</label>
            <input
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Last name</label>
            <input
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Address line 1</label>
            <input
              required
              value={form.addressLine1}
              onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Address line 2</label>
            <input
              value={form.addressLine2}
              onChange={(e) => setForm({ ...form, addressLine2: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">City</label>
            <input
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">State / Region</label>
            <input
              required
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Postal code</label>
            <input
              required
              value={form.postalCode}
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Country</label>
            <input
              required
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cta-shadow mt-8 inline-flex w-full items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
        >
          {loading ? "Redirecting to Stripe..." : "Continue to Secure Payment"}
        </button>
      </form>

      <aside className="card-soft h-fit p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          Order Summary
        </h2>

        <div className="mt-6 space-y-4">
          {cart.map((item) => {
            const pricing = getTierPricingSummary(item.variant, item.quantity, item.price);

            return (
              <div key={item.id} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-[hsl(var(--brand-deep))]">
                    {item.shortName} x {item.quantity}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {item.variant} | {item.sizeLabel}
                  </p>
                  {pricing.discountPercent > 0 ? (
                    <p className="text-xs text-[hsl(var(--brand-deep))]">
                      {pricing.discountPercent}% discount
                      {pricing.freeShipping ? " + free shipping" : ""}
                    </p>
                  ) : null}
                </div>

                <p className="font-medium">
                  {formatPrice(pricing.finalTotal, item.currency)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-2 border-t border-[hsl(var(--border))] pt-4">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(summary.subtotal)}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Discount</span>
            <span>{summary.discount > 0 ? `- ${formatPrice(summary.discount)}` : "None"}</span>
          </div>

          <div className="flex items-center justify-between font-semibold text-[hsl(var(--brand-deep))]">
            <span>Total</span>
            <span>{formatPrice(summary.finalTotal)}</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          Shipping and final payment are completed securely with Stripe.
        </p>
      </aside>
    </div>
  );
}
