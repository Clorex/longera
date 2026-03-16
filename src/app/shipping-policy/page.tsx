import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { shippingPolicy } from "@/data/policies";

export default function ShippingPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Shipping Policy"
        title="Shipping information for Australian and international customers."
        description="Shipping support is structured for both domestic and international orders, with Australia courier support planned around CouriersPlease."
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {shippingPolicy.map((section) => (
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