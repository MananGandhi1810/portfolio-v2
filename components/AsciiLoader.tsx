"use client";

import { useEffect, useState } from "react";

const width = 40;
const height = 18;
const shades = ".,-~:;=!*#$@";

// Project a rotating torus into a character grid, using depth and light
// to keep the back surface hidden and shade the visible surface.
function drawFrame(a: number, b: number) {
    const characters = Array<string>(width * height).fill(" ");
    const depth = new Float64Array(width * height);
    const sinA = Math.sin(a),
        cosA = Math.cos(a);
    const sinB = Math.sin(b),
        cosB = Math.cos(b);

    for (let theta = 0; theta < Math.PI * 2; theta += 0.28) {
        const cosTheta = Math.cos(theta),
            sinTheta = Math.sin(theta);
        const ring = 2 + cosTheta;
        for (let phi = 0; phi < Math.PI * 2; phi += 0.12) {
            const cosPhi = Math.cos(phi),
                sinPhi = Math.sin(phi);
            const x =
                ring * (cosB * cosPhi + sinA * sinB * sinPhi) -
                sinTheta * cosA * sinB;
            const y =
                ring * (sinB * cosPhi - sinA * cosB * sinPhi) +
                sinTheta * cosA * cosB;
            const inverseZ = 1 / (6 + cosA * ring * sinPhi + sinTheta * sinA);
            const column = Math.round(width / 2 + 20 * inverseZ * x);
            const row = Math.round(height / 2 - 10 * inverseZ * y);
            const light =
                cosPhi * cosTheta * sinB -
                cosA * cosTheta * sinPhi -
                sinA * sinTheta +
                cosB * (cosA * sinTheta - sinA * cosTheta * sinPhi);
            if (
                column < 0 ||
                column >= width ||
                row < 0 ||
                row >= height ||
                light <= 0
            )
                continue;
            const index = row * width + column;
            if (inverseZ > depth[index]) {
                depth[index] = inverseZ;
                characters[index] =
                    shades[Math.min(shades.length - 1, Math.floor(light * 8))];
            }
        }
    }
    return Array.from({ length: height }, (_, row) =>
        characters.slice(row * width, (row + 1) * width).join(""),
    ).join("\n");
}

const initialFrame = drawFrame(0.7, 0.3);

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
                setFrame(drawFrame(0.7 + angle, 0.3 + angle * 0.55));
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
