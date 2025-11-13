export default function Card({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`rounded-none border border-white/15 p-6 card-elevated micro-anim mb-4 card-masonry ${className}`}
        >
            {children}
        </div>
    );
}
