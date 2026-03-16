import type { Product, PricingTier } from "@/types/content";

export const products: Product[] = [
  {
    id: "longera-black",
    slug: "longera-black",
    name: "Longera Black",
    shortName: "Longera Black",
    variant: "black",
    price: 25,
    currency: "AUD",
    images: ["/item1.png", "/item2.png", "/item3.png", "/item4.png"],
    featuredImage: "/item1.png",
    badge: "Best Seller",
    shortDescription:
      "Science-backed natural deodorant for daily wear, confidence, and clean odour control.",
    fullDescription:
      "Longera Black is designed for real odour control with a clean, minimalist formula direction. It supports daily freshness without relying on harsh ingredients or fragrance-heavy masking.",
    benefits: [
      "Daily odour control",
      "Fragrance-free positioning",
      "No aluminium",
      "No baking soda",
      "No harsh chemicals",
      "10 percent discount on 2 to 4 items",
      "Free shipping on 3 to 4 items",
    ],
    ingredientsSummary:
      "Natural-focused formula designed for effective odour control without aluminium, baking soda, or harsh chemicals.",
    faqs: [
      "how-does-longera-work",
      "does-longera-stop-sweating",
      "is-it-fragrance-free",
      "is-it-safe-for-sensitive-skin",
      "does-it-contain-aluminium",
      "does-it-contain-baking-soda",
      "how-long-does-protection-last",
      "can-i-use-longera-every-day",
    ],
    isBestSeller: true,
    isBundle: false,
    hidden: false,
    stock: 100,
    sizeLabel: "Roll-On",
    sku: "LON-BLK-ROLL-001",
    scent: "Fragrance Free",
    usage:
      "Apply to clean, dry underarms as part of your daily routine. Reapply as needed.",
    suitableFor: [
      "Daily wear",
      "Minimalist care routine",
      "Fragrance-free users",
    ],
  },
  {
    id: "longera-green",
    slug: "longera-green",
    name: "Longera Green",
    shortName: "Longera Green",
    variant: "green",
    price: 30,
    currency: "AUD",
    images: ["/item4.png", "/item4.png", "/item4.png", "/item4.png"],
    featuredImage: "/item4.png",
    badge: "Sport and Heat",
    shortDescription:
      "A stronger option for active lifestyles, heat, humidity, and demanding routines.",
    fullDescription:
      "Longera Green is built for customers who want stronger day-to-day support in hotter, more active, or more demanding conditions while still following the brand's clean odour-control positioning.",
    benefits: [
      "Built for active routines",
      "Suitable for heat and humidity",
      "Fragrance-free positioning",
      "No aluminium",
      "No baking soda",
      "No harsh chemicals",
      "10 percent discount on 2 to 4 items",
      "Free shipping on 3 to 4 items",
    ],
    ingredientsSummary:
      "Natural-focused formula made for stronger daily demands without aluminium, baking soda, or harsh chemicals.",
    faqs: [
      "how-does-longera-work",
      "does-longera-stop-sweating",
      "is-it-fragrance-free",
      "does-it-contain-aluminium",
      "does-it-contain-baking-soda",
      "what-is-the-difference-between-black-and-green",
      "how-long-does-protection-last",
      "can-i-use-longera-every-day",
    ],
    isBestSeller: true,
    isBundle: false,
    hidden: false,
    stock: 100,
    sizeLabel: "Roll-On",
    sku: "LON-GRN-ROLL-001",
    scent: "Fragrance Free",
    usage:
      "Apply to clean, dry underarms before daily activity, workouts, or hot-weather use.",
    suitableFor: [
      "Sport",
      "Heat",
      "Humidity",
      "Active lifestyles",
    ],
  },
];

export const pricingTiers: Record<string, PricingTier[]> = {
  black: [
    { quantity: 1, total: 25, discountPercent: 0, freeShipping: false },
    { quantity: 2, total: 50, discountPercent: 10, freeShipping: false },
    { quantity: 3, total: 75, discountPercent: 10, freeShipping: true },
    { quantity: 4, total: 100, discountPercent: 10, freeShipping: true },
  ],
  green: [
    { quantity: 1, total: 30, discountPercent: 0, freeShipping: false },
    { quantity: 2, total: 60, discountPercent: 10, freeShipping: false },
    { quantity: 3, total: 90, discountPercent: 10, freeShipping: true },
    { quantity: 4, total: 120, discountPercent: 10, freeShipping: true },
  ],
};

export function getPricingTiersByVariant(variant: string) {
  return pricingTiers[variant] || [];
}

export function getTierByVariantAndQuantity(variant: string, quantity: number) {
  const tiers = pricingTiers[variant] || [];
  return tiers.find((tier) => tier.quantity === quantity);
}

export function getAllProducts() {
  return products.filter((product) => !product.hidden);
}

export function getBestSellerProducts() {
  return products.filter((product) => product.isBestSeller && !product.hidden);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
