"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function MobileNav() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-white text-[hsl(var(--brand-deep))] md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <Logo imageClassName="w-[150px]" />
            <Dialog.Close asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-white text-[hsl(var(--brand-deep))]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            {mainNav.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-[hsl(var(--brand-deep))]"
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}

            <Dialog.Close asChild>
              <Link
                href="/cart"
                className="text-lg font-medium text-[hsl(var(--brand-deep))]"
              >
                Cart
              </Link>
            </Dialog.Close>
          </div>

          <div className="mt-8">
            <Dialog.Close asChild>
              <Link href="/shop">
                <Button className="w-full">Shop Best Sellers</Button>
              </Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
