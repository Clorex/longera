import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { getPublishedPosts } from "@/lib/content";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title="Educational content around natural deodorant and self-care."
        description="Helpful articles that support trust, SEO, and customer understanding."
      />

      <section className="section-space">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="card-soft p-6 md:p-7">
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-3">{post.excerpt}</p>
                <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
                  {post.author} • {post.publishedAt}
                </p>

                <div className="mt-6">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline">Read Article</Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}