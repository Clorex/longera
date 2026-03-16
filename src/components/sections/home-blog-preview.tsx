import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { getPublishedPosts } from "@/lib/content";

export function HomeBlogPreview() {
  const posts = getPublishedPosts(2);

  return (
    <section className="pb-14 md:pb-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="From the blog"
            title="Educational content that supports trust, SEO, and product understanding."
            description="The blog will help explain body odour, fragrance-free care, and choosing the right routine."
          />

          <Link href="/blog">
            <Button variant="outline">Visit the Blog</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}