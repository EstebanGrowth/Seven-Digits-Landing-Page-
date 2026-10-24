"use client";

import Script from "next/script";
import { useState } from "react";
import { site } from "@/lib/site";
import { Arrow, Calendar } from "./Icons";

// Official LeadConnector booking widget embed: an iframe plus
// form_embed.js, which resizes the iframe to fit the calendar.
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
          id={`${site.bookingWidgetId}_booking`}
          src={site.bookingUrl}
          title="Book a free strategy call with Seven Digits"
          loading="lazy"
          scrolling="no"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <p className="booking-fallback">
        Calendar not loading?{" "}
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
          Open the booking page in a new tab
        </a>
        .
      </p>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{ marginTop: 8 }}
      >
        <Calendar /> Book a Free Strategy Call <Arrow />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
