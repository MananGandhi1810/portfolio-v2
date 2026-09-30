"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import ProjectVisual from "@/components/ProjectVisual";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
const filters = ["All", "Web", "Mobile", "AI", "Open source"];
export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = projects.filter((p) => {
    const tech = p.tech.join(" ").toLowerCase();
    return (
      `${p.title} ${p.description} ${tech}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (filter === "All" ||
        (filter === "Web" && /next|react|flask|express/.test(tech)) ||
        (filter === "Mobile" && /flutter|dart/.test(tech)) ||
        (filter === "AI" && /gemini|ai|openrouter|langchain/.test(tech)) ||
        (filter === "Open source" && !!p.repo))
    );
  });
  return (
    <main id="main-content" className="page-shell">
      <PageHeading label="BUILDS & EXPERIMENTS" title="Projects">
        <p>
          Things I’ve built, from trading systems and developer tools to mobile
          apps and hackathon experiments.
        </p>
      </PageHeading>
      <div className="archive-highlights">
        {caseStudies.slice(0, 2).map((p) => (
          <Link href={`/projects/${p.slug}`} key={p.slug}>
            <ProjectVisual type={p.visual} />
            <h2>
              {p.title} <span>Build notes →</span>
            </h2>
          </Link>
        ))}
      </div>
      <div className="section-heading archive-heading">
        <h2>Project archive</h2>
      </div>
      <div className="project-toolbar">
        <div className="search-box">
          <Search size={17} />
          <input
            aria-label="Search projects"
            placeholder="Search projects or technologies…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={16} />
            </button>
          )}
        </div>
        <div className="project-filters" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={f === filter}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <p className="result-count" role="status">
        {filtered.length} projects · {filter.toLowerCase()}
      </p>
      <div className="featured-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No projects found.</h2>
          <p>Try a different name or technology.</p>
          <button
            className="text-button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
          >
            Reset filters <X size={15} />
          </button>
        </div>
      )}
    </main>
  );
}
