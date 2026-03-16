import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReviewCard } from "@/components/ui/review-card";
import { Button } from "@/components/ui/button";
import { getFeaturedReviews } from "@/lib/content";

export function HomeReviewsPreview() {
  const featuredReviews = getFeaturedReviews(3);

  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Reviews"
            title="Trust built through clean results and clear product positioning."
            description="Customer reviews will become a stronger conversion layer as live submissions are added later."
          />

          <Link href="/reviews">
            <Button variant="outline">See All Reviews</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}