import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function InfoCard({ title, description, className }: InfoCardProps) {
  return (
    <div className={cn("card-soft p-6 md:p-7", className)}>
      <h3 className="text-xl font-semibold text-[hsl(var(--brand-deep))]">
        {title}
      </h3>
      <p className="mt-3 text-sm md:text-base">{description}</p>
    </div>
  );
}