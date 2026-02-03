"use client";

import Image from "next/image";
import GitHubContrib from "../components/GitHubContrib";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("nc sh.manan.cloud 1810");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="mx-auto my-4 max-w-5xl px-6">
            <Card className="border border-white p-8 fade-in-up card-elevated">
                <div className="flex flex-col gap-6 sm:items-start sm:justify-between">
                    <div className="w-full">
                        <div className="flex gap-6 flex-col sm:flex-row items-center">
                            <div className="w-20 h-20 overflow-hidden ring-1 ring-white/10 shrink-0">
                                <Image
                                    src="/manangandhi.png"
                                    alt="Manan Gandhi"
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                                    Hi, I&apos;m Manan Gandhi
                                </h1>
                                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                                    19 · Software Developer · FOSS Enthusiast
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            I&apos;m a 19-year-old computer engineering student
                            at NMIMS MPSTME. I like to code and build projects.
                            I&apos;m into app development, backend development,
                            cybersecurity, and AI/ML. I love participating in
                            hackathons, and have won 5 hackathons (yet).
                            I&apos;m a FOSS enthusiast, and I love building and
                            contributing to open-source projects. I also enjoy
                            finding bugs and security vulnerabilities in
                            applications and websites.
                        </p>

                        <div className="mt-8 flex gap-2 flex-col sm:flex-row justify-center">
                            <Button href="/projects">See My Projects</Button>
                            <Button href="/blog">Read My Blog</Button>
                            <Button href="/resume">See My Resume</Button>
                            <Button href="mailto:hello@manan.cloud">
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    <div className="w-full pt-4 border-t border-zinc-700 hidden sm:block">
                        <div className="text-center">
                            <h4 className="text-sm font-semibold text-zinc-50 mb-2">
                                Terminal Version
                            </h4>
                            <p className="text-xs text-zinc-300 mb-3">
                                Access the terminal version of this website:
                            </p>
                            <span
                                className="inline-block bg-zinc-800 px-3 py-1 text-xs font-mono text-zinc-200 cursor-pointer hover:bg-zinc-700 transition-colors select-none"
                                onClick={handleCopy}
                                title="Click to copy command"
                            >
                                {copied
                                    ? "Copied!"
                                    : "$ nc sh.manan.cloud 1810"}
                            </span>
                        </div>
                    </div>
                </div>
            </Card>

            <section className="mt-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-zinc-50">
                        Featured projects
                    </h2>
                    <Link
                        href="/projects"
                        className="text-sm text-zinc-400 hover:text-zinc-200 hover:underline underline-offset-2"
                    >
                        View all
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="inline-block w-4 h-4 ml-1 -mt-0.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.slice(0, 6).map((p, i) => (
                        <div
                            key={p.title}
                            className={`fade-in-up-delayed`}
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8">
                <Card className="border border-white p-8 pt-0">
                    <GitHubContrib username="MananGandhi1810" />
                </Card>
            </section>
        </main>
    );
}
