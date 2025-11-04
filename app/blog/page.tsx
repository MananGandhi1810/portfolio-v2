export default function BlogPage() {
    const posts: { slug: string; title: string; date: string }[] = [];

    return (
        <main className="mx-auto my-12 max-w-4xl px-6">
            <h1 className="text-3xl font-bold text-zinc-50">Blog</h1>
            <p className="mt-2 text-zinc-300">
                Short posts about projects, dev, and learning.
            </p>

            <ul className="mt-8 space-y-4">
                {posts.length === 0 && (
                    <li className="text-zinc-400">Posts coming soon</li>
                )}
                {posts.map((p) => (
                    <li
                        key={p.slug}
                        className="rounded-md border border-white/6 bg-black/40 p-4"
                    >
                        <a
                            href={`/blog/${p.slug}`}
                            className="text-lg font-semibold text-zinc-50"
                        >
                            {p.title}
                        </a>
                        <div className="mt-1 text-sm text-zinc-400">
                            {p.date}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
