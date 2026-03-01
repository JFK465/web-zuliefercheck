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
  Upload,
  Mail,
  CheckCircle,
  Bell,
  ArrowRight,
  Shield,
  Users,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zulieferer-Portal – Zertifikate selbst hochladen",
  description:
    "Ihr Zulieferer lädt seine Zertifikate selbst hoch — ohne eigenen Account, per sicherem Upload-Link. Sie prüfen und bestätigen. Kein E-Mail-Chaos mehr.",
  alternates: { canonical: `${siteConfig.url}/zulieferer-portal` },
  openGraph: {
    title: "Zulieferer-Portal – Zertifikate hochladen ohne Account",
    description:
      "Sicherer Selbst-Upload für Zulieferer — Sie behalten die Kontrolle.",
    url: `${siteConfig.url}/zulieferer-portal`,
  },
};

const steps = [
  {
    number: "01",
    title: "Einladung versenden",
    description:
      "Sie laden Ihren Zulieferer per E-Mail ein. ZulieferCheck sendet automatisch eine Einladung mit einem sicheren, zeitlich begrenzten Upload-Link.",
  },
  {
    number: "02",
    title: "Zulieferer lädt selbst hoch",
    description:
      "Ihr Zulieferer öffnet den Link im Browser, sieht welche Zertifikate benötigt werden, und lädt seine aktuellen Dokumente direkt hoch — ohne Account-Erstellung.",
  },
  {
    number: "03",
    title: "Sie prüfen und bestätigen",
    description:
      "Sie erhalten eine Benachrichtigung und prüfen die hochgeladenen Dokumente in Ihrem Dashboard. Mit einem Klick bestätigen Sie die Gültigkeit.",
  },
  {
    number: "04",
    title: "Automatische Überwachung läuft",
    description:
      "ZulieferCheck extrahiert die Ablaufdaten aus den hochgeladenen PDFs und überwacht sie automatisch weiter. 90/30/7 Tage vor Ablauf erhalten beide Seiten eine Erinnerung.",
  },
];

const benefits = [
  {
    icon: Upload,
    title: "Kein Account für Zulieferer nötig",
    description:
      "Ihr Zulieferer braucht sich nicht zu registrieren. Ein sicherer Link reicht aus — das senkt die Einstiegshürde auf null.",
  },
  {
    icon: Shield,
    title: "DSGVO-konforme Datenübertragung",
    description:
      "Alle Uploads erfolgen verschlüsselt über HTTPS. Daten werden auf deutschen Servern gespeichert. Upload-Links sind zeitlich begrenzt und einmalig verwendbar.",
  },
  {
    icon: Bell,
    title: "Automatische Erinnerungen an Zulieferer",
    description:
      "Wenn ein Zertifikat abläuft, erinnert ZulieferCheck auch den Zulieferer direkt — Sie müssen keine Erinnerungs-E-Mails mehr manuell versenden.",
  },
  {
    icon: Users,
    title: "Mehrere Ansprechpartner pro Zulieferer",
    description:
      "Sie können mehrere Kontakte beim Zulieferer hinterlegen. Beim nächsten Upload-Request wählen Sie, wer die Einladung erhält.",
  },
  {
    icon: Mail,
    title: "Kein E-Mail-Chaos mehr",
    description:
      "Schluss mit ZIP-Anhängen über WhatsApp und veralteten PDFs in Outlook-Ordnern. Alle Dokumente landen strukturiert in ZulieferCheck.",
  },
  {
    icon: CheckCircle,
    title: "Versionierung aller Dokumente",
    description:
      "Ältere Versionen eines Zertifikats bleiben gespeichert. Sie sehen, wann welches Dokument hochgeladen wurde und welche Version aktuell ist.",
  },
];

const faqs = [
  {
    q: "Muss sich mein Zulieferer bei ZulieferCheck registrieren?",
    a: "Nein. Ihr Zulieferer erhält einen sicheren Upload-Link per E-Mail. Dieser Link führt zu einer einfachen Upload-Seite, ohne Registrierung oder Account. Das senkt die Einstiegshürde auf nahezu null.",
  },
  {
    q: "Wie lange ist ein Upload-Link gültig?",
    a: "Sie bestimmen die Gültigkeitsdauer beim Versenden der Einladung — standardmäßig 14 Tage. Danach wird der Link automatisch ungültig. Sie können jederzeit einen neuen Link versenden.",
  },
  {
    q: "Was passiert, wenn der Zulieferer den falschen Zertifikatstyp hochlädt?",
    a: "Die Upload-Seite zeigt dem Zulieferer klar an, welche Zertifikate benötigt werden (z. B. WPK-Zertifikat EN 1090-1, ISO 9606-1-Nachweise). Nach dem Upload prüfen Sie die Dokumente und können sie ablehnen mit einer Nachricht an den Zulieferer.",
  },
  {
    q: "Wie viele Zulieferer kann ich gleichzeitig einladen?",
    a: "Im Professional- und Enterprise-Plan können Sie unbegrenzt viele Zulieferer einladen. Der Starter-Plan unterstützt bis zu 5 aktive Zulieferer.",
  },
  {
    q: "Können Zulieferer ihre hochgeladenen Dokumente auch selbst einsehen?",
    a: "Ja. Über das Zulieferer-Portal sehen Ihre Lieferanten ihre eigenen hochgeladenen Dokumente und deren Ablaufdaten. So werden beide Seiten rechtzeitig erinnert.",
  },
];

export default function ZuliefererPortalPage() {
  return (
    <>
      <WebPageSchema
        title="Zulieferer-Portal – Zertifikate hochladen ohne Account"
        description="Sicherer Selbst-Upload für Zulieferer — kein Account nötig, DSGVO-konform."
        url="/zulieferer-portal"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[{ label: "Zulieferer-Portal", href: "/zulieferer-portal" }]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[{ label: "Zulieferer-Portal", href: "/zulieferer-portal" }]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Zulieferer-Portal
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Ihr Zulieferer lädt seine Zertifikate selbst hoch — kein Account,
            kein E-Mail-Chaos
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Ein sicherer Upload-Link reicht aus. Ihr Zulieferer lädt seine
            aktuellen Zertifikate direkt hoch, Sie prüfen und bestätigen —
            fertig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/lieferantenmanagement-software#beta-anmeldung">
                Jetzt kostenlos testen — keine Kreditkarte nötig
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            So funktioniert das Zulieferer-Portal
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            In 4 Schritten zu strukturierten Zulieferer-Zertifikaten — ohne
            manuellen E-Mail-Aufwand.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-background rounded-xl p-6 border border-border flex gap-5"
              >
                <div className="text-3xl font-bold text-primary/30 flex-shrink-0 w-12">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-4">
            Vorteile des Zulieferer-Portals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
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
            Häufige Fragen zum Zulieferer-Portal
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
