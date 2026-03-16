import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { InfoCard } from "@/components/ui/info-card";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Support for orders, products, and business enquiries."
        description="For order support, product enquiries, or business contact, please use the details below."
      />

      <section className="section-space">
        <Container className="grid gap-5 md:grid-cols-2">
          <InfoCard
            title="Order Support"
            description={`For order-related enquiries, contact ${siteConfig.orderEmail}.`}
          />
          <InfoCard
            title="Admin Contact"
            description={`Admin management email: ${siteConfig.adminEmail}.`}
          />
        </Container>
      </section>
    </SiteShell>
  );
}