"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  Github,
} from "lucide-react";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import GitHubContrib from "@/components/GitHubContrib";
import { projects } from "@/data/projects";
const art = `        .-------------------.
        |  > hello, world_  |
        |                   |
        |    { build(); }   |
        |                   |
        '-------------------'
             /       \\
        ____/_________\\____
       /___________________\\`;
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
      <section className="hero fade-in-up">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> ENGINEERING · OPEN SOURCE · FINANCE
          </div>
          <h1>
            Hi, I’m Manan<span className="accent-text">.</span>
            <br />
            <span className="hero-muted">
              I build things
              <br />
              that do things.
            </span>
          </h1>
          <p className="hero-description">
            From trading systems to tools for developers. I’m a computer
            engineering student who likes turning curious ideas into useful
            software.
          </p>
          <div className="hero-buttons">
            <Link href="/projects" className="solid-button">
              Explore my work <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="text-button">
              Let’s talk <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-current">
            <Image
              src="/manangandhi.png"
              alt="Manan Gandhi"
              width={36}
              height={36}
            />
            <div>
              <span className="tiny-label">CURRENTLY</span>
              <p>
                Mid Frequency Trading Intern{" "}
                <span className="muted">@ IkiQuant</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hero-terminal">
          <div className="terminal-top">
            <span className="terminal-dots">● ● ●</span>
            <span>manan@portfolio: ~</span>
            <Terminal size={14} />
          </div>
          <div className="terminal-content">
            <p>
              <span className="accent-text">❯</span> cat introduction.txt
            </p>
            <pre className="ascii-computer" role="img" aria-label="ASCII illustration of a computer saying hello, world">
              {art}
            </pre>
            <p className="terminal-comment">
              {"// a little curiosity goes a long way"}
            </p>
            <div className="terminal-profile">
              <p>
                <span>name</span> Manan Gandhi
              </p>
              <p>
                <span>studying</span> Computer Engineering
              </p>
              <p>
                <span>campus</span> NMIMS MPSTME
              </p>
              <p>
                <span>interests</span> code, markets, FOSS
              </p>
            </div>
            <p className="terminal-ready">
              <span className="accent-text">❯</span> always building
              <span className="terminal-cursor" />
            </p>
          </div>
          <div className="terminal-bottom">
            <span className="status-dot" /> curiosity.exe is running
          </div>
        </div>
      </section>
      <div className="specialties">
        <span>BACKEND SYSTEMS</span>
        <span className="accent-text">+</span>
        <span>MOBILE APPS</span>
        <span className="accent-text">+</span>
        <span>DEVELOPER TOOLS</span>
        <span className="accent-text">+</span>
        <span>AI / ML</span>
      </div>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">01 / SELECTED WORK</div>
            <h2>Ideas, shipped.</h2>
          </div>
          <Link href="/projects" className="text-button">
            All {projects.length} projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="featured-grid">
          {[projects[0], projects[1], projects[2], projects[5]].map(
            (project) => (
              <ProjectCard key={project.title} project={project} />
            ),
          )}
        </div>
      </section>
      <section className="home-section about-strip">
        <div>
          <div className="eyebrow">02 / THE PERSON BEHIND THE CODE</div>
          <h2>Curiosity is the constant.</h2>
        </div>
        <div>
          <p>
            I build web apps, cross-platform mobile apps, backend services, and
            open-source tools. Lately, I’ve been exploring where technology
            meets finance.
          </p>
          <p className="muted">
            Outside the editor: hardware, robotics, chess, and the next
            hackathon.
          </p>
          <Link href="/about" className="text-button">
            A little more about me <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / OUT IN THE OPEN</div>
            <h2>Small commits. Real progress.</h2>
          </div>
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
            className="text-button"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="contribution-panel">
          <GitHubContrib username="MananGandhi1810" />
        </div>
      </section>
      <section className="home-section terminal-invite">
        <div>
          <div className="eyebrow">A DIFFERENT WAY IN</div>
          <h2>This portfolio has a terminal.</h2>
          <p className="muted">No browser required. Just a little netcat.</p>
          <Link href="/blog/portfolio-over-terminal" className="text-button">
            How I built it <ArrowUpRight size={15} />
          </Link>
        </div>
        <div>
          <button
            className="copy-command"
            onClick={copyCommand}
            aria-label="Copy terminal connection command"
          >
            <span>
              <span className="accent-text">$</span> nc sh.manan.cloud 1810
            </span>
            {copy === "copied" ? <Check size={17} /> : <Copy size={17} />}
          </button>
          <p className="copy-status" role="status">
            {copy === "copied"
              ? "Copied. See you in the terminal."
              : copy === "failed"
                ? "Select and copy the command above."
                : "Click to copy · paste into your terminal"}
          </p>
        </div>
      </section>
      <section className="closing-section">
        <div className="eyebrow">GOT SOMETHING IN MIND?</div>
        <h2>
          Let’s build something
          <br />
          <span className="accent-text">worth putting out there.</span>
        </h2>
        <Link href="/contact" className="solid-button">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
