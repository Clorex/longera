import Link from "next/link";
import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function EmptyState({
  title,
  description,
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className="card-soft p-8 text-center">
      <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        {title}
      </h2>
      <p className="mt-3 text-sm md:text-base">{description}</p>

      {ctaLabel && ctaHref ? (
        <div className="mt-6">
          <Link href={ctaHref}>
            <Button>{ctaLabel}</Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}