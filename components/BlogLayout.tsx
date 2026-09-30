"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ReactNode, useState, useRef } from "react";
import Link from "next/link";
import PageHeading from "./PageHeading";
import { Copy, Check } from "lucide-react";

interface BlogLayoutProps {
  title: string;
  date: string;
  author?: string;
  content: string;
}

function CodeBlock({ children }: { children?: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ref.current?.textContent || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="relative group my-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 border border-white/20 bg-zinc-950 hover:bg-zinc-700 z-10"
        aria-label={copied ? "Code copied" : "Copy code"}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre
        ref={ref}
        className="border border-white/20 p-4 pr-14 overflow-x-auto"
      >
        {children}
      </pre>
    </div>
  );
}

const markdownComponents = {
  code({ children, ...props }: { inline?: boolean; children?: ReactNode }) {
    return (
      <code
        className="text-zinc-100 border border-white/20 font-mono px-1 text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: CodeBlock,
  a({ href, children, ...props }: { href?: string; children?: ReactNode }) {
    return (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2 break-words"
        {...props}
      >
        {children}
      </a>
    );
  },
  br() {
    return <br />;
  },
  ins({ children }: { children?: ReactNode }) {
    return <ins className="underline underline-offset-2 px-1">{children}</ins>;
  },
};

export default function BlogLayout({
  title,
  date,
  author,
  content,
}: BlogLayoutProps) {
  return (
    <article id="main-content" className="page-shell article-shell">
      <Link href="/blog" className="back-link">
        ← Writing
      </Link>
      <PageHeading label="WRITING" title={title}>
        <p>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {author && ` · ${author}`}
        </p>
      </PageHeading>
      <div className="prose prose-invert article-body">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className="article-footer">
        <footer className="mt-12 pt-8 border-t border-zinc-800">
          <Link
            href="/blog"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to blog
          </Link>
        </footer>
      </div>
    </article>
  );
}
