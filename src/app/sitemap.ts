import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    "",
    "/shop",
    "/science",
    "/about",
    "/reviews",
    "/blog",
    "/contact",
    "/gifting",
    "/shipping-policy",
    "/refund-policy",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}