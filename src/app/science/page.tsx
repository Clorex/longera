import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { scienceContent } from "@/data/brand";

export const metadata: Metadata = {
  title: "The Science Behind Longéra",
  description:
    "Discover the biology of body odour and the science-backed formula story behind Longéra natural deodorant.",
};

export default function SciencePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="The Science"
        title={scienceContent.heroTitle}
        description={scienceContent.heroSubtitle}
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {scienceContent.intro.map((paragraph) => (
              <p key={paragraph} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}

            {scienceContent.sections.map((section) => (
              <div key={section.title} className="card-soft p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
                  {section.title}
                </h2>

                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {"bullets" in section && section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[hsl(var(--muted-foreground))]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}