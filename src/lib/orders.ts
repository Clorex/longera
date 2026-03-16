import { getTierByVariantAndQuantity } from "@/data/products";
import type { CartItem } from "@/types/cart";

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function calculateDiscountedTotal(items: CartItem[]) {
  return items.reduce((sum, item) => {
    const tier = getTierByVariantAndQuantity(item.variant, item.quantity);

    if (tier) {
      const standard = item.price * item.quantity;
      const discount =
        tier.discountPercent > 0 ? standard * (tier.discountPercent / 100) : 0;
      return sum + (standard - discount);
    }

    return sum + item.price * item.quantity;
  }, 0);
}

export function generateOrderNumber() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `LON-${random}`;
}

export function buildCustomerName(firstName?: string, lastName?: string) {
  return [firstName, lastName].filter(Boolean).join(" ").trim();
}

export function normalizeOrderRecord(order: any) {
  return {
    ...order,
    createdAt: order.createdAt || new Date().toISOString(),
  };
}
