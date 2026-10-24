// Shared validation for the lead form. Used by the browser for instant
// feedback and by the API route as the source of truth.

export type LeadInput = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  tradeType: string;
  serviceArea: string;
  goals: string;
  smsTransactional: boolean;
  smsMarketing: boolean;
  website: string; // honeypot, must stay empty
};

export type FieldErrors = Partial<Record<keyof LeadInput, string>>;

const LIMITS = {
  fullName: 120,
  businessName: 160,
  email: 254,
  tradeType: 120,
  serviceArea: 160,
  goals: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Normalizes a US phone number to E.164 (+1XXXXXXXXXX) or returns null.
export function normalizeUsPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (national.length !== 10) return null;
  // NANP: area code and exchange cannot start with 0 or 1.
  if (/^[01]/.test(national) || /^[01]/.test(national.slice(3))) return null;
  return `+1${national}`;
}

export function parseLead(body: unknown): LeadInput {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  return {
    fullName: str(b.fullName),
    businessName: str(b.businessName),
    email: str(b.email).toLowerCase(),
    phone: str(b.phone),
    tradeType: str(b.tradeType),
    serviceArea: str(b.serviceArea),
    goals: str(b.goals),
    // Only an explicit boolean true counts as consent.
    smsTransactional: b.smsTransactional === true,
    smsMarketing: b.smsMarketing === true,
    website: str(b.website),
  };
}

export function validateLead(input: LeadInput): FieldErrors {
  const errors: FieldErrors = {};

  if (!input.fullName) errors.fullName = "Please enter your full name.";
  else if (input.fullName.length > LIMITS.fullName) errors.fullName = "Name is too long.";

  if (!input.businessName) errors.businessName = "Please enter your business name.";
  else if (input.businessName.length > LIMITS.businessName)
    errors.businessName = "Business name is too long.";

  if (!input.email) errors.email = "Please enter your email address.";
  else if (input.email.length > LIMITS.email || !EMAIL_RE.test(input.email))
    errors.email = "Please enter a valid email address.";

  if (!input.phone) errors.phone = "Please enter a phone number so we can respond to your inquiry.";
  else if (!normalizeUsPhone(input.phone))
    errors.phone = "Please enter a valid 10-digit US phone number.";

  if (input.tradeType.length > LIMITS.tradeType) errors.tradeType = "Please shorten this answer.";
  if (input.serviceArea.length > LIMITS.serviceArea)
    errors.serviceArea = "Please shorten this answer.";
  if (input.goals.length > LIMITS.goals)
    errors.goals = `Please keep this under ${LIMITS.goals} characters.`;

  return errors;
}

export const GOALS_MAX = LIMITS.goals;
