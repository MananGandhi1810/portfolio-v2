"use client";

import React from "react";

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
    "Nginx",
    "Flask",
    "Microsoft Azure",
    "Amazon Web Services",
    "Google Cloud Platform",
];

export default function SkillsMarquee() {
    const items = [...SKILLS, ...SKILLS];

    return (
        <div className="skills-marquee-wrapper mt-8">
            <div className="skills-marquee w-full" aria-hidden>
                <h2 className="text-2xl font-semibold text-zinc-50">
                    Skills
                </h2>
                <div className="skills-track mt-2">
                    {items.map((t, i) => (
                        <div
                            key={`${t}-${i}`}
                            className={`inline-flex items-center justify-center border rounded-none btn-primary hover:border-(--color-accent) hover:bg-[rgba(0,168,255,0.06)] micro-anim focus-accent my-2`}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
