import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard } from "@/components/admin/admin-card";

export default function AdminDiscountsPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Discounts</p>
            <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Discount Management
            </h1>
          </div>

          <AdminCard title="Discounts Placeholder">
            <p className="text-sm md:text-base">
              Discount creation and campaign management UI can be connected here.
            </p>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              This will later support promotions, limited-time offers, and product-specific discount settings.
            </p>
          </AdminCard>
        </div>
      </AdminShell>
    </AdminGuard>
  );
}