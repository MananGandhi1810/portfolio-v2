export default function AboutPage() {
    return (
        <main className="mx-auto my-12 max-w-3xl px-6">
            <h1 className="text-3xl font-bold text-zinc-50">About</h1>
            <p className="mt-4 text-zinc-300">
                I&apos;m a 19-year-old computer engineering student at NMIMS
                MPSTME. I like to code and build projects. I&apos;m into app
                development, backend development, cybersecurity, and AI/ML. I
                love participating in hackathons, and have won 5 hackathons
                (yet). I&apos;m a FOSS enthusiast, and I love building and
                contributing to open-source projects. I also enjoy finding bugs
                and security vulnerabilities in applications and websites.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300">
                <li>
                    GitHub:{" "}
                    <a
                        className="text-zinc-200"
                        href="https://github.com/MananGandhi1810"
                    >
                        MananGandhi1810
                    </a>
                </li>
                <li>
                    X:{" "}
                    <a
                        className="text-zinc-200"
                        href="https://x.com/MananGandhi1810"
                    >
                        @MananGandhi1810
                    </a>
                </li>
                <li>
                    Instagram:{" "}
                    <a
                        className="text-zinc-200"
                        href="https://instagram.com/manan.py"
                    >
                        @manan.py
                    </a>
                </li>
            </ul>
        </main>
    );
}
