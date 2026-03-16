import type { ReviewItem } from "@/types/content";

export const reviews: ReviewItem[] = [
  {
    id: "review-1",
    name: "Anonymous",
    anonymous: true,
    rating: 5,
    title: "Clean and effective",
    review:
      "I like that it doesn’t rely on fragrance. It feels clean, simple, and does exactly what I need for daily use.",
    productSlug: "everyday-natural-deodorant-black",
    createdAt: "2026-03-10",
    approved: true,
  },
  {
    id: "review-2",
    name: "Marcus",
    anonymous: false,
    rating: 5,
    title: "Great for humid days",
    review:
      "The sport version works really well during hotter weather and training days. Minimal feel, strong performance.",
    productSlug: "sport-summer-defence-green",
    createdAt: "2026-03-11",
    approved: true,
  },
  {
    id: "review-3",
    name: "Anonymous",
    anonymous: true,
    rating: 4,
    title: "Minimal and premium",
    review:
      "The branding feels premium and the formula direction makes sense. Looking forward to trying bundle options too.",
    productSlug: "classic-natural-deodorant-white",
    createdAt: "2026-03-12",
    approved: true,
  },
];