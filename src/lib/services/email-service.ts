/**
 * Zentraler E-Mail-Service — ersetzt loops.ts
 *
 * Speichert Leads in Supabase (jfk-leads) und versendet
 * Bestätigungsmails via Resend von der jeweiligen Projekt-Domain.
 *
 * Env-Vars (identisch für alle Projekte):
 *   JFK_LEADS_SUPABASE_URL  — Supabase REST-URL (jfk-leads Projekt)
 *   JFK_LEADS_SUPABASE_KEY  — Supabase service_role Key (laeuft nur server-seitig in API-Routes)
 *   RESEND_API_KEY           — Globaler Resend API-Key
 *
 * Identische API-Signatur wie loops.ts — nur Import-Pfad ändern:
 *   Alt: import { registerContactLead, ... } from "@/lib/services/loops";
 *   Neu: import { registerContactLead, ... } from "@/lib/services/email-service";
 */

// ============================================
// Projekt-Konfiguration (aus project-meta.json)
// ============================================

// __TEMPLATE_REPLACE_START__
const PROJECT_ID = "zuliefercheck";
const PROJECT_DOMAIN = "lieferantenmanagementsoftware.de";
const PROJECT_DISPLAY_NAME = "ZulieferCheck";
const PROJECT_PRIMARY_COLOR = "#2563EB";
const PROJECT_ACCENT_COLOR = "#1E40AF";
const PROJECT_ADMIN_EMAIL = "info@lieferantenmanagementsoftware.de";
const PROJECT_TAGLINE = "Zertifikats-Ablauf-Tracker mit automatischen Erinnerungen, Lieferantenportal (Zulieferer laden selbst hoch), Bewertungsmatrix nach ISO 9001/EN 1090-2, Audit-Ready Übersicht aller Zulieferer auf einen Blick, Branchenverzeichnis verifizierter EN 1090-Zulieferer (Netzwerkeffekt)";
// __TEMPLATE_REPLACE_END__

// ============================================
// Supabase REST Client
// ============================================

function getSupabaseConfig() {
  const url = process.env.JFK_LEADS_SUPABASE_URL;
  const key = process.env.JFK_LEADS_SUPABASE_KEY;
  if (!url || !key) {
    throw new Error("JFK_LEADS_SUPABASE_URL/KEY nicht konfiguriert");
  }
  return { url, key };
}

async function supabaseRequest(
  table: string,
  method: string,
  body?: object,
  headers?: Record<string, string>,
  queryParams?: string,
) {
  const { url, key } = getSupabaseConfig();
  const qs = queryParams ? `?${queryParams}` : "";

  const response = await fetch(`${url}/rest/v1/${table}${qs}`, {
    method,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase error: ${response.status} — ${errorText}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }
  return null;
}

// ============================================
// Resend E-Mail Client
// ============================================

function getResendApiKey(): string {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY nicht konfiguriert");
  }
  return key;
}

async function sendEmail(params: {
  from: string;
  to: string;
  subject: string;
  html: string;
  headers?: Record<string, string>;
}) {
  const apiKey = getResendApiKey();

  const payload: Record<string, unknown> = {
    from: params.from,
    to: [params.to],
    subject: params.subject,
    html: params.html,
  };
  if (params.headers && Object.keys(params.headers).length > 0) {
    payload.headers = params.headers;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} — ${errorText}`);
  }

  return response.json();
}

// ============================================
// Domain-Config laden (Templates + Brand)
// ============================================

interface CalloutConfig {
  title: string;
  text: string;
  items: string[];
}

interface DomainConfig {
  display_name: string;
  sender_email: string;
  domain: string;
  brand: {
    primary_color: string;
    accent_color: string;
    logo_url: string | null;
    cta_text: string | null;
    cta_url: string | null;
    footer_text: string | null;
  };
  templates: {
    contact_confirm: { subject: string; heading: string; body: string };
    beta_welcome: {
      subject: string;
      heading: string;
      body: string;
      callout?: CalloutConfig;
    };
  };
}

let _domainConfigCache: DomainConfig | null = null;
let _domainConfigCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 Minuten

async function getDomainConfig(): Promise<DomainConfig> {
  const now = Date.now();
  if (_domainConfigCache && now - _domainConfigCacheTime < CACHE_TTL_MS) {
    return _domainConfigCache;
  }

  try {
    const { url, key } = getSupabaseConfig();
    const response = await fetch(
      `${url}/rest/v1/domains?project=eq.${PROJECT_ID}&select=*&limit=1`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      if (data?.[0]) {
        _domainConfigCache = data[0] as DomainConfig;
        _domainConfigCacheTime = now;
        return _domainConfigCache;
      }
    }
  } catch (error) {
    console.warn(
      "Domain-Config konnte nicht geladen werden, nutze Fallback:",
      error,
    );
  }

  // Fallback auf Build-Time-Werte aus project-meta.json
  return {
    display_name: PROJECT_DISPLAY_NAME,
    sender_email: "hallo",
    domain: PROJECT_DOMAIN,
    brand: {
      primary_color: PROJECT_PRIMARY_COLOR,
      accent_color: PROJECT_ACCENT_COLOR,
      logo_url: null,
      cta_text: null,
      cta_url: null,
      footer_text: null,
    },
    templates: {
      contact_confirm: {
        subject: "Danke für Ihre Nachricht",
        heading: "Wir haben Ihre Nachricht erhalten",
        body: "Vielen Dank für Ihre Nachricht. Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.",
      },
      beta_welcome: {
        subject: `Willkommen bei ${PROJECT_DISPLAY_NAME}`,
        heading: "Sie sind dabei!",
        body: `Vielen Dank für Ihre Registrierung als Beta-Tester. Wir arbeiten mit Hochdruck an ${PROJECT_DISPLAY_NAME} und benachrichtigen Sie, sobald Ihr Zugang freigeschaltet wird.`,
      },
    },
  };
}

// ============================================
// HTML E-Mail Template — Premium Design
// Table-basiert, Outlook/Gmail-kompatibel, <10KB
// ============================================

function renderEmailHtml(params: {
  heading: string;
  body: string;
  firstName: string;
  displayName: string;
  primaryColor: string;
  accentColor: string;
  ctaText?: string;
  ctaUrl?: string;
  footerText?: string;
  variant?: "customer" | "admin";
  showUnsubscribe?: boolean;
  unsubscribeUrl?: string;
  callout?: CalloutConfig;
  tagline?: string;
  logoUrl?: string | null;
  badge?: string;
}): string {
  const {
    heading,
    body,
    firstName,
    displayName,
    primaryColor,
    accentColor,
    ctaText,
    ctaUrl,
    variant = "customer",
    showUnsubscribe = false,
    unsubscribeUrl,
    callout,
    tagline,
    logoUrl,
    badge,
  } = params;

  // --- Admin-Variante: kompakt, funktional ---
  if (variant === "admin") {
    const now = new Date();
    const dateStr = now.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const badgeHtml = badge
      ? ` <span style="display:inline-block;background-color:${badge === "Beta" ? "#10b981" : "#3b82f6"};color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;padding:3px 10px;border-radius:10px;margin-left:8px;vertical-align:middle;letter-spacing:0.3px;">${badge}</span>`
      : "";

    return `<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${heading}</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <!-- Accent Stripe -->
          <tr>
            <td style="background-color:${primaryColor};height:4px;font-size:0;line-height:0;border-radius:8px 8px 0 0;">&nbsp;</td>
          </tr>
          <!-- Admin Header -->
          <tr>
            <td style="background-color:#1e293b;padding:16px 24px;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">${displayName}</span>
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#94a3b8;padding-left:12px;">${heading}</span>${badgeHtml}
            </td>
          </tr>
          <!-- Admin Body -->
          <tr>
            <td style="background-color:#ffffff;padding:24px;border-radius:0 0 8px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#374151;">
                    ${body}
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;">
                    Eingegangen am ${dateStr} um ${timeStr}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  // --- Customer-Variante: Premium Design ---

  const ctaBlock =
    ctaText && ctaUrl
      ? `
                <tr>
                  <td align="center" style="padding:28px 0 8px 0;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td align="center" style="background-color:${primaryColor};border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.12);">
                          <a href="${ctaUrl}" target="_blank" style="display:inline-block;padding:16px 36px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:8px;border-bottom:3px solid ${accentColor};">${ctaText}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`
      : "";

  const calloutBlock = callout
    ? `
                <tr>
                  <td style="padding:20px 0 0 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${primaryColor}08;border-left:4px solid ${accentColor};border-radius:0 8px 8px 0;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:${primaryColor};">${callout.title}</p>
                          <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#374151;">${callout.text}</p>
                          ${callout.items.map((item) => `<p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#374151;padding-left:8px;">&bull; ${item}</p>`).join("\n                          ")}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`
    : "";

  const unsubscribeLink =
    showUnsubscribe && unsubscribeUrl
      ? `<br><a href="${unsubscribeUrl}" style="color:#b0b5bc;text-decoration:underline;">Abmelden</a>`
      : "";

  const domainForLinks = PROJECT_DOMAIN;

  return `<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${heading}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @media (prefers-color-scheme: dark) {
      .email-bg { background-color: #1a1a2e !important; }
      .email-card { background-color: #16213e !important; }
      .email-text { color: #e0e0e0 !important; }
      .email-muted { color: #a0a0a0 !important; }
      .email-heading { color: #ffffff !important; }
      .email-footer { color: #888888 !important; }
      .email-divider { border-color: #2a2a3e !important; }
      .email-callout { background-color: #1a2744 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-bg" style="background-color:#f8fafc;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background-color:${primaryColor};padding:32px 32px 28px 32px;border-radius:12px 12px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${
                logoUrl
                  ? `
                <tr>
                  <td style="padding:0 0 8px 0;">
                    <img src="${logoUrl}" alt="${displayName}" height="36" style="display:block;max-height:36px;width:auto;border:0;" />
                  </td>
                </tr>`
                  : ""
              }
                <tr>
                  <td>
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:700;color:#ffffff;">${displayName}</span>
                  </td>
                </tr>${
                  tagline
                    ? `
                <tr>
                  <td style="padding:4px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:rgba(255,255,255,0.8);">
                    ${tagline}
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>
          <!-- Accent Line -->
          <tr>
            <td style="background-color:${accentColor};height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <!-- Body Card -->
          <tr>
            <td class="email-card" style="background-color:#ffffff;padding:36px 40px 32px 40px;border-radius:0 0 12px 12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <!-- Heading -->
                <tr>
                  <td class="email-heading" style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:#111827;padding:0 0 20px 0;">
                    ${heading}
                  </td>
                </tr>
                <!-- Greeting -->
                <tr>
                  <td class="email-text" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#374151;padding:0 0 8px 0;">
                    Hallo ${firstName},
                  </td>
                </tr>
                <!-- Body Text -->
                <tr>
                  <td class="email-text" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#374151;">
                    ${body}
                  </td>
                </tr>${calloutBlock}${ctaBlock}
                <!-- Signature -->
                <tr>
                  <td style="padding:28px 0 0 0;">
                    <p class="email-text" style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#374151;">Viele Gr&uuml;&szlig;e</p>
                    <p class="email-text" style="margin:0 0 2px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#374151;">Ihr ${displayName}-Team</p>
                    <p class="email-muted" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">info@${domainForLinks}</p>
                  </td>
                </tr>
                <!-- Divider -->
                <tr>
                  <td style="padding:24px 0 0 0;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td class="email-divider" style="border-top:1px solid #e5e7eb;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Branding -->
                <tr>
                  <td style="padding:20px 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:${primaryColor};text-align:center;">
                    ${displayName}
                  </td>
                </tr>
                <!-- Legal Footer -->
                <tr>
                  <td class="email-footer" style="padding:4px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#b0b5bc;text-align:center;">
                    <a href="https://${domainForLinks}/datenschutz" style="color:#b0b5bc;text-decoration:underline;">Datenschutz</a> &middot; <a href="https://${domainForLinks}/impressum" style="color:#b0b5bc;text-decoration:underline;">Impressum</a>${unsubscribeLink}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ============================================
// Öffentliche API (identisch mit loops.ts)
// ============================================

/**
 * Kontaktformular-Lead registrieren
 * Variante A (web-stahlnorm Pattern): name als Einzelfeld
 */
export async function registerContactLead(params: {
  email: string;
  name: string;
  company?: string;
  message: string;
}) {
  const nameParts = params.name.trim().split(/\s+/);
  const firstName = nameParts[0] || params.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  await supabaseRequest(
    "contacts",
    "POST",
    {
      email: params.email,
      first_name: firstName,
      last_name: lastName,
      company: params.company || null,
      source: "contact_form",
      project: PROJECT_ID,
      domain: PROJECT_DOMAIN,
      message: params.message,
      subscribed: false,
    },
    { Prefer: "resolution=merge-duplicates,return=minimal" },
    "on_conflict=email,project",
  );

  return { success: true };
}

/**
 * Beta-User registrieren
 * Unterstuetzt beide Varianten:
 *   A) { name } — Einzelfeld, wird server-side gesplittet
 *   B) { firstName, lastName } — getrennte Felder
 */
export async function registerBetaUser(params: {
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  newsletter?: boolean;
}) {
  let firstName: string;
  let lastName: string;

  if (params.firstName) {
    firstName = params.firstName;
    lastName = params.lastName || "";
  } else if (params.name) {
    const nameParts = params.name.trim().split(/\s+/);
    firstName = nameParts[0] || params.name;
    lastName = nameParts.slice(1).join(" ") || "";
  } else {
    firstName = "";
    lastName = "";
  }

  await supabaseRequest(
    "contacts",
    "POST",
    {
      email: params.email,
      first_name: firstName,
      last_name: lastName,
      company: params.company || null,
      source: "beta_registration",
      project: PROJECT_ID,
      domain: PROJECT_DOMAIN,
      subscribed: params.newsletter ?? true,
    },
    { Prefer: "resolution=merge-duplicates,return=minimal" },
  );

  return { success: true };
}

/**
 * Bestätigungsmail nach Kontaktformular senden
 */
export async function sendContactConfirmEmail(params: {
  email: string;
  name: string;
}) {
  const config = await getDomainConfig();
  const template = config.templates.contact_confirm;
  const firstName = params.name.trim().split(/\s+/)[0] || params.name;

  const subject = template.subject.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );
  const heading = template.heading.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );
  const body = template.body.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );

  const html = renderEmailHtml({
    heading,
    body,
    firstName,
    displayName: config.display_name,
    primaryColor: config.brand.primary_color,
    accentColor: config.brand.accent_color,
    ctaText: config.brand.cta_text || undefined,
    ctaUrl: config.brand.cta_url || undefined,
    variant: "customer",
    showUnsubscribe: false,
    tagline: PROJECT_TAGLINE,
    logoUrl: config.brand.logo_url,
  });

  return sendEmail({
    from: `${config.display_name} <info@${config.domain}>`,
    to: params.email,
    subject,
    html,
  });
}

/**
 * Admin-Benachrichtigung: Neuer Kontaktformular-Eintrag
 */
export async function sendContactNotifyAdmin(params: {
  email: string;
  name: string;
  company?: string;
  message: string;
}) {
  const config = await getDomainConfig();

  const dataRows = [
    { label: "Name", value: params.name },
    { label: "E-Mail", value: params.email },
    ...(params.company ? [{ label: "Firma", value: params.company }] : []),
    { label: "Nachricht", value: params.message },
  ];

  const tableHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
${dataRows
  .map(
    (row) => `      <tr>
        <td style="padding:8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f3f4f6;width:100px;">${row.label}</td>
        <td style="padding:8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${row.value}</td>
      </tr>`,
  )
  .join("\n")}
    </table>`;

  const html = renderEmailHtml({
    heading: "Neue Kontaktanfrage",
    body: tableHtml,
    firstName: "Admin",
    displayName: config.display_name,
    primaryColor: config.brand.primary_color,
    accentColor: config.brand.accent_color,
    variant: "admin",
    badge: "Kontakt",
  });

  return sendEmail({
    from: `${config.display_name} <info@${config.domain}>`,
    to: PROJECT_ADMIN_EMAIL,
    subject: `Neue Kontaktanfrage von ${params.name}`,
    html,
  });
}

/**
 * Willkommensmail an neuen Beta-User senden
 * Unterstuetzt beide Varianten:
 *   A) { name, company } — Einzelfeld
 *   B) { firstName, company } — Vorname direkt
 */
export async function sendBetaWelcomeEmail(params: {
  email: string;
  name?: string;
  firstName?: string;
  company?: string;
}) {
  const config = await getDomainConfig();
  const template = config.templates.beta_welcome;

  const firstName =
    params.firstName ||
    (params.name ? params.name.trim().split(/\s+/)[0] : "") ||
    params.name ||
    "";

  const subject = template.subject.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );
  const heading = template.heading.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );
  const body = template.body.replace(
    /\{\{displayName\}\}/g,
    config.display_name,
  );

  const unsubscribeUrl = `https://${config.domain}/api/unsubscribe?email=${encodeURIComponent(params.email)}&project=${PROJECT_ID}`;

  const html = renderEmailHtml({
    heading,
    body,
    firstName,
    displayName: config.display_name,
    primaryColor: config.brand.primary_color,
    accentColor: config.brand.accent_color,
    ctaText: config.brand.cta_text || undefined,
    ctaUrl: config.brand.cta_url || undefined,
    variant: "customer",
    showUnsubscribe: true,
    unsubscribeUrl,
    callout: template.callout,
    tagline: PROJECT_TAGLINE,
    logoUrl: config.brand.logo_url,
  });

  return sendEmail({
    from: `${config.display_name} <info@${config.domain}>`,
    to: params.email,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}

/**
 * Admin-Benachrichtigung: Neue Beta-Registrierung
 */
export async function sendBetaNotifyAdmin(params: {
  email: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
}) {
  const config = await getDomainConfig();

  const displayName =
    params.firstName && params.lastName
      ? `${params.firstName} ${params.lastName}`
      : params.firstName || params.name || params.email;

  const dataRows = [
    { label: "Name", value: displayName },
    { label: "E-Mail", value: params.email },
    ...(params.company ? [{ label: "Firma", value: params.company }] : []),
  ];

  const tableHtml = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
${dataRows
  .map(
    (row) => `      <tr>
        <td style="padding:8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:#6b7280;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f3f4f6;width:120px;">${row.label}</td>
        <td style="padding:8px 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${row.value}</td>
      </tr>`,
  )
  .join("\n")}
    </table>`;

  const html = renderEmailHtml({
    heading: "Neue Beta-Registrierung",
    body: tableHtml,
    firstName: "Admin",
    displayName: config.display_name,
    primaryColor: config.brand.primary_color,
    accentColor: config.brand.accent_color,
    variant: "admin",
    badge: "Beta",
  });

  return sendEmail({
    from: `${config.display_name} <info@${config.domain}>`,
    to: PROJECT_ADMIN_EMAIL,
    subject: `Neue Beta-Registrierung von ${displayName}`,
    html,
  });
}
