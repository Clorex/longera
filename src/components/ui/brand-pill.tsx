import { cn } from "@/lib/utils";

type BrandPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function BrandPill({ children, className }: BrandPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[hsl(var(--brand-green))]",
        className,
      )}
    >
      {children}
    </span>
  );
}