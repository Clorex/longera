import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProductGallery } from "@/components/ui/product-gallery";
import { AddToCartForm } from "@/components/ui/add-to-cart-form";
import { ProductFaqList } from "@/components/ui/product-faq-list";
import { ProductReviewsList } from "@/components/ui/product-reviews-list";
import { ProductPricingTable } from "@/components/ui/product-pricing-table";
import { RelatedProducts } from "@/components/ui/related-products";
import { BannerCard } from "@/components/ui/banner-card";
import { ReviewSubmissionForm } from "@/components/sections/review-submission-form";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import {
  getProductFaqs,
  getProductReviews,
  getRelatedProducts,
} from "@/lib/content";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) return notFound();

  const productFaqs = getProductFaqs(product.faqs);
  const productReviews = getProductReviews(product.slug);
  const relatedProducts = getRelatedProducts(product.slug, 2);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Product"
        title={product.name}
        description={product.shortDescription}
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <ProductGallery images={product.images} alt={product.name} />

            <div>
              <p className="eyebrow">{product.badge || "Longera"}</p>
              <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
                {product.shortName}
              </h1>

              <p className="mt-4 text-2xl font-semibold text-[hsl(var(--brand-deep))]">
                {formatPrice(product.price, product.currency)}
              </p>

              <p className="mt-5 text-base md:text-lg">{product.fullDescription}</p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-[hsl(var(--brand-deep))]">
                  Key benefits
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))]">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    Suitable for
                  </h3>
                  <p className="mt-2 text-sm">{product.suitableFor.join(", ")}</p>
                </div>

                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    Usage
                  </h3>
                  <p className="mt-2 text-sm">{product.usage}</p>
                </div>
              </div>

              <div className="mt-8">
                <AddToCartForm product={product} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container className="space-y-8">
          <ProductPricingTable variant={product.variant} />
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="mb-5 text-2xl font-semibold text-[hsl(var(--brand-deep))]">
              FAQs
            </h2>
            <ProductFaqList faqs={productFaqs} />
          </div>

          <div className="space-y-8">
            <ProductReviewsList reviews={productReviews} />
            <ReviewSubmissionForm productSlug={product.slug} />
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container className="space-y-6">
          <BannerCard
            eyebrow="Save more on bundles"
            title="Get 10 percent off on 2 to 4 items and free shipping on 3 to 4 items."
            description="Choose the quantity that fits your routine and unlock stronger value automatically."
            ctaLabel="Browse All Products"
            ctaHref="/shop"
            variant="gold"
          />

          <RelatedProducts products={relatedProducts} />
        </Container>
      </section>
    </SiteShell>
  );
}
