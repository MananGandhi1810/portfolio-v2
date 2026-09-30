"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import AsciiLoader from "./AsciiLoader";

const LoadingContext = createContext<(() => () => void) | null>(null);

// Keep the fallback outside Suspense so resolving a route cannot remove it
// before its minimum display time has elapsed.
export default function RouteLoadingBoundary({
    children,
}: {
    children: React.ReactNode;
}) {
    const [visible, setVisible] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const pending = useRef(0);
    const deadline = useRef(0);
    const begin = useCallback(() => {
        clearTimeout(timer.current);
        pending.current += 1;
        deadline.current = performance.now() + 2000;
        setVisible(true);
        return () => {
            pending.current -= 1;
            if (pending.current === 0) {
                timer.current = setTimeout(
                    () => setVisible(false),
                    Math.max(0, deadline.current - performance.now()),
                );
            }
        };
    }, []);
    useEffect(() => () => clearTimeout(timer.current), []);

    return (
        <LoadingContext.Provider value={begin}>
            {visible && <RouteLoader />}
            <div hidden={visible}>{children}</div>
        </LoadingContext.Provider>
    );
}

function RouteLoader() {
    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="flex min-h-[40vh] items-center justify-center">
                <AsciiLoader />
            </div>
        </main>
    );
}

export function RouteLoadingFallback() {
    const begin = useContext(LoadingContext);
    useEffect(() => begin?.(), [begin]);
    return <RouteLoader />;
}
