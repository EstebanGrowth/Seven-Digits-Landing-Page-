import { BookingEmbed } from "@/components/BookingEmbed";
import { Arrow, Chat, Check, Clock, Handoff, Hammer, Mail, Megaphone, Phone, Shuffle, Target } from "@/components/Icons";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

const pipeline = [
  { label: "Attention", title: "Get seen", text: "Content and ads put your business in front of people in your service area." },
  { label: "Inquiries", title: "Get contacted", text: "Interested people reach out or request information." },
  { label: "Follow-up", title: "Get qualified", text: "Prospects are followed up with and relevant details are gathered." },
  { label: "Opportunities", title: "You close", text: "Qualified or potentially qualified prospects are handed to you." },
];

const problems = [
  {
    icon: <Shuffle />,
    title: "Referrals are unpredictable",
    text: "Word of mouth is valuable, but it rarely arrives on a schedule you can plan crews and cash flow around.",
  },
  {
    icon: <Clock />,
    title: "Inquiries go cold",
    text: "When you're on a job site all day, a new inquiry can sit for hours. By the time you call back, the homeowner may have moved on.",
  },
  {
    icon: <Hammer />,
    title: "Your time is split",
    text: "Every hour spent hunting for the next job is an hour not spent estimating, selling, or running the work you already have.",
  },
];

const services = [
  {
    icon: <Megaphone />,
    title: "Content that earns attention",
    text: "Social media content strategy and production that shows potential customers what you do and why they should consider you.",
    points: ["Content planning around your services", "Production of posts and short-form media", "Consistent presence in your market"],
  },
  {
    icon: <Target />,
    title: "Paid advertising, where it fits",
    text: "Campaign management for paid ads aimed at people in your service area who may need what you offer.",
    points: ["Campaign setup and management", "Targeting by location and service", "Ongoing review and adjustment"],
  },
  {
    icon: <Chat />,
    title: "Prospect follow-up systems",
    text: "Workflows that help interested prospects get a timely response instead of waiting until you're off the job site.",
    points: ["Prompt responses to new inquiries", "Structured follow-up sequences", "Appointment booking where applicable"],
  },
  {
    icon: <Handoff />,
    title: "Qualification and handoff",
    text: "We gather relevant details from prospects and pass along qualified or potentially qualified opportunities in an organized way.",
    points: ["Collection of project and contact details", "Basic qualification questions", "Organized delivery to you and your team"],
  },
];

const steps = [
  {
    title: "Understand your business",
    text: "We learn about your services, the jobs you want more of, your service area, and how you currently get customers.",
  },
  {
    title: "Build the marketing approach",
    text: "We put together content, advertising, or both, designed to attract relevant prospects in your area.",
  },
  {
    title: "Follow up and gather details",
    text: "Interested prospects are followed up with, and relevant information about their project is collected.",
  },
  {
    title: "Hand off the opportunity",
    text: "Qualified or potentially qualified opportunities are passed to you. You handle estimates, sales, and closing.",
  },
];

const principles = [
  {
    title: "Opportunities over vanity metrics",
    text: "Views and likes can be useful signals, but they don't pay your crew. We keep attention on what matters to a contractor: real conversations with people who may need the work done.",
  },
  {
    title: "Clear, honest communication",
    text: "You'll know what we're working on, what's happening with your campaigns, and what we're seeing. Views, leads, appointments, and closed jobs are different things, and we report on them that way.",
  },
  {
    title: "Practical execution",
    text: "No jargon-heavy strategy decks. We focus on doing the work: producing content, managing campaigns, following up, and getting opportunities into your hands.",
  },
  {
    title: "Realistic expectations",
    text: "Marketing results depend on your market, offer, pricing, reviews, budget, and how quickly opportunities are worked. We don't promise specific numbers, and we'll tell you if we don't think we're a good fit.",
  },
];

const trades = [
  "General contractors",
  "Remodeling",
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Painting",
  "Landscaping",
  "Concrete",
  "Flooring",
];

const fit = [
  "You do quality work and can take on more jobs.",
  "You want a more consistent flow of new opportunities.",
  "You can respond to and work the opportunities you receive.",
  "You'd rather spend your time selling and doing the work than chasing leads.",
];

const faqs = [
  {
    q: "Do you guarantee a number of leads or jobs?",
    a: "No. Results depend on many factors, including your market, services, pricing, reputation, ad budget, and how quickly opportunities are followed up on. We focus on doing the work well and communicating clearly about what we see.",
  },
  {
    q: "Is every service included with every client?",
    a: "No. The services we provide depend on the plan we agree on together. Some contractors need content, some need advertising, and some need help with follow-up. Scope, deliverables, and fees are set out in a separate written agreement.",
  },
  {
    q: "Who closes the sale?",
    a: "You do. Our role is to help create and organize opportunities. Estimates, pricing, sales conversations, and closing stay with you and your team.",
  },
  {
    q: "What happens on the strategy call?",
    a: "We talk through your business, the services you want to grow, your service area, how you get customers today, and your goals. If we think we can help, we'll explain how. If not, we'll tell you.",
  },
  {
    q: "Do I have to agree to receive text messages?",
    a: "No. Text message consent is optional and is never required to submit an inquiry, book a call, or work with us. You can opt out at any time by replying STOP.",
  },
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
            <a href="#contact" className="btn btn-secondary">
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

      {/* Problem */}
      <section className="section section-alt" aria-labelledby="problem-title">
        <div className="container split">
          <div>
            <span className="eyebrow">The challenge</span>
            <h2 id="problem-title" className="section-title">
              Great work doesn&apos;t always mean a steady pipeline.
            </h2>
            <p className="lead-text">
              Many contractors are excellent at what they do and still find new business uneven:
              busy one month, scrambling the next. That&apos;s not a reflection of your craft. Finding
              customers, responding quickly, and following up consistently is a separate job, and
              it&apos;s hard to do well while you&apos;re running projects.
            </p>
          </div>
          <ul className="problem-list">
            {problems.map((p) => (
              <li key={p.title}>
                <span className="icon-dot">{p.icon}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Services</span>
            <h2 id="services-title" className="section-title">
              From attention to opportunity.
            </h2>
            <p className="lead-text">
              We help with the parts of customer acquisition that take time away from running your
              business: getting noticed, responding to interest, and organizing who&apos;s ready to talk.
            </p>
          </div>
          <div className="card-grid">
            {services.map((s, i) => (
              <article className="card" key={s.title}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="icon-dot">{s.icon}</span>
                  <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="scope-note">
            <strong>Scope depends on your plan.</strong> Not every service is included in every
            engagement. We recommend what makes sense for your business, and the specific services,
            deliverables, and fees are agreed in writing before work begins.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section section-alt" aria-labelledby="how-title">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How it works</span>
            <h2 id="how-title" className="section-title">
              A simple process. <span className="mark">You stay focused on closing.</span>
            </h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="steps-foot">
            We help create and organize opportunities. Estimates, pricing, and closing stay with you.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Seven Digits</span>
            <h2 id="why-title" className="section-title">
              Focused on what actually moves your business.
            </h2>
          </div>
          <div className="principles">
            {principles.map((p) => (
              <div className="principle" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="section section-alt" aria-labelledby="who-title">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we help</span>
            <h2 id="who-title" className="section-title">
              Built for contractors across the United States.
            </h2>
            <p className="lead-text">
              Our services are designed for contractors and contracting businesses that serve
              homeowners and property owners. The kinds of businesses we&apos;re built to work with include:
            </p>
            <ul className="chips" aria-label="Intended audience">
              {trades.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="fine">
              This describes who our services are intended for. It isn&apos;t a list of past clients
              or a claim of specialization in any single trade.
            </p>
          </div>
          <div className="fit-card">
            <h3>We&apos;re likely a good fit if…</h3>
            <ul className="check-list">
              {fit.map((f) => (
                <li key={f}>
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
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
              <a href="#contact" className="btn btn-secondary">
                Tell Us About Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="section section-alt" aria-labelledby="book-title">
        <div className="container booking-wrap">
          <div className="side-info">
            <span className="eyebrow">Book a call</span>
            <h2 id="book-title" className="section-title">
              Book a free strategy call.
            </h2>
            <p>Pick a time that works for you. On the call we&apos;ll cover:</p>
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
          </div>
          <BookingEmbed />
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="section" aria-labelledby="contact-title">
        <div className="container form-wrap">
          <div className="side-info">
            <span className="eyebrow">Contact</span>
            <h2 id="contact-title" className="section-title">
              Tell us about your business.
            </h2>
            <p>
              Prefer to write first? Share a few details and we&apos;ll get back to you to discuss your
              goals. Only the first four fields are required.
            </p>
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
          <LeadForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title" className="section-title">
              Straight answers.
            </h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
