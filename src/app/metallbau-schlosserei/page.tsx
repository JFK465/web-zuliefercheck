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
  Mail,
  Bell,
  Monitor,
  Network,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lieferantenmanagement Metallbau – ZulieferCheck EN 1090",
  description:
    "Lieferantenmanagement für EN-1090-zertifizierte Metallbau- und Schlossereibetriebe. Zulieferer-Zertifikate automatisch überwachen, in Minuten audit-ready.",
  alternates: { canonical: `${siteConfig.url}/metallbau-schlosserei` },
  openGraph: {
    title: "ZulieferCheck für Metallbau und Schlossereien",
    description:
      "EN 1090-2 Clause 5.6 konform — automatische Zertifikats-Überwachung.",
    url: `${siteConfig.url}/metallbau-schlosserei`,
  },
};

const challenges = [
  {
    icon: AlertTriangle,
    title: "Zertifikatsablauf als Betriebsrisiko",
    description:
      "EN 1090-2 Clause 5.6 verlangt nachweislich qualifizierte Subunternehmer. Ein abgelaufenes WPK-Zertifikat macht Ihre eigene CE-Kennzeichnung formal ungültig.",
  },
  {
    icon: Clock,
    title: "Audit-Panik durch fehlende Übersicht",
    description:
      "Zertifikate liegen in Outlook-Ordnern, bei der Auditor-Ankündigung beginnt das Suchen. Schlossereibetriebe berichten von 3–5 Stunden reiner Vorbereitungszeit pro Audit.",
  },
  {
    icon: Mail,
    title: "Manuelle Zertifikatsanforderung per E-Mail",
    description:
      "QM-Beauftragte schicken identische E-Mails an dieselben Zulieferer immer wieder. Zulieferer schicken veraltete PDFs. Der Prozess ist fehleranfällig und zeitaufwendig.",
  },
];

const benefits = [
  {
    icon: Bell,
    title: "Automatische Erinnerung 90/30/7 Tage vor Ablauf",
    description:
      "Sie erhalten rechtzeitig eine Benachrichtigung, bevor das WPK-Zertifikat oder der ISO-9606-1-Nachweis eines Subunternehmers abläuft.",
  },
  {
    icon: ArrowRight,
    title: "Zulieferer laden selbst hoch",
    description:
      "Ihr Zulieferer erhält eine Einladung und lädt seine aktuellen Zertifikate selbst hoch. Ihr QM-Beauftragter prüft und bestätigt — kein E-Mail-Chaos mehr.",
  },
  {
    icon: Monitor,
    title: "Audit-Cockpit mit Ampeldarstellung",
    description:
      "Beim Audit öffnen Sie das Audit-Cockpit: Welcher Zulieferer hat welches Zertifikat, gültig bis wann — auf einem Blick, sofort druckbar.",
  },
  {
    icon: Network,
    title: "EN-1090-Branchenverzeichnis",
    description:
      "Neue qualifizierte Schweißen-Subunternehmer in Ihrer Region finden — verifiziertes Verzeichnis, filterbar nach Verfahren und Zertifizierungsgrad.",
  },
];

const faqs = [
  {
    q: "Was verlangt EN 1090-2 Clause 5.6 genau von meinen Zulieferern?",
    a: "EN 1090-2 Clause 5.6 verlangt, dass beim Einsatz von Subunternehmern für Schweißarbeiten nachweislich qualifizierte Betriebe eingesetzt werden. Das bedeutet: gültige WPK-Zertifizierung (EN 1090-1), ISO-3834-Nachweis und gültige Schweißer-Qualifikationen (ISO 9606-1) müssen jederzeit vorgelegt werden können.",
  },
  {
    q: "Wie oft muss ich die Zertifikate meiner Schweißen-Subunternehmer prüfen?",
    a: "Es gibt keine gesetzlich vorgeschriebene Prüffrequenz, aber Sie müssen bei jeder Beauftragung sicherstellen, dass alle Qualifikationen gültig sind. ZulieferCheck überwacht kontinuierlich und warnt Sie automatisch.",
  },
  {
    q: "Was passiert, wenn beim Audit ein Zulieferer-Zertifikat abgelaufen ist?",
    a: "Ein abgelaufenes Zertifikat führt in der Regel zu einem Audit-Befund (Minor oder Major Non-Conformity). Bei einem Major-Befund ist ein Nachaudit erforderlich. Im schlimmsten Fall kann die Zertifizierung suspendiert werden.",
  },
  {
    q: "Eignet sich ZulieferCheck auch für Betriebe mit nur 3-5 Zulieferern?",
    a: "Ja. Auch bei wenigen Zulieferern ist der Aufwand für manuelle Verfolgung erheblich, wenn man berücksichtigt, dass ein Subunternehmer mehrere Schweißer mit unterschiedlichen Ablaufdaten haben kann. Der Starter-Plan ist für kleinere Betriebe konzipiert.",
  },
  {
    q: "Kann ich bestehende Zertifikats-PDFs aus Outlook importieren?",
    a: "Ja. Beim Onboarding können Sie bestehende PDFs direkt hochladen. Alternativ laden Sie Ihre Zulieferer ein, ihre aktuellen Dokumente selbst hochzuladen.",
  },
];

export default function MetallbauSchlosserei() {
  return (
    <>
      <WebPageSchema
        title="ZulieferCheck für Metallbau und Schlossereien"
        description="EN 1090-2 konformes Lieferantenmanagement für Metallbau-Betriebe."
        url="/metallbau-schlosserei"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[
          { label: "Metallbau & Schlosserei", href: "/metallbau-schlosserei" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Metallbau & Schlosserei",
              href: "/metallbau-schlosserei",
            },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Metallbau & Schlosserei
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Lieferantenmanagement für Metallbau und Schlossereien nach EN 1090
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            EN 1090-2 Clause 5.6 verlangt nachweislich qualifizierte
            Subunternehmer — ZulieferCheck überwacht alle Ablaufdaten
            automatisch und hält Sie jederzeit audit-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/lieferantenmanagement-software#beta-anmeldung">
                Jetzt kostenlos testen — keine Kreditkarte nötig
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/audit-bereitschafts-check">
                Audit-Bereitschaft prüfen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Die typischen Herausforderungen im Metallbau
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Diese Situationen kennen EN-1090-zertifizierte Metallbau-Betriebe
            aus dem Alltag.
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
            ZulieferCheck für Metallbau-Betriebe
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
            Häufige Fragen für Metallbau-Betriebe
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
