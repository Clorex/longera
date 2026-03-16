"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="card-soft max-w-xl p-8 text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold text-[hsl(var(--brand-deep))]">
          We couldn’t load this page
        </h1>
        <p className="mt-4 text-sm md:text-base">
          Please try again. If the issue continues, return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={reset}>Try Again</Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] px-5 py-3 text-sm font-medium"
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  );
}