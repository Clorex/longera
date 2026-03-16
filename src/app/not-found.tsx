import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-space">
        <Container>
          <div className="card-soft mx-auto max-w-2xl p-10 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-4 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Page not found
            </h1>
            <p className="mt-4 text-[hsl(var(--muted-foreground))]">
              The page you’re looking for doesn’t exist, may have moved, or may
              not be available right now.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/">
                <Button>Back to Homepage</Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline">Shop Products</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}