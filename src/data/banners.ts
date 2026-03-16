import type { BannerCopy } from "@/types/content";

export const homepageBanners: BannerCopy[] = [
  {
    id: "banner-science",
    eyebrow: "The science first",
    title: "Understand why body odour happens — and how Longéra is designed to stop it at the source.",
    description:
      "Discover the biology behind underarm odour, the role of skin bacteria, and the science-driven formula story behind the brand.",
    cta: {
      label: "Discover the Science",
      href: "/science",
    },
    variant: "cream",
  },
  {
    id: "banner-shop",
    eyebrow: "Daily confidence",
    title: "Find the right formula for everyday wear, heat, humidity, and active routines.",
    description:
      "Explore product variants built for real life, from sensitive-skin daily use to sport and summer defence.",
    cta: {
      label: "Shop the Range",
      href: "/shop",
    },
    variant: "green",
  },
  {
    id: "banner-story",
    eyebrow: "Built with purpose",
    title: "A founder-led brand created to solve a real body odour problem.",
    description:
      "Read the personal story behind Longéra and why this formula was built around science instead of compromise.",
    cta: {
      label: "Read the Founder Story",
      href: "/about",
    },
    variant: "gold",
  },
];

export const ctaBank = [
  { label: "Shop Best Sellers", href: "/shop" },
  { label: "Discover the Science", href: "/science" },
  { label: "Find Your Formula", href: "/shop" },
  { label: "Built for Australian Conditions", href: "/science" },
  { label: "Read the Founder Story", href: "/about" },
  { label: "Explore Everyday Protection", href: "/shop" },
  { label: "See Why It Works", href: "/science" },
  { label: "Browse the Range", href: "/shop" },
  { label: "Feel Fresh Longer", href: "/shop" },
  { label: "Learn About Longéra", href: "/about" },
];