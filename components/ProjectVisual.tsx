import Image from "next/image";
export default function ProjectVisual({ type }: { type: string }) {
  if (type === "openquant")
    return (
      <div className="project-visual screenshot-visual">
        <Image
          src="/projects/openquant-dashboard.png"
          alt="OpenQuant dashboard showing NIFTY options charts and market analytics"
          width={1600}
          height={900}
        />
      </div>
    );
  const judge = type === "judge";
  const deploy = type === "deploy";
  const nodes = judge
    ? ["Submission", "Redis Pub/Sub", "Docker worker", "Test results"]
    : deploy
      ? ["GitHub push", "Build", "Container", "Deployment"]
      : ["Disclosures", "Redis", "AI summary", "Speech"];
  return (
    <div className="project-visual pipeline-visual">
      <div className="visual-caption">
        <span>
          {judge
            ? "ISOLATED CODE EXECUTION"
            : deploy
              ? "DEPLOYMENT WORKFLOW"
              : "ANNOUNCEMENT PIPELINE"}
        </span>
        <span>Architecture sketch</span>
      </div>
      <div className="pipeline-nodes">
        {nodes.map((node, i) => (
          <div className="pipeline-step" key={node}>
            <span className="node-index">0{i + 1}</span>
            <strong>{node}</strong>
            {i < 3 && (
              <span className="pipeline-arrow" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="pipeline-footer">
        <span>
          {judge
            ? "Python / Java / C / C++"
            : deploy
              ? "Self-hosted · branch-aware"
              : "Live updates · personalized watchlists"}
        </span>
        <span className="accent-text">
          {judge
            ? "resource limits"
            : deploy
              ? "build logs"
              : "nightly → PostgreSQL"}
        </span>
      </div>
    </div>
  );
}
