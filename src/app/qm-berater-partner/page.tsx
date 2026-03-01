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
  Handshake,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
  Gift,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "QM-Berater Partner-Programm – ZulieferCheck für Berater",
  description:
    "ZulieferCheck Partner werden: Empfehlen Sie die Software und verdienen Sie dauerhaft 20 % Provision. Für QM-Berater, Auditoren und Branchenverbände.",
  alternates: { canonical: `${siteConfig.url}/qm-berater-partner` },
  openGraph: {
    title: "QM-Berater Partner-Programm – ZulieferCheck",
    description:
      "Empfehlen Sie ZulieferCheck und verdienen Sie dauerhaft Provision.",
    url: `${siteConfig.url}/qm-berater-partner`,
  },
};

const benefits = [
  {
    icon: Gift,
    title: "Dauerhaft 20 % Provision",
    description:
      "Sie erhalten 20 % der monatlichen Subscription-Gebühr für jeden Kunden, den Sie empfehlen — dauerhaft, solange der Kunde aktiv ist.",
  },
  {
    icon: TrendingUp,
    title: "Zusatznutzen für Ihre Kunden",
    description:
      "ZulieferCheck ergänzt Ihre Beratungsleistungen: Sie helfen Kunden nicht nur beim Audit, sondern hinterlassen ein dauerhaftes Werkzeug, das audit-ready hält.",
  },
  {
    icon: Users,
    title: "Co-Branding und Whitelabel-Option",
    description:
      "Auf Anfrage stellen wir Ihnen eine co-gebrandete Einstiegsseite bereit, die Sie mit Ihrem Namen und Logo als Empfehlung kennzeichnen können.",
  },
  {
    icon: Star,
    title: "Frühzugang zu neuen Funktionen",
    description:
      "Als Partner erhalten Sie Beta-Zugang zu neuen Funktionen und können Feedback direkt in die Produktentwicklung einbringen.",
  },
  {
    icon: Handshake,
    title: "Persönlicher Ansprechpartner",
    description:
      "Jeder Partner hat einen persönlichen Ansprechpartner bei ZulieferCheck für technische und kommerzielle Fragen.",
  },
];

const targetGroups = [
  {
    title: "QM-Berater und Auditoren",
    description:
      "Sie begleiten Betriebe bei der EN-1090- oder ISO-9001-Zertifizierung. ZulieferCheck ergänzt Ihre Beratung um ein dauerhaftes Werkzeug für Lieferantenmanagement.",
  },
  {
    title: "Schweißtechnische Betriebe und DVS-Mitglieder",
    description:
      "Sie haben ein Netzwerk von EN-1090-zertifizierten Betrieben. Empfehlen Sie ZulieferCheck und verdienen Sie an jedem erfolgreichen Abschluss.",
  },
  {
    title: "Branchenverbände und Innungen",
    description:
      "Bieten Sie Ihren Mitgliedern einen exklusiven Rabatt auf ZulieferCheck und stärken Sie damit Ihren Mitgliedermehrwert.",
  },
];

const faqs = [
  {
    q: "Wie bewerbe ich mich als Partner?",
    a: "Schreiben Sie eine kurze E-Mail an hallo@zuliefercheck.de mit einer kurzen Beschreibung Ihrer Tätigkeit und Ihrem Kundenstamm. Wir melden uns innerhalb von 2 Werktagen.",
  },
  {
    q: "Wie wird die Provision abgerechnet?",
    a: "Wir stellen Ihnen monatlich eine Provision-Abrechnung zur Verfügung. Die Auszahlung erfolgt per Überweisung. Voraussetzung ist eine gültige Rechnungsadresse in Deutschland, Österreich oder der Schweiz.",
  },
  {
    q: "Wie lange läuft die Provision?",
    a: "Die Provision läuft so lange, wie der von Ihnen empfohlene Kunde ein aktives ZulieferCheck-Abonnement hat — ohne Laufzeitbegrenzung.",
  },
  {
    q: "Kann ich als Berater ZulieferCheck auch direkt für meine Kunden einrichten?",
    a: "Ja. Auf Anfrage können wir einen Berater-Zugang einrichten, über den Sie mehrere Kundenkonten verwalten können. Das ist besonders für Berater sinnvoll, die regelmäßig mehrere Betriebe gleichzeitig betreuen.",
  },
];

export default function QmBeraterPartnerPage() {
  return (
    <>
      <WebPageSchema
        title="QM-Berater Partner-Programm – ZulieferCheck"
        description="ZulieferCheck Partner werden und dauerhaft Provision verdienen. Für QM-Berater, Auditoren und Branchenverbände."
        url="/qm-berater-partner"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[{ label: "QM-Berater & Partner", href: "/qm-berater-partner" }]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "QM-Berater & Partner", href: "/qm-berater-partner" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Partner-Programm
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            ZulieferCheck Partner werden — empfehlen und dauerhaft verdienen
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Als QM-Berater, Auditor oder Branchenverband empfehlen Sie
            ZulieferCheck an Ihre Kunden und erhalten dauerhaft 20 % Provision —
            solange die Kunden aktiv sind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/kontakt">
                Jetzt Partner werden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Für wen ist das Partner-Programm?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {targetGroups.map((group) => (
              <div
                key={group.title}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-lg mb-3">{group.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Ihre Vorteile als ZulieferCheck-Partner
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
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
            Häufige Fragen zum Partner-Programm
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
            Interesse am Partner-Programm?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schreiben Sie uns eine kurze Nachricht. Wir erläutern alle Details
            im persönlichen Gespräch.
          </p>
          <Button size="lg" asChild>
            <Link href="/kontakt">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
