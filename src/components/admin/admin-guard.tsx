"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminSession } from "@/lib/admin-auth";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getAdminSession();

    if (!session?.authenticated) {
      router.replace("/admin");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          Checking admin access...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}