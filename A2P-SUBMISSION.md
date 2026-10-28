# A2P Submission: Copy-Paste Text for GoHighLevel

Text prepared for the GoHighLevel A2P 10DLC **Sole Proprietor** brand and campaign forms. Field names in GHL may differ slightly; match each section to the closest field.

**Scope: appointment messages only.** Seven Digits sends appointment confirmations, appointment reminders, and the link to join the scheduled call. **No marketing or promotional texts.** The website, Privacy Policy, Terms, and everything below say the same thing.

Approval is decided by The Campaign Registry and the carriers, not by GHL or this website. Nothing here guarantees approval.

Live website: https://seven-digits-landing-page.vercel.app

---

## Step 0: Booking calendar consent checkbox (required before you submit)

The booking form is a GHL widget, so this repository **cannot** change its checkbox; it's set in GHL.

1. GHL → **Calendars → Calendar Settings** → open **Strategy Session** → **Forms & guests**.
2. Keep **Select form: Default**.
3. Keep **Consent checkbox** turned on. **Delete** the default text ("I confirm that I want to receive content from this company…") and paste:

```
By checking this box, I agree to receive text messages from Raul Esteban Arcila Echavarria doing business as Seven Digits regarding appointment confirmations, reminders, scheduling updates, and responses to my inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. Privacy Policy: https://seven-digits-landing-page.vercel.app/privacy-policy Terms: https://seven-digits-landing-page.vercel.app/terms-and-conditions
```

4. Save. On the live site, pick a date and time and confirm:
   - the checkbox shows the new text and is **unchecked**;
   - you can **complete a booking without checking it**. If GHL forces the box, tell me; that would need a custom form instead.
5. Make one test booking **with** the box checked and check how GHL saves the choice on the contact (field, tag, or activity). Note where it appears; your SMS workflow will filter on it.
6. **Take screenshots** of the booking form showing the checkbox and its text. Some forms ask for an opt-in screenshot.
7. **Calendar notifications:** in the calendar's notification settings, GHL can text confirmations/reminders to *every* booker. Turn SMS notifications off there, and send appointment texts from a workflow that only runs when consent is recorded (website checkbox or verbal). Email confirmations can stay on for everyone.

---

## Step 0b: Phone-call scheduling (verbal consent)

You call business owners, sometimes schedule a meeting on the call, and a GHL automation texts a confirmation. That is a **second opt-in method** and must be done and recorded like this:

1. **Ask explicitly on the call**, before ending it. Example script:
   > "Can Seven Digits send you a text at this number to confirm this appointment and remind you before it? Message and data rates may apply, and you can reply STOP anytime."
2. **Only if they say yes**, record it in GHL right away on that contact:
   - Custom field, e.g. **SMS Consent – Appointments (Verbal)** = Yes.
   - Note with date, time, phone number, who obtained consent (you), and the wording used.
   - Tag, e.g. `sms-consent-verbal-appointments`.
3. **The confirmation workflow must require consent**: an If/Else at the start that checks the website checkbox consent **or** the verbal consent tag. Everyone else gets email only.
4. Calling someone or finding their number online is **not** consent to text them.

---

## Brand (Sole Proprietor)

| Field | Value |
| --- | --- |
| First / last name | Raul Esteban / Arcila Echavarria (exactly as on your government ID) |
| Brand / DBA name | Seven Digits |
| Email | sevendigits@esteban-growth.com |
| Mobile phone (OTP) | A US **mobile** number you control that can receive the verification text. Check GHL's current rules on whether it may match the business number. |
| Business phone (on website) | (908) 274-8268 |
| Street address | Your real address (private; only in this form, not on the website) |
| Website | https://seven-digits-landing-page.vercel.app |
| Vertical / industry | Professional Services (or Marketing/Advertising, whichever GHL offers) |

The Privacy Policy and Terms name you as the owner of Seven Digits so reviewers can match the brand to the website.

---

## Campaign

**Campaign description / Use Case Description**
```
Seven Digits (Raul Esteban Arcila Echavarria, sole proprietor) is a marketing and lead-generation business for contractors in the United States. We send appointment-related text messages only to business owners who schedule a free strategy call with us and opt in, either by checking the optional SMS consent box on our booking form at https://seven-digits-landing-page.vercel.app/#book or by agreeing verbally during the phone call in which the meeting is scheduled. Messages are limited to appointment confirmations, appointment reminders, and the video-call link to join the scheduled meeting. We do not send marketing or promotional messages. Message frequency varies, usually up to 3 messages per scheduled appointment. Recipients can reply STOP to opt out or HELP for help at any time.
```

**Message flow / call to action (how users opt in)**
```
Users opt in in one of two ways. (1) Website: at https://seven-digits-landing-page.vercel.app/#book, users book a free strategy call in our booking calendar and enter their name, phone, and email. The booking form has one optional checkbox, unchecked by default, that reads: "By checking this box, I agree to receive text messages from Raul Esteban Arcila Echavarria doing business as Seven Digits regarding appointment confirmations, reminders, scheduling updates, and responses to my inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase." followed by links to our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and Terms and Conditions (https://seven-digits-landing-page.vercel.app/terms-and-conditions). Users can book without checking the box. (2) Phone: when a business owner schedules a meeting with us during a phone call, we ask whether we may text them at that number to confirm and remind them about the appointment, and tell them message and data rates may apply and they can reply STOP at any time. We record verbal consent in our CRM with the date, time, and number. We only text users who opted in, and only about their appointment.
```

**Sample message 1 (confirmation): use in the "Transactional/Informational" field**
```
Seven Digits: Hi [First Name], your free strategy call with Esteban is confirmed for [Date] at [Time] ET. We'll text you a reminder and the link to join before the call. Reply HELP for help or STOP to opt out.
```

**Sample message 2 (reminder with call link): use in the "Promotional/Marketing" field, which GHL makes mandatory.** It is still an appointment message; do not write a promotion there, because the site and policies say no marketing texts are sent.
```
Seven Digits: Hi [First Name], reminder: your strategy call with Esteban starts today at [Time] ET. Join here: https://meet.google.com/abc-defg-hij Reply STOP to opt out.
```

**Sample message 3 (link only, optional)**
```
Seven Digits: [First Name], your call with Esteban starts in 10 minutes. Join here: https://meet.google.com/abc-defg-hij Reply STOP to opt out.
```

Replace the Google Meet example with the real kind of link your calendar sends (e.g. a `zoom.us` link). Always use the full link, never a URL shortener.

**Opt-in confirmation message** (first message after opt-in, if GHL asks)
```
Seven Digits: You're opted in to texts about your appointment with us. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.
```

**Opt-out (STOP) reply**
```
Seven Digits: You have been unsubscribed and will no longer receive text messages from us. Reply START to resubscribe.
```

**Help (HELP) reply**
```
Seven Digits: For help, email sevendigits@esteban-growth.com or call (908) 274-8268. Msg & data rates may apply. Reply STOP to opt out.
```

**Opt-in / opt-out / help keywords:** START / STOP, UNSUBSCRIBE, CANCEL, END, QUIT / HELP, INFO

**Campaign checkboxes**
- Embedded links: **Yes** (reminders include the link to join the call; full link, no shorteners).
- Embedded phone numbers: **Yes** (the HELP reply includes your phone number).
- Age-gated content: **No**
- Direct lending / loans: **No**

---

## Common rejection reasons (already handled on the site)

- ✅ Website loads publicly over HTTPS and names the brand (Seven Digits) and the owner in the policies.
- ✅ Privacy Policy has the carrier-standard "No mobile information will be shared with third parties…" statement and says no lead lists are bought, sold, or rented.
- ✅ Terms have an SMS section: program name, message types (appointments only), frequency, rates, STOP, HELP, carrier liability, privacy link, contact info.
- ✅ Visible SMS disclosure under the calendar names the brand, says texts are optional and appointment-only, and includes STOP/HELP, rates, frequency, and policy links.
- ✅ Contact email and phone are visible on the site and match this submission.
- ⬜ The calendar's consent checkbox shows the new text (**Step 0, your part in GHL**).
- ⬜ Sample messages match what you'll actually send, and every one starts with "Seven Digits".

If the campaign gets rejected, copy the exact rejection reason from GHL and send it to me. I'll adjust the site or the text.
