import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { brandStory } from "@/data/brand";

export const metadata: Metadata = {
  title: "About Longéra",
  description:
    "Learn the founder story behind Longéra and the science-backed motivation for creating a better deodorant.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title={brandStory.founderTitle}
        description={brandStory.founderSummary}
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <div className="card-soft p-6 md:p-8">
            <div className="space-y-5">
              {brandStory.founderBody.map((paragraph) => (
                <p key={paragraph} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}