import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";

export default function GiftingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Gifting"
        title="Gift notes and gift wrap will be part of the buying journey."
        description="The gifting UI and product/checkout support will be added in Batch 5 and Batch 6."
      />
    </SiteShell>
  );
}