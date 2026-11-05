# A2P Resubmission Plan: Seven Digits (Appointment Reminders)

Fixes for the rejection codes **30908** (Privacy Policy), **30882** (Terms / SMS terms) and **30896** (invalid opt-in / message flow). Approval is decided by The Campaign Registry and the carriers; nothing here guarantees it.

**Goal:** send appointment confirmations, reminders, and the call link by SMS, only to leads who opted in on a visible web form. No marketing texts.

**How it works in practice (cold calling):**
1. You call the lead and schedule the meeting.
2. On the call you ask for their email and send them the confirmation by email, with a link to your opt-in page.
3. On the page they fill out the form and, **only if they want**, check the SMS box.
4. Only contacts who checked the box get SMS reminders. Everyone else gets email reminders.

Do **not** text leads based on the call alone. Verbal consent from a cold call is the hardest opt-in to verify and is no longer described anywhere on the site or in the campaign.

---

## Step 1: Own domain (recommended before resubmitting)

GHL's fix for 30908 says: "Publish it on a live, direct link on your own domain." The site is on `vercel.app`.

1. Buy a domain (e.g. at Namecheap, GoDaddy, Cloudflare, or Vercel → Domains). About $10–15/year.
2. Vercel → project → Settings → Domains → add it; create the DNS records Vercel shows at your registrar.
3. Tell Claude the domain. It sets `NEXT_PUBLIC_SITE_URL`, and every URL below changes from `seven-digits-landing-page.vercel.app` to the new domain.

**Never use** a link like `seven-digits-landing-page-xxxxx-seven-digits1.vercel.app`. Those deployment links are protected by Vercel and ask for a login, so reviewers can't open them.

---

## Step 2: Create the SMS opt-in form in GHL

GHL → **Sites → Forms → Builder → + Add Form** → name it `SMS Opt-in – Appointment Reminders`.

Fields:
- First Name (required)
- Last Name
- Phone (required)
- Email (required)
- **One Checkbox field**, **not required**, **not checked by default**. Save it to a contact custom field named `SMS Consent - Appointments`. Label:

```
I agree to receive recurring automated text messages from Raul Esteban Arcila Echavarria doing business as Seven Digits regarding appointments I schedule, including booking confirmations, reminders, and appointment updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of booking.
```

- Below the checkbox, a text/HTML element with links:
  `Privacy Policy` → `https://seven-digits-landing-page.vercel.app/privacy-policy`
  `SMS Terms & Conditions` → `https://seven-digits-landing-page.vercel.app/sms-terms`
- Submit button: `Submit`.
- **Do not** add any "I agree to the terms" box, and don't tie the SMS box to email signup.
- Form settings → on submit: show a thank-you message ("Thanks! Your appointment confirmation will arrive by email, and by text if you checked the SMS box.").

Then **Integrate / Embed** → copy the form's link (`https://api.leadconnectorhq.com/widget/form/...`) and send it to Claude. It goes into `smsOptInFormUrl` in `src/lib/site.ts`, which publishes the page `/sms-opt-in`.

**Also update the booking calendar checkbox** (Calendars → Strategy Session → Forms & guests → Consent checkbox) to the same text, and set its footer Privacy Policy / Terms links to `/privacy-policy` and `/sms-terms`.

---

## Step 3: Workflow (only consented contacts get SMS)

- Calendar → Notifications: **SMS notifications off** (email can stay on).
- Workflow "Appointment SMS": trigger Appointment Status = confirmed → If/Else `SMS Consent - Appointments` is checked → send SMS; else → email only.
- Keep it in draft until the campaign is approved.

---

## Step 4: Campaign fields (replace `vercel.app` with your domain if you buy one)

| Field | Value |
| --- | --- |
| Opt-In Method | Website Form |
| Opt-in Form URL | `https://seven-digits-landing-page.vercel.app/sms-opt-in` |
| Privacy Policy URL | `https://seven-digits-landing-page.vercel.app/privacy-policy` |
| Terms & Conditions URL | `https://seven-digits-landing-page.vercel.app/sms-terms` |
| Embedded link | Yes (call link) |
| Embedded phone | Yes (HELP reply) |
| Age-gated / Lending | No / No |

**Use Case Description**
```
Seven Digits (Raul Esteban Arcila Echavarria, sole proprietor) is a marketing and lead-generation business for contractors in the United States. We send appointment-related text messages only to business owners who have a strategy call scheduled with us and who opt in by checking the optional, unchecked SMS consent box on the web form at https://seven-digits-landing-page.vercel.app/sms-opt-in. Messages are limited to appointment booking confirmations, appointment reminders, scheduling updates, and the link to join the scheduled video call. We do not send marketing or promotional messages. Message frequency varies depending on appointments scheduled, usually up to 3 messages per appointment. Recipients can reply STOP to opt out or HELP for help.
```

**How do Contacts Opt-in to Messages?**
```
Contacts opt in only through the web form at https://seven-digits-landing-page.vercel.app/sms-opt-in, which is visible as soon as the page loads. The form collects first name, last name, phone number, and email, and has one optional checkbox for SMS that is unchecked by default and not combined with any other agreement or email signup. The checkbox reads: "I agree to receive recurring automated text messages from Raul Esteban Arcila Echavarria doing business as Seven Digits regarding appointments I schedule, including booking confirmations, reminders, and appointment updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of booking." Directly below the checkbox are links to our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and SMS Terms & Conditions (https://seven-digits-landing-page.vercel.app/sms-terms). The form can be submitted without checking the box, and only contacts who check it receive text messages; everyone else receives appointment confirmations by email. The same checkbox appears on our booking calendar at https://seven-digits-landing-page.vercel.app/#book. Screenshot of the opt-in form: [LINK TO NEW SCREENSHOT].
```

### Fix for rejection 30917 ("Not all opt-in methods were described")

The reviewer saw more than one opt-in method selected but only one described. Fix it like this:

1. Keep **Opt-In Method = Website Form** (it's a single choice). The "multiple methods" the reviewer saw are the two places the checkbox appears: the `/sms-opt-in` form and the booking calendar. The old text only mentioned the calendar in one line, with no evidence, and its checkbox wording is different.
2. Before resubmitting, change the **booking calendar** checkbox (Calendars → Strategy Session → Forms & guests → Consent checkbox) to the **exact same text** as the opt-in form below, and set its links to `/privacy-policy` and `/sms-terms`. Today it still says "non-marketing text messages … and responses to my inquiry … Consent is not a condition of purchase" and links to `/terms-and-conditions`, which doesn't match the campaign.
3. Take a new screenshot of the booking calendar's details step (with the checkbox visible) and save it as `public/a2p/booking-calendar-form.jpg`, so it's published next to `public/a2p/sms-opt-in-form.jpg`.
4. Paste the text below into the **Message Flow / How do contacts opt in** field. It names both online entry points and gives evidence for each.

**Message Flow (replaces "How do Contacts Opt-in to Messages?")**
```
We collect SMS consent by ONE method only: web forms on our website (never verbally, on paper, by keyword or QR code). The consent checkbox appears in TWO places, both with identical wording:

(1) SMS opt-in form at https://seven-digits-landing-page.vercel.app/sms-opt-in. The form collects first name, last name, phone number, and email. It has one optional SMS checkbox, unchecked by default and not required to submit the form. Screenshot: https://seven-digits-landing-page.vercel.app/a2p/sms-opt-in-form.jpg

(2) Booking calendar at https://seven-digits-landing-page.vercel.app/#book. After the contact picks a date and time for a strategy call, the details step collects first name, last name, phone number, and email, and shows the same optional SMS checkbox, unchecked by default. The call can be booked without checking it. Screenshot: https://seven-digits-landing-page.vercel.app/a2p/booking-calendar-form.jpg

Checkbox text on both forms: "I agree to receive recurring automated text messages from Raul Esteban Arcila Echavarria doing business as Seven Digits regarding appointments I schedule, including booking confirmations, reminders, and appointment updates. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of booking."

Directly below the checkbox on both forms are links to our Privacy Policy (https://seven-digits-landing-page.vercel.app/privacy-policy) and SMS Terms & Conditions (https://seven-digits-landing-page.vercel.app/sms-terms). Consent is not combined with any other agreement. Only contacts who check the box receive text messages; after opting in they receive the opt-in confirmation message, followed only by appointment confirmations, reminders, and the call link. Everyone else receives appointment emails only. Contacts can reply STOP at any time to opt out or HELP for help.
```

**Opt-in Message**
```
Seven Digits: You're opted in to appointment confirmations, reminders, and call links. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.
```

**Sample message 1 (Transactional field)**
```
Seven Digits: Hi [First Name], your strategy call with Esteban is confirmed for [Date] at [Time] ET. We'll text you a reminder and the link to join. Reply HELP for help or STOP to opt out.
```

**Sample message 2 (the mandatory "Promotional" field: still an appointment message, never a promo)**
```
Seven Digits: Hi [First Name], reminder: your strategy call with Esteban starts today at [Time] ET. Join here: https://meet.google.com/abc-defg-hij Reply STOP to opt out.
```

Use your real meeting-link domain (e.g. `zoom.us`) instead of the Meet example. Never use a URL shortener.

**STOP reply**
```
Seven Digits: You have been unsubscribed and will no longer receive text messages from us. Reply START to resubscribe.
```

**HELP reply**
```
Seven Digits: For help, email sevendigits@esteban-growth.com or call (908) 274-8268. Msg & data rates may apply. Reply STOP to opt out.
```

---

## Step 5: Before you hit Confirm

- [ ] `/sms-opt-in`, `/privacy-policy`, and `/sms-terms` open in an incognito window, without a login.
- [ ] The form at `/sms-opt-in` shows the checkbox **unchecked** as soon as the page loads.
- [ ] A test submission **without** checking the box works; one **with** the box saves `SMS Consent - Appointments` on the contact.
- [ ] A new screenshot of `/sms-opt-in` is uploaded to Google Drive ("Anyone with the link") and pasted in the opt-in text.
- [ ] The campaign text quotes the checkbox **exactly** as it appears on the form.
