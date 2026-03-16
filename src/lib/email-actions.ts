import { resend } from "@/lib/resend";
import { buildAdminOrderHtml, buildCustomerReceiptHtml } from "@/lib/email";
import type { OrderRecord } from "@/types/order";

export async function sendCustomerReceipt(order: OrderRecord) {
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) return;

  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: order.customerEmail,
    subject: `Your Longéra Order Confirmation — ${order.orderNumber}`,
    html: buildCustomerReceiptHtml(order),
  });
}

export async function sendAdminOrderNotification(order: OrderRecord) {
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.EMAIL_FROM ||
    !process.env.ORDER_NOTIFICATION_EMAIL
  ) {
    return;
  }

  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.ORDER_NOTIFICATION_EMAIL,
    subject: `New Order Received — ${order.orderNumber}`,
    html: buildAdminOrderHtml(order),
  });
}