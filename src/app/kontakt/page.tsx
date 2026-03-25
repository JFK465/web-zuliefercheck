import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

const PRODUCT_NAME = "ZulieferCheck";
const PRODUCT_DOMAIN = "zuliefercheck.de";
const CONTACT_EMAIL = "info@zuliefercheck.de";

export const metadata: Metadata = {
  title: `Kontakt – ${PRODUCT_NAME} | Wir sind fuer Sie da`,
  description: `Kontaktieren Sie ${PRODUCT_NAME} fuer Fragen, Feedback oder Support. E-Mail: ${CONTACT_EMAIL}. Wir antworten innerhalb von 24 Stunden.`,
  robots: { index: false, follow: true },
  openGraph: {
    title: `Kontakt – ${PRODUCT_NAME}`,
    description: `Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu ${PRODUCT_NAME}.`,
    type: "website",
    locale: "de_DE",
    url: `https://${PRODUCT_DOMAIN}/kontakt`,
  },
  alternates: {
    canonical: `https://${PRODUCT_DOMAIN}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-16 lg:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Wir sind fuer Sie da
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen zu {PRODUCT_NAME}? Wir freuen uns auf Ihre Nachricht
            und antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold mb-1">Nachricht senden</h2>
                <p className="text-muted-foreground mb-6">
                  Fuellen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Kontaktdaten */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-5">Kontaktdaten</h2>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">E-Mail</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-primary hover:underline text-sm"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Anschrift</p>
                      <p className="text-sm text-muted-foreground">
                        Jonas Krueger<br />
                        Meisenweg 13<br />
                        78465 Konstanz<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Reaktionszeit</p>
                      <p className="text-sm text-muted-foreground">
                        Wir antworten in der Regel<br />
                        innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schnellzugriff */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Schnellzugriff</h2>
                <div className="space-y-1">
                  <Link
                    href="/preise"
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                  >
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Preise & Pakete</p>
                      <p className="text-xs text-muted-foreground">Transparente Preisgestaltung</p>
                    </div>
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                  >
                    <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Blog & Wissen</p>
                      <p className="text-xs text-muted-foreground">Fachartikel und Anleitungen</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
