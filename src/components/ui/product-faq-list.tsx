"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/types/content";
import { cn } from "@/lib/utils";

type ProductFaqListProps = {
  faqs: FaqItem[];
};

export function ProductFaqList({ faqs }: ProductFaqListProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className="overflow-hidden rounded-[22px] border border-[hsl(var(--border))] bg-white"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-medium text-[hsl(var(--brand-deep))]">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>

            {isOpen && (
              <div className="border-t border-[hsl(var(--border))] px-5 py-4">
                <p className="text-sm md:text-base">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}