"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/content";
import { Button } from "@/components/ui/button";
import { BrandPill } from "@/components/ui/brand-pill";
import { addToCart } from "@/lib/cart";
import { formatPrice, getTierPricingSummary } from "@/lib/utils";

type AddToCartFormProps = {
  product: Product;
};

export function AddToCartForm({ product }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const pricing = useMemo(
    () => getTierPricingSummary(product.variant, quantity, product.price),
    [product.variant, quantity, product.price],
  );

  const cartItemId = useMemo(() => {
    return `${product.slug}-${quantity}`;
  }, [product.slug, quantity]);

  function handleAddToCart() {
    addToCart({
      id: cartItemId,
      slug: product.slug,
      name: product.name,
      shortName: product.shortName,
      price: product.price,
      currency: product.currency,
      image: product.featuredImage,
      quantity,
      variant: product.variant,
      sizeLabel: product.sizeLabel,
      giftWrap: false,
      giftNote: "",
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="card-soft p-6 md:p-7">
      <div className="flex flex-wrap gap-2">
        {product.badge ? <BrandPill>{product.badge}</BrandPill> : null}
        <BrandPill>{product.sizeLabel}</BrandPill>
        <BrandPill>{product.scent}</BrandPill>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-[hsl(var(--brand-deep))]">
          Quantity
        </label>
        <div className="mt-2 flex w-fit items-center overflow-hidden rounded-full border border-[hsl(var(--border))]">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 text-lg"
            type="button"
          >
            -
          </button>
          <span className="min-w-12 px-4 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => Math.min(4, prev + 1))}
            className="px-4 py-2 text-lg"
            type="button"
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
          Quantity tiers currently supported from 1 to 4 units.
        </p>
      </div>

      <div className="mt-6 rounded-[20px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
        <h4 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
          Pricing Summary
        </h4>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span>Standard subtotal</span>
            <span>{formatPrice(pricing.subtotal, product.currency)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span>
              {pricing.discountPercent > 0
                ? `-${formatPrice(pricing.discountAmount, product.currency)} (${pricing.discountPercent}%)`
                : "None"}
            </span>
          </div>

          <div className="flex items-center justify-between font-semibold text-[hsl(var(--brand-deep))]">
            <span>Final total</span>
            <span>{formatPrice(pricing.finalTotal, product.currency)}</span>
          </div>

          <div className="pt-1">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-[hsl(var(--brand-deep))]">
              {pricing.freeShipping ? "Free shipping included" : "Standard shipping applies"}
            </span>
          </div>
        </div>
      </div>

      <Button onClick={handleAddToCart} className="mt-6 w-full">
        {added ? "Added to Cart" : "Add to Cart"}
      </Button>

      <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
        Guest checkout only. No account required.
      </p>
    </div>
  );
}
