"use client";

import { useState } from "react";

const SKILLS = [
    "C",
    "C++",
    "Python",
    "Dart",
    "Java",
    "JavaScript/TypeScript",
    "Bash",
    "Kotlin",
    "Flutter",
    "Django",
    "Flask",
    "FastAPI",
    "Node.js",
    "Express.js",
    "Elysia",
    "React.js",
    "React Native",
    "Next.js",
    "OpenCV",
    "Docker",
    "Redis",
    "Apache Kafka",
    "ClickHouse",
    "MongoDB",
    "Microsoft Azure",
    "Amazon Web Services",
    "PostgreSQL",
    "Socket.IO",
    "GCP",
];

export default function SkillsMarquee() {
    const [shuffledSkills] = useState(() =>
        [...SKILLS].sort(() => Math.random() - 0.5),
    );

    return (
        <div className="skills-marquee-wrapper mt-8">
            <div className="skills-marquee w-full" aria-hidden>
                <h2 className="text-2xl font-semibold text-zinc-50">Skills</h2>
                <div className="skills-scroll-track mt-2 flex gap-6 items-center overflow-x-auto scrollbar-hide py-2">
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
