import { AdminGuard } from "@/components/admin/admin-guard";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard } from "@/components/admin/admin-card";
import { blogPosts } from "@/data/blog";

export default function AdminBlogPage() {
  return (
    <AdminGuard>
      <AdminShell>
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Blog</p>
            <h1 className="mt-3 text-4xl font-semibold text-[hsl(var(--brand-deep))]">
              Blog Management
            </h1>
          </div>

          <AdminCard title="Seeded Blog Posts">
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border border-[hsl(var(--border))] p-4"
                >
                  <p className="eyebrow">{post.category}</p>
                  <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2 text-sm">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-[hsl(var(--muted-foreground))]">
                    Status: {post.published ? "Published" : "Draft"}
                  </p>
                </div>
              ))}
            </div>
          </AdminCard>
        </div>
      </AdminShell>
    </AdminGuard>
  );
}