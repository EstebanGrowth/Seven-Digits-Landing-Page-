import { BookingEmbed } from "@/components/BookingEmbed";
import { Arrow, Check, Mail, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

const pipeline = [
  { label: "Attention", title: "Get seen", text: "Content and ads put your business in front of people in your service area." },
  { label: "Inquiries", title: "Get contacted", text: "Interested people reach out or request information." },
  { label: "Follow-up", title: "Get qualified", text: "Prospects are followed up with and relevant details are gathered." },
  { label: "Opportunities", title: "You close", text: "Qualified or potentially qualified prospects are handed to you." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <span className="eyebrow">Marketing for contractors</span>
          <h1 id="hero-title">
            More qualified opportunities. <span className="mark">More chances to close.</span>
          </h1>
          <p className="hero-sub">
            Seven Digits helps contractors attract potential customers, follow up with interested
            prospects, and create more opportunities to win their next job, so you can spend less
            time searching for work and more time selling it.
          </p>
          <div className="hero-ctas">
            <a href="#book" className="btn btn-primary">
              Book a Free Strategy Call <Arrow />
            </a>
            <a href="#book" className="btn btn-secondary">
              Tell Us About Your Business
            </a>
          </div>
          <p className="hero-note">A straightforward conversation about your business. No obligation.</p>

          <div className="pipeline">
            <p className="pipeline-label">What we help you build</p>
            <ol>
              {pipeline.map((p, i) => (
                <li key={p.label}>
                  <span className="pipeline-step">
                    {String(i + 1).padStart(2, "0")} · {p.label}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
            <p className="pipeline-foot">
              Each stage is different: not every view becomes an inquiry, and not every inquiry
              becomes a job. Our work is focused on moving real prospects toward a conversation with you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Free strategy call</span>
            <h2 id="cta-title">Let&apos;s talk about your next jobs.</h2>
            <p>
              Tell us about your business, how you get customers today, your service area, and where
              you want to grow. We&apos;ll share an honest view of whether and how we can help. Not every
              business is a fit, and we&apos;ll tell you if we don&apos;t think it is.
            </p>
            <div className="hero-ctas">
              <a href="#book" className="btn btn-primary">
                Book a Free Strategy Call <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking + contact */}
      <section id="book" className="section section-alt" aria-labelledby="book-title">
        <div id="contact" className="container booking-wrap">
          <div className="side-info">
            <span className="eyebrow">Contact</span>
            <h2 id="book-title" className="section-title">
              Book a free strategy call.
            </h2>
            <p>Pick a time that works for you and tell us a bit about your business. On the call we&apos;ll cover:</p>
            <ul className="check-list">
              {[
                "Your business and the services you want to grow",
                "Your service area and ideal customers",
                "How you get customers and follow up today",
                "Your goals, and whether we're a good fit",
              ].map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="contact-lead">Prefer to reach out directly?</p>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${site.email}`}>
                  <span className="icon-dot">
                    <Mail />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>
                  <span className="icon-dot">
                    <Phone />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
          <BookingEmbed />
        </div>
      </section>

    </>
  );
}
