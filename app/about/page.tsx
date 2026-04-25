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
                I'm a 19-year-old computer engineering student at NMIMS MPSTME.
                I like to code and build projects. I'm experienced in App
                Development, Backend Development, Cybersecurity, and AI/ML. I am
                currently working as a Mid Frequency Trading Intern at IkiQuant
                Technologies. I love participating in hackathons, and have won 7
                hackathons (yet). I'm a FOSS enthusiast, and I love building and
                contributing to open-source projects. I also enjoy finding bugs
                and security vulnerabilities in applications and websites.
            </p>
            <p className="my-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Apart from building software, I enjoy tinkering with hardware
                (and robotics) and playing on Chess.com and Matiks. Feel free to
                challenge me to a game sometime!
            </p>
            <div className="mt-8 grid grid-cols-1 gap-2 text-sm text-zinc-400 sm:grid-cols-2">
                {socials.map((social) => (
                    <SocialsCard key={social.label} social={social} />
                ))}
            </div>
        </main>
    );
}
