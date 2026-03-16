import { siteConfig } from "@/lib/site";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.orderEmail,
      contactType: "customer support",
    },
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.facebook,
      siteConfig.links.tiktok,
      siteConfig.links.linkedin,
    ].filter(Boolean),
  };
}