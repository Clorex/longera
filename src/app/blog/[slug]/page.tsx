import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/layout/container";
import { blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) return notFound();

  return (
    <SiteShell>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section className="section-space">
        <Container className="max-w-4xl">
          <article className="card-soft p-6 md:p-8">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              {post.author} • {post.publishedAt}
            </p>

            <div className="mt-6 space-y-5">
              {post.content
                .trim()
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </article>
        </Container>
      </section>
    </SiteShell>
  );
}