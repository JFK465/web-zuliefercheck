/**
 * Unsubscribe API-Route — Abmeldelink für E-Mails
 *
 * GET /api/unsubscribe?email=...&project=...
 * Setzt subscribed=false in der jfk-leads contacts-Tabelle
 * und zeigt eine gebrandete Bestätigungsseite.
 *
 * Wird per /saas-email Skill in jedes Projekt kopiert als:
 *   app/api/unsubscribe/route.ts (oder src/app/api/unsubscribe/route.ts)
 */

import { NextRequest, NextResponse } from "next/server";

// __TEMPLATE_REPLACE_START__
const PROJECT_DISPLAY_NAME = "ZulieferCheck";
const PROJECT_PRIMARY_COLOR = "#2563EB";
// __TEMPLATE_REPLACE_END__

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const project = searchParams.get("project");

  if (!email || !project) {
    return new NextResponse(renderPage("error", "Ungültiger Abmeldelink."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const url = process.env.JFK_LEADS_SUPABASE_URL;
  const key = process.env.JFK_LEADS_SUPABASE_KEY;

  if (!url || !key) {
    console.error("JFK_LEADS_SUPABASE_URL/KEY nicht konfiguriert");
    return new NextResponse(
      renderPage("error", "Dienst vorübergehend nicht verfügbar."),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }

  try {
    const response = await fetch(
      `${url}/rest/v1/contacts?email=eq.${encodeURIComponent(email)}&project=eq.${encodeURIComponent(project)}`,
      {
        method: "PATCH",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ subscribed: false }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Unsubscribe Supabase error:", errorText);
      return new NextResponse(
        renderPage(
          "error",
          "Abmeldung fehlgeschlagen. Bitte versuchen Sie es später erneut.",
        ),
        {
          status: 500,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        },
      );
    }

    return new NextResponse(
      renderPage(
        "success",
        "Sie wurden erfolgreich abgemeldet und erhalten keine weiteren E-Mails von uns.",
      ),
      {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return new NextResponse(
      renderPage(
        "error",
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      ),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }
}

function renderPage(status: "success" | "error", message: string): string {
  const icon = status === "success" ? "&#10003;" : "&#10007;";
  const iconColor = status === "success" ? "#22c55e" : "#ef4444";
  const title =
    status === "success" ? "Abmeldung erfolgreich" : "Abmeldung fehlgeschlagen";

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>${title} — ${PROJECT_DISPLAY_NAME}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #374151; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .card { background: #fff; border-radius: 16px; padding: 48px 40px; max-width: 480px; width: 100%; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .icon { width: 64px; height: 64px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 28px; color: #fff; margin-bottom: 24px; }
    .brand { font-size: 14px; font-weight: 600; color: ${PROJECT_PRIMARY_COLOR}; margin-bottom: 24px; letter-spacing: 0.5px; }
    h1 { font-size: 22px; font-weight: 700; color: #111827; margin-bottom: 12px; }
    p { font-size: 15px; line-height: 1.6; color: #6b7280; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">${PROJECT_DISPLAY_NAME}</div>
    <div class="icon" style="background-color:${iconColor};">${icon}</div>
    <h1>${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`;
}
