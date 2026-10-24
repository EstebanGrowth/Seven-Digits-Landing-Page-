import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="center-page">
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>This page doesn&apos;t exist.</h1>
        <p>The link may be broken, or the page may have moved.</p>
        <div className="center-actions">
          <Link href="/" className="btn btn-primary">
            Back to home <Arrow />
          </Link>
          <Link href="/#contact" className="btn btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
