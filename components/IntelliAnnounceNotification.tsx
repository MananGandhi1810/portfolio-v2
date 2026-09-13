"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function IntelliAnnounceNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = window.setTimeout(() => setIsLeaving(true), 8000);
        return () => window.clearTimeout(timeout);
    }, [isVisible]);

    useEffect(() => {
        if (!isLeaving) return;

        const timeout = window.setTimeout(() => setIsVisible(false), 250);
        return () => window.clearTimeout(timeout);
    }, [isLeaving]);

    if (!isVisible) return null;

    return (
        <aside
            aria-label="IntelliAnnounce announcement"
            className={`fixed bottom-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md border border-blue-400/40 bg-zinc-950 p-5 shadow-2xl shadow-blue-950/40 ${isLeaving ? "notification-exit" : "notification-enter"}`}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                        Trade without watching the news
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-zinc-50">
                        Hear the market move with IntelliAnnounce
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        Important Indian market announcements, filtered and
                        summarized by AI, delivered as speech while you focus
                        on executing the trade.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setIsLeaving(true)}
                    className="shrink-0 text-zinc-400 transition-colors hover:text-zinc-50 focus-accent"
                    aria-label="Dismiss IntelliAnnounce announcement"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path
                            d="m6 6 12 12M18 6 6 18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
            <p className="mt-4 text-xs text-zinc-400">
                Want the edge before the market reacts? Ask me for access.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <a
                    href="https://intelliannounce.manan.cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary micro-anim focus-accent min-h-10 px-3 py-2 text-xs"
                >
                    Explore IntelliAnnounce
                </a>
                <Link
                    href="/contact"
                    className="micro-anim focus-accent inline-flex min-h-10 items-center justify-center border border-white/20 px-3 py-2 text-xs text-zinc-200 hover:border-blue-400 hover:text-white"
                >
                    Contact me for access
                </Link>
            </div>
        </aside>
    );
}
