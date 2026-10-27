# A2P Submission: Copy-Paste Text for GoHighLevel

Text prepared for the GoHighLevel A2P 10DLC **Sole Proprietor** brand and campaign forms. Field names in GHL may differ slightly; match each section to the closest field. Everything below describes **only** what exists on the live site, assuming you finish **Step 0** first.

Approval is decided by The Campaign Registry and the carriers, not by GHL or this website. Nothing here guarantees approval.

Live website: https://seven-digits-landing-page.vercel.app

---

## Step 0: Fix the booking form consent in GHL (required before you submit)

The text under the calendar on the website says texts are optional and that marketing texts need a separate opt-in. The booking form is a GHL widget, so this repository **cannot** change its checkboxes; you have to do it in GHL. Until you do, the calendar shows GHL's default bundled checkbox, which reviewers will reject.

1. GHL → **Calendars** → open the **Strategy Session** calendar → its **Forms** settings (or attach a custom form built in **Sites → Forms**).
2. Remove or replace the default line "I confirm that I want to receive content from this company using any contact information I provide."
3. Add **two checkbox fields**, both **not required** and **unchecked by default**, with this exact text:

**Checkbox 1 (appointments, non-marketing):**
```
By checking this box, I agree to receive text messages from Seven Digits regarding appointment confirmations, reminders, scheduling updates, and responses to my inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and Terms and Conditions (https://seven-digits-landing-page.vercel.app/terms-and-conditions).
```

**Checkbox 2 (marketing, only if you will really send marketing texts):**
```
By checking this box, I agree to receive recurring marketing and promotional text messages from Seven Digits. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and Terms and Conditions (https://seven-digits-landing-page.vercel.app/terms-and-conditions).
```

Map each checkbox to its own contact field or tag (e.g. `sms_consent_appointments`, `sms_consent_marketing`) so the choice is saved on the contact.

4. Save, open the live site, pick a time, and confirm both boxes appear unchecked and the booking works with neither checked.
5. Make one test booking with box 1 checked and confirm in the contact record that the choice is saved.
6. **Take screenshots** of the booking form showing both checkboxes. Some forms ask for an opt-in screenshot, and it's good proof either way.
7. **Calendar notifications:** in the calendar's notification settings, GHL can send SMS confirmations/reminders to *every* booker. Turn SMS notifications off there and send appointment texts from a workflow that only runs when the appointment consent field/tag is set (website checkbox or verbal). Email confirmations can stay on for everyone.

> If you don't plan to send marketing texts, you can skip checkbox 2. Then remove the marketing sentence from the website disclosure and the marketing sample below. Ask me and I'll update the site.

---

## Step 0b: Phone-call scheduling (verbal consent)

You call business owners, sometimes schedule a meeting on the call, and a GHL automation texts a confirmation. That is a **second opt-in method** and has to be done and recorded like this:

1. **Ask explicitly on the call**, before ending it. Example script:
   > "Can Seven Digits send you a text at this number to confirm this appointment and remind you before it? Message and data rates may apply, and you can reply STOP anytime."
2. **Only if they say yes**, record it in GHL right away on that contact:
   - Create a custom field, e.g. **SMS Consent – Appointments (Verbal)**, set to Yes.
   - Add a note: date, time, phone number, who obtained consent (you), and the wording used.
   - Add a tag, e.g. `sms-consent-verbal-appointments`.
3. **Make the confirmation automation require that field or tag** (an If/Else or filter at the start of the workflow). People who weren't asked, or said no, get no text and can be confirmed by email or a call.
4. Verbal consent on the call covers **appointment texts only**, never marketing.
5. Calling someone or finding their number online is **not** consent to text them.

Include this method in the campaign's message flow (below). Some reviewers question verbal-only opt-in, so having the website booking form opt-in as well helps.

---

## Brand (Sole Proprietor)

| Field | Value |
| --- | --- |
| First / last name | Raul Esteban / Arcila Echavarria (exactly as on your government ID) |
| Brand / DBA name | Seven Digits |
| Email | sevendigits@esteban-growth.com |
| Mobile phone (OTP) | A US **mobile** number you control that can receive the verification text. Check GHL's current rules on whether it may match the business number. |
| Street address | Your real address (private; only in this form, not on the website) |
| Website | https://seven-digits-landing-page.vercel.app |
| Vertical / industry | Professional Services (or Marketing/Advertising, whichever GHL offers) |

The Privacy Policy and Terms now name you as the owner of Seven Digits so reviewers can match the brand to the website.

---

## Campaign

**Campaign description**
```
Seven Digits is a marketing and lead-generation business for contractors in the United States. We send text messages to contractors and business owners who book a free strategy call and opt in, either on the booking form on our website or verbally during a phone call in which they schedule a meeting with us. Non-marketing messages are appointment confirmations, reminders, scheduling updates, and responses to their inquiry. Marketing messages, sent only to people who separately opt in to marketing texts, share service updates and offers. Messages are sent from Seven Digits only.
```

**Message flow / call to action (how users opt in)**
```
Users opt in in one of two ways. (1) Website: at https://seven-digits-landing-page.vercel.app/#book, users book a free strategy call in our booking calendar and enter their name, phone, and email. The booking form has two separate, optional checkboxes that are unchecked by default: one to receive text messages regarding appointment confirmations, reminders, scheduling updates, and responses to their inquiry, and one to receive recurring marketing messages. Each checkbox names Seven Digits, states that message frequency varies, that message and data rates may apply, that users can reply STOP to opt out or HELP for help, that consent is not a condition of purchase, and links to our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and Terms and Conditions (https://seven-digits-landing-page.vercel.app/terms-and-conditions). Users can book without checking either box. (2) Phone: when a business owner schedules a meeting with us during a phone call, we ask whether we may text them at that number to confirm and remind them about the appointment, and tell them message and data rates may apply and they can reply STOP at any time. We record verbal consent in our CRM with the date, time, and number, and send only appointment messages to these contacts, never marketing.
```

**Sample message 1 (non-marketing)**
```
Seven Digits: Hi {first_name}, your free strategy call is confirmed for {date} at {time} ET. Reply STOP to opt out, HELP for help.
```

**Sample message 2 (non-marketing reminder)**
```
Seven Digits: Reminder, your strategy call with us is tomorrow at {time} ET. Need to reschedule? Reply to this message. Reply STOP to opt out.
```

**Sample message 3 (marketing; only if you use checkbox 2)**
```
Seven Digits: We have open spots this month to help contractors set up lead follow-up. Want details? Reply YES. Msg & data rates may apply. Reply STOP to opt out.
```

**Opt-in confirmation message** (first message after opt-in, if GHL asks)
```
Seven Digits: Thanks for opting in to texts about your strategy call. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.
```

**Opt-out (STOP) reply**
```
Seven Digits: You have been unsubscribed and will no longer receive text messages from us. Reply START to resubscribe.
```

**Help (HELP) reply**
```
Seven Digits: For help, email sevendigits@esteban-growth.com or call (908) 274-8268. Msg & data rates may apply. Reply STOP to opt out.
```

**Opt-in / opt-out / help keywords:** START, YES / STOP, UNSUBSCRIBE, CANCEL, END, QUIT / HELP, INFO

**Campaign checkboxes**
- Embedded links: **No**, if your messages won't contain URLs (the samples above have none). If you will text the booking link, answer Yes and add the full link (no URL shorteners) to a sample.
- Embedded phone numbers: **Yes** (the HELP reply includes your phone number).
- Age-gated content: **No**
- Direct lending / loans: **No**

---

## Common rejection reasons (already handled on the site)

- ✅ Website loads publicly over HTTPS and names the brand (Seven Digits) and the owner in the policies.
- ✅ Privacy Policy has the carrier-standard "no mobile information will be shared with third parties…" statement.
- ✅ Terms have an SMS section: program name, message types, frequency, rates, STOP, HELP, carrier liability, privacy link, contact info.
- ✅ The visible SMS disclosure under the calendar names the brand and includes STOP/HELP, rates, frequency, and policy links.
- ✅ Contact email and phone are visible on the site and match this submission.
- ⬜ The booking form checkboxes match the description (**Step 0, your part in GHL**).
- ⬜ Sample messages match what you'll actually send, and every one starts with "Seven Digits".

If the campaign gets rejected, copy the exact rejection reason from GHL and send it to me. I'll adjust the site or the text.
