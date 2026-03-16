import type { CartItem } from "@/types/cart";

export type OrderStatus = "paid" | "processing" | "shipped" | "delivered";

export type OrderRecord = {
  id: string;
  orderNumber: string;
  stripeSessionId: string;
  stripePaymentIntentId?: string;
  customerEmail: string;
  customerName: string;
  phone?: string;
  items: CartItem[];
  subtotal: number;
  currency: string;
  status: OrderStatus;
  shippingAddress?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
  createdAt: string;
};