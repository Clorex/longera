"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { getCartCount } from "@/lib/cart";

export function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const syncCart = () => setCount(getCartCount());
    syncCart();
    window.addEventListener("cartUpdated", syncCart);
    return () => window.removeEventListener("cartUpdated", syncCart);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[hsl(var(--muted-foreground))] link-hover"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/cart"
            className="text-sm font-medium text-[hsl(var(--muted-foreground))] link-hover"
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
