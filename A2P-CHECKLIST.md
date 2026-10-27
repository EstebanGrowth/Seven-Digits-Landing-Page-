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

The website no longer has its own form. **The only opt-in point is the GHL booking calendar** embedded at `/#book`, so SMS consent must be configured inside GoHighLevel. The website code cannot change the calendar's checkbox text.

⚠️ **The calendar's current default checkbox is not A2P-compliant:** "I confirm that I want to receive content from this company using any contact information I provide." It doesn't name the brand, mixes all message types, and has no frequency, rates, STOP/HELP, or policy links.

In GHL, edit the calendar's booking form (or attach a custom form under the calendar's form settings) so it has **two separate, optional, unchecked checkboxes**. Recommended text (replace `[domain]` once the site is live):

**Non-marketing (transactional):**
> By checking this box, I agree to receive non-marketing text messages from Seven Digits related to my inquiry, consultation scheduling, appointment reminders, and requested follow-up. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. View our Privacy Policy (https://[domain]/privacy-policy) and Terms and Conditions (https://[domain]/terms-and-conditions).

**Marketing:**
> By checking this box, I agree to receive marketing and promotional text messages from Seven Digits, including service updates and offers. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. View our Privacy Policy (https://[domain]/privacy-policy) and Terms and Conditions (https://[domain]/terms-and-conditions).

Verify on the live site:

- [ ] Both checkboxes are **unchecked by default** and **not required**: a booking can be completed with neither checked.
- [ ] Transactional and marketing consents are **separate** checkboxes.
- [ ] Each disclosure includes brand name, message type, frequency, rates, STOP/HELP, "not a condition of purchase," and links to the Privacy Policy and Terms.
- [ ] Privacy Policy states that mobile information and SMS opt-in data are **not sold or shared with third parties/affiliates for marketing**.
- [ ] Privacy Policy states that providing a phone number alone is not SMS consent.
- [ ] Terms include an SMS section (message types, frequency, rates, STOP, HELP, carrier disclaimer, privacy link, contact info).

## 5. Consent records

- [ ] Make a test booking with each checkbox combination and confirm in the GHL contact record that the consent choice is saved (as a field, tag, or in the appointment/contact activity).
- [ ] If GHL does not record which box was checked in a way you can show later, map each checkbox to a contact field or tag (e.g. `sms-consent-transactional`, `sms-consent-marketing`) through the form settings or a workflow.
- [ ] Keep a copy (screenshot + date) of the exact consent wording each time you change it.

## 6. Campaign description must match reality

When writing the A2P campaign, describe **only** the opt-in method that actually exists:

> Suggested opt-in description (edit to match your final GHL setup): "Contractors and business owners visit [website URL] and book a free strategy call using the booking form at [URL]/#book. The form includes two separate, optional, unchecked checkboxes: one to receive non-marketing texts about their inquiry, consultation scheduling, appointment reminders, and requested follow-up, and one to receive marketing texts. Each checkbox shows the brand name, message frequency, 'Message and data rates may apply,' STOP/HELP instructions, that consent is not a condition of purchase, and links to the Privacy Policy and Terms. A booking can be completed without checking either box."

- [ ] Do not submit this description until the GHL form actually matches it.
- [ ] Sample messages you submit match what you will really send, include "Seven Digits," and include opt-out language (e.g. "Reply STOP to opt out").
- [ ] Campaign use case matches the checkboxes (mixed/marketing only if you will actually send marketing texts to people who checked that box).
- [ ] Do **not** describe verbal, paper, or keyword opt-in unless you actually implement and record it.

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
2. **Replace the calendar's default consent checkbox** in GHL with the two compliant checkboxes in §4.
3. Make test bookings and confirm the consent choices are recorded in GHL (§5).
4. ✅ Done: `legalEffectiveDate` set to October 26, 2026.
5. ✅ Done: owner legal name shown in the Privacy Policy and Terms (`showOwnerNameInLegalPages: true`).
6. Check New Jersey trade-name filing requirements for "Seven Digits."
7. Have an attorney review the Privacy Policy and Terms.
8. Review HighLevel's current Sole Proprietor A2P instructions (OTP mobile, email rules, limits).
9. Configure the booking calendar's availability and notifications.
10. (Later) Buy the domain, connect it in Vercel, set `NEXT_PUBLIC_SITE_URL`, update the policy links in the GHL consent text, and update the website URL in the A2P registration if it was already submitted with the `.vercel.app` URL.
11. Fill in the URL fields in section 2 and submit the brand and campaign registration yourself.
