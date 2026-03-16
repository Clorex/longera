import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogoWatermark } from "@/components/ui/logo-watermark";

type BannerCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "cream" | "green" | "gold";
  className?: string;
};

const variantMap = {
  cream: "banner-gradient",
  green: "soft-green-gradient",
  gold: "gold-gradient",
};

export function BannerCard({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "cream",
  className,
}: BannerCardProps) {
  const darkText = variant === "gold";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[30px] border border-[hsl(var(--border))] p-8 md:p-10",
        variantMap[variant],
        className,
      )}
    >
      <LogoWatermark className="bottom-2 right-2" />

      {eyebrow ? (
        <p className={cn("eyebrow", darkText && "text-[hsl(var(--brand-deep))]")}>
          {eyebrow}
        </p>
      ) : null}

      <h3
        className={cn(
          "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
          darkText ? "text-[hsl(var(--brand-deep))]" : "text-[hsl(var(--brand-deep))]",
        )}
      >
        {title}
      </h3>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg",
            darkText ? "text-[hsl(var(--brand-deep))]/85" : "text-[hsl(var(--muted-foreground))]",
          )}
        >
          {description}
        </p>
      ) : null}

      <div className="mt-8">
        <Link href={ctaHref}>
          <Button variant={variant === "gold" ? "primary" : "secondary"}>
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}