"use client";

import Script from "next/script";

// Official LeadConnector form embed: an iframe plus form_embed.js, which
// resizes the iframe to fit the form.
export function FormEmbed({ src, title }: { src: string; title: string }) {
  const formId = src.split("/").filter(Boolean).pop() ?? "form";
  return (
    <div className="booking-frame form-frame">
      <iframe id={`inline-${formId}`} src={src} title={title} scrolling="yes" />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
