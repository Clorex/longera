import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/content";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandPill } from "@/components/ui/brand-pill";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card-soft group overflow-hidden p-4 md:p-5">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[hsl(var(--brand-cream))]">
        <Image
          src={product.featuredImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-2">
          {product.badge ? <BrandPill>{product.badge}</BrandPill> : null}
          <BrandPill>{product.sizeLabel}</BrandPill>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-[hsl(var(--brand-deep))]">
          {product.shortName}
        </h3>

        <p className="mt-3 text-sm md:text-base">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-base font-semibold text-[hsl(var(--brand-deep))]">
            {formatPrice(product.price, product.currency)}
          </p>

          <Link href={`/shop/${product.slug}`}>
            <Button variant="outline" className="px-4 py-2">
              View Product
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}