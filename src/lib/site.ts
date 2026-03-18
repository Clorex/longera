export const siteConfig = {
  name: "Longera",
  title: "Longera | Science-Backed Natural Deodorant",
  description:
    "Longera is a science-backed natural deodorant brand designed for real odour control without harsh chemicals, aluminium, or fragrance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  logo: "/logo.jpg",
  tagline: "Where odour ends, desire begins",
  adminEmail: process.env.ADMIN_EMAIL || "askthescientist@longera.com.au",
  orderEmail:
    process.env.ORDER_NOTIFICATION_EMAIL || "orders@longera.com.au",
  links: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
    blog: process.env.NEXT_PUBLIC_BLOG_URL || "",
  },
  themeColor: "#174937",
};

