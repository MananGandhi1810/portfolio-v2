'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ReactNode, useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface BlogLayoutProps {
    title: string;
    date: string;
    author?: string;
    content: string;
}

const markdownComponents = {
    code({ inline, children, ...props }: { inline?: boolean; children?: ReactNode }) {
        return (
            <code 
                className="text-zinc-100 border border-white/20 font-mono px-1 text-sm"
                {...props}
            >
                {children}
            </code>
        );
    },
    pre({ children, ...props }: { children?: ReactNode }) {
        const [copied, setCopied] = useState(false);
        
        const handleCopy = () => {
            const codeContent = (children as any)?.props?.children || '';
            navigator.clipboard.writeText(codeContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 4000);
        };

        return (
            <div className="relative group my-4">
                <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-1.5 border border-white/20 hover:bg-zinc-700 transition-colors opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Copy code"
                >
                    {copied ? (
                        <Check size={16} className="text-blue-400" />
                    ) : (
                        <Copy size={16} className="text-white" />
                    )}
                </button>
                <pre 
                    className="border border-white/20 rounded-none p-4 overflow-x-auto"
                    {...props}
                >
                    {children}
                </pre>
            </div>
        );
    },
    a({ href, children, ...props }: { href?: string; children?: ReactNode }) {
        return (
            <a g
                href={href} 
                className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
                {...props}
            >
                {children}
            </a>
        );
    },
    br() {
        return <br />;
    },
    ins({ children, ...props }: { children?: ReactNode }) {
        return <ins className="underline underline-offset-2 px-1">{children}</ins>;
    }
};

export default function BlogLayout({
    title,
    date,
    author,
    content,
}: BlogLayoutProps) {
    return (
        <article className="my-12">
            <div className="mx-auto max-w-5xl px-6">
                <header className="mb-8 border-b border-zinc-800 pb-8">
                    <h1 className="text-3xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-4">
                        {title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        {author && <span>•</span>}
                        {author && <span>{author}</span>}
                    </div>
                </header>
            </div>

            <div className="prose prose-invert mx-auto max-w-5xl px-6">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{content}</ReactMarkdown>
            </div>

            <div className="mx-auto max-w-5xl px-6">
                <footer className="mt-12 pt-8 border-t border-zinc-800">
                    <a
                        href="/blog"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        ← Back to blog
                    </a>
                </footer>
            </div>
        </article>
    );
}

