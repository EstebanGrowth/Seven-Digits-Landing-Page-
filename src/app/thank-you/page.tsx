import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

// Can be used as the booking calendar's redirect URL in GoHighLevel.
// Worded so it never claims something was received if opened directly.
export default function ThankYouPage() {
  return (
    <section className="center-page">
      <div className="container">
        <span className="eyebrow">Seven Digits</span>
        <h1>Thanks for reaching out.</h1>
        <p>
          If you booked a strategy call, you&apos;ll receive a confirmation with the details using the contact
          information you provided. If you don&apos;t see it, check your spam folder or contact us directly.
        </p>
        <div className="center-actions">
          <Link href="/" className="btn btn-primary">
            Back to home <Arrow />
          </Link>
          <Link href="/#book" className="btn btn-secondary">
            Book a call
          </Link>
        </div>
        <p style={{ marginTop: 28, fontSize: "0.9375rem" }}>
          Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    </section>
  );
}
