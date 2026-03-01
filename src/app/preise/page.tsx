import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ZulieferCheck Preise – Transparent ab 49 EUR/Monat",
  description:
    "ZulieferCheck Preispläne für Metallbau-KMU. Starter ab 49 EUR/Monat, Professional ab 89 EUR/Monat. Keine Einrichtungsgebühr. Kostenlos während der Beta.",
  alternates: { canonical: `${siteConfig.url}/preise` },
};

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "Für kleine Betriebe mit bis zu 10 Zulieferern.",
    features: [
      "Bis zu 10 Zulieferer",
      "Zertifikats-Ablauf-Tracker",
      "Automatische Erinnerungen (90/30/7 Tage)",
      "Audit-Cockpit mit PDF-Export",
      "2 Benutzer-Zugänge",
      "E-Mail-Support",
      "EN-1090-spezifische Zertifikatstypen",
    ],
    cta: "Beta-Zugang sichern",
    href: "/lieferantenmanagement-software#beta-anmeldung",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "89",
    description:
      "Für Betriebe mit bis zu 50 Zulieferern und vollem Funktionsumfang.",
    features: [
      "Bis zu 50 Zulieferer",
      "Alles aus Starter",
      "Lieferantenportal (Self-Upload durch Zulieferer)",
      "Bewertungsmatrix ISO 9001 Kapitel 8.4",
      "Branchenverzeichnis-Eintrag (verifiziert)",
      "Dokumentenarchiv mit Versionierung",
      "5 Benutzer-Zugänge",
      "Prioritäts-Support",
      "Onboarding-Call",
    ],
    cta: "Beta-Zugang sichern",
    href: "/lieferantenmanagement-software#beta-anmeldung",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    description:
      "Für große Betriebe mit vielen Standorten oder QM-Berater mit White-Label-Bedarf.",
    features: [
      "Unbegrenzt Zulieferer",
      "Alles aus Professional",
      "Multi-Mandanten (mehrere Betriebe)",
      "White-Label-Option",
      "API-Zugang",
      "SSO / SAML",
      "Dedizierter Account Manager",
      "SLA-Garantie 99,9 %",
    ],
    cta: "Kontakt aufnehmen",
    href: "/kontakt",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Kostet ZulieferCheck während der Beta wirklich nichts?",
    a: "Ja, während der Beta-Phase ist ZulieferCheck vollständig kostenlos — ohne Kreditkarte, ohne Einrichtungsgebühr. Beta-Nutzer erhalten nach Abschluss der Beta dauerhaft 30 % Rabatt auf ihr gewähltes Paket.",
  },
  {
    q: "Kann ich nach der Beta ohne Vertragsbindung kündigen?",
    a: "Ja. ZulieferCheck läuft monatlich kündbar. Es gibt keine Mindestlaufzeit im Starter und Professional-Paket.",
  },
  {
    q: "Was passiert mit meinen Daten nach der Beta?",
    a: "Alle während der Beta eingegebenen Daten bleiben erhalten. Sie müssen nach der Beta nichts neu einrichten.",
  },
  {
    q: "Gibt es eine kostenlose Testphase auch nach der Beta?",
    a: "Nach der Beta bieten wir eine 30-tägige kostenlose Testphase an. Kein automatischer Übergang in ein kostenpflichtiges Abo.",
  },
];

export default function PreisePage() {
  return (
    <>
      <WebPageSchema
        title="ZulieferCheck Preise"
        description="Transparente Preise für Metallbau-KMU."
        url="/preise"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema items={[{ label: "Preise", href: "/preise" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Preise", href: "/preise" }]} />
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom text-center">
          <Badge variant="secondary" className="mb-4">
            Beta — Jetzt kostenlos
          </Badge>
          <h1 className="heading-hero mb-6">Einfache, transparente Preise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kein Enterprise-Vertrag. Kein Implementierungsaufwand. Heute
            anmelden, morgen audit-ready. Während der Beta kostenlos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 border ${
                  tier.highlighted
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-background"
                }`}
              >
                {tier.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Beliebteste Wahl
                  </Badge>
                )}
                <div className="mb-6">
                  <h2 className="font-bold text-xl mb-2">{tier.name}</h2>
                  <div className="flex items-baseline gap-1 mb-2">
                    {tier.price === "Auf Anfrage" ? (
                      <span className="text-2xl font-bold">Auf Anfrage</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold">
                          {tier.price} €
                        </span>
                        <span className="text-muted-foreground text-sm">
                          /Monat
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${tier.highlighted ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href={tier.href}>
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            Häufige Fragen zu den Preisen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-background rounded-lg border border-border group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium list-none">
                  {faq.q}
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
