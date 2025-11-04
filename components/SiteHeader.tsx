"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="backdrop-blur-sm sticky top-0 z-20 w-full border-b border-white/6 bg-black/40 site-header-compact">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 min-w-0">
          <Link href="/" className="text-base sm:text-lg font-bold tracking-tight text-zinc-50 accent-underline accent-text micro-anim truncate" onClick={closeMenu}>
            Manan Gandhi
          </Link>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4 text-sm text-zinc-300 shrink-0">
          {/* Social links - responsive sizing */}
          <div className="ml-2 sm:ml-4 flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/MananGandhi1810"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/MananGandhi1810"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label="Twitter (X)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/manan.py"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 social-button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </div>

      {/* Menu - shown when hamburger is clicked */}
      {isOpen && (
        <div className="border-white/6 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-white/5 transition-colors text-zinc-300 hover:text-zinc-100"
              onClick={closeMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
