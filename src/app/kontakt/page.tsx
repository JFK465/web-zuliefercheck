import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "ZulieferCheck Kontakt – Demo anfordern oder Fragen stellen",
  description:
    "Kontaktieren Sie das ZulieferCheck-Team. Demo anfordern, Fragen zur Software stellen oder Partnerschaft anfragen. Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: `${siteConfig.url}/kontakt` },
};

export default function KontaktPage() {
  return (
    <>
      <WebPageSchema
        title="ZulieferCheck Kontakt"
        description="Demo anfordern oder Fragen stellen."
        url="/kontakt"
      />
      <BreadcrumbSchema items={[{ label: "Kontakt", href: "/kontakt" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="heading-hero mb-6">Sprechen Sie mit uns</h1>
            <p className="text-xl text-muted-foreground">
              Fragen zur Software, Demo-Anfragen oder Partnerschaft — wir melden
              uns innerhalb von 24 Stunden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-semibold text-xl mb-6">
                So erreichen Sie uns
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">E-Mail</p>
                    <a
                      href="mailto:hallo@zuliefercheck.de"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      hallo@zuliefercheck.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Standort</p>
                    <p className="text-muted-foreground text-sm">Deutschland</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold mb-2">Demo anfordern</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Wir zeigen Ihnen ZulieferCheck in einer 20-minütigen
                  Video-Demo — auf Ihr Unternehmen zugeschnitten.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Keine Verpflichtung</li>
                  <li>✓ Auf Ihre Branche zugeschnitten</li>
                  <li>✓ Inklusive Q&A</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
