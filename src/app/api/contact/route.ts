import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  registerContactLead,
  sendContactConfirmEmail,
  sendContactNotifyAdmin,
} from "@/lib/services/email-service";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  privacy: z.literal(true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await registerContactLead({
      email: data.email,
      name: data.name,
      company: data.company,
      message: data.message,
    });

    // E-Mails parallel senden und awaiten (Vercel killt die Funktion sonst)
    await Promise.allSettled([
      sendContactConfirmEmail({
        email: data.email,
        name: data.name,
      }),
      sendContactNotifyAdmin({
        email: data.email,
        name: data.name,
        company: data.company,
        message: data.message,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Nachricht erfolgreich gesendet",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validierungsfehler", details: error.issues },
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

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 },
    );
  }
}
