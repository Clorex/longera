import { notFound } from "next/navigation";
import Image from "next/image";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/ui/page-hero";
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
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return notFound();

  const productFaqs = getProductFaqs(product.faqs);
  const productReviews = getProductReviews(product.slug);
  const relatedProducts = getRelatedProducts(product.slug, 2);

  const buyTwoText =
    product.variant === "black" ? "Buy 2 for AUD 45" : "Buy 2 for AUD 54";

  const detailImage =
    product.variant === "black" ? "/black-detail.png" : "/green-detail.png";

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
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))]">
                <Image
                  src={detailImage}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>

              <div className="rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-green))] p-5 text-white shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Special Offer
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {buyTwoText}
                </h3>
                <p className="mt-2 text-sm text-white/90">
                  Better value starts when you buy more. Multi-buy pricing is shown below.
                </p>
              </div>
            </div>

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
                  Why choose this one
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))]">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    How to apply
                  </h3>
                  <p className="mt-2 text-sm">
                    Apply gently to clean, dry underarms. Let it settle for a moment before dressing.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    When to use it
                  </h3>
                  <p className="mt-2 text-sm">
                    Use in the morning, before leaving home, before long workdays, or before training depending on your routine.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    Best suited for
                  </h3>
                  <p className="mt-2 text-sm">{product.suitableFor.join(", ")}</p>
                </div>

                <div className="rounded-[22px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))] p-4">
                  <h3 className="text-base font-semibold text-[hsl(var(--brand-deep))]">
                    Useful tip
                  </h3>
                  <p className="mt-2 text-sm">
                    For best results, apply to freshly cleaned underarms and keep it consistent as part of your daily routine.
                  </p>
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-soft p-6">
              <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
                How it works
              </h3>
              <p className="mt-3 text-sm md:text-base">
                Longera is positioned around odour control that focuses on the source of odour, not just covering it with fragrance.
              </p>
            </div>

            <div className="card-soft p-6">
              <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
                Everyday guidance
              </h3>
              <p className="mt-3 text-sm md:text-base">
                If you want a simpler daily choice, Black is ideal. If your day includes workouts, hotter weather, or more movement, Green is the stronger fit.
              </p>
            </div>
          </div>
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
            title="Get stronger value when you buy more."
            description="Buy 2 for the highlighted offer, and unlock even more value on larger quantities."
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
