import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard } from "@/components/admin/admin-card";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Overview</p>
            <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Dashboard
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <AdminCard title="Products">
              <p className="text-4xl font-semibold">{products.length}</p>
              <p className="mt-2 text-sm">Current products</p>
            </AdminCard>

            <AdminCard title="Reviews">
              <p className="text-4xl font-semibold">{reviews.length}</p>
              <p className="mt-2 text-sm">Current review entries</p>
            </AdminCard>
          </div>

          <AdminCard title="Admin Notes">
            <ul className="list-disc space-y-2 pl-5 text-sm text-[hsl(var(--muted-foreground))]">
              <li>Orders are being stored in Firebase after successful checkout.</li>
              <li>Cloudinary upload helper route is prepared.</li>
              <li>Product/admin CRUD can be extended later.</li>
            </ul>
          </AdminCard>
        </div>
      </AdminShell>
    </AdminGuard>
  );
}
