import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, anonymous, rating, title, review, productSlug } = body;

    if (!rating || !title || !review) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const reviewRecord = {
      name: anonymous ? "Anonymous" : name || "Anonymous",
      anonymous: Boolean(anonymous),
      rating,
      title,
      review,
      productSlug: productSlug || "",
      createdAt: new Date().toISOString(),
      approved: false,
    };

    const docRef = await adminDb.collection("reviews").add(reviewRecord);

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.error("Review submission error:", error);
    return NextResponse.json(
      { error: "Unable to submit review" },
      { status: 500 },
    );
  }
}