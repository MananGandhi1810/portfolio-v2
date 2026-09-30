"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
  ["/", "Home"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/blog", "Writing"],
  ["/about", "About"],
  ["/contact", "Contact"],
];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const active = (href: string) =>
    href === "/" ? path === href : path.startsWith(href);
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <Image src="/manangandhi.png" alt="" width={40} height={40} />
          <span>
            Manan Gandhi
            <span className="nav-subtitle">backend / systems / FOSS</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label], i) => (
            <Link
              key={href}
              href={href}
              aria-current={active(href) ? "page" : undefined}
              className={active(href) ? "active" : ""}
            >
              <span className="nav-number">0{i + 1}</span>
              {label}
              <span className="nav-mark" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/Manan_Gandhi_Resume.pdf" target="_blank">
            Resume <ArrowUpRight size={14} />
          </Link>
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub
          </a>
          <a href="mailto:hello@manan.cloud">
            Email <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="nav-note">
          <span className="section-label">ALSO OVER TCP</span>
          <code>nc sh.manan.cloud 1810</code>
          <Link href="/blog/portfolio-over-terminal">How it works →</Link>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={active(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/Manan_Gandhi_Resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Resume ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
