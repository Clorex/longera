import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getTierByVariantAndQuantity } from "@/data/products";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency = "AUD") {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
  }).format(amount);
}

export function truncate(text: string, length = 120) {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getTierPricingSummary(variant: string, quantity: number, basePrice: number) {
  const tier = getTierByVariantAndQuantity(variant, quantity);

  if (!tier) {
    const subtotal = basePrice * quantity;
    return {
      subtotal,
      discountPercent: 0,
      discountAmount: 0,
      finalTotal: subtotal,
      freeShipping: false,
    };
  }

  const subtotal = basePrice * quantity;
  const discountAmount =
    tier.discountPercent > 0 ? subtotal * (tier.discountPercent / 100) : 0;
  const finalTotal = subtotal - discountAmount;

  return {
    subtotal,
    discountPercent: tier.discountPercent,
    discountAmount,
    finalTotal,
    freeShipping: tier.freeShipping,
  };
}
