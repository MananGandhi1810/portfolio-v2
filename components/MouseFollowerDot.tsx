"use client";

import { useEffect, useRef } from "react";

export default function MouseFollowerDot() {
    const dotRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        const finePointer = window.matchMedia("(pointer: fine)").matches;
        if (!finePointer) return;

        let visible = false;

        const updatePosition = (event: MouseEvent) => {
            dot.style.left = `${event.clientX - 16}px`;
            dot.style.top = `${event.clientY - 16}px`;

            if (!visible) {
                dot.style.opacity = "1";
                visible = true;
            }
        };

        const hideDot = () => {
            dot.style.opacity = "0";
            visible = false;
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseleave", hideDot);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseleave", hideDot);
        };
    }, []);

    return (
        <div
            ref={dotRef}
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-100 h-10 w-10 rounded-full bg-(--accent) mix-blend-difference opacity-0 transition-opacity duration-75"
        />
    );
}
