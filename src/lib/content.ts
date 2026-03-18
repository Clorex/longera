import { faqs, homepageBanners, products, reviews } from "@/data/content-index";

export function getFeaturedReviews(limit = 3) {
  return reviews.filter((review) => review.approved).slice(0, limit);
}

export function getHomepageBanners(limit?: number) {
  return typeof limit === "number"
    ? homepageBanners.slice(0, limit)
    : homepageBanners;
}

export function getAllFaqs() {
  return faqs;
}

export function getProductFaqs(faqIds: string[]) {
  return faqs.filter((faq) => faqIds.includes(faq.id));
}

export function getProductReviews(productSlug: string) {
  return reviews.filter(
    (review) => review.productSlug === productSlug && review.approved,
  );
}

export function getRelatedProducts(currentSlug: string, limit = 2) {
  return products.filter((product) => product.slug !== currentSlug).slice(0, limit);
}
