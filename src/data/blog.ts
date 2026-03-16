import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "why-body-odour-happens",
    title: "Why Body Odour Happens: Sweat, Skin Bacteria, and Biology",
    excerpt:
      "Understand the relationship between sweat, bacteria, and the compounds that create underarm odour.",
    coverImage: "/item3.png",
    category: "Education",
    publishedAt: "2026-03-15",
    author: "Longéra",
    published: true,
    content: `
Body odour is often misunderstood.

Sweat itself is naturally odourless. The smell people notice usually forms when bacteria on the skin break down specific compounds released in sweat, particularly from apocrine glands.

This means body odour is not simply about sweating more. It is about the interaction between sweat chemistry and skin bacteria.

At Longéra, the product story focuses on that biological process rather than covering odour with fragrance.
    `,
  },
  {
    id: "blog-2",
    slug: "fragrance-free-deodorant-benefits",
    title: "The Benefits of Choosing a Fragrance-Free Deodorant",
    excerpt:
      "Fragrance-free deodorant can be a better fit for people who want a cleaner, more minimalist care routine.",
    coverImage: "/item2.png",
    category: "Self-Care",
    publishedAt: "2026-03-16",
    author: "Longéra",
    published: true,
    content: `
Many deodorants rely on scent to create the feeling of freshness.

A fragrance-free deodorant takes a different path. It supports freshness without layering perfume over the skin.

For many people, this feels cleaner, simpler, and more practical for everyday wear, especially in minimalist routines or when avoiding overpowering scent.
    `,
  },
  {
    id: "blog-3",
    slug: "everyday-vs-sport-deodorant",
    title: "Everyday vs Sport Deodorant: Which One Fits Your Routine?",
    excerpt:
      "Choosing between an everyday formula and a sport-focused option depends on your climate, activity, and lifestyle.",
    coverImage: "/item1.png",
    category: "Guides",
    publishedAt: "2026-03-17",
    author: "Longéra",
    published: false,
    content: `
Not every deodorant need is the same.

Some people want an everyday option for office wear, mild weather, and sensitive skin. Others need something better suited to workouts, humidity, and more demanding days.

That is why Longéra positions different variants for different routines.
    `,
  },
];