"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { clearAdminSession } from "@/lib/admin-auth";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Discounts", href: "/admin/discounts" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleLogout() {
    clearAdminSession();
    router.push("/admin");
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-[hsl(var(--border))] bg-white">
        <div className="container-base flex h-16 items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-green))]">
              Longera Admin
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-[hsl(var(--border))] px-4 py-2 text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="container-base grid gap-8 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="card-soft h-fit p-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium",
                    active
                      ? "bg-[hsl(var(--brand-green))] text-white"
                      : "text-[hsl(var(--brand-deep))] hover:bg-[hsl(var(--brand-cream))]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  );
}
