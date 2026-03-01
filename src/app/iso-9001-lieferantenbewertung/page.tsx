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
import {
  AlertTriangle,
  Clock,
  FileWarning,
  Bell,
  ArrowRight,
  ClipboardCheck,
  BarChart3,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lieferantenbewertung ISO 9001 Software – ZulieferCheck",
  description:
    "ISO 9001 Kapitel 8.4 konform: Zertifikate verwalten, Lieferantenbewertungen dokumentieren, Audit-Trail automatisch führen. Für QM-Beauftragte in KMU.",
  alternates: {
    canonical: `${siteConfig.url}/iso-9001-lieferantenbewertung`,
  },
  openGraph: {
    title: "ISO 9001 Lieferantenbewertung mit ZulieferCheck",
    description:
      "ISO 9001 Kapitel 8.4 konform — digitale Lieferantenbewertung und Zertifikatsverwaltung.",
    url: `${siteConfig.url}/iso-9001-lieferantenbewertung`,
  },
};

const challenges = [
  {
    icon: AlertTriangle,
    title: "ISO 9001 Kapitel 8.4 verlangt nachweisliche Lieferantenbewertung",
    description:
      "Sie müssen nachweisen, dass Sie externe Anbieter nach definierten Kriterien bewertet und überwacht haben. Fehlt der Nachweis, riskieren Sie einen Major-Befund beim nächsten Zertifizierungsaudit.",
  },
  {
    icon: FileWarning,
    title: "Bewertungen in Excel-Tabellen sind nicht audit-sicher",
    description:
      "ISO 9001 verlangt einen nachvollziehbaren Audit-Trail. Excel-Tabellen ohne Versionierung und Änderungsprotokoll genügen den Anforderungen eines ISO-Auditors häufig nicht.",
  },
  {
    icon: Clock,
    title: "Zertifikate und Bewertungen werden separat verwaltet",
    description:
      "Zertifikate liegen in einem Ordner, Bewertungen in einem anderen, Maßnahmen in einer dritten Datei. QM-Beauftragte verbringen Stunden damit, alles für das Audit zusammenzusuchen.",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Strukturierte Lieferantenbewertung nach ISO 9001",
    description:
      "Bewertungsvorlagen nach ISO 9001 Kapitel 8.4 sind vorbereitet — Qualität, Liefertreue, Zertifizierungsstatus, Reaktionszeit. Alles in einem System.",
  },
  {
    icon: Bell,
    title: "Automatische Erinnerung an Neubewertung",
    description:
      "Sie legen das Bewertungsintervall fest (z. B. jährlich). ZulieferCheck erinnert Sie rechtzeitig, bevor das nächste Audit eine aktuelle Bewertung verlangt.",
  },
  {
    icon: BarChart3,
    title: "Audit-Trail automatisch erstellt",
    description:
      "Jede Änderung, jede Bewertung, jedes hochgeladene Zertifikat wird mit Zeitstempel und Benutzer protokolliert — ohne manuellen Aufwand.",
  },
  {
    icon: ArrowRight,
    title: "Maßnahmen-Tracking bei Abweichungen",
    description:
      "Wenn ein Lieferant eine schlechte Bewertung erhält, legen Sie direkt in ZulieferCheck eine Maßnahme an und verfolgen deren Status bis zur Wirksamkeitsprüfung.",
  },
];

const faqs = [
  {
    q: "Was verlangt ISO 9001 Kapitel 8.4 genau von der Lieferantenbewertung?",
    a: "ISO 9001 Kapitel 8.4.1 verlangt, dass Sie Kriterien für die Auswahl, Bewertung und Überwachung externer Anbieter festlegen und dokumentierte Informationen dieser Tätigkeiten aufbewahren. Das bedeutet: definierte Bewertungskriterien, regelmäßige Überprüfung und ein nachvollziehbarer Audit-Trail.",
  },
  {
    q: "Reicht eine Excel-Tabelle für die ISO-9001-konforme Lieferantenbewertung?",
    a: "Technisch ist Excel nicht verboten, praktisch scheitert es aber häufig am Audit-Trail. Änderungen werden nicht protokolliert, Versionierung ist fehleranfällig, und mehrere Bearbeiter können gleichzeitig Daten überschreiben. Auditoren bewerten das häufig als unzureichend für Kapitel 8.4.",
  },
  {
    q: "Kann ZulieferCheck auch Lieferanten für nicht-schweißende Gewerke verwalten?",
    a: "Ja. ZulieferCheck ist nicht auf schweißende Subunternehmer beschränkt. Sie können beliebige externe Anbieter anlegen, eigene Zertifikatstypen definieren und eigene Bewertungskriterien einrichten.",
  },
  {
    q: "Wie ist der Bewertungsprozess in ZulieferCheck aufgebaut?",
    a: "Sie erstellen eine Bewertung für einen Lieferanten, füllen die Kriterien aus (Qualität, Liefertreue, Zertifizierungsstatus, Kommunikation), hinterlegen ggf. eine Maßnahme und schließen die Bewertung ab. Alle Schritte werden mit Zeitstempel protokolliert.",
  },
  {
    q: "Eignet sich ZulieferCheck auch für Betriebe ohne EN-1090-Zertifizierung?",
    a: "Ja. Während ZulieferCheck seinen Schwerpunkt auf EN-1090-zertifizierte Betriebe legt, kann die Software für jedes ISO-9001-zertifizierte Unternehmen genutzt werden, das externe Anbieter nach Kapitel 8.4 verwalten muss.",
  },
];

export default function Iso9001LieferantenbewertungPage() {
  return (
    <>
      <WebPageSchema
        title="ISO 9001 Lieferantenbewertung mit ZulieferCheck"
        description="ISO 9001 Kapitel 8.4 konformes Lieferantenmanagement für QM-Beauftragte in KMU."
        url="/iso-9001-lieferantenbewertung"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          {
            label: "ISO 9001 Lieferantenbewertung",
            href: "/iso-9001-lieferantenbewertung",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "ISO 9001 Lieferantenbewertung",
              href: "/iso-9001-lieferantenbewertung",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            ISO 9001 Kapitel 8.4
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            ISO-9001-konforme Lieferantenbewertung — digital, audit-sicher, ohne
            Excel
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            ISO 9001 Kapitel 8.4 verlangt nachweisliche Lieferantenbewertung mit
            Audit-Trail — ZulieferCheck liefert die digitale Infrastruktur, die
            Auditoren überzeugt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/lieferantenmanagement-software#beta-anmeldung">
                Jetzt kostenlos testen — keine Kreditkarte nötig
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/wissen/iso-9001-kapitel-8-4">
                ISO 9001 Kapitel 8.4 erklärt
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Die typischen Herausforderungen bei ISO-9001-Lieferantenbewertungen
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Diese Situationen kennen QM-Beauftragte in KMU aus dem Alltag.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <c.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            ZulieferCheck für ISO-9001-konforme Lieferantenbewertung
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-section text-center mb-12">
            Häufige Fragen zur ISO-9001-Lieferantenbewertung
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-background rounded-lg border border-border group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium list-none">
                  {faq.q}
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="px-5 pb-5 text-muted-foreground text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            Jetzt kostenlos testen — keine Kreditkarte nötig
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            In 15 Minuten eingerichtet. Während der Beta kostenlos. Beta-Nutzer
            erhalten dauerhaft 30 % Rabatt.
          </p>
          <Button size="lg" asChild>
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Beta-Zugang sichern
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
