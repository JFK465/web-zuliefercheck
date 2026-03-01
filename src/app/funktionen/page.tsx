import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Upload,
  BarChart3,
  Monitor,
  Network,
  Archive,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ZulieferCheck Funktionen – Zertifikatsmanagement & Portal",
  description:
    "Alle Funktionen: Ablauf-Tracking, automatische Erinnerungen, Lieferantenportal, Bewertungsmatrix nach ISO 9001 und EN 1090-Branchenverzeichnis für Metallbau.",
  alternates: { canonical: `${siteConfig.url}/funktionen` },
};

const features = [
  {
    icon: Clock,
    title: "Zertifikats-Ablauf-Tracker",
    description:
      "Alle Zulieferer-Zertifikate mit Ablaufdaten erfasst. Ampelstatus (grün/gelb/rot) auf einen Blick. Unterstützte Typen: WPK-Zertifikat (EN 1090-1), ISO 3834, ISO 9606-1 (Schweißer-Zertifikat), ISO 9001, ISO 45001 und weitere.",
    highlight: "Kern-Feature",
  },
  {
    icon: Bell,
    title: "Automatische Erinnerungs-E-Mails",
    description:
      "90, 30 und 7 Tage vor Ablauf automatische Benachrichtigung an Ihren QM-Beauftragten und optional direkt an den Zulieferer. Konfigurierbar pro Zertifikatstyp.",
    highlight: "Zeit sparen",
  },
  {
    icon: Upload,
    title: "Lieferantenportal (Self-Upload)",
    description:
      "Zulieferer erhalten einen individuellen Zugang und laden ihre aktuellen Zertifikate selbst hoch. Sie prüfen und bestätigen. Versionierung: ältere Versionen bleiben archiviert.",
    highlight: "Kein E-Mail-Ping-Pong",
  },
  {
    icon: BarChart3,
    title: "Bewertungsmatrix ISO 9001 Kapitel 8.4",
    description:
      "Strukturiertes Bewertungsformular, das die ISO-9001-Anforderungen an Lieferantenbewertung abdeckt. Kriterien: Liefertreue, Qualität, Reaktionszeit, Zertifikatsstatus. Revisionssicher gespeichert.",
    highlight: "Audit-konform",
  },
  {
    icon: Monitor,
    title: "Audit-Cockpit",
    description:
      "Sofortiger Überblick aller Zulieferer mit Zertifikatsstatus — auf einem Bildschirm. Ein-Klick-Export als PDF gemäß EN 1090-2 Clause 5.6. Auch auf dem Tablet, für den Einsatz direkt beim Auditor.",
    highlight: "Audit-Ready",
  },
  {
    icon: Network,
    title: "Branchenverzeichnis (Netzwerkeffekt)",
    description:
      "Verifiziertes Verzeichnis von EN-1090-zertifizierten Zulieferern — filterbar nach Region, Zertifizierungsgrad und Schweißverfahren. Als Zulieferer kostenlos eintragen, als Betreiber neue Subunternehmer finden.",
    highlight: "Einzigartiger Vorteil",
  },
  {
    icon: Archive,
    title: "Dokumentenarchiv",
    description:
      "Alle Zertifikats-PDFs zentral und revisionssicher gespeichert. Versionierung mit Zeitstempel: Welches Dokument war zum Zeitpunkt X gültig? Wichtig für Rückverfolgbarkeit bei Schadensfall.",
    highlight: "Revisionssicher",
  },
  {
    icon: Users,
    title: "Mehrbenutzer-Zugänge",
    description:
      "GF, QM-Beauftragter und Schweißaufsicht haben jeweils ihren Zugang mit passenden Berechtigungen. GF: Lese-Zugriff. QM: Vollzugriff. Schweißaufsicht: Zulieferer-spezifisch konfigurierbar.",
    highlight: "Rollenbasiert",
  },
  {
    icon: ShieldCheck,
    title: "EN-1090-spezifische Zertifikatstypen",
    description:
      "WPK-Zertifikat, ISO 3834, ISO 9606-1, ISO 9001 — alle normspezifisch vorerfasst mit den richtigen Gültigkeitsregeln und Verlängerungsfristen. ISO 9606-1 z.B. mit 2-Jahres-Gültigkeit und 6-Monats-Verlängerungsoption.",
    highlight: "Normspezifisch",
  },
];

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        title="ZulieferCheck Funktionen"
        description="Alle Funktionen von ZulieferCheck im Überblick."
        url="/funktionen"
      />
      <BreadcrumbSchema
        items={[{ label: "Funktionen", href: "/funktionen" }]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Funktionen", href: "/funktionen" }]} />
      </div>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom text-center">
          <h1 className="heading-hero mb-6 max-w-3xl mx-auto">
            Alle Funktionen im Überblick
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Von der Zertifikatsüberwachung bis zum Branchenverzeichnis —
            ZulieferCheck deckt den gesamten Zulieferer-Management-Prozess ab.
          </p>
          <Button size="lg" asChild>
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Beta-Zugang sichern — kostenlos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            Alle Funktionen — während der Beta kostenlos
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Kein Funktionsumfang eingeschränkt. Beta-Nutzer erhalten dauerhaft
            30 % Rabatt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/lieferantenmanagement-software#beta-anmeldung">
                Beta-Zugang sichern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
