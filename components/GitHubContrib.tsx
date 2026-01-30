export default function GitHubContrib({
    username = "MananGandhi1810",
}: {
    username?: string;
}) {
    const src = `https://ghchart.rshah.org/${username}`;

    return (
        <div className="mt-6 w-full">
            <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={src}
                    alt={`${username} GitHub contributions`}
                    className="w-full border border-white/6"
                />
            </a>
        </div>
    );
}
