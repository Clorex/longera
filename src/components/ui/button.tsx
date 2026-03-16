import * as React from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariant } from "@/types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[hsl(var(--primary))] text-white hover:opacity-95 cta-shadow border border-transparent",
  secondary:
    "gold-gradient text-[hsl(var(--brand-deep))] hover:opacity-90 border border-transparent",
  outline:
    "border border-[hsl(var(--border))] bg-white text-[hsl(var(--brand-deep))] hover:bg-[hsl(var(--brand-cream))]",
  ghost:
    "bg-transparent text-[hsl(var(--brand-deep))] hover:bg-[hsl(var(--brand-cream))]",
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}