import { ArrowUpRight, Github } from "lucide-react";
type Project = {
  title: string;
  description: string;
  tech?: string[];
  repo?: string;
  live?: string;
};
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-symbol" aria-hidden="true">
          {project.title === "IntelliAnnounce"
            ? "[≋]"
            : project.title.includes("OnTrack")
              ? "[↗]"
              : project.title === "FluxGate"
                ? "{↳}"
                : "</>"}
        </span>
        <span className="tiny-label">
          {project.live
            ? "LIVE PROJECT"
            : project.repo
              ? "OPEN SOURCE"
              : "COMMUNITY PROJECT"}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech?.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="project-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Visit project <ArrowUpRight size={15} />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Source code for ${project.title}`}
          >
            <Github size={14} /> Source
          </a>
        )}
        {!project.live && !project.repo && (
          <span className="muted">Community project</span>
        )}
      </div>
    </article>
  );
}
