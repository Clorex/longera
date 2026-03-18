import { NextResponse } from "next/server";
import { getTrackingStatus } from "@/lib/shipping";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderNumber, email, trackingNumber } = body;

    if (!orderNumber && !trackingNumber) {
      return NextResponse.json(
        { error: "Order number or tracking number is required" },
        { status: 400 },
      );
    }

    const result = await getTrackingStatus({
      orderNumber,
      email,
      trackingNumber,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Tracking lookup error:", error);
    return NextResponse.json(
      { error: "Unable to fetch tracking details" },
      { status: 500 },
    );
  }
}
