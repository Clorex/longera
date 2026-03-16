import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard } from "@/components/admin/admin-card";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Products</p>
            <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Product Management
            </h1>
          </div>

          <AdminCard title="Current Products">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--border))]">
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Variant</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Stock</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-[hsl(var(--border))]"
                    >
                      <td className="py-4">{product.shortName}</td>
                      <td className="py-4 uppercase">{product.variant}</td>
                      <td className="py-4">
                        {formatPrice(product.price, product.currency)}
                      </td>
                      <td className="py-4">{product.stock}</td>
                      <td className="py-4">
                        {product.hidden ? "Hidden" : "Visible"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>

          <AdminCard title="Next Admin Actions">
            <ul className="list-disc space-y-2 pl-5 text-sm text-[hsl(var(--muted-foreground))]">
              <li>Add product create/edit forms</li>
              <li>Connect visibility toggles to Firebase</li>
              <li>Connect Cloudinary image upload UI</li>
              <li>Support bundle management later</li>
            </ul>
          </AdminCard>
        </div>
      </AdminShell>
    </AdminGuard>
  );
}