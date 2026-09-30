"use client";

import { useEffect, useRef } from "react";

const artwork = [
    "███╗   ███╗ █████╗ ███╗   ██╗ █████╗ ███╗   ██╗",
    "████╗ ████║██╔══██╗████╗  ██║██╔══██╗████╗  ██║",
    "██╔████╔██║███████║██╔██╗ ██║███████║██╔██╗ ██║",
    "██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║╚██╗██║",
    "██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║██║ ╚████║",
    "╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝",
].join("\n");

// Keep spaces and line breaks aligned with the underlying outlined artwork.
const face = artwork.replace(/[^█\n]/g, " ");

export default function AsciiName() {
    const foreground = useRef<HTMLSpanElement>(null);
    const cursor = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let cancelled = false;
        let frame = 0;
        let timer: ReturnType<typeof setTimeout> | undefined;

        const finish = () => {
            if (foreground.current) foreground.current.textContent = face;
            if (cursor.current) cursor.current.hidden = true;
        };
        const onMotionChange = () => {
            if (motion.matches) {
                cancelled = true;
                clearTimeout(timer);
                cancelAnimationFrame(frame);
                finish();
            }
        };
        motion.addEventListener("change", onMotionChange);

        if (motion.matches) finish();
        else {
            if (foreground.current) foreground.current.textContent = "";
            document.fonts.ready.then(() => {
                if (cancelled) return;
                timer = setTimeout(() => {
                    const start = performance.now();
                    if (cursor.current) cursor.current.hidden = false;
                    const tick = (now: number) => {
                        if (cancelled) return;
                        const progress = Math.min((now - start) / 650, 1);
                        const count = Math.floor((1 - (1 - progress) ** 3) * face.length);
                        if (foreground.current) foreground.current.textContent = face.slice(0, count);
                        if (progress < 1) frame = requestAnimationFrame(tick);
                        else finish();
                    };
                    frame = requestAnimationFrame(tick);
                }, 180);
            });
        }

        return () => {
            cancelled = true;
            clearTimeout(timer);
            cancelAnimationFrame(frame);
            motion.removeEventListener("change", onMotionChange);
        };
    }, []);

    return (
        <div className="ascii-name" aria-hidden="true">
            <pre className="ascii-name-base">{artwork}</pre>
            <pre className="ascii-name-face">
                <span ref={foreground}>{face}</span>
                <span ref={cursor} className="ascii-name-cursor" hidden />
            </pre>
        </div>
    );
}
