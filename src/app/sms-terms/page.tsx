import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock, LegalMeta } from "@/components/LegalMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions",
  description: "Terms for the Seven Digits appointment text message program: message types, frequency, STOP, HELP, and support.",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <article className="legal">
      <div className="container legal-inner">
        <span className="eyebrow">Legal</span>
        <h1>SMS Terms and Conditions</h1>
        <LegalMeta />

        <div className="callout">
          <p>
            <strong>Program:</strong> {site.smsProgramName}. Text messages are sent by {site.smsBrand}. Message
            frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out. Reply{" "}
            <strong>HELP</strong> for help. Consent is not a condition of booking or purchase.
          </p>
        </div>

        <h2 id="program">1. Program description</h2>
        <p>
          {site.smsBrand} sends appointment-related text messages only to people who explicitly agree to receive them by
          checking the optional, unchecked SMS consent box on a form on our website
          {site.smsOptInFormUrl ? (
            <>
              {" "}(for example, our <Link href="/sms-opt-in">appointment text reminders form</Link>)
            </>
          ) : null}
          . Entering a phone number alone does not sign anyone up for text messages.
        </p>

        <h2 id="messages">2. Messages you may receive</h2>
        <ul>
          <li>Appointment booking confirmations.</li>
          <li>Appointment reminders before a scheduled meeting.</li>
          <li>Appointment scheduling updates, such as a change of time.</li>
          <li>The link to join a scheduled video call.</li>
        </ul>
        <p>
          We do not send marketing or promotional text messages, and we do not share your opt-in with anyone for marketing.
        </p>

        <h2 id="frequency">3. Message frequency and costs</h2>
        <ul>
          <li>
            Message frequency varies depending on the appointments you schedule, usually up to 3 messages per appointment.
          </li>
          <li>Message and data rates may apply, depending on your mobile carrier and plan.</li>
        </ul>

        <h2 id="opt-out">4. How to opt out</h2>
        <p>
          Reply <strong>STOP</strong> to any message at any time to stop receiving text messages from us. You will receive
          one final message confirming that you have been unsubscribed. You can also opt out by contacting us using the
          details below. To start receiving messages again, reply <strong>START</strong>.
        </p>

        <h2 id="help">5. How to get help</h2>
        <p>
          Reply <strong>HELP</strong> to any message for help, or contact us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
        </p>

        <h2 id="consent">6. Consent</h2>
        <ul>
          <li>Consent to receive text messages is optional and is not a condition of booking a call or purchasing any service.</li>
          <li>The SMS consent box is unchecked by default and is separate from any other agreement.</li>
          <li>You must be at least 18 years old to opt in.</li>
          <li>If you change or deactivate your phone number, reply STOP from that number or let us know.</li>
        </ul>

        <h2 id="carriers">7. Carrier disclaimer</h2>
        <p>Carriers are not liable for delayed or undelivered messages. Message delivery is not guaranteed.</p>

        <h2 id="privacy">8. Privacy</h2>
        <p>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. We do not
          sell or share SMS opt-in data or personal information with third parties for marketing or promotional purposes.
          See our <Link href="/privacy-policy">Privacy Policy</Link> for details. Our general{" "}
          <Link href="/terms-and-conditions">Terms and Conditions</Link> also apply.
        </p>

        <h2 id="contact">9. Contact</h2>
        <p>{site.smsBrand}</p>
        <ContactBlock />
      </div>
    </article>
  );
}
