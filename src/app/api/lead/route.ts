import { NextResponse } from "next/server";
import { CONSENT_TEXT, CONSENT_VERSION, FORM_SOURCE_ID } from "@/lib/consent";
import { addNote, addTags, ghlConfig, GhlError, upsertContact } from "@/lib/ghl";
import { normalizeUsPhone, parseLead, validateLead, type LeadInput } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16_000;

function consentRecord(lead: LeadInput, meta: {
  submissionId: string;
  timestamp: string;
  pageUrl: string;
  ip: string;
  userAgent: string;
}): string {
  const box = (checked: boolean) => (checked ? "CHECKED (opted in)" : "NOT CHECKED (no consent given)");
  return [
    "WEBSITE FORM SUBMISSION — SMS CONSENT RECORD",
    `Submission ID: ${meta.submissionId}`,
    `Timestamp (UTC): ${meta.timestamp}`,
    `Form/source: ${FORM_SOURCE_ID}`,
    `Page URL: ${meta.pageUrl || "unknown"}`,
    `IP address: ${meta.ip || "unavailable"}`,
    `User agent: ${meta.userAgent || "unavailable"}`,
    `Disclosure version: ${CONSENT_VERSION}`,
    `Phone number submitted: ${normalizeUsPhone(lead.phone)}`,
    "",
    `[1] Non-marketing (transactional) SMS checkbox: ${box(lead.smsTransactional)}`,
    `Disclosure shown: "${CONSENT_TEXT.transactional_sms}"`,
    "",
    `[2] Marketing SMS checkbox: ${box(lead.smsMarketing)}`,
    `Disclosure shown: "${CONSENT_TEXT.marketing_sms}"`,
    "",
    "Both checkboxes were unchecked by default and optional. Submitting the form or providing a phone number does not by itself constitute SMS consent.",
    "",
    "INQUIRY DETAILS",
    `Type of contracting business: ${lead.tradeType || "—"}`,
    `Service area: ${lead.serviceArea || "—"}`,
    `Marketing challenge / goals: ${lead.goals || "—"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const lead = parseLead(body);

  // Honeypot filled in: almost certainly a bot. Reject without saving.
  if (lead.website) {
    return NextResponse.json({ ok: false, error: "Submission rejected." }, { status: 400 });
  }

  const fieldErrors = validateLead(lead);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const cfg = ghlConfig();
  if (!cfg) {
    // Integration not configured: say so honestly instead of pretending
    // the submission was saved.
    console.error("[lead] GoHighLevel integration is not configured (missing env vars).");
    return NextResponse.json(
      { ok: false, error: "Our online form is temporarily unavailable.", code: "NOT_CONFIGURED" },
      { status: 503 },
    );
  }

  const submissionId = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  const b = body as Record<string, unknown>;
  const pageUrl = typeof b.pageUrl === "string" ? b.pageUrl.slice(0, 300) : "";
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
  const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 300);

  const [firstName, ...rest] = lead.fullName.split(/\s+/);
  const tags = ["website-lead"];
  if (lead.smsTransactional) tags.push("sms-consent-transactional");
  if (lead.smsMarketing) tags.push("sms-consent-marketing");

  try {
    const contactId = await upsertContact(cfg, {
      firstName,
      lastName: rest.join(" "),
      email: lead.email,
      phone: normalizeUsPhone(lead.phone)!,
      companyName: lead.businessName,
    });
    await addTags(cfg, contactId, tags);
    await addNote(cfg, contactId, consentRecord(lead, { submissionId, timestamp, pageUrl, ip, userAgent }));
    return NextResponse.json({ ok: true, submissionId });
  } catch (err) {
    // Log only non-personal diagnostics.
    if (err instanceof GhlError) {
      console.error(`[lead] GoHighLevel ${err.step} failed: ${err.message}`, { submissionId });
    } else {
      console.error("[lead] Unexpected error", { submissionId });
    }
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request right now.", code: "UPSTREAM_ERROR" },
      { status: 502 },
    );
  }
}
