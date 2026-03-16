export function AdminCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-soft p-6 md:p-7">
      <h2 className="text-2xl font-semibold text-[hsl(var(--brand-deep))]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}