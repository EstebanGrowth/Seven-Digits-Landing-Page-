import assert from "node:assert/strict";
import { test } from "node:test";
import { CONSENT_TEXT, LINK_SENTENCE, consentBody } from "../src/lib/consent.ts";
import { normalizeUsPhone, parseLead, validateLead } from "../src/lib/validation.ts";

const valid = {
  fullName: "Jane Builder",
  businessName: "Builder Co",
  email: "jane@example.com",
  phone: "(201) 555-0123",
};

test("valid minimal lead passes with no consent boxes checked", () => {
  const lead = parseLead(valid);
  assert.deepEqual(validateLead(lead), {});
  assert.equal(lead.smsTransactional, false);
  assert.equal(lead.smsMarketing, false);
});

test("required fields are enforced", () => {
  const errs = validateLead(parseLead({}));
  assert.ok(errs.fullName && errs.businessName && errs.email && errs.phone);
  assert.equal(errs.tradeType, undefined);
  assert.equal(errs.goals, undefined);
});

test("invalid email and phone are rejected", () => {
  const errs = validateLead(parseLead({ ...valid, email: "nope", phone: "12345" }));
  assert.ok(errs.email);
  assert.ok(errs.phone);
});

test("consent only counts when explicitly boolean true", () => {
  for (const v of ["true", "on", 1, "yes", null, undefined]) {
    const lead = parseLead({ ...valid, smsTransactional: v, smsMarketing: v });
    assert.equal(lead.smsTransactional, false);
    assert.equal(lead.smsMarketing, false);
  }
  const lead = parseLead({ ...valid, smsMarketing: true });
  assert.equal(lead.smsMarketing, true);
  assert.equal(lead.smsTransactional, false);
});

test("phone normalization to E.164", () => {
  assert.equal(normalizeUsPhone("908-545-9903"), "+19085459903");
  assert.equal(normalizeUsPhone("+1 (908) 545 9903"), "+19085459903");
  assert.equal(normalizeUsPhone("108-545-9903"), null);
  assert.equal(normalizeUsPhone("555-0123"), null);
});

test("overlong optional fields are rejected", () => {
  const errs = validateLead(parseLead({ ...valid, goals: "x".repeat(2001) }));
  assert.ok(errs.goals);
});

test("consent disclosures contain required SMS terms and are distinct", () => {
  for (const text of Object.values(CONSENT_TEXT)) {
    assert.match(text, /Message frequency may vary\./);
    assert.match(text, /Message and data rates may apply\./);
    assert.match(text, /Reply STOP to opt out or HELP for help\./);
    assert.match(text, /Consent is not a condition of purchase\./);
    assert.ok(text.endsWith(LINK_SENTENCE));
  }
  assert.notEqual(CONSENT_TEXT.transactional_sms, CONSENT_TEXT.marketing_sms);
  assert.match(CONSENT_TEXT.transactional_sms, /non-marketing/);
  assert.match(CONSENT_TEXT.marketing_sms, /marketing and promotional/);
  assert.ok(!consentBody("marketing_sms").includes("Privacy Policy"));
});
