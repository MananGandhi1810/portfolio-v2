export default function BlogPage() {
  const posts = [
    { slug: "first-post", title: "Getting started with building things", date: "2025-11-01" },
    { slug: "learning-react-2025", title: "Practical React patterns in 2025", date: "2025-10-10" },
  ];

  return (
    <main className="mx-auto my-12 max-w-4xl px-6">
      <h1 className="text-3xl font-bold text-zinc-50">Blog</h1>
      <p className="mt-2 text-zinc-300">Short posts about projects, dev, and learning.</p>

      <ul className="mt-8 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-md border border-white/6 bg-black/40 p-4">
            <a href={`/blog/${p.slug}`} className="text-lg font-semibold text-zinc-50">
              {p.title}
            </a>
            <div className="mt-1 text-sm text-zinc-400">{p.date}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
