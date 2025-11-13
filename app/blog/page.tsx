export default function BlogPage() {
    const posts: { slug: string; title: string; date: string }[] = [];

    return (
        <main className="mx-auto my-12 max-w-4xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    Blog
                </h1>
                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                    Short posts about projects, dev, and learning.
                </p>
            </div>

            <ul className="mt-8 space-y-3">
                {posts.length === 0 && (
                    <li className="text-zinc-400 text-sm">Posts coming soon</li>
                )}
                {posts.map((p) => (
                    <li
                        key={p.slug}
                        className="rounded-sm border border-white/12 bg-transparent hover:bg-white/3 transition-colors p-4"
                    >
                        <a
                            href={`/blog/${p.slug}`}
                            className="text-base sm:text-lg font-semibold text-zinc-50 hover:text-blue-400 transition-colors"
                        >
                            {p.title}
                        </a>
                        <div className="mt-2 text-xs sm:text-sm text-zinc-400">
                            {p.date}
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
