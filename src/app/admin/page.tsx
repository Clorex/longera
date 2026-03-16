"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidAdminEmail, saveAdminSession } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidAdminEmail(email)) {
      setError("Invalid admin email");
      return;
    }

    saveAdminSession(email);
    router.push("/admin/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card-soft w-full max-w-md p-8">
        <p className="eyebrow">Admin Access</p>
        <h1 className="mt-3 text-3xl font-semibold text-[hsl(var(--brand-deep))]">
          Longéra Admin
        </h1>
        <p className="mt-3 text-sm md:text-base">
          Enter the admin email to access the dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium">Admin email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="cta-shadow inline-flex w-full items-center justify-center rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-medium text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}