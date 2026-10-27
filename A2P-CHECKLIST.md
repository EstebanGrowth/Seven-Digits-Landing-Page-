# A2P 10DLC Readiness Checklist — Seven Digits

Copy-paste text for the GHL forms is in `A2P-SUBMISSION.md`. This checklist helps prepare the GoHighLevel (LeadConnector) A2P 10DLC brand and campaign registration. It is **not legal advice**, and building this website does **not** approve the brand or campaign. Approval is decided by The Campaign Registry and the mobile carriers. Nothing has been submitted on your behalf.

---

## 1. Business identity (must match the registration exactly)

| Field | Value | Status |
| --- | --- | --- |
| Brand / business name shown on website | Seven Digits | ✅ On site |
| Legal name of the owner | Raul Esteban Arcila Echavarria | ⚠️ Not shown on site by default (see note) |
| Business type | Sole Proprietor | ✅ Stated in policies |
| EIN | None (never applied) | ℹ️ Sole Proprietor path does not use an EIN |
| Business email | sevendigits@esteban-growth.com | ✅ On site |
| Business phone | 908-274-8268 | ✅ On site |
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
| Opt-in page (booking calendar with SMS consent) | `https://________________/#book` |
| Privacy Policy | `https://________________/privacy-policy` |
| Terms and Conditions | `https://________________/terms-and-conditions` |

- [ ] All four URLs load publicly over HTTPS, without login, on desktop and mobile.
- [ ] Privacy Policy and Terms are linked from the footer of every page, and from the SMS consent text in the GHL booking form.
- [x] `legalEffectiveDate` set to October 26, 2026.

## 3. Website identification and contact

- [ ] Site clearly identifies **Seven Digits** (header, footer, policies).
- [ ] Legitimate contact info is visible: email and phone in the footer, contact section, and both policies.
- [ ] No fake testimonials, logos, metrics, addresses, or social links.

## 4. Consent on the booking form (set up in GoHighLevel)

Seven Digits sends **appointment texts only, no marketing**. The only website opt-in point is the GHL booking calendar at `/#book`, which uses GHL's single **Consent checkbox** (Calendar → Forms & guests). The exact text to paste is in `A2P-SUBMISSION.md` Step 0.

Verify on the live site:

- [ ] The checkbox shows the Seven Digits appointment-consent text (not GHL's default "I confirm that I want to receive content…").
- [ ] It is **unchecked by default** and **not required**: a booking can be completed without checking it.
- [ ] The text includes brand name, message types, frequency, rates, STOP/HELP, "not a condition of purchase," and the Privacy Policy and Terms URLs.
- [x] Privacy Policy states that mobile information and SMS opt-in data are **not sold or shared with third parties/affiliates for marketing**.
- [x] Privacy Policy states that providing a phone number alone is not SMS consent.
- [x] Terms include an SMS section (appointment-only message types, frequency, rates, STOP, HELP, carrier disclaimer, privacy link, contact info).
- [x] Website, policies, and campaign all say no marketing texts are sent.

## 5. Consent records

- [ ] Make a test booking with the box checked and one without, and confirm GHL saves the difference on the contact.
- [ ] Verbal consent from phone calls is recorded with a field, tag, and note (`A2P-SUBMISSION.md` Step 0b).
- [ ] Keep a dated screenshot of the consent wording each time you change it.

## 6. Campaign description must match reality

Use the campaign description and message flow in `A2P-SUBMISSION.md`. They describe both opt-in methods (website checkbox and verbal on a call) and say appointment messages only.

- [ ] Do not submit until the GHL checkbox shows the new text.
- [ ] Sample messages match what you will really send, start with "Seven Digits," and include opt-out language.
- [ ] Do **not** describe paper or keyword opt-in, or marketing messages.

## 7. Other consent sources

- [ ] **Verbal consent:** if you ever collect it (e.g. on a call), ask explicitly for each category, and record date, time, who obtained it, the wording used, and the number in GHL. Only then mention verbal opt-in in the campaign.
- [ ] A phone number found online, a business card, a call, or a booked appointment without a checked consent box is **not** SMS consent by itself.
- [ ] Prospects of your *clients* (contractor leads) are a separate matter: any texting to them needs its own compliant opt-in on the client-facing lead forms/ads. Do not reuse this website's consent for them.

## 8. Before sending any SMS

- [ ] GoHighLevel **brand** registration approved.
- [ ] GoHighLevel **campaign** registration approved.
- [ ] Sending number purchased/assigned and attached to the approved campaign.
- [ ] Messaging settings reviewed: STOP/HELP auto-replies enabled and HELP reply contains Seven Digits + contact info; DND/opt-out handling active.
- [ ] Workflows (including appointment reminders) only text contacts who checked the matching box, and stop on opt-out.
- [ ] Quiet hours respected (send during reasonable local hours).

## 9. Remaining manual actions (summary)

1. Deploy to Vercel and confirm the public URLs (README §5).
2. **Replace the calendar's default consent checkbox text** in GHL with the appointment-consent text (`A2P-SUBMISSION.md` Step 0).
3. Make test bookings and confirm the consent choice is recorded in GHL (§5).
4. ✅ Done: `legalEffectiveDate` set to October 26, 2026.
5. ✅ Done: owner legal name shown in the Privacy Policy and Terms (`showOwnerNameInLegalPages: true`).
6. Check New Jersey trade-name filing requirements for "Seven Digits."
7. Have an attorney review the Privacy Policy and Terms.
8. Review HighLevel's current Sole Proprietor A2P instructions (OTP mobile, email rules, limits).
9. Configure the booking calendar's availability and notifications.
10. (Later) Buy the domain, connect it in Vercel, set `NEXT_PUBLIC_SITE_URL`, update the policy links in the GHL consent text, and update the website URL in the A2P registration if it was already submitted with the `.vercel.app` URL.
11. Fill in the URL fields in section 2 and submit the brand and campaign registration yourself.
