# Seven Digits — Website

Marketing website for **Seven Digits**, a marketing and lead-generation business for contractors in the United States.

Built with **Next.js 16 (App Router) + TypeScript**, plain CSS, no UI libraries. Designed to deploy on **Vercel**.

| Route | Purpose |
| --- | --- |
| `/` | Landing page: hero, call-to-action, booking calendar with contact details |
| `/privacy-policy` | Privacy Policy (includes SMS / mobile data provisions) |
| `/terms-and-conditions` | Terms and Conditions (includes SMS program terms) |
| `/thank-you` | Neutral thank-you page (can be used as the calendar's redirect URL) |
| any other path | Custom 404 page |
| `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/icon.svg` | SEO assets, generated |

## How visitors contact you

The only form on the site is the **GoHighLevel / LeadConnector booking calendar** (`https://api.leadconnectorhq.com/widget/booking/zsdp0ZpY4tlVh9shDhl8`), embedded in the "Book a free strategy call" section next to the email and phone. Bookings, contacts, and consent are created and stored by GoHighLevel itself, so **the website needs no API keys or GHL credentials**.

The embed uses the official `form_embed.js` script, which grows the iframe as the visitor moves from the calendar to the details form, so the "Schedule meeting" button stays reachable. The iframe can also scroll internally as a fallback, and a button opens the same booking page in a new tab.

---

## 1. Run locally

Requirements: Node.js 20.9 or newer (tested on Node 24).

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## 2. Check and build

```bash
npm run typecheck
```

```bash
npm run build
```

```bash
npm start
```

## 3. Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended after the domain is connected | e.g. `https://www.yourdomain.com` (no trailing slash). Used for canonical URLs, Open Graph, and the sitemap. If unset on Vercel, the project's production `.vercel.app` URL is used automatically. |

No secrets are used anywhere in the site.

## 4. GoHighLevel setup (manual, in GHL)

- [ ] **SMS consent on the booking form.** The calendar's default checkbox ("I confirm that I want to receive content from this company…") is not enough for A2P. Replace it with compliant consent text. See `A2P-CHECKLIST.md` §4 for the recommended wording.
- [ ] Calendar availability, time zone, meeting location/link, buffer times.
- [ ] Booking confirmation and reminder notifications (email). Only send SMS reminders to contacts who opted in.
- [ ] Optional: set the calendar's post-booking redirect to `https://<your-domain>/thank-you`. Test it, because the redirect may open inside the embedded iframe.
- [ ] Optional: a workflow on "Appointment booked" to notify you and create an opportunity.

## 5. Deploy to Vercel

The GitHub repo is `EstebanGrowth/Seven-Digits-Landing-Page-`.

1. Vercel → **Add New… → Project** → import the repository.
2. Framework preset: **Next.js** (auto-detected). No environment variables are needed for the first deploy.
3. Deploy. Vercel gives you a `https://<project>.vercel.app` URL.
4. Every push to `main` redeploys automatically.

## 6. Connect a custom domain later

1. Buy the domain from any registrar.
2. Vercel → Project → **Settings → Domains** → add `yourdomain.com` and `www.yourdomain.com`.
3. At your registrar, create the DNS records Vercel shows. HTTPS is automatic.
4. Set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` in Vercel env vars and **redeploy**.

## 7. Before publishing: owner to-do

Edit `src/lib/site.ts`:

- `legalEffectiveDate`: set to the real date you publish the policies (e.g. `"November 3, 2026"`). Until set, no date is displayed. Never backdate it.
- `showOwnerNameInLegalPages`: `false` by default. Set to `true` if a legal review or the A2P Sole Proprietor flow requires the owner's legal name on the policies.

The Privacy Policy and Terms are drafts, **not legal advice**. Have them reviewed by a qualified attorney.

## 8. Verification checklist (run on the deployed URL)

- [ ] `/`, `/privacy-policy`, `/terms-and-conditions`, `/thank-you` all load; an unknown URL shows the 404 page.
- [ ] The Contact link scrolls to the booking section; the mobile menu opens/closes (also with Esc).
- [ ] Every "Book a Free Strategy Call" button goes to the booking section.
- [ ] Calendar loads; pick a date and time → the details form appears and the **Schedule meeting** button is visible without the form being cut off (desktop and phone).
- [ ] Make one real test booking and confirm it appears in GHL with the consent choice recorded.
- [ ] "Open the booking page in a new tab" works.
- [ ] Footer shows email, phone, Privacy Policy, Terms, copyright; no street address anywhere.

## Project structure

```
src/
  app/
    layout.tsx               Fonts (self-hosted), metadata, header/footer
    page.tsx                 Landing page
    globals.css              All styles
    privacy-policy/          Privacy Policy
    terms-and-conditions/    Terms and Conditions
    thank-you/               Thank-you page
    not-found.tsx            404
    robots.ts, sitemap.ts, opengraph-image.tsx, icon.svg
  components/                Header, Footer, BookingEmbed, LegalMeta, Icons
  lib/site.ts                Business facts and config (single source of truth)
A2P-CHECKLIST.md
```

## Notes

- No analytics, pixels, or cookies are set by the site itself. The embedded LeadConnector calendar may set its own cookies (disclosed in the Privacy Policy).
- No images or stock photography are used. All visuals are CSS/SVG made for this site.
