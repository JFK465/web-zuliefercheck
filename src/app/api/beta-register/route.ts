import { NextResponse } from "next/server";
import { z } from "zod";

const betaSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  suppliers: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    betaSchema.parse(body);
    // TODO: CRM/E-Mail-Service integrieren
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
