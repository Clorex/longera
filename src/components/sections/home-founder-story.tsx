import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandStory } from "@/data/brand";

export function HomeFounderStory() {
  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Founder story"
              title={brandStory.founderTitle}
              description={brandStory.founderSummary}
            />
          </div>

          <div className="card-soft p-6 md:p-8">
            <p className="text-base md:text-lg">{brandStory.founderBody[0]}</p>
            <p className="mt-4">{brandStory.founderBody[1]}</p>

            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline">Read the Full Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}