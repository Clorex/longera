import type { CartItem } from "@/types/cart";

const CART_KEY = "longera-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existingIndex = cart.findIndex(
    (cartItem) =>
      cartItem.slug === item.slug &&
      cartItem.giftWrap === item.giftWrap &&
      cartItem.giftNote === item.giftNote,
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function updateCartItemQuantity(id: string, quantity: number) {
  const cart = getCart()
    .map((item) => (item.id === id ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function removeCartItem(id: string) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function clearCart() {
  saveCart([]);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal() {
  return getCart().reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}