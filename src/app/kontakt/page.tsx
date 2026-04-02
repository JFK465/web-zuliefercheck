import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

const PRODUCT_NAME = "ZulieferCheck";
const PRODUCT_DOMAIN = "zuliefercheck.de";
const CONTACT_EMAIL = "info@zuliefercheck.de";

export const metadata: Metadata = {
  title: `Kontakt – ${PRODUCT_NAME} | Wir sind für Sie da`,
  description: `Kontaktieren Sie ${PRODUCT_NAME} für Fragen, Feedback oder Support. E-Mail: ${CONTACT_EMAIL}. Wir antworten innerhalb von 24 Stunden.`,
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
            Wir sind für Sie da
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Haben Sie Fragen zu {PRODUCT_NAME}? Wir freuen uns auf Ihre
            Nachricht und antworten innerhalb von 24 Stunden.
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
                <h2 className="text-2xl font-semibold mb-1">
                  Nachricht senden
                </h2>
                <p className="text-muted-foreground mb-6">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
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
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
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
                    <svg
                      className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Reaktionszeit</p>
                      <p className="text-sm text-muted-foreground">
                        Wir antworten in der Regel
                        <br />
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
                    <svg
                      className="h-4 w-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Preise & Pakete</p>
                      <p className="text-xs text-muted-foreground">
                        Transparente Preisgestaltung
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                  >
                    <svg
                      className="h-4 w-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-sm">Blog & Wissen</p>
                      <p className="text-xs text-muted-foreground">
                        Fachartikel und Anleitungen
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {PRODUCT_NAME} kostenlos testen
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Starten Sie jetzt mit der kostenlosen Beta — unverbindlich und
                ohne Kreditkarte.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl bg-background/80">
                <svg
                  className="h-6 w-6 text-primary mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-sm">Kostenlos testen</p>
                <p className="text-xs text-muted-foreground mt-1">
                  14 Tage unverbindlich
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/80">
                <svg
                  className="h-6 w-6 text-primary mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <p className="font-semibold text-sm">Keine Kreditkarte</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Einfach registrieren
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/80">
                <svg
                  className="h-6 w-6 text-primary mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <p className="font-semibold text-sm">DSGVO-konform</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Deutsche Server
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background/80">
                <svg
                  className="h-6 w-6 text-primary mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <p className="font-semibold text-sm">Sofort startklar</p>
                <p className="text-xs text-muted-foreground mt-1">
                  In 5 Minuten eingerichtet
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/lieferantenmanagement-software"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Jetzt kostenlos starten
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
