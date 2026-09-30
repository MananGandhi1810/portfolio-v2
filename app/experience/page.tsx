import { openAlgoPullRequest, openAlgoRecognition } from "@/data/about";

export default function ExperiencePage() {
    return (
        <main className="mx-auto my-12 max-w-5xl px-6">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
                    Experience
                </h1>
            </div>

            <div className="mt-8 relative">
                <div className="absolute left-1.25 top-2.5 bottom-0 w-px bg-zinc-800" />

                <div className="space-y-10">
                    <div className="group relative pl-8">
                        <div className="absolute left-0 top-1.5 h-2.75 w-2.75 rounded-full border-2 border-blue-500 bg-blue-500/20 group-hover:border-blue-400 group-hover:bg-blue-400/40 transition-colors z-10 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />

                        <h2 className="text-xl font-semibold text-zinc-100 leading-tight group-hover:text-blue-400 transition-colors">
                            Mid Frequency Trading Intern
                        </h2>
                        <h3 className="text-lg text-zinc-400 mt-1">
                            Ikiquant Technologies
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500 font-mono">
                            March 2026 — Present
                        </p>
                        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            Working on US index options trading infrastructure,
                            including execution, market data, and risk
                            management. Remote, India.
                        </p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            <li>
                                Built a real-time risk management system for
                                live trading operations and continuous exposure
                                monitoring.
                            </li>
                            <li>
                                Reworked execution and trade-processing paths,
                                reducing strategy execution latency by{" "}
                                <strong>15×</strong> across all strategies.
                            </li>
                            <li>
                                Optimized market-data and Options Greeks
                                pipelines by <strong>3×</strong>, improving
                                real-time computation throughput.
                            </li>
                            <li>
                                Built real-time monitoring, research, and live
                                market-data dashboards with interactive
                                charting.
                            </li>
                        </ul>
                    </div>

                    <div className="group relative pl-8">
                        <div className="absolute left-0 top-1.5 h-2.75 w-2.75 rounded-full border-2 border-zinc-600 bg-black group-hover:border-blue-400 group-hover:bg-blue-900/30 transition-colors z-10" />
                        <h2 className="text-xl font-semibold text-zinc-100 leading-tight group-hover:text-blue-400 transition-colors">
                            Software Development Intern
                        </h2>
                        <h3 className="text-lg text-zinc-400 mt-1">
                            Sykes & Rays Equities
                        </h3>
                        <p className="mt-2 text-sm text-zinc-500 font-mono">
                            May 2025 — July 2025
                        </p>
                        <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                            Built an automated trading system using Python,
                            OpenAlgo, and Zerodha APIs to execute strategies and
                            manage orders programmatically.
                            <br />
                            Contributed to OpenAlgo, fixing a critical bug in
                            the Zerodha Websockets Module.
                            <br />
                            Developed automation scripts to streamline
                            traders&apos; day-to-day workflows and end-of-day
                            data processing, reducing traders&apos; manual
                            effort by <strong>90%</strong>
                            and improving data reliability.
                        </p>
                        <p className="mt-4 text-sm text-zinc-400">
                            The Zerodha WebSocket logging fix was merged into
                            OpenAlgo and publicly recognized by maintainer
                            Rajandran R.{" "}
                            <a
                                href={openAlgoPullRequest}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                            >
                                Merged pull request
                            </a>
                            {" · "}
                            <a
                                href={openAlgoRecognition}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                            >
                                Maintainer acknowledgment
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
