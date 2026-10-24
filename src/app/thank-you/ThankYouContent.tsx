"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/Icons";
import { site } from "@/lib/site";

// Shows a confirmation only when this browser just received a confirmed
// submission id from /api/lead. Visiting the URL directly never claims
// that something was received.
export function ThankYouContent() {
  const [submissionId, setSubmissionId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    try {
      setSubmissionId(sessionStorage.getItem("sd_submission"));
    } catch {
      setSubmissionId(null);
    }
  }, []);

  if (submissionId === undefined) return <div style={{ minHeight: 320 }} />;

  if (!submissionId) {
    return (
      <>
        <span className="eyebrow">Seven Digits</span>
        <h1>Looking to get in touch?</h1>
        <p>
          We don&apos;t see a recent form submission from this browser. If you meant to send us your information,
          please use the form on our homepage, or contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <div className="center-actions">
          <Link href="/#contact" className="btn btn-primary">
            Go to the contact form <Arrow />
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <span className="eyebrow">Request received</span>
      <h1>Thanks. We got your information.</h1>
      <p>
        We&apos;ll review what you shared and reach out using the contact details you provided. If you&apos;d like to
        pick a time now, you can book a free strategy call.
      </p>
      <p className="ref-code">Reference: {submissionId.slice(0, 8).toUpperCase()}</p>
      <div className="center-actions">
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Book a Free Strategy Call <Arrow />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
      <p style={{ marginTop: 28, fontSize: "0.9375rem" }}>
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
      </p>
    </>
  );
}
