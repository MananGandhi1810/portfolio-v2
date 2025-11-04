export default function NetworkBackground() {
    return (
        <div aria-hidden className="network-bg">
            <svg
                className="w-full h-full"
                style={{ display: "block" }}
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 1200 800"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="g1" x1="0%" x2="100%">
                        <stop
                            offset="0%"
                            stopColor="#ffffff"
                            stopOpacity="0.06"
                        />
                        <stop
                            offset="100%"
                            stopColor="#ffffff"
                            stopOpacity="0.02"
                        />
                    </linearGradient>
                </defs>

                {/* sample static nodes and connecting lines; subtle animation via CSS */}
                <g>
                    <line
                        className="link-line"
                        x1="120"
                        y1="120"
                        x2="320"
                        y2="70"
                    />
                    <line
                        className="link-line"
                        x1="320"
                        y1="70"
                        x2="520"
                        y2="140"
                    />
                    <line
                        className="link-line"
                        x1="520"
                        y1="140"
                        x2="760"
                        y2="100"
                    />
                    <line
                        className="link-line"
                        x1="760"
                        y1="100"
                        x2="980"
                        y2="160"
                    />

                    <circle
                        className="node node-anim"
                        cx="120"
                        cy="120"
                        r="6"
                    />
                    <circle
                        className="node node-anim"
                        cx="320"
                        cy="70"
                        r="5"
                        style={{ animationDelay: "0.2s" }}
                    />
                    <circle
                        className="node node-anim"
                        cx="520"
                        cy="140"
                        r="6"
                        style={{ animationDelay: "0.4s" }}
                    />
                    <circle
                        className="node node-anim"
                        cx="760"
                        cy="100"
                        r="4"
                        style={{ animationDelay: "0.8s" }}
                    />
                    <circle
                        className="node node-anim"
                        cx="980"
                        cy="160"
                        r="5"
                        style={{ animationDelay: "0.5s" }}
                    />
                </g>
            </svg>
        </div>
    );
}
