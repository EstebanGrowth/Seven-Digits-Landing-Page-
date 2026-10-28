"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { site } from "@/lib/site";

// Official LeadConnector booking widget embed: an iframe plus
// form_embed.js, which grows the iframe as the visitor moves from the
// calendar to the details form. The iframe can also scroll internally,
// so the submit button stays reachable even if resizing fails.
export function BookingEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="booking-frame">
        {!loaded && (
          <div className="booking-loading" aria-hidden="true">
            Loading calendar…
          </div>
        )}
        <iframe
          id={`${site.bookingWidgetId}_1729987200000`}
          src={site.bookingUrl}
          title="Book a free strategy call with Seven Digits"
          scrolling="yes"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <p className="booking-fallback">
        Calendar not loading?{" "}
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
          Open the booking page in a new tab
        </a>
        .
      </p>
      <p className="sms-disclosure">
        <strong>Text messages are optional.</strong> You can book a call without checking the text message box on the
        booking form. If you check it, Seven Digits (Raul Esteban Arcila Echavarria) may text you appointment confirmations, reminders, scheduling
        updates, and responses to your inquiry. We do not send marketing texts. Message frequency varies. Message and
        data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-and-conditions">Terms and Conditions</Link>.
      </p>
    </div>
  );
}
