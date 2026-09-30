import {
    skills,
    achievements,
    openAlgoPullRequest,
    openAlgoRecognition,
} from "@/data/about";
import SocialsCard, { type SocialLink } from "@/components/SocialsCard";

export default function AboutPage() {
    const socials: SocialLink[] = [
        {
            label: "GitHub",
            value: "MananGandhi1810",
            href: "https://github.com/MananGandhi1810",
        },
        {
            label: "X",
            value: "@MananGandhi1810",
            href: "https://x.com/MananGandhi1810",
        },
        {
            label: "Instagram",
            value: "@manan.py",
            href: "https://instagram.com/manan.py",
        },
        {
            label: "LinkedIn",
            value: "Manan Gandhi",
            href: "https://linkedin.com/in/manangandhi1810",
        },
        {
            label: "Matiks",
            value: "@manangandhi1810",
            href: "https://www.matiks.in/profile/manangandhi1810",
        },
        {
            label: "Chess.com",
            value: "@manan181006",
            href: "https://www.chess.com/member/manan181006",
        },
        {
            label: "Email",
            value: "hello@manan.cloud",
            href: "mailto:hello@manan.cloud",
        },
    ];

    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    About
                </h1>
            </div>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                I&apos;m a 19-year-old computer engineering student at NMIMS
                MPSTME. I like to code and build software. I am currently
                working as a Mid Frequency Trading Intern at IkiQuant
                Technologies. I&apos;m experienced in App Development, Backend
                Development, Cybersecurity, and AI/ML. I love participating in
                hackathons, and have won 7 hackathons (yet). I&apos;m a FOSS
                enthusiast, and I like building and contributing to open-source
                projects. I also enjoy finding bugs and security vulnerabilities
                in applications and websites.
            </p>
            <p className="my-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Apart from building software, I enjoy tinkering with hardware,
                participating in robotics competitions, and playing on Chess.com
                and Matiks. Feel free to challenge me to a game sometimes!
            </p>
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Education
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    <div>
                        <h3 className="font-semibold text-zinc-100">
                            NMIMS Mukesh Patel School of Technology Management
                            and Engineering
                        </h3>
                        <p>B.Tech in Computer Engineering · Mumbai</p>
                        <p className="text-sm text-zinc-400">
                            2022 — 2028 · Expected graduation: 2028
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">
                            Kapol Vidyanidhi International School
                        </h3>
                        <p>ICSE · Mumbai · Graduated 2022</p>
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Technical skills
                </h2>
                <dl className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {skills.map(({ category, items }) => (
                        <div key={category}>
                            <dt className="font-semibold text-zinc-100">
                                {category}
                            </dt>
                            <dd className="mt-1 text-zinc-400">
                                {items.join(" · ")}
                            </dd>
                        </div>
                    ))}
                </dl>
                <p className="mt-4 text-sm text-zinc-400">
                    For example, I use Python for trading workflows, Docker and
                    Redis for isolated code execution, and Flutter for mobile
                    apps.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Hackathons &amp; recognition
                </h2>
                <p className="mt-3 text-sm text-zinc-400">
                    Selected wins, runner-up finishes, and finalist placements.
                </p>
                <ul className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {achievements.map(({ project, event, result, repo }) => (
                        <li key={project}>
                            <a
                                href={repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2"
                            >
                                {project}
                            </a>
                            <span> — {result}</span>
                            <p className="mt-1 text-sm text-zinc-400">
                                {event}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Open-source contributions
                </h2>
                <div className="mt-4 space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    <p>
                        Contributed a Zerodha WebSocket logging fix to OpenAlgo,
                        publicly recognized by maintainer Rajandran R.{" "}
                        <a
                            href={openAlgoPullRequest}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                            Merged pull request
                        </a>
                        {" · "}
                        <a
                            href={openAlgoRecognition}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                            Acknowledgment
                        </a>
                    </p>
                    <p>
                        Published{" "}
                        <a
                            href="https://pub.dev/packages/cloudflare_ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                            cloudflare_ai
                        </a>
                        , a Dart client for Cloudflare Workers AI, with text
                        generation, summarization, classification, translation,
                        chat, and image generation.{" "}
                        <a
                            href="https://github.com/MananGandhi1810/cloudflare-ai-dart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                        >
                            Source code
                        </a>
                    </p>
                </div>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Software security
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    I have responsibly disclosed high-severity security
                    vulnerabilities in production systems including Matiks,
                    Unstop, and iicpc.com.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Find me online
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-2 text-sm text-zinc-400 sm:grid-cols-2">
                    {socials.map((social) => (
                        <SocialsCard key={social.label} social={social} />
                    ))}
                </div>
            </section>
        </main>
    );
}
