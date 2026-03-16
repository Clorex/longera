import type { OrderRecord } from "@/types/order";
import { formatPrice } from "@/lib/utils";

export function buildCustomerReceiptHtml(order: OrderRecord) {
  const itemsHtml = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0;">${item.shortName} × ${item.quantity}</td>
          <td style="padding:8px 0; text-align:right;">${formatPrice(item.price * item.quantity, item.currency)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#173d2b;">
      <h1 style="margin-bottom:8px;">Thank you for your Longéra order</h1>
      <p style="margin-bottom:16px;">Your payment was successful and your order has been received.</p>
      <p><strong>Order Number:</strong> ${order.orderNumber}</p>
      <p><strong>Status:</strong> ${order.status}</p>
      <table style="width:100%;border-collapse:collapse;margin-top:24px;">
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <hr style="margin:24px 0;border:none;border-top:1px solid #ddd;" />
      <p><strong>Subtotal:</strong> ${formatPrice(order.subtotal, order.currency)}</p>
      <p style="margin-top:24px;">We’ll continue order communication by email.</p>
    </div>
  `;
}

export function buildAdminOrderHtml(order: OrderRecord) {
  const itemsHtml = order.items
    .map(
      (item) => `
        <li>${item.shortName} × ${item.quantity} — ${formatPrice(item.price * item.quantity, item.currency)}</li>
      `,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#173d2b;">
      <h1>New Longéra Order</h1>
      <p><strong>Order Number:</strong> ${order.orderNumber}</p>
      <p><strong>Customer:</strong> ${order.customerName}</p>
      <p><strong>Email:</strong> ${order.customerEmail}</p>
      <p><strong>Phone:</strong> ${order.phone || "-"}</p>
      <p><strong>Status:</strong> ${order.status}</p>

      <h2 style="margin-top:24px;">Items</h2>
      <ul>
        ${itemsHtml}
      </ul>

      <p style="margin-top:24px;"><strong>Subtotal:</strong> ${formatPrice(order.subtotal, order.currency)}</p>
    </div>
  `;
}