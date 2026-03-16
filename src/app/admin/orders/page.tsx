import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard } from "@/components/admin/admin-card";
import { AdminOrdersTable } from "@/components/admin/admin-orders-table";

export default function AdminOrdersPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Orders</p>
            <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Orders
            </h1>
          </div>

          <AdminCard title="Recent Orders">
            <AdminOrdersTable />
          </AdminCard>
        </div>
      </AdminShell>
    </AdminGuard>
  );
}