import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { findCaseStudy } from "@/data/case-studies";
type Project = {
  title: string;
  description: string;
  tech?: string[];
  repo?: string;
  live?: string;
};
export default function ProjectCard({ project }: { project: Project }) {
  const study = findCaseStudy(project.title);
  return (
    <article className="project-card">
      <h3>
        {study ? (
          <Link href={`/projects/${study.slug}`}>{project.title}</Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech?.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="project-links">
        {study && <Link href={`/projects/${study.slug}`}>Build notes →</Link>}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
          >
            Live <ArrowUpRight size={14} />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Source code for ${project.title}`}
          >
            Source <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
