export default function Card({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    // Add margin-bottom and column-break avoidance so Card works well inside
    // CSS `columns` (masonry) containers. Inline styles ensure Safari support too.
    return (
        <div
            className={`rounded-none border border-white/30 p-4 card-elevated micro-anim mb-4 card-masonry ${className}`}
        >
            {children}
        </div>
    );
}
