import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getTierByVariantAndQuantity } from "@/data/products";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cart, customer } = body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 },
      );
    }

    if (!customer?.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const line_items = cart.map((item: any) => {
      const standard = item.price * item.quantity;
      const tier = getTierByVariantAndQuantity(item.variant, item.quantity);
      const discount =
        tier && tier.discountPercent > 0
          ? standard * (tier.discountPercent / 100)
          : 0;
      const finalTotal = standard - discount;
      const effectiveUnit = Math.round((finalTotal / item.quantity) * 100);

      return {
        price_data: {
          currency: item.currency?.toLowerCase() || "aud",
          product_data: {
            name: item.name,
            description: [
              `Variant: ${item.variant}`,
              `Size: ${item.sizeLabel}`,
              tier?.discountPercent
                ? `Discount: ${tier.discountPercent}%`
                : null,
              tier?.freeShipping ? "Free shipping eligible" : null,
            ]
              .filter(Boolean)
              .join(" | "),
          },
          unit_amount: effectiveUnit,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      customer_email: customer.email,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      shipping_address_collection: {
        allowed_countries: [
          "AU",
          "US",
          "GB",
          "CA",
          "NZ",
          "DE",
          "FR",
          "NL",
          "SG",
        ],
      },
      metadata: {
        firstName: customer.firstName || "",
        lastName: customer.lastName || "",
        email: customer.email || "",
        phone: customer.phone || "",
        addressLine1: customer.addressLine1 || "",
        addressLine2: customer.addressLine2 || "",
        city: customer.city || "",
        state: customer.state || "",
        postalCode: customer.postalCode || "",
        country: customer.country || "",
        cart: JSON.stringify(cart),
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 },
    );
  }
}
