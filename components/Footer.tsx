import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="wordmark">
          <span className="accent-text">~/</span> manan.
        </Link>
        <p>Manan Gandhi</p>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@manan.cloud">Email ↗</a>
        <a
          href="https://www.linkedin.com/in/manangandhi1810"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/MananGandhi1810/portfolio-v2"
          target="_blank"
          rel="noreferrer"
        >
          Source ↗
        </a>
      </div>
      <span className="tiny-label">
        © {new Date().getFullYear()} MANAN GANDHI
      </span>
    </footer>
  );
}
