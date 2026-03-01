import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen",
  description:
    "EN 1090-2 Clause 5.6 verlangt nachweislich qualifizierte Subunternehmer. Welche Zertifikate benötigt werden und was bei einem Ablauf passiert.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/en-1090-2-clause-5-6`,
  },
  openGraph: {
    title: "EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen",
    description:
      "Praxiswissen zu EN 1090-2 Clause 5.6 und Subunternehmer-Anforderungen.",
    url: `${siteConfig.url}/wissen/en-1090-2-clause-5-6`,
  },
};

export default function En10902Clause56Page() {
  return (
    <>
      <WebPageSchema
        title="EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen"
        description="Praxiswissen zu EN 1090-2 Clause 5.6 für QM-Beauftragte in Metallbau- und Stahlbau-Betrieben."
        url="/wissen/en-1090-2-clause-5-6"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          {
            label: "EN 1090-2 Clause 5.6",
            href: "/wissen/en-1090-2-clause-5-6",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "EN 1090-2 Clause 5.6",
              href: "/wissen/en-1090-2-clause-5-6",
            },
          ]}
        />
      </div>

      <article className="container-custom max-w-3xl py-12">
        <div className="mb-6">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            EN 1090-2
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            6 Min. Lesezeit
          </span>
        </div>

        <h1 className="heading-hero mb-6">
          EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          EN 1090-2 Clause 5.6 ist eine der Klauseln, die im Audit am häufigsten
          zu Beanstandungen führt. Dabei ist die Anforderung eindeutig — sie
          wird nur häufig unterschätzt.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was Clause 5.6 genau verlangt
            </h2>
            <p className="text-muted-foreground">
              EN 1090-2 Clause 5.6 regelt den Einsatz von Subunternehmern für
              Schweißarbeiten. Der Kernsatz lautet sinngemäß: Wenn ein
              EN-1090-zertifizierter Betrieb Schweißarbeiten an einen
              Subunternehmer vergibt, muss dieser Subunternehmer nachweislich
              die gleichen Qualifikationsanforderungen erfüllen wie der
              Hauptauftragnehmer selbst.
            </p>
            <p className="text-muted-foreground mt-4">
              Das bedeutet konkret: Der Subunternehmer muss über eine gültige
              werkseigene Produktionskontrolle (WPK) nach EN 1090-1, einen
              gültigen ISO-3834-Nachweis und gültige Schweißer-Qualifikationen
              nach ISO 9606-1 verfügen — und Sie müssen das jederzeit belegen
              können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Welche Zertifikate konkret benötigt werden
            </h2>
            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">
                  WPK-Zertifikat (EN 1090-1)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nachweis der werkseigenen Produktionskontrolle. Wird von einer
                  akkreditierten Stelle ausgestellt. Übliche Gültigkeitsdauer: 3
                  Jahre mit jährlichen Überwachungsaudits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">ISO-3834-Zertifikat</h3>
                <p className="text-muted-foreground text-sm">
                  Nachweis der Qualitätsanforderungen fürs Schmelzschweißen.
                  EXC2 akzeptiert ISO 3834-3, EXC3/4 verlangen ISO 3834-2.
                  Gültigkeitsdauer: je nach Zertifizierungsstelle 3 Jahre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  Schweißer-Qualifikationen (ISO 9606-1)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Für jeden eingesetzten Schweißer muss eine gültige
                  ISO-9606-1-Prüfung vorliegen. Gültigkeit: initial 2 Jahre,
                  verlängerbar auf 3 Jahre durch Bestätigung alle 6 Monate.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">WPS-Dokumentation</h3>
                <p className="text-muted-foreground text-sm">
                  Schweißanweisungen (WPS) müssen nach ISO 15609-1 erstellt und
                  durch eine WPQR nach ISO 15614-1 qualifiziert sein.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">
                    Was ein abgelaufenes Zertifikat bedeutet
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Wenn das WPK-Zertifikat eines Subunternehmers abläuft,
                    während er für Sie arbeitet, gelten die von ihm ausgeführten
                    Schweißarbeiten formal als nicht durch eine qualifizierte
                    Stelle ausgeführt. Das kann Ihre eigene CE-Kennzeichnung
                    formal ungültig machen — auch wenn alle anderen Dokumente
                    Ihres Betriebs vollständig sind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was beim Audit geprüft wird
            </h2>
            <p className="text-muted-foreground">
              Auditoren fragen beim nächsten Zertifizierungsaudit gezielt nach
              der Subunternehmer-Dokumentation. Typische Fragen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Welche Subunternehmer wurden im Prüfzeitraum eingesetzt?</li>
              <li>
                Lagen deren Zertifikate zum Zeitpunkt der Beauftragung vor?
              </li>
              <li>Wie haben Sie die Gültigkeit der Zertifikate geprüft?</li>
              <li>Was ist Ihr Prozess bei ablaufenden Zertifikaten?</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Ein fehlender oder abgelaufener Nachweis führt in der Regel zu
              einem Audit-Befund (Minor Non-Conformity). Bei mehreren fehlenden
              Nachweisen oder bei WPK-Ablauf droht ein Major-Befund mit
              anschließendem Nachaudit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Empfohlener Prozess für Ihren Betrieb
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Checkliste erstellen:
                </strong>{" "}
                Legen Sie fest, welche Zertifikate Sie von jedem Subunternehmer
                benötigen (abhängig von der Ausführungsklasse).
              </li>
              <li>
                <strong className="text-foreground">
                  Vor Beauftragung prüfen:
                </strong>{" "}
                Bevor ein Subunternehmer mit Schweißarbeiten beginnt, prüfen
                Sie, ob alle Zertifikate aktuell sind.
              </li>
              <li>
                <strong className="text-foreground">
                  Ablaufdaten überwachen:
                </strong>{" "}
                Tragen Sie alle Ablaufdaten in ein System ein, das Sie
                rechtzeitig erinnert (z. B. 90/30/7 Tage vorher).
              </li>
              <li>
                <strong className="text-foreground">
                  Nachweisakte führen:
                </strong>{" "}
                Bewahren Sie Kopien aller Zertifikate revisionssicher auf.
              </li>
            </ol>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            Ablaufdaten automatisch überwachen
          </h3>
          <p className="text-muted-foreground mb-6">
            ZulieferCheck überwacht alle Ablaufdaten Ihrer Subunternehmer
            automatisch und erinnert Sie 90/30/7 Tage vor Ablauf.
          </p>
          <Button asChild>
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Jetzt kostenlos testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
