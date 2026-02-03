import { getBlogMetadata } from "@/data/blogs";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Short posts about projects, dev, and learning.",
    openGraph: {
        type: "website",
        title: "Blog",
        description: "Short posts about projects, dev, and learning.",
    },
};

export default function BlogPage() {
    const posts = getBlogMetadata();

    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    Blog
                </h1>
                <p className="mt-2 text-sm sm:text-base text-zinc-400">
                    Short posts about projects, dev, and learning.
                </p>
            </div>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <article className="group border border-zinc-800 p-4 hover:border-(--accent) transition-all duration-200 cursor-pointer">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-lg sm:text-xl font-semibold text-zinc-50 group-hover:underline underline-offset-1 transition-colors duration-200">
                                    {post.title}
                                </h2>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-400">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <span className="hidden sm:inline text-zinc-600">•</span>
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}
