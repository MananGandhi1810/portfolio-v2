import Link from "next/link";
import Image from "next/image";
import PageHeading from "@/components/PageHeading";
import { skills, achievements, recognitionUrl } from "@/data/profile";
export const metadata = { title: "About" };
const socials = [
  ["GitHub", "https://github.com/MananGandhi1810"],
  ["LinkedIn", "https://linkedin.com/in/manangandhi1810"],
  ["X", "https://x.com/MananGandhi1810"],
  ["Instagram", "https://instagram.com/manan.py"],
  ["Chess.com", "https://www.chess.com/member/manan181006"],
  ["Matiks", "https://www.matiks.in/profile/manangandhi1810"],
];
export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <PageHeading label="A LITTLE ABOUT ME" title="Manan Gandhi">
        <p>
          Computer engineering student. Backend and systems engineer. FOSS
          enthusiast.
        </p>
      </PageHeading>
      <section className="about-intro">
        <div>
          <p>
            I like to code and build software. I’m currently a Mid-Frequency
            Trading Intern at IkiQuant Technologies, working on US index options
            infrastructure.
          </p>
          <p>
            My projects span developer tools, mobile apps, trading systems, and
            AI. I enjoy hackathons and contributing to open source, and I’ve won
            seven hackathons so far.
          </p>
          <p>
            Outside software, I tinker with hardware, participate in robotics
            competitions, and play chess and Matiks. Feel free to challenge me
            to a game.
          </p>
          <div className="social-links">
            {socials.map(([label, href]) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">
                {label} ↗
              </a>
            ))}
          </div>
        </div>
        <Image
          src="/manangandhi.png"
          alt="Manan Gandhi at an event"
          width={220}
          height={220}
          className="about-photo"
        />
      </section>
      <section className="home-section">
        <div className="section-heading">
          <h2>Education</h2>
        </div>
        <div className="education-row">
          <div>
            <h3>NMIMS MPSTME</h3>
            <p>B.Tech in Computer Engineering</p>
          </div>
          <span>2022 — 2028 · Mumbai</span>
        </div>
        <div className="education-row">
          <div>
            <h3>Kapol Vidyanidhi International School</h3>
            <p>ICSE</p>
          </div>
          <span>Graduated 2022 · Mumbai</span>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <h2>Tools I work with</h2>
          <Link href="/projects">See them in use →</Link>
        </div>
        <div className="skills-grid">
          {skills.map((g) => (
            <div className="skill-group" key={g.label}>
              <span className="section-label">{g.label}</span>
              <p>{g.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <h2>Hackathons & recognition</h2>
        </div>
        <p className="section-note">
          Selected results, including wins, runner-up finishes, and finalist
          placements.
        </p>
        <div className="achievement-list">
          {achievements.map((a) => (
            <div className="achievement-row" key={a.project}>
              <div>
                <h3>{a.project}</h3>
                <p>{a.event}</p>
              </div>
              <span>{a.result}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="home-section split-section">
        <div>
          <span className="section-label">CONTRIBUTIONS</span>
          <h2>Open source</h2>
          <p>
            Fixed a critical Zerodha Connector issue in OpenAlgo, publicly
            recognized by maintainer Rajandran R.
          </p>
          <a
            className="inline-link"
            href={recognitionUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read the acknowledgment ↗
          </a>
          <p>
            I also published{" "}
            <a
              className="inline-link"
              href="https://pub.dev/packages/cloudflare_ai"
              target="_blank"
              rel="noreferrer"
            >
              cloudflare_ai
            </a>
            , a Dart client for Cloudflare Workers AI.
          </p>
        </div>
        <div className="security-panel">
          <span className="section-label">RESPONSIBLE DISCLOSURE</span>
          <h2>Software security</h2>
          <p>
            I’ve responsibly disclosed high-severity vulnerabilities in
            production systems including Matiks, Unstop, and iicpc.com.
          </p>
          <p className="muted">
            I keep private reports and technical details out of this portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}
