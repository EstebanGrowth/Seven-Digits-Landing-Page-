# A2P 10DLC Readiness Checklist — Seven Digits

This checklist helps prepare the GoHighLevel (LeadConnector) A2P 10DLC brand and campaign registration. It is **not legal advice**, and building this website does **not** approve the brand or campaign. Approval is decided by The Campaign Registry and the mobile carriers. Nothing has been submitted on your behalf.

---

## 1. Business identity (must match the registration exactly)

| Field | Value | Status |
| --- | --- | --- |
| Brand / business name shown on website | Seven Digits | ✅ On site |
| Legal name of the owner | Raul Esteban Arcila Echavarria | ⚠️ Not shown on site by default (see note) |
| Business type | Sole Proprietor | ✅ Stated in policies |
| EIN | None (never applied) | ℹ️ Sole Proprietor path does not use an EIN |
| Business email | sevendigits@esteban-growth.com | ✅ On site |
| Business phone | 908-545-9903 | ✅ On site |
| Location | New Jersey, United States | ✅ On site |
| Street address | Private (not on website) | ⚠️ Enter only in the registration form, not the website |
| Website | _fill in after deploy:_ `https://________________` | ⬜ |

- [ ] **Verify the current Sole Proprietor path in HighLevel's own help docs** before starting. HighLevel and TCR rules change. Confirm in particular:
  - [ ] Whether the Sole Proprietor brand needs a mobile number that can receive an OTP verification text (and that it is a personal US mobile, not a VoIP number, if required).
  - [ ] Email requirements (some flows reject free email domains or require the email domain to match the website; `esteban-growth.com` ≠ your future site domain, so check this).
  - [ ] Limits for Sole Proprietor brands (e.g. one campaign, one number, lower throughput).
- [ ] **Trade name.** If you operate under "Seven Digits" without forming an LLC, check whether New Jersey requires you to file a trade name / alternate name certificate (for sole proprietors this is typically filed with the county clerk). Registrations may compare names against official records.
- [ ] **Owner name on policies.** If the registration flow or a reviewer requires the owner's legal name on the Privacy Policy/Terms, set `showOwnerNameInLegalPages: true` in `src/lib/site.ts` and redeploy.

## 2. Public URLs (fill in after deployment)

| Item | URL |
| --- | --- |
| Website | `https://________________/` |
| Opt-in page (form with SMS consent) | `https://________________/#contact` |
| Privacy Policy | `https://________________/privacy-policy` |
| Terms and Conditions | `https://________________/terms-and-conditions` |

- [ ] All four URLs load publicly over HTTPS, without login, on desktop and mobile.
- [ ] Privacy Policy and Terms are linked from the footer of every page and next to each consent checkbox.
- [ ] `legalEffectiveDate` in `src/lib/site.ts` set to the real publication date.

## 3. Website identification and contact

- [ ] Site clearly identifies **Seven Digits** (header, footer, policies).
- [ ] Legitimate contact info is visible: email and phone in the footer, contact section, and both policies.
- [ ] No fake testimonials, logos, metrics, addresses, or social links.

## 4. Consent implementation (verify on the live site)

- [ ] Both SMS checkboxes are **unchecked by default**.
- [ ] **Transactional** (non-marketing) and **marketing** consents are **two separate checkboxes**.
- [ ] Both are **optional**. The form submits successfully with neither checked.
- [ ] Consent is stated as **not a condition of purchase** in each disclosure, the Privacy Policy, and the Terms.
- [ ] Marketing consent is **not** bundled with accepting terms or submitting the form.
- [ ] Each disclosure includes: program/brand name (Seven Digits), message type, "Message frequency may vary," "Message and data rates may apply," "Reply STOP to opt out or HELP for help," and links to Privacy Policy and Terms.
- [ ] Privacy Policy states that mobile information and SMS opt-in data are **not sold or shared with third parties/affiliates for marketing**.
- [ ] Privacy Policy states that providing a phone number alone is not SMS consent.
- [ ] Terms include an SMS section (message types, frequency, rates, STOP, HELP, carrier disclaimer, privacy link, contact info).

## 5. Consent records

- [ ] After a test submission, open the contact in GoHighLevel and confirm:
  - [ ] Tag `website-lead` exists.
  - [ ] Tag `sms-consent-transactional` and/or `sms-consent-marketing` exists **only** if the matching box was checked.
  - [ ] A note titled "WEBSITE FORM SUBMISSION — SMS CONSENT RECORD" includes the submission ID, timestamp, source, IP, disclosure version, each checkbox state, and the exact disclosure text.
- [ ] Current disclosure version: `2026-10-24.v1` (bump `CONSENT_VERSION` in `src/lib/consent.ts` whenever wording changes).

## 6. Campaign description must match reality

When writing the A2P campaign, describe **only** the opt-in method that actually exists:

> Suggested opt-in description (edit to match your final setup): "Contractors and business owners visit [website URL] and complete the contact form at [URL]/#contact. The form includes two separate, optional, unchecked checkboxes: one to receive non-marketing texts about their inquiry, consultation scheduling, appointment reminders, and requested follow-up, and one to receive marketing texts. Each checkbox shows the brand name, message frequency, 'Message and data rates may apply,' STOP/HELP instructions, that consent is not a condition of purchase, and links to the Privacy Policy and Terms. Submitting the form is possible without checking either box."

- [ ] Sample messages you submit match what you will really send, include "Seven Digits," and include opt-out language (e.g. "Reply STOP to opt out").
- [ ] Campaign use case matches the boxes (e.g. mixed/marketing only if you will actually send marketing texts to people who checked that box).
- [ ] Do **not** list the booking calendar as an SMS opt-in method unless the calendar itself shows compliant SMS consent language that is recorded. A booked appointment alone is not consent.
- [ ] Do **not** describe verbal, paper, or keyword opt-in unless you actually implement and record it.

## 7. Other consent sources

- [ ] **Verbal consent:** if you ever collect it (e.g. on a call), ask explicitly for each category, and record date, time, who obtained it, the wording used, and the number in GHL. Only then mention verbal opt-in in the campaign.
- [ ] A phone number found online, a business card, a call, a booked appointment, or a form submission without a checked box is **not** SMS consent by itself.
- [ ] Prospects of your *clients* (contractor leads) are a separate matter: any texting to them needs its own compliant opt-in on the client-facing lead forms/ads. Do not reuse this website's consent for them.

## 8. Before sending any SMS

- [ ] GoHighLevel **brand** registration approved.
- [ ] GoHighLevel **campaign** registration approved.
- [ ] Sending number purchased/assigned and attached to the approved campaign.
- [ ] Messaging settings reviewed: STOP/HELP auto-replies enabled and HELP reply contains Seven Digits + contact info; DND/opt-out handling active.
- [ ] Workflows only text contacts with the matching consent tag, and stop on opt-out.
- [ ] Quiet hours respected (send during reasonable local hours).

## 9. Remaining manual actions (summary)

1. Deploy to Vercel and confirm the public URLs (README §5).
2. Add `GHL_PRIVATE_INTEGRATION_TOKEN` and `GHL_LOCATION_ID` in Vercel and redeploy.
3. Submit a test lead and verify the contact, tags, and consent note in GHL.
4. Set `legalEffectiveDate` in `src/lib/site.ts` to the real publication date and redeploy.
5. Decide whether the owner's legal name must appear in the policies (`showOwnerNameInLegalPages`).
6. Check New Jersey trade-name filing requirements for "Seven Digits."
7. Have an attorney review the Privacy Policy and Terms.
8. Review HighLevel's current Sole Proprietor A2P instructions (OTP mobile, email rules, limits).
9. Configure the booking calendar's availability and notifications; review whether it collects SMS consent.
10. (Later) Buy the domain, connect it in Vercel, set `NEXT_PUBLIC_SITE_URL`, and update the website URL in the A2P registration if it was already submitted with the `.vercel.app` URL.
11. Fill in the URL fields in section 2 and submit the brand and campaign registration yourself.
