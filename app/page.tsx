"use client";

import Image from "next/image";
import GitHubContrib from "../components/GitHubContrib";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { useState } from "react";
import AsciiName from "../components/AsciiName";

export default function Home() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("nc sh.manan.cloud 1810");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="mx-auto my-4 max-w-5xl px-6">
            <Card className="border border-white p-5 sm:p-8 fade-in-up card-elevated">
                <div className="flex flex-col gap-6 sm:items-start sm:justify-between">
                    <div className="w-full">
                        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                            <div className="w-20 sm:w-28 aspect-square overflow-hidden ring-1 ring-white/10 shrink-0">
                                <Image
                                    src="/manangandhi.png"
                                    alt="Manan Gandhi"
                                    width={112}
                                    height={112}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="w-full min-w-0 sm:flex-1">
                                <h1 className="sr-only">
                                    Hi, I&apos;m Manan Gandhi
                                </h1>
                                <p aria-hidden="true" className="mb-2 text-xs text-zinc-400">
                                    Hi, I&apos;m
                                </p>
                                <AsciiName />
                                <p aria-hidden="true" className="mt-2 text-sm tracking-[0.3em] text-zinc-200">GANDHI</p>
                                <p className="text-xs sm:text-sm text-zinc-400 mt-4 max-w-xl leading-relaxed">
                                    19 · Mid Frequency Trading Intern @ IkiQuant
                                    Technologies · FOSS Enthusiast
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            I&apos;m a 19-year-old computer engineering student at
                            NMIMS MPSTME. I like to code and build projects. I&apos;m
                            experienced in App Development, Backend Development,
                            Cybersecurity, and AI/ML. I am currently working as
                            a Mid Frequency Trading Intern at IkiQuant
                            Technologies. I love participating in hackathons,
                            and have won 7 hackathons (yet). I&apos;m a FOSS
                            enthusiast, and I love building and contributing to
                            open-source projects. I also enjoy finding bugs and
                            security vulnerabilities in applications and
                            websites.
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                            <Button href="/experience">
                                Experience
                            </Button>
                            <Button href="/projects">Projects</Button>
                            <Button href="/blog">Blog</Button>
                            <Button href="/resume" target="_blank">
                                Resume
                            </Button>
                            <Button href="/contact">Contact</Button>
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

            <section
                className="fade-in-up-delayed mt-8"
                style={{ animationDelay: `480ms` }}
            >
                <Card className="border border-white p-8 pt-0">
                    <div className="">
                        <GitHubContrib username="MananGandhi1810" />
                    </div>
                </Card>
            </section>
        </main>
    );
}
