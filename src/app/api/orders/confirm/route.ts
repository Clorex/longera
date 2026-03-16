import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { adminDb } from "@/lib/firebase-admin";
import {
  buildCustomerName,
  calculateSubtotal,
  generateOrderNumber,
  normalizeOrderRecord,
} from "@/lib/orders";
import { sendAdminOrderNotification, sendCustomerReceipt } from "@/lib/email-actions";
import type { CartItem } from "@/types/cart";
import type { OrderRecord } from "@/types/order";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session ID" },
        { status: 400 },
      );
    }

    const existingSnapshot = await adminDb
      .collection("orders")
      .where("stripeSessionId", "==", sessionId)
      .limit(1)
      .get();

    if (!existingSnapshot.empty) {
      const existingOrder = existingSnapshot.docs[0].data();
      return NextResponse.json({ order: existingOrder, existing: true });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    if (!session || session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 400 },
      );
    }

    const rawCart = session.metadata?.cart;
    const items: CartItem[] = rawCart ? JSON.parse(rawCart) : [];

    const firstName = session.metadata?.firstName || "";
    const lastName = session.metadata?.lastName || "";
    const customerName = buildCustomerName(firstName, lastName);

    const order: OrderRecord = normalizeOrderRecord({
      id: session.id,
      orderNumber: generateOrderNumber(),
      stripeSessionId: session.id,
      stripePaymentIntentId:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : undefined,
      customerEmail: session.customer_details?.email || session.customer_email || "",
      customerName,
      phone: session.customer_details?.phone || session.metadata?.phone || "",
      items,
      subtotal: calculateSubtotal(items),
      currency: items[0]?.currency || "AUD",
      status: "paid",
      shippingAddress: {
        line1: session.customer_details?.address?.line1 || "",
        line2: session.customer_details?.address?.line2 || "",
        city: session.customer_details?.address?.city || "",
        state: session.customer_details?.address?.state || "",
        postalCode: session.customer_details?.address?.postal_code || "",
        country: session.customer_details?.address?.country || "",
      },
      createdAt: new Date().toISOString(),
    });

    await adminDb.collection("orders").doc(order.id).set(order);

    await Promise.allSettled([
      sendCustomerReceipt(order),
      sendAdminOrderNotification(order),
    ]);

    return NextResponse.json({ order, existing: false });
  } catch (error) {
    console.error("Order confirm error:", error);
    return NextResponse.json(
      { error: "Unable to confirm order" },
      { status: 500 },
    );
  }
}