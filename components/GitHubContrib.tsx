"use client";

import { useEffect, useState, useRef } from "react";

type Contribution = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContribResponse = {
    total: {
        [year: string]: number;
    };
    contributions: Contribution[];
};

export default function GitHubContrib({
    username = "MananGandhi1810",
}: {
    username?: string;
}) {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );
                const data: GitHubContribResponse = await response.json();
                setContributions(data.contributions);
            } catch (error) {
                console.error("Failed to fetch contributions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
    }, [contributions]);

    const getLevelColor = (level: number) => {
        switch (level) {
            case 0:
                return "bg-[var(--bg-800)]";
            case 1:
                return "bg-[var(--accent)] opacity-20";
            case 2:
                return "bg-[var(--accent)] opacity-40";
            case 3:
                return "bg-[var(--accent)] opacity-70";
            case 4:
                return "bg-[var(--accent)] opacity-100";
            default:
                return "bg-[var(--bg-800)]";
        }
    };

    if (loading) {
        return (
            <div className="mt-6 w-full animate-pulse flex flex-col gap-2">
                 <div className="h-[100px] w-full bg-neutral-800/50 rounded-lg"></div>
            </div>
        );
    }

    const weeks: Contribution[][] = [];
    let currentWeek: Contribution[] = [];
    
    contributions.forEach((day, i) => {
        currentWeek.push(day);
        if (currentWeek.length === 7 || i === contributions.length - 1) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });

    return (
        <div className="mt-6 w-full overflow-hidden flex justify-center">
            <div className="flex flex-col gap-2 w-fit max-w-full">
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-2"
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-[3px] overflow-x-auto pb-2 no-scrollbar"
                    >
                        {weeks.map((week, i) => (
                            <div key={i} className="flex flex-col gap-[3px]">
                                {week.map((day) => (
                                    <div
                                        key={day.date}
                                        className={`w-2.5 h-2.5 rounded-sm ${getLevelColor(
                                            day.level
                                        )} shrink-0`}
                                        title={`${day.date}: ${day.count} contributions`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </a>
                <div className="flex justify-end items-center text-xs text-neutral-400 px-1">
                    <div className="flex items-center gap-2">
                        <span>Less</span>
                        <div className="flex gap-0.5">
                            <div className="w-2.5 h-2.5 rounded-sm bg-(--accent)" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-(--accent) opacity-20" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-(--accent) opacity-40" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-(--accent) opacity-70" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-(--accent) opacity-100" />
                        </div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
