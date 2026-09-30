import PageHeading from "@/components/PageHeading";
import { experience, recognitionUrl } from "@/data/profile";
export const metadata = { title: "Experience" };
export default function ExperiencePage() {
  return (
    <main id="main-content" className="page-shell">
      <PageHeading label="WORK" title="Experience">
        <p>
          Trading infrastructure, backend systems, and the tools people use
          around them.
        </p>
      </PageHeading>
      <div className="role-list">
        {experience.map((e) => (
          <article className="role-panel" key={e.company}>
            <div className="role-heading">
              <div>
                <span className="section-label">{e.specialty}</span>
                <h2>{e.role}</h2>
                <p className="role-company">{e.company}</p>
              </div>
              <div className="role-date">
                <span>{e.dates}</span>
                <span>{e.location}</span>
              </div>
            </div>
            <p>{e.summary}</p>
            <div className="role-results">
              {e.results.map((r) => (
                <div key={r.value}>
                  <strong>{r.value}</strong>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
            <ul className="detail-list">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {e.company.startsWith("Sykes") && (
              <a
                className="inline-link"
                href={recognitionUrl}
                target="_blank"
                rel="noreferrer"
              >
                OpenAlgo maintainer acknowledgment ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
