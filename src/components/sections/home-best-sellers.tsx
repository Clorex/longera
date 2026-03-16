import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getBestSellerProducts } from "@/data/products";

export function HomeBestSellers() {
  const bestSellers = getBestSellerProducts();

  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Best sellers"
            title="Start with the formulas already built for real life."
            description="Highlighting the most compelling options first keeps the homepage clean while still driving shopping intent."
          />

          <Link href="/shop">
            <Button variant="outline">Browse All Products</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}