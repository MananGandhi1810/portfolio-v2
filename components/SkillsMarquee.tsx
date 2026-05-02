"use client";

import { useRef } from "react";

const SKILLS = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Socket.IO",
    "Docker",
    "TailwindCSS",
    "Redis",
    "MongoDB",
    "Flutter",
    "Python",
    "FastAPI",
    "ClickHouse",
    "Flask",
    "Azure",
    "AWS",
    "GCP",
];

export default function SkillsMarquee() {
    const shuffledSkills = useRef(
        SKILLS.sort(() => Math.random() - 0.5),
    ).current;

    return (
        <div className="skills-marquee-wrapper mt-8">
            <div className="skills-marquee w-full" aria-hidden>
                <h2 className="text-2xl font-semibold text-zinc-50">Skills</h2>
                <div
                    className="skills-scroll-track mt-2 flex gap-6 items-center overflow-x-auto scrollbar-hide py-2"
                >
                    {shuffledSkills.map((t, i) => (
                        <div
                            key={`${t}-${i}`}
                            className={`items-center justify-center border rounded-none btn-primary micro-anim focus-accent my-2`}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
