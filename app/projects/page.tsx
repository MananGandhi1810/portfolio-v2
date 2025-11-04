import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto my-12 max-w-5xl px-6">
      <h1 className="text-3xl font-bold text-zinc-50">Projects</h1>
      <p className="mt-2 text-zinc-300">A selection of projects I built and maintain.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="w-full">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
