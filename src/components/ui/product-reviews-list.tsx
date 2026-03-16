import { ReviewItem } from "@/types/content";
import { ReviewCard } from "@/components/ui/review-card";

type ProductReviewsListProps = {
  reviews: ReviewItem[];
};

export function ProductReviewsList({ reviews }: ProductReviewsListProps) {
  if (!reviews.length) {
    return (
      <div className="card-soft p-6">
        <h3 className="text-xl font-semibold text-[hsl(var(--brand-deep))]">
          Reviews
        </h3>
        <p className="mt-3 text-sm md:text-base">
          Reviews for this product will appear here.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        Reviews
      </h3>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}