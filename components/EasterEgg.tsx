"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function EasterEgg() {
    useEffect(() => {
        const konamiCode = [
            "KeyM",
            "KeyA",
            "KeyN",
            "KeyA",
            "KeyN",
            "KeyG",
            "KeyA",
            "KeyN",
            "KeyD",
            "KeyH",
            "KeyI",
        ];
        let konamiIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            const key =
                e.key === " " ? " " : e.code || e.key.toLowerCase();
            
            console.log(key); // For debugging purposes

            if (key === konamiCode[konamiIndex]) {
                konamiIndex++;

                if (konamiIndex === konamiCode.length) {
                    redirect(process.env.SECRET_LINK || "/");
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return null;
}
