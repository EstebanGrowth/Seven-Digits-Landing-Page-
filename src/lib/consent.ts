// SMS consent disclosures shown next to the lead form checkboxes.
// The exact text and version are stored with every submission, so any
// change to the wording MUST bump CONSENT_VERSION.

export const CONSENT_VERSION = "2026-10-24.v1";

export const FORM_SOURCE_ID = "website-lead-form";

export type ConsentCategory = "transactional_sms" | "marketing_sms";

// The "View our Privacy Policy and Terms and Conditions." sentence is
// rendered with real links in the form; it is kept here verbatim so the
// stored record matches what the visitor saw.
export const CONSENT_TEXT: Record<ConsentCategory, string> = {
  transactional_sms:
    "By checking this box, I agree to receive non-marketing text messages from Seven Digits related to my inquiry, consultation scheduling, appointment reminders, and requested follow-up. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. View our Privacy Policy and Terms and Conditions.",
  marketing_sms:
    "By checking this box, I agree to receive marketing and promotional text messages from Seven Digits, including service updates and offers. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. View our Privacy Policy and Terms and Conditions.",
};

export const LINK_SENTENCE = "View our Privacy Policy and Terms and Conditions.";

export function consentBody(category: ConsentCategory): string {
  return CONSENT_TEXT[category].replace(LINK_SENTENCE, "").trim();
}
