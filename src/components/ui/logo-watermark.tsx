import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoWatermarkProps = {
  className?: string;
};

export function LogoWatermark({ className }: LogoWatermarkProps) {
  return (
    <div
      className={cn(
        "watermark-mask absolute inset-auto opacity-[0.045] blur-[0.2px]",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={320}
        height={140}
        className="h-auto w-[180px] object-contain md:w-[260px]"
      />
    </div>
  );
}