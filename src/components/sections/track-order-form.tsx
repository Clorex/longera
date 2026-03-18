"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type TrackingResult = {
  carrier: string;
  status: string;
  trackingNumber: string;
  message: string;
};

export function TrackOrderForm() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber,
          email,
          trackingNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to check tracking");
      }

      setResult(data.result);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <form onSubmit={handleSubmit} className="card-soft p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          Track Your Order
        </h2>

        <p className="mt-3 text-sm md:text-base">
          Enter your order number or tracking number to check shipping progress.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-medium">Order number</label>
            <input
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g. LON-123456"
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email used for your order"
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tracking number</label>
            <input
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Optional courier tracking number"
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>
        </div>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

        <Button type="submit" className="mt-6 w-full" disabled={loading}>
          {loading ? "Checking..." : "Track Order"}
        </Button>
      </form>

      <div className="card-soft p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          Tracking Details
        </h2>

        {!result ? (
          <div className="mt-5 rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
            <p className="text-sm md:text-base">
              Once you submit your order number or tracking number, your tracking details will appear here.
            </p>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              Shipping support is structured around CouriersPlease for Australia.
            </p>
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-[hsl(var(--brand-green))]">
                Carrier
              </p>
              <p className="mt-2 text-lg font-semibold">{result.carrier}</p>
            </div>

            <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-[hsl(var(--brand-green))]">
                Status
              </p>
              <p className="mt-2 text-lg font-semibold">{result.status}</p>
            </div>

            <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-[hsl(var(--brand-green))]">
                Tracking Number
              </p>
              <p className="mt-2 text-lg font-semibold">{result.trackingNumber}</p>
            </div>

            <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-5">
              <p className="text-sm md:text-base">{result.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
