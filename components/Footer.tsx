export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Manan Gandhi</span>
      <div>
        <a href="mailto:hello@manan.cloud">Email</a>
        <a
          href="https://www.linkedin.com/in/manangandhi1810"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MananGandhi1810/portfolio-v2"
          target="_blank"
          rel="noreferrer"
        >
          Source ↗
        </a>
      </div>
      <span className="footer-sign">~/manan.cloud</span>
    </footer>
  );
}
