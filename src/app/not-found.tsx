import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
      </div>
      <div className="container page-enter">
        <p className="nf-code gradient-text">404</p>
        <h1>This page wandered off</h1>
        <p className="lead">The page you are looking for does not exist, or it was moved. Let&apos;s get you back on track.</p>
        <div className="hero-cta center">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight className="arrow" />
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
