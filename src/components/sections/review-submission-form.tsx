"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ReviewSubmissionFormProps = {
  productSlug?: string;
};

export function ReviewSubmissionForm({
  productSlug,
}: ReviewSubmissionFormProps) {
  const [form, setForm] = useState({
    name: "",
    anonymous: false,
    rating: 5,
    title: "",
    review: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          productSlug,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit review");
      }

      setSuccess(true);
      setForm({
        name: "",
        anonymous: false,
        rating: 5,
        title: "",
        review: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card-soft p-6 md:p-7">
      <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        Leave a Review
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Reviews are submitted for approval before appearing on the site.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label className="text-sm font-medium">Your name</label>
          <input
            disabled={form.anonymous}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] disabled:opacity-60"
          />
        </div>

        <label className="flex items-center gap-3 text-sm font-medium">
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={(e) =>
              setForm({ ...form, anonymous: e.target.checked, name: "" })
            }
          />
          Submit as Anonymous
        </label>

        <div>
          <label className="text-sm font-medium">Rating</label>
          <select
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
            className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          >
            <option value={5}>5 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={2}>2 Stars</option>
            <option value={1}>1 Star</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Review title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="mt-2 w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Your review</label>
          <textarea
            required
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="mt-2 min-h-[140px] w-full rounded-2xl border border-[hsl(var(--border))] px-4 py-3 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {success ? (
          <p className="text-sm text-green-700">
            Thank you. Your review has been submitted for approval.
          </p>
        ) : null}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}