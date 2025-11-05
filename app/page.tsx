import Image from "next/image";
import GitHubContrib from "../components/GitHubContrib";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function Home() {
    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <Card className="rounded-md border border-white/6 p-8 fade-in-up card-elevated">
                <div className="flex flex-col gap-4 sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-white/6">
                                <Image
                                    src="/manangandhi.png"
                                    alt="Manan Gandhi"
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-zinc-50">
                                    Hi, I&apos;m Manan Gandhi
                                </h1>
                                <p className="text-sm text-zinc-400">
                                    19 · Software Developer · FOSS Enthusiast
                                </p>
                            </div>
                        </div>

                        <p className="mt-3 text-zinc-300">
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

                        <div className="mt-6 flex gap-3">
                            <Button
                                href="/projects"
                                className="hover:underline underline-offset-2"
                            >
                                See my projects
                            </Button>
                            <Button
                                href="/blog"
                                className="hover:underline underline-offset-2"
                            >
                                Read my blog
                            </Button>
                            <Button
                                href="mailto:hello@manangandhi.tech"
                                className="hover:underline underline-offset-2"
                            >
                                Contact
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-0">
                        <GitHubContrib username="MananGandhi1810" />
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
                        className="text-sm text-zinc-400 hover:text-zinc-200"
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
        </main>
    );
}
