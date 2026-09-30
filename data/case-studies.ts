export const caseStudies = [
  {
    slug: "intelliannounce",
    title: "IntelliAnnounce",
    category: "Market intelligence",
    intro:
      "Company announcements, filtered and summarized as speech. Built so traders can follow disclosures without watching another screen.",
    visual: "announcements",
    live: "https://intelliannounce.manan.cloud",
    tech: ["Next.js", "Express", "Socket.io", "Redis", "PostgreSQL", "Docker"],
    problem:
      "Market disclosures arrive throughout the trading day. Reading each announcement competes with watching positions and executing trades.",
    approach:
      "I built a speech-first platform with personalized watchlists, intelligent filtering, real-time alerts, and AI-generated summaries.",
    decisions: [
      "Redis sits on the hot path for live announcements and high-throughput reads during market hours.",
      "A nightly cron job persists announcements to PostgreSQL, separating live ingestion from long-term storage.",
      "Socket.io delivers updates in real time; speech lets users listen while working.",
    ],
    outcome:
      "Used regularly by traders to follow company disclosures. The interface focuses on relevant announcements rather than a continuous unfiltered feed.",
  },
  {
    slug: "openquant",
    title: "OpenQuant",
    category: "Options analytics",
    intro:
      "A NIFTY options research platform with Greeks, volatility analysis, strategy construction, and historical backtesting.",
    visual: "openquant",
    repo: "https://github.com/NeuroTechh/OpenQuant",
    tech: ["FastAPI", "Next.js", "Redis", "SQLite", "Docker", "OpenRouter"],
    problem:
      "Options research involves moving between chain data, volatility, Greeks, and strategy payoffs. We wanted those workflows in one place.",
    approach:
      "Built with a team for CodeForge 2026. The platform combines interactive market analysis, strategy design, anomaly detection, and AI-assisted interpretation.",
    decisions: [
      "A Python analytics backend handles derivatives calculations and historical backtesting.",
      "Redis caches computationally expensive responses, while SQLite holds the analytical dataset.",
      "The strategy lab supports prebuilt strategies and custom legs with payoff visualization.",
      "IsolationForest detects unusual patterns in normalized market snapshots.",
    ],
    outcome:
      "1st place at FOSS Club MPSTME CodeForge 2026. The repository includes the dashboard, strategy lab, and reproducible Docker setup.",
  },
  {
    slug: "online-judge",
    title: "Sandboxed Online Code Judge",
    category: "Systems & security",
    intro:
      "A coding platform for Python, C, C++, and Java, with isolated execution, submissions, leaderboards, and AI-assisted hints.",
    visual: "judge",
    repo: "https://github.com/MananGandhi1810/online-ide",
    live: "https://code.manan.cloud",
    tech: ["Express", "React", "Docker", "Redis", "PostgreSQL", "Azure"],
    problem:
      "Running user-submitted code is a different problem from running your own application. Workloads need isolation, bounded resources, and reliable results.",
    approach:
      "I built an asynchronous execution pipeline using Docker containers and Redis Pub/Sub, alongside a problem-solving interface with editorials and hints.",
    decisions: [
      "Docker containers isolate each execution workload with controlled resource usage.",
      "Redis Pub/Sub decouples submission handling from execution workers.",
      "Hidden test cases and persistent submission telemetry make multi-user judging more reliable.",
    ],
    outcome:
      "Used by 200+ users. Supports multiple languages, submission histories, leaderboards, editorials, and AI-assisted hints.",
  },
  {
    slug: "adeon",
    title: "Adeon",
    category: "Developer tools",
    intro:
      "An open-source platform for code review, vulnerability analysis, documentation, testing, and development environments.",
    visual: "deploy",
    repo: "https://github.com/MananGandhi1810/Adeon",
    live: "https://adeon.me",
    tech: ["Next.js", "Express", "Docker", "Redis", "PostgreSQL", "Gemini"],
    problem:
      "Review, documentation, vulnerability checks, and environment setup are often spread across separate tools.",
    approach:
      "Built a developer platform bringing those analysis and automation workflows together.",
    decisions: [
      "A multi-service architecture separates analysis from automation workflows.",
      "Capabilities can be extended independently rather than coupling every tool to one service.",
      "Containerized environment provisioning supports the development workflow.",
    ],
    outcome:
      "Ranked Top 35 globally among 1,500+ projects at the 100X Engineers Buildathon.",
  },
  {
    slug: "fluxgate",
    title: "FluxGate",
    category: "Deployment infrastructure",
    intro:
      "A self-hosted deployment platform that rebuilds and deploys applications when changes are pushed to GitHub.",
    visual: "deploy",
    repo: "https://github.com/MananGandhi1810/FluxGate",
    tech: ["Next.js", "Express", "Docker", "Redis", "PostgreSQL", "Gemini"],
    problem:
      "Deploying to your own servers requires handling builds, environments, logs, and failures yourself.",
    approach:
      "Built a self-hostable platform with isolated deployments, branch-aware environments, build logs, and failure alerts.",
    decisions: [
      "GitHub changes trigger rebuilds and application deployment.",
      "Branch-aware environments keep different deployments separate.",
      "Natural-language infrastructure management simplifies repository setup and deployment configuration.",
    ],
    outcome: "Won Best use of Gemini API at HackThisFall Virtual 2024.",
  },
];
export function findCaseStudy(title: string) {
  return caseStudies.find(
    (p) =>
      p.title === title ||
      (title === "LeetCode Clone" && p.slug === "online-judge"),
  );
}
