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
  FileX,
  Bell,
  ArrowRight,
  Monitor,
  Network,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lieferantenmanagement Stahlbau EXC3/4 – ZulieferCheck",
  description:
    "Lieferantenmanagement für Stahlbau mit EXC3 und EXC4 Zertifizierung. Subunternehmer-Zertifikate automatisch überwachen, EN 1090-2 Clause 5.6 konform.",
  alternates: { canonical: `${siteConfig.url}/stahlbau` },
  openGraph: {
    title: "ZulieferCheck für Stahlbau EXC3/4",
    description:
      "EN 1090-2 Clause 5.6 konform — automatische Zertifikats-Überwachung für Stahlbau.",
    url: `${siteConfig.url}/stahlbau`,
  },
};

const challenges = [
  {
    icon: AlertTriangle,
    title: "EXC3/4 — höchste Anforderungen an Subunternehmer",
    description:
      "Bei EXC3 und EXC4 müssen Subunternehmer nachweislich höhere Qualifikationen erfüllen. Ein einziges ungültiges Zertifikat kann die gesamte Bauteildokumentation entwerten.",
  },
  {
    icon: FileX,
    title: "Komplexe Zertifikatsstruktur im Stahlbau",
    description:
      "Pro Subunternehmer: WPK-Zertifikat EN 1090-1, ISO 3834-Nachweis, mehrere Schweißer mit ISO 9606-1, zerstörungsfreie Prüfungen (ZfP) — alle mit unterschiedlichen Ablaufdaten.",
  },
  {
    icon: Clock,
    title: "Behörden und Sachverständige fragen kurzfristig nach",
    description:
      "Bei EXC3/4-Bauvorhaben können Behörden und Sachverständige jederzeit Subunternehmer-Nachweise verlangen. Ohne zentrales System dauert die Zusammenstellung Stunden.",
  },
];

const benefits = [
  {
    icon: Bell,
    title: "Gestaffelte Frühwarnung 90/30/7 Tage",
    description:
      "Automatische E-Mail-Benachrichtigungen bevor jedes Zertifikat abläuft — für WPK, ISO 3834, ISO 9606-1-Nachweise und ZfP-Zertifikate getrennt.",
  },
  {
    icon: ArrowRight,
    title: "Subunternehmer-Portal für Selbst-Upload",
    description:
      "Ihr Subunternehmer erhält einen sicheren Upload-Link und lädt seine Zertifikate direkt hoch. Ihr QM-Beauftragter prüft und gibt frei.",
  },
  {
    icon: Monitor,
    title: "EXC-Klassen-Filter im Cockpit",
    description:
      "Filtern Sie Ihr Cockpit nach EXC-Klasse: Welcher Subunternehmer ist für EXC3, welcher nur für EXC2 qualifiziert? Ampelstatus auf einen Blick.",
  },
  {
    icon: Network,
    title: "EN-1090-Branchenverzeichnis",
    description:
      "Neue qualifizierte Schweißen-Subunternehmer mit EXC3/4-Qualifikation in Ihrer Region finden — verifiziertes Verzeichnis mit Filterung nach EXC-Klasse.",
  },
];

const faqs = [
  {
    q: "Was unterscheidet die Anforderungen an Subunternehmer bei EXC3 vs. EXC2?",
    a: "Bei EXC3 und EXC4 müssen Subunternehmer mindestens ISO 3834-2 nachweisen (EXC2 akzeptiert noch ISO 3834-3). Außerdem ist der NDT-Umfang bei EXC3 auf 10-20 % der Schweißnähte erhöht. Die Schweißaufsicht muss umfangreichere Nachweise erbringen.",
  },
  {
    q: "Wie dokumentiere ich in ZulieferCheck die EXC-Klassifizierung meiner Subunternehmer?",
    a: "Bei der Anlage eines Subunternehmers hinterlegen Sie die maximal qualifizierte EXC-Klasse. ZulieferCheck prüft automatisch, ob alle erforderlichen Zertifikate für diese Klasse vorhanden und gültig sind.",
  },
  {
    q: "Kann ZulieferCheck auch ZfP-Personal-Zertifikate (EN ISO 9712) verwalten?",
    a: "Ja. Sie können beliebige Zertifikatstypen anlegen, inkl. ZfP-Qualifikationen nach EN ISO 9712. Die Ablaufdaten werden genau wie alle anderen Zertifikate überwacht.",
  },
  {
    q: "Wie viele Subunternehmer kann ich in ZulieferCheck verwalten?",
    a: "Der Starter-Plan umfasst 5 Subunternehmer, der Professional-Plan ist unbegrenzt. Größere Stahlbau-Unternehmen mit vielen Subunternehmern nutzen den Enterprise-Plan.",
  },
  {
    q: "Was passiert, wenn ein Subunternehmer sein Zertifikat nicht rechtzeitig hochlädt?",
    a: "ZulieferCheck sendet automatische Erinnerungen an den Subunternehmer und an Sie als verantwortlichen Betrieb. Der Status wechselt auf 'Gelb' (Erinnerung ausstehend) und dann auf 'Rot' (Zertifikat abgelaufen).",
  },
];

export default function StahlbauPage() {
  return (
    <>
      <WebPageSchema
        title="ZulieferCheck für Stahlbau EXC3/4"
        description="EN 1090-2 konformes Lieferantenmanagement für Stahlbau-Unternehmen mit EXC3 und EXC4 Zertifizierung."
        url="/stahlbau"
      />
      <FAQSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbSchema
        items={[{ label: "Stahlbau EXC3/4", href: "/stahlbau" }]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[{ label: "Stahlbau EXC3/4", href: "/stahlbau" }]}
        />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <Badge variant="secondary" className="mb-4">
            Für Stahlbau EXC3 &amp; EXC4
          </Badge>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Lieferantenmanagement für Stahlbau nach EN 1090 — EXC3 und EXC4
            konform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            EXC3- und EXC4-Zertifizierung stellt höchste Anforderungen an
            Subunternehmer-Nachweise — ZulieferCheck überwacht alle Ablaufdaten
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
            Herausforderungen im Stahlbau EXC3/4
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Diese Situationen kennen Stahlbau-Unternehmen mit
            EXC3/4-Zertifizierung aus dem Alltag.
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
            ZulieferCheck für Stahlbau-Unternehmen
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
            Häufige Fragen für Stahlbau-Unternehmen
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
