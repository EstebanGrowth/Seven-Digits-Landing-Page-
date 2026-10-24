"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { consentBody } from "@/lib/consent";
import { site } from "@/lib/site";
import { GOALS_MAX, validateLead, type FieldErrors, type LeadInput } from "@/lib/validation";
import { Arrow } from "./Icons";

const empty: LeadInput = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  tradeType: "",
  serviceArea: "",
  goals: "",
  smsTransactional: false,
  smsMarketing: false,
  website: "",
};

type Status = "idle" | "submitting" | "error";

const FIELD_ORDER: (keyof LeadInput)[] = [
  "fullName",
  "businessName",
  "email",
  "phone",
  "tradeType",
  "serviceArea",
  "goals",
];

export function LeadForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<LeadInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const set = <K extends keyof LeadInput>(key: K, value: LeadInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusFirstError = (errs: FieldErrors) => {
    const first = FIELD_ORDER.find((k) => errs[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);

    const trimmed = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v]),
    ) as LeadInput;
    const errs = validateLead(trimmed);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      focusFirstError(errs);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trimmed, pageUrl: window.location.href }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        submissionId?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (res.ok && data.ok && data.submissionId) {
        try {
          sessionStorage.setItem("sd_submission", data.submissionId);
        } catch {
          // Storage unavailable: the thank-you page still renders.
        }
        router.push("/thank-you");
        return;
      }

      if (data.fieldErrors) {
        setErrors(data.fieldErrors);
        focusFirstError(data.fieldErrors);
      }
      setServerError(data.error ?? "Something went wrong.");
      setStatus("error");
    } catch {
      setServerError("We couldn't reach our server. Please check your connection.");
      setStatus("error");
    }
  }

  const err = (k: keyof LeadInput) =>
    errors[k] ? (
      <p className="field-error" id={`${k}-error`}>
        {errors[k]}
      </p>
    ) : null;

  const aria = (k: keyof LeadInput, hintId?: string) => ({
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": [errors[k] ? `${k}-error` : null, hintId].filter(Boolean).join(" ") || undefined,
  });

  const policyLinks = (
    <>
      View our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
      <Link href="/terms-and-conditions">Terms and Conditions</Link>.
    </>
  );

  return (
    <form ref={formRef} className="lead-form" onSubmit={onSubmit} noValidate aria-labelledby="contact-title">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">
            Full name<span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            maxLength={120}
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            {...aria("fullName")}
          />
          {err("fullName")}
        </div>

        <div className="field">
          <label htmlFor="businessName">
            Business name<span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            autoComplete="organization"
            required
            maxLength={160}
            value={values.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            {...aria("businessName")}
          />
          {err("businessName")}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email<span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            {...aria("email")}
          />
          {err("email")}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone number<span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            required
            maxLength={20}
            placeholder="(555) 555-5555"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            {...aria("phone", "phone-hint")}
          />
          {err("phone")}
          <p className="field-hint" id="phone-hint">
            Used to respond to your inquiry. Entering a number does not sign you up for text messages.
          </p>
        </div>

        <div className="field">
          <label htmlFor="tradeType">
            Type of contracting business<span className="opt">(optional)</span>
          </label>
          <input
            id="tradeType"
            name="tradeType"
            maxLength={120}
            placeholder="e.g. Roofing, remodeling, HVAC"
            value={values.tradeType}
            onChange={(e) => set("tradeType", e.target.value)}
            {...aria("tradeType")}
          />
          {err("tradeType")}
        </div>

        <div className="field">
          <label htmlFor="serviceArea">
            Service area<span className="opt">(optional)</span>
          </label>
          <input
            id="serviceArea"
            name="serviceArea"
            maxLength={160}
            placeholder="e.g. Northern New Jersey"
            value={values.serviceArea}
            onChange={(e) => set("serviceArea", e.target.value)}
            {...aria("serviceArea")}
          />
          {err("serviceArea")}
        </div>

        <div className="field full">
          <label htmlFor="goals">
            Main marketing challenge or goals<span className="opt">(optional)</span>
          </label>
          <textarea
            id="goals"
            name="goals"
            maxLength={GOALS_MAX}
            placeholder="What would you like to improve about how you get new customers?"
            value={values.goals}
            onChange={(e) => set("goals", e.target.value)}
            {...aria("goals")}
          />
          {err("goals")}
        </div>
      </div>

      {/* Honeypot for bots. Hidden from people and assistive tech. */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website", e.target.value)}
        />
      </div>

      <fieldset className="consent-group">
        <legend>Text message preferences (optional)</legend>
        <p className="consent-intro">
          Both boxes are optional. You can submit this form without checking either one.
        </p>

        <div className="consent">
          <input
            type="checkbox"
            id="smsTransactional"
            name="smsTransactional"
            checked={values.smsTransactional}
            onChange={(e) => set("smsTransactional", e.target.checked)}
          />
          <label htmlFor="smsTransactional">
            <span className="consent-kind">Inquiry and appointment texts</span>
            {consentBody("transactional_sms")} {policyLinks}
          </label>
        </div>

        <div className="consent">
          <input
            type="checkbox"
            id="smsMarketing"
            name="smsMarketing"
            checked={values.smsMarketing}
            onChange={(e) => set("smsMarketing", e.target.checked)}
          />
          <label htmlFor="smsMarketing">
            <span className="consent-kind">Marketing texts</span>
            {consentBody("marketing_sms")} {policyLinks}
          </label>
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : (
            <>
              Send My Information <Arrow />
            </>
          )}
        </button>
        <p className="form-legal">
          By submitting, you&apos;re asking Seven Digits to contact you about your inquiry. See our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for how we handle your information.
        </p>
      </div>

      <div aria-live="polite" role="status">
        {status === "error" && serverError && (
          <div className="alert">
            <strong>Your information was not sent.</strong>
            <p>
              {serverError} Please try again, or contact us directly at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
