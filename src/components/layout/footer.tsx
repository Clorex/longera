import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const socials = [
    { label: "Instagram", href: siteConfig.links.instagram },
    { label: "Facebook", href: siteConfig.links.facebook },
    { label: "TikTok", href: siteConfig.links.tiktok },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))]/60">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo showTagline />
          <p className="mt-4 max-w-sm text-sm text-[hsl(var(--muted-foreground))]">
            Science-backed natural deodorant for real odour control without
            compromise.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-deep))]">
            Navigation
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[hsl(var(--muted-foreground))] link-hover"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-deep))]">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-[hsl(var(--muted-foreground))]">
            <p>Admin: {siteConfig.adminEmail}</p>
            <p>Orders: {siteConfig.orderEmail}</p>

            {socials.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-2">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-hover"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}