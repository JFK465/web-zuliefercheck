import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
  SoftwareAppSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BetaRegistrationForm } from "@/components/software/BetaRegistrationForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Bell,
  Upload,
  Monitor,
  Network,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lieferantenmanagement Software für Metallbau – ZulieferCheck",
  description:
    "Zulieferer-Zertifikate automatisch überwachen, Lieferantenportal und EN-1090-Branchenverzeichnis. SupplyOn-Alternative für Metallbau-KMU. Beta kostenlos.",
  alternates: {
    canonical: `${siteConfig.url}/lieferantenmanagement-software`,
  },
  openGraph: {
    title: "Lieferantenmanagement Software für Metallbau – ZulieferCheck",
    description:
      "Automatische Zertifikats-Überwachung für EN-1090-Betriebe. Beta kostenlos.",
    url: `${siteConfig.url}/lieferantenmanagement-software`,
  },
};

const features = [
  {
    icon: Bell,
    title: "Automatische Ablauf-Erinnerungen",
    description:
      "90, 30 und 7 Tage vor Ablauf automatische Benachrichtigung. Nie wieder eine Frist verpassen.",
  },
  {
    icon: Upload,
    title: "Lieferantenportal (Self-Upload)",
    description:
      "Zulieferer laden ihre Zertifikate selbst hoch. Kein E-Mail-Ping-Pong mehr.",
  },
  {
    icon: Monitor,
    title: "Audit-Cockpit",
    description:
      "Alle Zulieferer mit Ampelstatus auf einem Blick. Ein-Klick-PDF für den Auditor.",
  },
  {
    icon: Network,
    title: "Branchenverzeichnis (Netzwerkeffekt)",
    description:
      "Verifizierte EN-1090-Zulieferer finden und selbst gefunden werden.",
  },
];

export default function LieferantenmanagementSoftwarePage() {
  return (
    <>
      <WebPageSchema
        title="Lieferantenmanagement Software für Metallbau – ZulieferCheck"
        description="Automatische Zertifikats-Überwachung für EN-1090-Betriebe."
        url="/lieferantenmanagement-software"
      />
      <SoftwareAppSchema
        name="ZulieferCheck"
        description="Lieferantenmanagement-Software für EN-1090-zertifizierte Metallbau-Betriebe"
        url="/lieferantenmanagement-software"
      />
      <BreadcrumbSchema
        items={[
          {
            label: "Lieferantenmanagement Software",
            href: "/lieferantenmanagement-software",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Lieferantenmanagement Software",
              href: "/lieferantenmanagement-software",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm">
              Beta
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Jetzt kostenlos
            </Badge>
          </div>
          <h1 className="heading-hero mb-6 text-balance">
            Lieferantenmanagement-Software für{" "}
            <span className="text-primary">EN-1090-Metallbau-Betriebe</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Ein abgelaufenes Zertifikat Ihres Schweißen-Subunternehmers macht
            Ihre eigene CE-Kennzeichnung ungültig. ZulieferCheck verhindert
            genau das — automatisch, EN-1090-spezifisch, in 15 Minuten
            eingerichtet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              Keine Kreditkarte nötig
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              In 15 Minuten eingerichtet
            </span>
          </div>

          {/* Beta Registration Form */}
          <div
            id="beta-anmeldung"
            className="bg-white rounded-2xl border border-primary/20 shadow-lg p-8 max-w-lg mx-auto"
          >
            <h2 className="font-bold text-2xl mb-2">
              Beta-Zugang sichern — kostenlos
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Während der Beta-Phase kostenlos. Beta-Nutzer erhalten dauerhaft
              30 % Rabatt.
            </p>
            <BetaRegistrationForm />
          </div>
        </div>
      </section>

      {/* Pain Hook */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-destructive">
            ⚠ EN 1090-2 Clause 5.6: Ein abgelaufenes Zulieferer-Zertifikat macht
            Ihre eigene CE-Kennzeichnung ungültig.
          </p>
          <p className="text-muted-foreground mt-2">
            Das ist kein theoretisches Risiko — es ist der häufigste
            Audit-Befund in Metallbau-Betrieben.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Was ZulieferCheck kann
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Speziell für EN-1090-zertifizierte Metallbau-Betriebe entwickelt.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            ZulieferCheck vs. Excel & Outlook
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/5 rounded-xl p-6 border border-destructive/20">
              <h3 className="font-semibold mb-4 text-destructive">
                Ohne ZulieferCheck (Excel/Outlook)
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Ablaufdaten manuell in Tabelle pflegen",
                  "Erinnerungen per Kalender-Eintrag",
                  "Zertifikate per E-Mail anfordern",
                  "PDFs in Outlook-Ordnern",
                  "Stundenlange Audit-Vorbereitung",
                  "Kein Branchenverzeichnis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-semibold mb-4 text-primary">
                Mit ZulieferCheck
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Automatische Ablauf-Überwachung",
                  "Erinnerungen 90/30/7 Tage vorher",
                  "Zulieferer laden selbst hoch",
                  "Zentrales, revisionssicheres Archiv",
                  "Audit-Cockpit — in 2 Minuten bereit",
                  "Zugang zum EN-1090-Verzeichnis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            Jetzt Beta-Zugang sichern — kostenlos
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Keine Kreditkarte. Keine Einrichtungsgebühr. Beta-Nutzer erhalten
            dauerhaft 30 % Rabatt.
          </p>
          <Button size="lg" asChild>
            <a href="#beta-anmeldung">
              Beta-Zugang sichern
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <div className="mt-6">
            <Link
              href="/kontakt"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lieber eine Demo anfordern? → Demo anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
