import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { privacyPolicy } from "@/data/policies";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Privacy Policy"
        title="How customer information is handled."
        description="We collect only the information needed to process orders, support customers, and improve the website experience."
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <div className="space-y-6">
            {privacyPolicy.map((section) => (
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