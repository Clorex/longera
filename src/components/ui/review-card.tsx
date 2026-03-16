import { ReviewItem } from "@/types/content";

type ReviewCardProps = {
  review: ReviewItem;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="card-soft h-full p-6">
      <p className="text-sm font-semibold text-[hsl(var(--brand-green))]">
        {"★".repeat(review.rating)}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-[hsl(var(--brand-deep))]">
        {review.title}
      </h3>

      <p className="mt-3 text-sm md:text-base">{review.review}</p>

      <p className="mt-5 text-sm text-[hsl(var(--muted-foreground))]">
        {review.anonymous ? "Anonymous" : review.name}
      </p>
    </article>
  );
}