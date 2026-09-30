import { getBlogMetadata } from "@/data/blogs";
import PageHeading from "@/components/PageHeading";
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
    <main id="main-content" className="page-shell">
      <PageHeading label="NOTES FROM BUILDING" title="Writing">
        <p>
          Projects, technical decisions, and things I learned along the way.
        </p>
      </PageHeading>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="writing-preview writing-post">
              <div className="flex flex-col gap-3">
                <h2 className="text-lg sm:text-xl font-semibold text-zinc-50 group-hover:underline underline-offset-1 transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-zinc-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
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
