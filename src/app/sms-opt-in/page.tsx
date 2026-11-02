import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FormEmbed } from "@/components/FormEmbed";
import { Check } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment Text Reminders",
  description: "Opt in to receive appointment confirmations and reminders by text message from Seven Digits.",
  alternates: { canonical: "/sms-opt-in" },
};

export default function SmsOptInPage() {
  // Hidden until the GoHighLevel opt-in form is configured in src/lib/site.ts.
  if (!site.smsOptInFormUrl) notFound();

  return (
    <section className="section" aria-labelledby="optin-title">
      <div className="container booking-wrap">
        <div className="side-info">
          <span className="eyebrow">Appointment reminders</span>
          <h1 id="optin-title" className="section-title">
            Get your appointment reminders by text.
          </h1>
          <p>
            Seven Digits helps contractors in the United States attract potential customers and create more opportunities
            to win their next job. If you have a strategy call scheduled with us, you can choose to receive appointment
            confirmations, reminders, and the link to join the call by text message.
          </p>
          <ul className="check-list">
            {[
              "Text messages are optional",
              "Appointment messages only, never marketing",
              "Reply STOP anytime to opt out",
            ].map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FormEmbed src={site.smsOptInFormUrl} title="Seven Digits appointment text reminders opt-in form" />
          <p className="sms-disclosure">
            <strong>SMS consent is optional.</strong> By checking the SMS box on this form, you agree to receive recurring
            automated text messages from {site.smsBrand} regarding appointments you schedule, including booking
            confirmations, reminders, and appointment updates. Message frequency varies. Msg &amp; data rates may apply.
            Reply STOP to opt out or HELP for help. Consent is not a condition of booking. You can submit the form without
            checking the box.
          </p>
          <p className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true"> | </span>
            <Link href="/sms-terms">SMS Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
