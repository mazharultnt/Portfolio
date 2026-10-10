import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { Github, Linkedin, Mail } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="brand">
              <span className="brand-mark">M</span>
              <span>{site.name}</span>
            </Link>
            <p>
              Front-end developer from Bangladesh. I build clean, responsive and SEO-friendly interfaces with
              React, Next.js and TypeScript, and I am open to remote work.
            </p>
          </div>

          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/experience">Experience</Link></li>
              <li><Link href="/blog">Latest articles</Link></li>
              <li><a href={site.githubRepos} target="_blank" rel="noopener noreferrer">All repositories</a></li>
              <li><Link href="/contact">Start a conversation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-row">
              <a className="social-link" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a className="social-link" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a className="social-link" href={`mailto:${site.email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
            <p style={{ marginTop: 16, fontSize: "0.93rem" }}>{site.email}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript and custom CSS.</p>
        </div>
      </div>
    </footer>
  );
}
