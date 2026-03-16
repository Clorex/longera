import { pricingTiers } from "@/data/products";
import { formatPrice } from "@/lib/utils";

type ProductPricingTableProps = {
  variant: string;
};

export function ProductPricingTable({ variant }: ProductPricingTableProps) {
  const tiers = pricingTiers[variant] || [];

  if (!tiers.length) return null;

  return (
    <div className="card-soft p-6 md:p-7">
      <h3 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        Bundle Pricing
      </h3>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-[hsl(var(--border))]">
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Standard Total</th>
              <th className="pb-3">Discount</th>
              <th className="pb-3">Shipping</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier) => (
              <tr key={tier.quantity} className="border-b border-[hsl(var(--border))]">
                <td className="py-4">{tier.quantity}</td>
                <td className="py-4">{formatPrice(tier.total)}</td>
                <td className="py-4">
                  {tier.discountPercent > 0 ? `${tier.discountPercent}% off` : "None"}
                </td>
                <td className="py-4">
                  {tier.freeShipping ? "Free shipping" : "Standard shipping"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
        Admin can later update these pricing tiers from the dashboard when product CRUD is fully connected.
      </p>
    </div>
  );
}
