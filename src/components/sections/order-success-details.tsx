"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/lib/utils";

type OrderResponse = {
  order?: {
    orderNumber: string;
    customerEmail: string;
    status: string;
    subtotal: number;
    currency: string;
    items: {
      id: string;
      shortName: string;
      quantity: number;
      price: number;
      currency: string;
    }[];
  };
  error?: string;
};

export function OrderSuccessDetails() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<OrderResponse | null>(null);

  useEffect(() => {
    async function confirmOrder() {
      if (!sessionId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/orders/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        setData({ error: "Unable to load order details" });
      } finally {
        setLoading(false);
      }
    }

    confirmOrder();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="card-soft mt-8 p-6 text-left">
        <p>Loading your order details...</p>
      </div>
    );
  }

  if (data?.error || !data?.order) {
    return (
      <div className="card-soft mt-8 p-6 text-left">
        <p className="font-medium text-red-600">
          We could not load your order details right now.
        </p>
      </div>
    );
  }

  const { order } = data;

  return (
    <div className="card-soft mt-8 p-6 text-left md:p-8">
      <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        Order Details
      </h3>

      <div className="mt-5 space-y-2 text-sm md:text-base">
        <p>
          <strong>Order Number:</strong> {order.orderNumber}
        </p>
        <p>
          <strong>Email:</strong> {order.customerEmail}
        </p>
        <p>
          <strong>Status:</strong> {order.status}
        </p>
      </div>

      <div className="mt-6 border-t border-[hsl(var(--border))] pt-5">
        <h4 className="text-lg font-semibold text-[hsl(var(--brand-deep))]">
          Items
        </h4>

        <div className="mt-4 space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4">
              <p>
                {item.shortName} × {item.quantity}
              </p>
              <p className="font-medium">
                {formatPrice(item.price * item.quantity, item.currency)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[hsl(var(--border))] pt-4">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold">
            {formatPrice(order.subtotal, order.currency)}
          </span>
        </div>
      </div>
    </div>
  );
}