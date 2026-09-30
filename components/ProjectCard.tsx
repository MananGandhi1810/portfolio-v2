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
            Live <ArrowUpRight size={15} />
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
        {!project.live && !project.repo && <span className="muted"></span>}
      </div>
    </article>
  );
}
