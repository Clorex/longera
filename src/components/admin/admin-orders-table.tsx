"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/utils";

type AdminOrder = {
  id: string;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  subtotal: number;
  currency: string;
  status: string;
  createdAt: string;
};

export function AdminOrdersTable() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await fetch("/api/admin/orders");
        const data = await response.json();
        setOrders(data.orders || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  if (loading) {
    return <p className="text-sm">Loading orders...</p>;
  }

  if (!orders.length) {
    return <p className="text-sm">No orders found yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead>
          <tr className="border-b border-[hsl(var(--border))]">
            <th className="pb-3">Order</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Email</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[hsl(var(--border))]">
              <td className="py-4">{order.orderNumber}</td>
              <td className="py-4">{order.customerName || "-"}</td>
              <td className="py-4">{order.customerEmail}</td>
              <td className="py-4">
                {formatPrice(order.subtotal, order.currency)}
              </td>
              <td className="py-4 capitalize">{order.status}</td>
              <td className="py-4">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}