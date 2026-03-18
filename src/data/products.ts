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
    images: ["/item1.png", "/item2.png"],
    featuredImage: "/item1.png",
    badge: "Best Seller",
    shortDescription:
      "A clean, science-backed everyday deodorant designed for confidence, simplicity, and real odour control.",
    fullDescription:
      "Longera Black is your refined everyday option - designed for clean odour protection, a minimalist routine, and a premium fragrance-free feel. It is ideal for people who want dependable daily use without unnecessary extras.",
    benefits: [
      "Ideal for everyday confidence",
      "Fragrance-free positioning",
      "No aluminium",
      "No baking soda",
      "No harsh chemicals",
      "Better multi-buy value",
      "Free shipping on selected quantities",
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
      "Apply to clean, dry underarms in the morning or before going out. Reapply after intense activity if needed.",
    suitableFor: [
      "Daily wear",
      "Work days",
      "Minimalist routines",
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
    images: ["/item5.png", "/item6.png"],
    featuredImage: "/item5.png",
    badge: "Sport and Heat",
    shortDescription:
      "A stronger option for active lifestyles, hotter days, workouts, and more demanding routines.",
    fullDescription:
      "Longera Green is built for people who need more support in heat, movement, humidity, and active daily life. It keeps the same clean brand philosophy while giving customers a more performance-driven option.",
    benefits: [
      "Built for active routines",
      "Suitable for heat and humidity",
      "Fragrance-free positioning",
      "No aluminium",
      "No baking soda",
      "No harsh chemicals",
      "Better multi-buy value",
      "Free shipping on selected quantities",
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
      "Apply to clean, dry underarms before workouts, long days out, or hot weather activity.",
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
    { quantity: 2, total: 45, discountPercent: 10, freeShipping: false },
    { quantity: 3, total: 67.5, discountPercent: 10, freeShipping: true },
    { quantity: 4, total: 90, discountPercent: 10, freeShipping: true },
  ],
  green: [
    { quantity: 1, total: 30, discountPercent: 0, freeShipping: false },
    { quantity: 2, total: 54, discountPercent: 10, freeShipping: false },
    { quantity: 3, total: 81, discountPercent: 10, freeShipping: true },
    { quantity: 4, total: 108, discountPercent: 10, freeShipping: true },
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
