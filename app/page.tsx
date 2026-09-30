"use client";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import GitHubContrib from "@/components/GitHubContrib";
import ProjectVisual from "@/components/ProjectVisual";
import { caseStudies } from "@/data/case-studies";
import { experience, recognitionUrl } from "@/data/profile";
export default function Home() {
  const [copy, setCopy] = useState("idle");
  async function copyCommand() {
    try {
      await navigator.clipboard.writeText("nc sh.manan.cloud 1810");
      setCopy("copied");
    } catch {
      setCopy("failed");
    }
    setTimeout(() => setCopy("idle"), 2500);
  }
  return (
    <main id="main-content" className="page-shell home-shell">
      <section className="home-intro">
        <div>
          <span className="section-label">
            COMPUTER ENGINEERING · NMIMS MPSTME
          </span>
          <h1>
            Hi, I’m Manan.
            <br />
            <span>
              I build software,
              <br />
              and the systems behind it.
            </span>
          </h1>
          <p>
            I work on backend systems, trading infrastructure, and developer
            tools. I’m a FOSS enthusiast and I like understanding how things
            work by building them.
          </p>
          <div className="intro-links">
            <Link className="button-primary" href="/projects">
              Projects <ArrowUpRight size={16} />
            </Link>
            <Link className="button-secondary" href="/about">
              About me →
            </Link>
          </div>
        </div>
        <aside className="current-panel">
          <Image
            src="/manangandhi.png"
            alt="Manan Gandhi"
            width={72}
            height={72}
          />
          <span className="section-label">CURRENTLY</span>
          <h2>IkiQuant Technologies</h2>
          <p>
            Mid-Frequency Trading Intern
            <br />
            <span className="muted">US Index Options</span>
          </p>
          <div className="current-bottom">
            <span>March 2026 — Present</span>
            <Link href="/experience">Details →</Link>
          </div>
        </aside>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">PROJECTS</span>
            <h2>What I’ve been building</h2>
          </div>
          <Link href="/projects">All projects →</Link>
        </div>
        <div className="featured-projects">
          {[caseStudies[0], caseStudies[1], caseStudies[2]].map((p, i) => (
            <article
              className={`feature-project ${i === 0 ? "feature-wide" : ""}`}
              key={p.slug}
            >
              <Link
                className="visual-link"
                href={`/projects/${p.slug}`}
                aria-label={`Read about ${p.title}`}
              >
                <ProjectVisual type={p.visual} />
              </Link>
              <div className="feature-copy">
                <span className="section-label">{p.category}</span>
                <h3>
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.intro}</p>
                <div className="project-links">
                  <Link href={`/projects/${p.slug}`}>Build notes →</Link>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Source ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">WORK</span>
            <h2>Systems used in production</h2>
          </div>
          <Link href="/experience">Experience →</Link>
        </div>
        <div className="result-grid">
          {experience.flatMap((e) =>
            e.results.map((r) => (
              <div className="result-card" key={r.value}>
                <span className="result-value">{r.value}</span>
                <p>{r.label}</p>
                <span className="section-label">{e.company}</span>
              </div>
            )),
          )}
        </div>
        <p className="section-note">
          From my work on trading execution, market-data pipelines, and
          post-market automation.
        </p>
      </section>
      <section className="home-section split-section">
        <div>
          <span className="section-label">OPEN SOURCE & SECURITY</span>
          <h2>Beyond my own repositories</h2>
          <p>
            I’ve contributed to OpenAlgo and published a Dart client for
            Cloudflare Workers AI. I also responsibly disclose security issues I
            find in production applications.
          </p>
          <Link href="/about" className="inline-link">
            Contributions and disclosures →
          </Link>
        </div>
        <div className="contribution-list">
          <a href={recognitionUrl} target="_blank" rel="noreferrer">
            <span>OpenAlgo</span>
            <p>Zerodha Connector fix, recognized by maintainer Rajandran R.</p>
            <span className="inline-link">Acknowledgment ↗</span>
          </a>
          <a
            href="https://pub.dev/packages/cloudflare_ai"
            target="_blank"
            rel="noreferrer"
          >
            <span>cloudflare_ai</span>
            <p>Published Dart package for Cloudflare Workers AI.</p>
            <span className="inline-link">pub.dev ↗</span>
          </a>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">WRITING</span>
            <h2>Notes from building</h2>
          </div>
          <Link href="/blog">All posts →</Link>
        </div>
        <Link href="/blog/portfolio-over-terminal" className="writing-preview">
          <span className="writing-index">01</span>
          <div>
            <h3>How I Serve My Portfolio Over The Terminal</h3>
            <p>
              TCP sockets, netcat, and a different way to open this website.
            </p>
          </div>
          <span className="muted">Jan 2025 ↗</span>
        </Link>
      </section>
      <section className="home-section terminal-note">
        <div>
          <span className="section-label">TRY IT IN YOUR TERMINAL</span>
          <p>The same portfolio, over a TCP connection.</p>
        </div>
        <div>
          <button
            className="copy-command"
            onClick={copyCommand}
            aria-label="Copy terminal connection command"
          >
            <code>
              <span className="accent-text">$</span> nc sh.manan.cloud 1810
            </code>
            {copy === "copied" ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <p className="copy-status" role="status">
            {copy === "copied"
              ? "Copied."
              : copy === "failed"
                ? "Select and copy the command above."
                : "Click to copy"}
          </p>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">GITHUB</span>
            <h2>Activity</h2>
          </div>
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
          >
            @MananGandhi1810 ↗
          </a>
        </div>
        <div className="activity-panel">
          <GitHubContrib username="MananGandhi1810" />
        </div>
      </section>
      <p className="contact-note">
        Want to talk about a project?{" "}
        <a href="mailto:hello@manan.cloud">hello@manan.cloud</a> or{" "}
        <Link href="/contact">leave a message →</Link>
      </p>
    </main>
  );
}
