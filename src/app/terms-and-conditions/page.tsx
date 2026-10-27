import type { Metadata } from "next";
import Link from "next/link";
import { BusinessIdentity, ContactBlock, LegalMeta } from "@/components/LegalMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the Seven Digits website, including our SMS program terms.",
  alternates: { canonical: "/terms-and-conditions" },
};

const sections = [
  ["about", "About these terms"],
  ["services", "Our services"],
  ["no-guarantee", "No guarantee of results"],
  ["acceptable-use", "Acceptable use"],
  ["submissions", "Information you submit"],
  ["sms-terms", "SMS program terms"],
  ["ip", "Intellectual property"],
  ["third-party", "Third-party services and links"],
  ["disclaimers", "Disclaimers"],
  ["liability", "Limitation of liability"],
  ["law", "Governing law"],
  ["changes", "Changes to these terms"],
  ["contact", "Contact us"],
] as const;

export default function TermsPage() {
  return (
    <article className="legal">
      <div className="container legal-inner">
        <span className="eyebrow">Legal</span>
        <h1>Terms and Conditions</h1>
        <LegalMeta />

        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the website operated by{" "}
          <BusinessIdentity /> (&quot;Seven Digits,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), and our text
          messaging program. By using this website, you agree to these Terms. If you do not agree, please do not use
          the website.
        </p>

        <nav className="legal-toc" aria-label="Terms sections">
          <p>On this page</p>
          <ol>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="about">1. About these terms</h2>
        <p>
          This website provides information about Seven Digits and our services, and allows you to contact us and
          book a consultation. Information on this website is for general informational purposes. It is not an
          offer to provide services on specific terms.
        </p>

        <h2 id="services">2. Our services</h2>
        <p>
          Seven Digits provides marketing and lead-generation services to contractors and contracting businesses in
          the United States. Depending on the plan agreed with each client, services may include social media content
          strategy and production, paid advertising campaign management, lead generation, prospect follow-up
          workflows, lead qualification, delivery of qualified or potentially qualified opportunities, and
          appointment-booking workflows.
        </p>
        <p>
          Not every service is included in every engagement. The specific services, deliverables, fees, payment terms,
          timelines, and obligations of each party for any client engagement are governed by a separate written client
          agreement. If there is a conflict between these Terms and a signed client agreement, the client agreement
          controls for that engagement.
        </p>

        <h2 id="no-guarantee">3. No guarantee of results</h2>
        <p>
          Marketing results depend on many factors outside our control, including your market, competition, services,
          pricing, reputation, advertising budget, advertising platform policies, and how quickly and effectively
          opportunities are followed up on and sold. <strong>Seven Digits does not guarantee any specific number of
          views, leads, inquiries, appointments, closed jobs, revenue, return on investment, or other marketing
          performance.</strong> Any examples, estimates, or projections we discuss are illustrations only.
        </p>
        <p>
          Views, leads, appointments, and closed jobs are different outcomes. A lead or appointment is an opportunity,
          not a sale. Estimates, pricing, sales conversations, and closing are the responsibility of the contractor.
        </p>

        <h2 id="acceptable-use">4. Acceptable use</h2>
        <p>When using this website, you agree not to:</p>
        <ul>
          <li>Submit false, misleading, or another person&apos;s information without their permission.</li>
          <li>Use the website for any unlawful purpose or in violation of these Terms.</li>
          <li>Send spam, automated submissions, or malicious code, or attempt to interfere with the website&apos;s operation or security.</li>
          <li>Attempt to gain unauthorized access to any part of the website or its related systems.</li>
          <li>Copy, scrape, or reuse website content except as permitted in Section 7.</li>
        </ul>

        <h2 id="submissions">5. Information you submit</h2>
        <p>
          When you book a consultation or contact us, you agree that the information you provide is accurate and
          that you are authorized to provide it. Submitting an inquiry or booking a consultation does not create a client
          relationship or obligate either party to enter into an agreement. We handle personal information as described
          in our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2 id="sms-terms">6. SMS program terms</h2>
        <p>
          Seven Digits may send text messages only to people who have opted in, for example through an optional consent
          checkbox on our booking form, or who have otherwise given consent in a way that is recorded and permitted by
          law.
        </p>
        <h3>Types of messages</h3>
        <ul>
          <li>
            <strong>Appointment messages:</strong> appointment confirmations, reminders, scheduling updates, and
            responses to your inquiry. Sent only if you checked the text message box on our booking form or agreed
            during a phone call with us to receive texts about an appointment you scheduled.
          </li>
          <li>
            <strong>No marketing messages:</strong> Seven Digits does not send marketing or promotional text messages.
          </li>
        </ul>
        <h3>Program details</h3>
        <ul>
          <li><strong>Program name:</strong> Seven Digits</li>
          <li><strong>Message frequency:</strong> Message frequency may vary.</li>
          <li><strong>Costs:</strong> Message and data rates may apply.</li>
          <li>
            <strong>Opt out:</strong> Reply <strong>STOP</strong> at any time to stop receiving messages. You may
            receive one final message confirming your opt-out. You can also opt out by contacting us.
          </li>
          <li>
            <strong>Help:</strong> Reply <strong>HELP</strong> for help, or contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
          </li>
          <li>
            <strong>Not a condition of purchase:</strong> Consent to receive text messages is not a condition of
            purchasing any goods or services, submitting an inquiry, or booking a consultation.
          </li>
          <li>
            <strong>Delivery:</strong> Carriers are not liable for delayed or undelivered messages. Message delivery
            is not guaranteed.
          </li>
          <li>
            <strong>Privacy:</strong> See our <Link href="/privacy-policy#sms">Privacy Policy</Link>. We do not sell or
            share mobile information or SMS opt-in data with third parties or affiliates for their marketing purposes.
          </li>
        </ul>
        <p>
          If you change or deactivate your phone number, please let us know or reply STOP from that number so we can
          update our records.
        </p>

        <h2 id="ip">7. Intellectual property</h2>
        <p>
          The content on this website, including text, design, graphics, and the Seven Digits name and logo, is owned by
          or licensed to Seven Digits and is protected by applicable intellectual property laws. You may view and print
          pages for your personal, non-commercial reference. Any other use requires our prior written permission.
        </p>

        <h2 id="third-party">8. Third-party services and links</h2>
        <p>
          Our website uses third-party services, including a booking calendar provided by LeadConnector (HighLevel).
          Your use of third-party services is subject to their own terms and privacy practices. We are not responsible
          for the content, availability, or practices of third-party services or websites.
        </p>

        <h2 id="disclaimers">9. Disclaimers</h2>
        <p>
          To the fullest extent permitted by law, this website and its content are provided &quot;as is&quot; and &quot;as
          available,&quot; without warranties of any kind, whether express or implied, including implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website
          will be uninterrupted, error-free, or free of harmful components. Nothing on this website is legal, financial,
          or tax advice.
        </p>

        <h2 id="liability">10. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Seven Digits will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or for any loss of profits, revenue, business, or data, arising out of or
          related to your use of, or inability to use, this website. Some jurisdictions do not allow certain limitations
          of liability, so some of these limitations may not apply to you. Liability relating to client services is
          governed by the applicable client agreement.
        </p>

        <h2 id="law">11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New Jersey, without regard to its conflict-of-law rules,
          except where the law of another jurisdiction is required to apply.
        </p>

        <h2 id="changes">12. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. Updated Terms will be posted on this page with a new effective
          date. Your continued use of the website after changes are posted means you accept the updated Terms.
        </p>

        <h2 id="contact">13. Contact us</h2>
        <p>Questions about these Terms or our SMS program? Contact Seven Digits:</p>
        <ContactBlock />
      </div>
    </article>
  );
}
