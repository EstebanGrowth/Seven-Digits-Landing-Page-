import type { Metadata } from "next";
import Link from "next/link";
import { BusinessIdentity, ContactBlock, LegalMeta } from "@/components/LegalMeta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Seven Digits collects, uses, shares, and protects personal information, including SMS consent and opt-out details.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  ["who-we-are", "Who we are"],
  ["information-we-collect", "Information we collect"],
  ["how-we-use", "How we use information"],
  ["sms", "Text messages (SMS) and mobile information"],
  ["email", "Email communications"],
  ["sharing", "How we share information"],
  ["cookies", "Cookies and tracking"],
  ["retention", "Data retention"],
  ["security", "Data security"],
  ["your-choices", "Your choices and rights"],
  ["children", "Age requirement and children's privacy"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
] as const;

export default function PrivacyPolicyPage() {
  return (
    <article className="legal">
      <div className="container legal-inner">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <LegalMeta />

        <p>
          This Privacy Policy explains how <BusinessIdentity /> (&quot;Seven Digits,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) collects, uses, shares, and protects personal information when you visit our
          website, contact us, book a consultation, or receive our marketing and lead-generation services.
        </p>

        <nav className="legal-toc" aria-label="Privacy Policy sections">
          <p>On this page</p>
          <ol>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="who-we-are">1. Who we are</h2>
        <p>
          Seven Digits provides marketing and lead-generation services to contractors and contracting
          businesses in the United States, including social media content, paid advertising campaign
          management, prospect follow-up, lead qualification, and appointment-booking workflows.
          You can reach us using the details in the <a href="#contact">Contact us</a> section.
        </p>

        <h2 id="information-we-collect">2. Information we collect</h2>
        <h3>Information you give us</h3>
        <p>When you book a consultation through our website, email, call, or work with us, you may provide:</p>
        <ul>
          <li>Contact details: your name, email address, and phone number.</li>
          <li>Business details: your business name, type of contracting business, and service area.</li>
          <li>Information about your goals, marketing challenges, services, and project or marketing requirements.</li>
          <li>Scheduling details you enter when booking a consultation.</li>
          <li>
            Your communication preferences, including whether you chose to opt in to receive text messages.
          </li>
          <li>Anything else you choose to share with us during a consultation or while we provide services.</li>
        </ul>
        <p>
          We ask only for information we need to respond to you and provide our services. Please do not send
          us sensitive information such as Social Security numbers, financial account numbers, or health information.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          When you book a consultation through the calendar on our website, our CRM provider records details of the
          booking, such as the date and time it was made and any consent choices you selected, and may record
          technical information such as your IP address and browser type.
        </p>
        <p>
          Like most websites, our hosting provider may also automatically process standard server log
          information, such as IP addresses, browser type, and pages requested, to deliver and secure the website.
        </p>

        <h3>Information related to service delivery</h3>
        <p>
          If you become a client, we may process information about people who respond to the marketing we run for
          your business (for example, their name, contact details, and project details). Those people are inquiring
          about your services, so we handle their information on your behalf, follow up with them, and deliver their
          inquiries to you, in line with our agreement with you. We do not buy, sell, or rent lead lists.
        </p>

        <h2 id="how-we-use">3. How we use information</h2>
        <ul>
          <li>To respond to your inquiry and communicate with you about it.</li>
          <li>To schedule, confirm, and remind you about consultations.</li>
          <li>To manage leads and keep organized records in our customer relationship management (CRM) system.</li>
          <li>To evaluate whether our services are a good fit for your business and to prepare proposals.</li>
          <li>To provide, manage, and improve our services, including follow-up with and qualification of prospects for our clients.</li>
          <li>To send you appointment-related text messages, only if you have agreed to receive them (see Section 4).</li>
          <li>To send you emails related to your inquiry or our services, and marketing emails where permitted (see Section 5).</li>
          <li>To keep records of consent and opt-out requests.</li>
          <li>To protect our website and business against fraud, spam, and abuse, and to comply with legal obligations.</li>
        </ul>

        <h2 id="sms">4. Text messages (SMS) and mobile information</h2>
        <div className="callout">
          <p>
            <strong>
              We do not sell, rent, or share mobile information or SMS consent/opt-in data with third parties or
              affiliates for their own marketing or promotional purposes.
            </strong>
          </p>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or promotional
            purposes. Information sharing with subcontractors in support services, such as customer service, is
            permitted. All other use case categories exclude text messaging originator opt-in data and consent; this
            information will not be shared with any third parties.
          </p>
        </div>
        <ul>
          <li>
            <strong>Optional consent.</strong> We send text messages only to people who have opted in. The text message
            consent box on our booking form is unchecked by default and is not required to book a call or purchase our
            services.
          </li>
          <li>
            <strong>Messages we send.</strong> With your consent, we may text you appointment confirmations, reminders,
            scheduling updates, and responses to your inquiry. We do not send marketing or promotional text messages.
          </li>
          <li>
            <strong>How you can opt in.</strong> You can opt in by checking the optional text message box on our booking
            form, or by telling us during a phone call that we may text you about an appointment you scheduled with us.
            When consent is given on a call, we record the date, time, phone number, and the messages you agreed to
            receive.
          </li>
          <li>
            <strong>A phone number alone is not consent.</strong> Entering your phone number, submitting a form,
            booking a consultation, or calling us does not, by itself, mean you have agreed to receive text messages
            from us.
          </li>
          <li>
            <strong>Frequency and costs.</strong> Message frequency may vary. Message and data rates may apply,
            depending on your mobile plan.
          </li>
          <li>
            <strong>Opting out.</strong> Reply <strong>STOP</strong> to any message to stop receiving texts from us.
            You may also contact us using the details below. After you opt out, we may send one message confirming
            your request.
          </li>
          <li>
            <strong>Help.</strong> Reply <strong>HELP</strong> for help, or contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
          </li>
          <li>
            <strong>Consent records.</strong> We keep records of text message consent and opt-out requests, including
            when and how consent was given.
          </li>
        </ul>
        <p>
          More details about our messaging program are in the SMS section of our{" "}
          <Link href="/terms-and-conditions#sms-terms">Terms and Conditions</Link>.
        </p>

        <h2 id="email">5. Email communications</h2>
        <p>
          We use email to respond to inquiries, coordinate consultations, and communicate with clients. If we
          send you marketing emails, each one will include a way to unsubscribe. You can also ask us to stop at
          any time by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. Even after you unsubscribe from
          marketing emails, we may still send messages related to an active inquiry or service relationship.
        </p>

        <h2 id="sharing">6. How we share information</h2>
        <p>
          We do not sell your personal information, and we do not buy, sell, or rent lead lists. We share information
          only as described below:
        </p>
        <ul>
          <li>
            <strong>GoHighLevel / LeadConnector.</strong> We use the HighLevel platform (also known as
            LeadConnector) as our CRM and to store contact records, manage our booking calendar, and send emails
            and text messages. Information you submit through our booking calendar is stored there.
          </li>
          <li>
            <strong>Website hosting.</strong> Our website is hosted by Vercel, which processes technical
            information needed to deliver the site.
          </li>
          <li>
            <strong>Communication providers.</strong> Telecommunications carriers and messaging providers process
            phone numbers and message content as needed to deliver calls, emails, and text messages.
          </li>
          <li>
            <strong>Delivering a client&apos;s own inquiries.</strong> When we run marketing for a contractor, people
            who respond are asking about that contractor&apos;s services, and we deliver their inquiry to that contractor
            so they can respond. This is not a sale of personal information, it never includes mobile numbers or SMS
            opt-in data collected for Seven Digits&apos; own text messages, and it does not apply to people who contact
            Seven Digits about our own services.
          </li>
          <li>
            <strong>Legal and safety reasons.</strong> We may disclose information if required by law, to respond
            to valid legal process, or to protect the rights, property, or safety of Seven Digits or others.
          </li>
        </ul>
        <p>
          Our service providers may use information only to provide services to us and are not permitted to use
          SMS opt-in data for their own marketing.
        </p>

        <h2 id="cookies">7. Cookies and tracking</h2>
        <p>
          Our website does not currently use analytics tools, advertising pixels, or marketing cookies of its own.
          Our fonts are served from our own website, not loaded from a third party.
        </p>
        <p>
          Our homepage embeds a booking calendar provided by LeadConnector (HighLevel). When that calendar loads
          or when you use it, LeadConnector may use cookies or similar technologies under its own privacy
          practices. If you prefer, you can contact us by email or phone to schedule instead.
        </p>
        <p>
          If we add analytics or advertising technologies in the future, we will update this policy before doing so
          and provide any choices required by law.
        </p>

        <h2 id="retention">8. Data retention</h2>
        <p>
          We keep personal information for as long as needed for the purposes described in this policy: to respond
          to your inquiry, maintain our business relationship, provide services, and meet legal, accounting, and
          record-keeping needs. We keep records of SMS consent and opt-out requests for as long as needed to
          demonstrate compliance. When information is no longer needed, we delete it or de-identify it within a
          reasonable time.
        </p>

        <h2 id="security">9. Data security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect personal information,
          including encrypted (HTTPS) connections to our website and access controls on our business accounts.
          No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2 id="your-choices">10. Your choices and rights</h2>
        <p>You can contact us at any time to:</p>
        <ul>
          <li>Ask what personal information we have about you.</li>
          <li>Ask us to correct inaccurate information.</li>
          <li>Ask us to delete your information, subject to records we must keep (for example, records of an opt-out).</li>
          <li>Opt out of text messages (reply STOP) or marketing emails (use the unsubscribe link).</li>
        </ul>
        <p>
          Depending on where you live, you may have additional rights under state privacy laws. We will respond to
          requests as required by applicable law, and we may need to verify your identity before acting on a request.
          We will not discriminate against you for making a request.
        </p>

        <h2 id="children">11. Age requirement and children&apos;s privacy</h2>
        <p>
          Our website and services are intended for businesses and adults. We do not knowingly collect personal
          information from anyone under 18, and you must be at least 18 years old to opt in to our text messages. If you believe a child has provided us with information, please
          contact us and we will delete it.
        </p>

        <h2 id="changes">12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will post the updated version on this
          page and update the effective date. If we make material changes to how we use or share personal
          information, we will provide additional notice where appropriate, such as on our website or by email.
        </p>

        <h2 id="contact">13. Contact us</h2>
        <p>For privacy questions or requests, contact Seven Digits:</p>
        <ContactBlock />
      </div>
    </article>
  );
}
