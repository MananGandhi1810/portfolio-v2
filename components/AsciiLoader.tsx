"use client";

import { useEffect, useState } from "react";

const width = 40;
const height = 18;
// Character cells are taller than they are wide, so scale x to keep the
// radar circular. The sweep leaves a short fading trail behind it.
function drawFrame(angle: number) {
    return Array.from({ length: height }, (_, row) =>
        Array.from({ length: width }, (_, column) => {
            const x = (column - (width - 1) / 2) / 2;
            const y = row - (height - 1) / 2;
            const radius = Math.hypot(x, y);
            if (radius > 8.2) return " ";
            if (radius < 0.8) return "+";
            const behind = (angle - Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
            if (behind < 0.14) return "#";
            if (behind < 0.4) return ":";
            if (behind < 0.7) return ".";
            if (Math.abs(radius - 8) < 0.4) return "o";
            if (Math.abs(radius - 5) < 0.3 || Math.abs(radius - 2.5) < 0.25) return ".";
            if (Math.abs(x) < 0.3) return "|";
            if (Math.abs(y) < 0.6) return "-";
            return " ";
        }).join(""),
    ).join("\n");
}

const initialFrame = drawFrame(0);

export default function AsciiLoader({
    label = "Loading…",
    compact = false,
}: {
    label?: string;
    compact?: boolean;
}) {
    const [frame, setFrame] = useState(initialFrame);

    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let timer: ReturnType<typeof setInterval> | undefined;
        let angle = 0;
        const start = () => {
            if (motion.matches || document.hidden || timer !== undefined)
                return;
            timer = setInterval(() => {
                angle += 0.08;
                setFrame(drawFrame(angle % (Math.PI * 2)));
            }, 80);
        };
        const update = () => {
            if (timer !== undefined) clearInterval(timer);
            timer = undefined;
            if (motion.matches) setFrame(initialFrame);
            start();
        };
        start();
        motion.addEventListener("change", update);
        document.addEventListener("visibilitychange", update);
        return () => {
            if (timer !== undefined) clearInterval(timer);
            motion.removeEventListener("change", update);
            document.removeEventListener("visibilitychange", update);
        };
    }, []);

    return (
        <div
            className={`ascii-loader${compact ? " ascii-loader-compact" : ""}`}
            role="status"
            aria-live="polite"
        >
            <pre aria-hidden="true">{frame}</pre>
            <span>{label}</span>
        </div>
    );
}
