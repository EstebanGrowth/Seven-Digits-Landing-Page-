# Seven Digits — Website

Marketing website for **Seven Digits**, a marketing and lead-generation business for contractors in the United States.

Built with **Next.js 16 (App Router) + TypeScript**, plain CSS, no UI libraries. Designed to deploy on **Vercel**.

| Route | Purpose |
| --- | --- |
| `/` | Landing page: hero, problem, services, how it works, why us, who we help, CTA, booking calendar, lead form, FAQ |
| `/privacy-policy` | Privacy Policy (includes SMS / mobile data provisions) |
| `/terms-and-conditions` | Terms and Conditions (includes SMS program terms) |
| `/thank-you` | Shown only after the API confirms a submission was saved in GoHighLevel |
| `/api/lead` | Server-side form handler → GoHighLevel API (POST only) |
| any other path | Custom 404 page |
| `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/icon.svg` | SEO assets, generated |

---

## 1. Run locally

Requirements: Node.js 20.9 or newer (tested on Node 24).

```bash
npm install
```

```bash
cp .env.example .env.local
```

Edit `.env.local` with real values (see section 3), then:

```bash
npm run dev
```

Open http://localhost:3000.

> Without GoHighLevel credentials, the site works fully **except** form submission, which honestly shows "Your information was not sent" with the email and phone as a fallback. It never fakes a success.

## 2. Test and build

```bash
npm test
```

```bash
npm run typecheck
```

```bash
npm run build
```

```bash
npm start
```

`npm test` runs unit tests (Node's built-in test runner) for validation, phone normalization, consent parsing, and the presence of all required SMS disclosure terms.

## 3. Environment variables

| Variable | Required | Where it is used | Description |
| --- | --- | --- | --- |
| `GHL_PRIVATE_INTEGRATION_TOKEN` | Yes, for the form | Server only | GoHighLevel **Private Integration Token** for the Seven Digits sub-account. Create it in the sub-account under *Settings → Private Integrations*. Scopes needed: `contacts.write` (and `contacts.readonly`). **Never** prefix with `NEXT_PUBLIC_`. |
| `GHL_LOCATION_ID` | Yes, for the form | Server only | The sub-account (Location) ID, found in *Settings → Business Profile* or in the sub-account URL. |
| `NEXT_PUBLIC_SITE_URL` | Recommended after the domain is connected | Canonical URLs, Open Graph, sitemap | e.g. `https://www.yourdomain.com` (no trailing slash). If unset on Vercel, the project's production `.vercel.app` URL is used automatically. |

No secrets are used in client-side code. `.env*.local` files are git-ignored.

## 4. How the lead form works (GoHighLevel integration)

Status: **implemented, but not yet verified against your live GoHighLevel account** (no credentials were available during development). Test it after adding the env vars (see checklist below).

Flow on submit (`src/app/api/lead/route.ts`):

1. Server re-validates every field (`src/lib/validation.ts`). A hidden honeypot field rejects simple bots.
2. `POST https://services.leadconnectorhq.com/contacts/upsert` creates or updates the contact (name, email, phone in E.164, business name, source "Seven Digits website").
3. `POST /contacts/{id}/tags` adds tags without removing existing ones:
   - `website-lead` (always)
   - `sms-consent-transactional` (only if that box was checked)
   - `sms-consent-marketing` (only if that box was checked)
4. `POST /contacts/{id}/notes` adds a **consent record note** containing: submission ID, UTC timestamp, form/source ID, page URL, IP address, user agent, disclosure version, the phone number, whether each checkbox was checked, and the **exact disclosure text** shown for each, plus the optional inquiry details.
5. Only if **all three** calls succeed does the API return success and the browser go to `/thank-you`. Any failure shows an honest error and nothing is faked.

Personal data is not written to server logs; only the failing step, HTTP status, and submission ID are logged.

**If you change the consent wording**, edit `src/lib/consent.ts` and bump `CONSENT_VERSION`.

### Remaining GoHighLevel setup (manual)

- [ ] Create the Private Integration Token and copy the Location ID into Vercel env vars.
- [ ] Submit a real test from the deployed site and confirm in GHL: contact created, tags present, consent note present and readable.
- [ ] Optional: build a GHL workflow triggered by the tag `website-lead` (e.g. notify you by email, assign owner, create opportunity in a pipeline).
- [ ] Make sure no workflow sends SMS to a contact **unless** the matching consent tag is present (`sms-consent-transactional` for non-marketing texts, `sms-consent-marketing` for promotional texts).
- [ ] Check the sub-account's duplicate-contact setting (*Settings → Business Profile → Allow duplicate contact*) so upsert behaves as expected.

### Booking calendar

The homepage embeds the existing LeadConnector booking widget (`https://api.leadconnectorhq.com/widget/booking/zsdp0ZpY4tlVh9shDhl8`) with the official `form_embed.js` resize script, plus a fallback button that opens the same URL in a new tab. The embed loaded correctly during local testing.

The booking calendar is a separate GHL feature; it is **not** connected to the website form. Configure in GHL:

- [ ] Calendar availability, time zone, meeting location/link, buffer times.
- [ ] Booking confirmation and reminder notifications (email). Only enable SMS reminders for contacts with consent.
- [ ] Note: the booking widget has its own form fields. Review whether it shows any SMS consent language; if it does not, do not send SMS to people who only booked through the calendar.

## 5. Deploy to Vercel

Option A — Git (recommended):

1. Create a GitHub repository and push this folder (`git init`, commit, push). Do not commit `.env.local`.
2. Log into https://vercel.com → **Add New… → Project** → import the repository.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`, default output.
4. In **Settings → Environment Variables**, add `GHL_PRIVATE_INTEGRATION_TOKEN` and `GHL_LOCATION_ID` (Production + Preview).
5. Deploy. Vercel gives you a `https://<project>.vercel.app` URL.

Option B — CLI:

```bash
npm i -g vercel
```

```bash
vercel
```

```bash
vercel env add GHL_PRIVATE_INTEGRATION_TOKEN
```

```bash
vercel env add GHL_LOCATION_ID
```

```bash
vercel --prod
```

The site is **not** live until you do this and open the URL yourself.

## 6. Connect a custom domain later

1. Buy the domain from any registrar.
2. Vercel → Project → **Settings → Domains** → add `yourdomain.com` and `www.yourdomain.com`.
3. At your registrar, create the DNS records Vercel shows (usually an `A` record for the apex and a `CNAME` for `www` pointing to Vercel). Wait for verification; HTTPS is automatic.
4. Set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` (or the apex you chose as primary) in Vercel env vars and **redeploy**.
5. Consider a business email on the new domain later; if you change the email, update `src/lib/site.ts` and your A2P registration to match.

## 7. Before publishing: owner to-do

Edit `src/lib/site.ts`:

- `legalEffectiveDate`: set to the real date you publish the policies (e.g. `"November 3, 2026"`). Until set, no date is displayed. Never backdate it.
- `showOwnerNameInLegalPages`: `false` by default. Set to `true` if a legal review or the A2P Sole Proprietor flow requires the owner's legal name on the policies. It is never shown on the homepage.

Also: the Privacy Policy and Terms are carefully written drafts, **not legal advice**. Have them reviewed by a qualified attorney before relying on them.

## 8. Verification checklist (run on the deployed URL)

- [ ] `/`, `/privacy-policy`, `/terms-and-conditions`, `/thank-you` all load; an unknown URL shows the 404 page.
- [ ] Header links (Services, How It Works, Contact) scroll to the right sections; mobile menu opens/closes (also with Esc).
- [ ] Every "Book a Free Strategy Call" button goes to the booking section or opens the booking URL.
- [ ] The embedded calendar loads; the "Open the booking page in a new tab" link works.
- [ ] Submitting the empty form shows errors on Full name, Business name, Email, Phone, and focuses the first one.
- [ ] Invalid email / 9-digit phone show specific errors.
- [ ] Both SMS checkboxes are **unchecked** on page load, and the form submits with neither checked.
- [ ] Each consent box has working Privacy Policy and Terms links next to it.
- [ ] With env vars set: a valid submission goes to `/thank-you` and shows a reference code; the contact, tags, and consent note appear in GHL.
- [ ] With env vars missing or wrong: an error message with email/phone fallback appears, and you are **not** redirected.
- [ ] Opening `/thank-you` directly does not claim a submission was received.
- [ ] Footer shows email, phone, Privacy Policy, Terms, copyright; no street address anywhere.
- [ ] Share the URL in a messaging app to check the Open Graph preview.

## Project structure

```
src/
  app/
    layout.tsx               Fonts (self-hosted), metadata, header/footer
    page.tsx                 Landing page
    globals.css              All styles
    api/lead/route.ts        Form handler → GoHighLevel
    privacy-policy/          Privacy Policy
    terms-and-conditions/    Terms and Conditions
    thank-you/               Post-submission confirmation
    not-found.tsx            404
    robots.ts, sitemap.ts, opengraph-image.tsx, icon.svg
  components/                Header, Footer, LeadForm, BookingEmbed, LegalMeta, Icons
  lib/
    site.ts                  Business facts and config (single source of truth)
    consent.ts               SMS disclosure text + version
    validation.ts            Shared form validation
    ghl.ts                   Server-only GoHighLevel client
tests/validation.test.ts
A2P-CHECKLIST.md
```

## Notes and limitations

- No analytics, pixels, or cookies are set by the site itself. The embedded LeadConnector calendar may set its own cookies (disclosed in the Privacy Policy). If you add analytics or ad pixels later, update the Privacy Policy first.
- There is no rate limiting beyond the honeypot. If spam appears, add Vercel Firewall rules or a CAPTCHA service (and disclose it).
- No images or stock photography are used. All visuals are CSS/SVG made for this site.
