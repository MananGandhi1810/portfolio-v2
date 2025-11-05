"use client";

import { useEffect } from "react";

export default function EasterEgg() {
    useEffect(() => {
        const maxBufferSize = 11;
        const debounceDelay = 500; // ms
        let keyBuffer: string[] = [];
        let debounceTimer: NodeJS.Timeout | null = null;

        const validateCode = async () => {
            try {
                const res = await fetch("/api/secret-link", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ keys: keyBuffer }),
                });

                if (res.ok) {
                    const data = await res.json();
                    if (data?.url) {
                        window.location.href = data.url;
                    }
                    keyBuffer = [];
                }
            } catch (err) {
                console.error("Failed to validate secret code:", err);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.code || e.key;

            if (!key) return;
            if (!key.startsWith("Arrow") && !key.startsWith("Key")) return;

            keyBuffer.push(key);

            if (keyBuffer.length > maxBufferSize) {
                keyBuffer.shift();
            }

            // Clear existing debounce timer
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }

            // Debounce the API call
            if (keyBuffer.length === maxBufferSize) {
                debounceTimer = setTimeout(() => {
                    validateCode();
                }, debounceDelay);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }
        };
    }, []);

    return null;
}
