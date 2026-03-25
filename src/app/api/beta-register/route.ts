import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  registerBetaUser,
  sendBetaWelcomeEmail,
  sendBetaNotifyAdmin,
} from "@/lib/services/email-service";

const betaSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  name: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional().default(""),
  firma: z.string().optional(),
  company: z.string().optional(),
  branche: z.string().optional(),
  newsletter: z.boolean().optional().default(true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = betaSchema.parse(body);

    const company = data.company || data.firma;

    await registerBetaUser({
      email: data.email,
      name: data.name,
      firstName: data.firstName,
      lastName: data.lastName,
      company,
      newsletter: data.newsletter,
    });

    // E-Mails parallel awaiten (Vercel killt die Funktion sonst)
    const emailResults = await Promise.allSettled([
      sendBetaWelcomeEmail({
        email: data.email,
        name: data.name,
        firstName: data.firstName,
        company,
      }),
      sendBetaNotifyAdmin({
        email: data.email,
        name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        company,
      }),
    ]);
    emailResults.forEach((result, i) => {
      if (result.status === "rejected") {
        console.error(`E-Mail ${i} fehlgeschlagen:`, result.reason);
      }
    });

    return NextResponse.json({
      success: true,
      message: "Beta-Registrierung erfolgreich",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültige Daten", details: error.issues },
        { status: 400 },
      );
    }

    if (
      error instanceof Error &&
      error.message.includes("nicht konfiguriert")
    ) {
      console.error("E-Mail-Service nicht konfiguriert:", error.message);
      return NextResponse.json(
        { error: "Service nicht konfiguriert" },
        { status: 500 },
      );
    }

    console.error("Beta registration error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
