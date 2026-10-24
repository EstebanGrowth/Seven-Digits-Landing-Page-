import "server-only";

// Server-side GoHighLevel / LeadConnector API v2 client.
// Docs: https://highlevel.stoplight.io/docs/integrations
// Auth: a Private Integration Token scoped to the sub-account (location),
// with at least the contacts.write scope. Never expose it to the browser.

const API_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";
const TIMEOUT_MS = 10_000;

export class GhlError extends Error {
  constructor(
    message: string,
    readonly step: "upsert" | "tags" | "note",
    readonly status?: number,
  ) {
    super(message);
  }
}

type GhlConfig = { token: string; locationId: string };

export function ghlConfig(): GhlConfig | null {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return null;
  return { token, locationId };
}

async function call<T>(cfg: GhlConfig, step: GhlError["step"], path: string, body: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        Version: API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
  } catch {
    throw new GhlError("Network error or timeout", step);
  }
  if (!res.ok) throw new GhlError(`HTTP ${res.status}`, step, res.status);
  return (await res.json().catch(() => ({}))) as T;
}

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
};

// Creates the contact, or updates the existing one matched by the
// location's duplicate-contact rules (email/phone). Returns the contact id.
export async function upsertContact(cfg: GhlConfig, contact: ContactPayload): Promise<string> {
  const data = await call<{ contact?: { id?: string } }>(cfg, "upsert", "/contacts/upsert", {
    locationId: cfg.locationId,
    ...contact,
    name: `${contact.firstName} ${contact.lastName}`.trim(),
    source: "Seven Digits website",
  });
  const id = data.contact?.id;
  if (!id) throw new GhlError("Upsert response did not include a contact id", "upsert");
  return id;
}

// Adds tags without replacing tags the contact already has.
export async function addTags(cfg: GhlConfig, contactId: string, tags: string[]): Promise<void> {
  await call(cfg, "tags", `/contacts/${encodeURIComponent(contactId)}/tags`, { tags });
}

export async function addNote(cfg: GhlConfig, contactId: string, body: string): Promise<void> {
  await call(cfg, "note", `/contacts/${encodeURIComponent(contactId)}/notes`, { body });
}
