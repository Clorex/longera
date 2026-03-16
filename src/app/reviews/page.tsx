import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/review-card";
import { ReviewSubmissionForm } from "@/components/sections/review-submission-form";

export default function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Reviews"
        title="Customer trust and social proof."
        description="Customers can leave reviews with their name or choose to remain anonymous."
      />

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--brand-deep))]">
              What customers are saying
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>

          <ReviewSubmissionForm />
        </Container>
      </section>
    </SiteShell>
  );
}