import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/content";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-soft h-full p-6 md:p-7">
      <p className="eyebrow">{post.category}</p>

      <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        {post.title}
      </h3>

      <p className="mt-3">{post.excerpt}</p>

      <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
        {post.author} • {post.publishedAt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center text-sm font-medium text-[hsl(var(--brand-green))] hover:opacity-80"
      >
        Read article
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  );
}