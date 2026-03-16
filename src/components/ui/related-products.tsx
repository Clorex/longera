import { Product } from "@/types/content";
import { ProductCard } from "@/components/ui/product-card";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <div>
      <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        You may also like
      </h3>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}