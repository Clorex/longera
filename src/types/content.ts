export type PricingTier = {
  quantity: number;
  total: number;
  discountPercent: number;
  freeShipping: boolean;
};

export type ProductVariantKey = "black" | "white" | "green";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  variant: ProductVariantKey;
  price: number;
  currency: "AUD";
  images: string[];
  featuredImage: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredientsSummary: string;
  faqs: string[];
  isBestSeller?: boolean;
  isBundle?: boolean;
  hidden?: boolean;
  stock: number;
  sizeLabel: string;
  sku: string;
  scent: string;
  usage: string;
  suitableFor: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ReviewItem = {
  id: string;
  name: string;
  anonymous?: boolean;
  rating: number;
  title: string;
  review: string;
  productSlug?: string;
  createdAt: string;
  approved?: boolean;
};

export type PolicySection = {
  title: string;
  body: string[];
};

export type CtaItem = {
  label: string;
  href: string;
};

export type BannerCopy = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  cta: CtaItem;
  variant?: "cream" | "green" | "gold";
};
