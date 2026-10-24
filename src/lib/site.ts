// Central business and site configuration.
// Every public fact shown on the website comes from here. Do not add
// details that the owner has not verified.

export const site = {
  name: "Seven Digits",
  tagline: "Marketing for contractors",
  description:
    "Seven Digits helps contractors in the United States attract potential customers, follow up with interested prospects, and create more opportunities to win their next job.",
  email: "sevendigits@esteban-growth.com",
  phoneDisplay: "(908) 545-9903",
  phoneHref: "+19085459903",
  location: "New Jersey, United States",
  businessStructure: "sole proprietorship",

  // Owner identity is NOT shown on the website by default. If a legal
  // review or the A2P Sole Proprietor registration flow requires the
  // owner's name on the policies, set this to true (see A2P-CHECKLIST.md).
  ownerLegalName: "Raul Esteban Arcila Echavarria",
  showOwnerNameInLegalPages: false,

  // Set this to the real publication date (e.g. "November 3, 2026") when
  // the Privacy Policy and Terms are published. Never backdate it.
  // While it is null, no effective date is displayed.
  legalEffectiveDate: null as string | null,

  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/zsdp0ZpY4tlVh9shDhl8",
  bookingWidgetId: "zsdp0ZpY4tlVh9shDhl8",
} as const;

// Canonical origin. Set NEXT_PUBLIC_SITE_URL once the custom domain is live.
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
