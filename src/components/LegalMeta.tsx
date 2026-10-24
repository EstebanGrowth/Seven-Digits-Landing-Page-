import { site } from "@/lib/site";

// Effective date is shown only once the owner sets a real publication
// date in src/lib/site.ts. Nothing is backdated or invented.
export function LegalMeta() {
  return (
    <p className="legal-meta">
      {site.legalEffectiveDate ? `Effective date: ${site.legalEffectiveDate}` : null}
    </p>
  );
}

export function BusinessIdentity() {
  return (
    <>
      <strong>{site.name}</strong>
      {site.showOwnerNameInLegalPages ? `, a sole proprietorship owned and operated by ${site.ownerLegalName}` : ", a sole proprietorship"}
      , based in {site.location}
    </>
  );
}

export function ContactBlock() {
  return (
    <ul>
      <li>
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </li>
      <li>
        Phone: <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
      </li>
      <li>Location: {site.location}</li>
    </ul>
  );
}
