export default function AboutPage() {
    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    About
                </h1>
            </div>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                I&apos;m a 19-year-old computer engineering student at NMIMS
                MPSTME. I like to code and build projects. I&apos;m into app
                development, backend development, cybersecurity, and AI/ML. I
                love participating in hackathons, and have won 5 hackathons
                (yet). I&apos;m a FOSS enthusiast, and I love building and
                contributing to open-source projects. I also enjoy finding bugs
                and security vulnerabilities in applications and websites.
            </p>
            <div className="mt-8 space-y-2 text-sm sm:text-base">
                <p className="text-zinc-300">
                    <span className="text-zinc-400">GitHub:</span>{" "}
                    <a
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        href="https://github.com/MananGandhi1810"
                    >
                        MananGandhi1810
                    </a>
                </p>
                <p className="text-zinc-300">
                    <span className="text-zinc-400">X:</span>{" "}
                    <a
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        href="https://x.com/MananGandhi1810"
                    >
                        @MananGandhi1810
                    </a>
                </p>
                <p className="text-zinc-300">
                    <span className="text-zinc-400">Instagram:</span>{" "}
                    <a
                        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        href="https://instagram.com/manan.py"
                    >
                        @manan.py
                    </a>
                </p>
            </div>
        </main>
    );
}
