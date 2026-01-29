import BlogLayout from "@/components/BlogLayout";
import { getBlogBySlug, getBlogMetadata } from "@/data/blogs";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const blog = getBlogBySlug((await params).slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: blog.title,
        description: blog.content.substring(0, 160),
        authors: [{ name: blog.author }],
        openGraph: {
            type: "article",
            title: blog.title,
            description: blog.content.substring(0, 160),
            publishedTime: blog.date,
            authors: [blog.author],
        },
    };
}

export function generateStaticParams() {
    const blogs = getBlogMetadata();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function PortfolioOverNCPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const blog = getBlogBySlug((await params).slug);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <BlogLayout
            title={blog.title}
            date={blog.date}
            author={blog.author}
            content={blog.content}
        />
    );
}
