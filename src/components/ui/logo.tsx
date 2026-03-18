import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  showTagline?: boolean;
};

export function Logo({
  className,
  imageClassName,
  showTagline = false,
}: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <div className="flex flex-col">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={150}
          height={56}
          priority
          className={cn("h-auto w-[110px] object-contain md:w-[150px]", imageClassName)}
        />
        {showTagline && (
          <span className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
            {siteConfig.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
