import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { refundPolicy } from "@/data/policies";

export default function RefundPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Refund Policy"
        title="Exchange-only policy details."
        description="Longéra offers exchanges only and does not provide refunds for change-of-mind purchases."
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {refundPolicy.map((section) => (
              <div key={section.title} className="card-soft p-6 md:p-8">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}