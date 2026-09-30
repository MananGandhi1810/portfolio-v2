import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeading from "@/components/PageHeading";
import ProjectVisual from "@/components/ProjectVisual";
import { caseStudies } from "@/data/case-studies";
export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: caseStudies.find((p) => p.slug === slug)?.title || "Project",
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = caseStudies.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="main-content" className="page-shell">
      <Link href="/projects" className="back-link">
        ← Projects
      </Link>
      <PageHeading label={p.category} title={p.title}>
        <p>{p.intro}</p>
      </PageHeading>
      <ProjectVisual type={p.visual} />
      <div className="case-meta">
        <div className="project-tech">
          {p.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer">
              Live project ↗
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer">
              Source code ↗
            </a>
          )}
        </div>
      </div>
      <div className="case-content">
        <section>
          <span className="section-label">THE PROBLEM</span>
          <h2>What needed solving</h2>
          <p>{p.problem}</p>
        </section>
        <section>
          <span className="section-label">THE BUILD</span>
          <h2>Approach</h2>
          <p>{p.approach}</p>
          <ul className="detail-list">
            {p.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        <section className="outcome-panel">
          <span className="section-label">OUTCOME</span>
          <p>{p.outcome}</p>
        </section>
      </div>
    </main>
  );
}
