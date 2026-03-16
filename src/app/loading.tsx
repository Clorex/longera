export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[hsl(var(--border))] border-t-[hsl(var(--brand-green))]" />
        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          Loading Longéra...
        </p>
      </div>
    </main>
  );
}