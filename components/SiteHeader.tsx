"use client";
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
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="accent-text">~/</span> manan
          <span className="wordmark-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              className={path === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href="https://github.com/MananGandhi1810"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <Link
            href="/Manan_Gandhi_Resume.pdf"
            target="_blank"
            className="resume-link"
          >
            Resume <ArrowUpRight size={14} />
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
              href={href}
              key={href}
              aria-current={path === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
