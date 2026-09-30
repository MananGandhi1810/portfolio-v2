"use client";

import Image from "next/image";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import GitHubContrib from "@/components/GitHubContrib";
import { projects } from "@/data/projects";

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
    <main id="main-content" className="home-shell">
      <section className="intro">
        <div className="intro-heading">
          <Image
            src="/manangandhi.png"
            alt="Manan Gandhi"
            width={64}
            height={64}
          />
          <div>
            <h1>Manan Gandhi</h1>
            <p className="muted">Computer engineering student · NMIMS MPSTME</p>
          </div>
        </div>
        <p>
          Hi, I’m Manan. I like to code and build projects. I’m currently a Mid
          Frequency Trading Intern at IkiQuant Technologies.
        </p>
        <p>
          I work on backend systems, Flutter apps, and developer tools. I’m a
          FOSS enthusiast, enjoy finding bugs and security vulnerabilities, and
          participate in hackathons.
        </p>
        <p>
          Outside software, I tinker with hardware, take part in robotics
          competitions, and play chess.{" "}
          <Link href="/about">More about me →</Link>
        </p>
        <div className="intro-links">
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/manangandhi1810"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:hello@manan.cloud">hello@manan.cloud</a>
          <Link href="/Manan_Gandhi_Resume.pdf" target="_blank">
            Resume ↗
          </Link>
        </div>
      </section>

      <section className="terminal-note">
        <p>You can also open this portfolio in your terminal:</p>
        <button
          className="copy-command"
          onClick={copyCommand}
          aria-label="Copy terminal connection command"
        >
          <code>
            <span className="accent-text">$</span> nc sh.manan.cloud 1810
          </code>
          {copy === "copied" ? <Check size={15} /> : <Copy size={15} />}
        </button>
        <p className="copy-status" role="status">
          {copy === "copied" ? (
            "Copied."
          ) : copy === "failed" ? (
            "Select and copy the command above."
          ) : (
            <Link href="/blog/portfolio-over-terminal">
              I wrote about how it works →
            </Link>
          )}
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Some things I’ve built</h2>
          <Link href="/projects">All projects →</Link>
        </div>
        <div className="featured-grid">
          {[projects[0], projects[2], projects[1], projects[5]].map(
            (project) => (
              <ProjectCard key={project.title} project={project} />
            ),
          )}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Experience</h2>
          <Link href="/experience">Details →</Link>
        </div>
        <div className="experience-summary">
          <div>
            <h3>Mid Frequency Trading Intern</h3>
            <p className="muted">IkiQuant Technologies</p>
          </div>
          <span className="muted">Mar 2026 — Present</span>
        </div>
        <div className="experience-summary">
          <div>
            <h3>Software Development Intern</h3>
            <p className="muted">Sykes & Rays Equities</p>
          </div>
          <span className="muted">May — Jul 2025</span>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link href="/blog">All posts →</Link>
        </div>
        <Link href="/blog/portfolio-over-terminal" className="post-row">
          <span>How I Serve My Portfolio Over The Terminal</span>
          <span className="muted">Jan 2025</span>
        </Link>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <h2>GitHub activity</h2>
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
          >
            @MananGandhi1810 ↗
          </a>
        </div>
        <GitHubContrib username="MananGandhi1810" />
      </section>
      <p className="contact-note">
        Want to talk about a project?{" "}
        <a href="mailto:hello@manan.cloud">Email me</a> or{" "}
        <Link href="/contact">leave a message</Link>.
      </p>
    </main>
  );
}
