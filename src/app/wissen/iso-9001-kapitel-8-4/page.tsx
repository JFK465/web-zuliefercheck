import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt",
  description:
    "Was ISO 9001 Kapitel 8.4 von QM-Beauftragten verlangt, welche Dokumente Auditoren sehen wollen und wie ein audit-sicherer Prozess aussieht.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/iso-9001-kapitel-8-4`,
  },
  openGraph: {
    title: "ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt",
    description:
      "Praxiswissen zu ISO 9001 Kapitel 8.4 für QM-Beauftragte in KMU.",
    url: `${siteConfig.url}/wissen/iso-9001-kapitel-8-4`,
  },
};

export default function Iso9001Kapitel84Page() {
  return (
    <>
      <WebPageSchema
        title="ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt"
        description="Praxiswissen zu ISO 9001 Kapitel 8.4 für QM-Beauftragte in KMU."
        url="/wissen/iso-9001-kapitel-8-4"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          {
            label: "ISO 9001 Kapitel 8.4",
            href: "/wissen/iso-9001-kapitel-8-4",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "ISO 9001 Kapitel 8.4",
              href: "/wissen/iso-9001-kapitel-8-4",
            },
          ]}
        />
      </div>

      <article className="container-custom max-w-3xl py-12">
        <div className="mb-6">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            ISO 9001
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            7 Min. Lesezeit
          </span>
        </div>

        <h1 className="heading-hero mb-6">
          ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          ISO 9001 Kapitel 8.4 ist für viele QM-Beauftragte ein wunder Punkt
          beim Audit. Die Anforderungen sind klar — die Umsetzung in der Praxis
          ist jedoch oft lückenhaft.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was Kapitel 8.4 genau verlangt
            </h2>
            <p className="text-muted-foreground">
              ISO 9001:2015 Kapitel 8.4 trägt den Titel &quot;Steuerung von
              extern bereitgestellten Prozessen, Produkten und
              Dienstleistungen&quot;. Es verlangt von Ihnen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>
                Kriterien für die Auswahl, Bewertung und Überwachung externer
                Anbieter festlegen (Kapitel 8.4.1)
              </li>
              <li>
                Die Art und den Umfang der Steuerung extern bereitgestellter
                Leistungen bestimmen (Kapitel 8.4.2)
              </li>
              <li>
                Externen Anbietern Informationen mitteilen, was von ihnen
                erwartet wird (Kapitel 8.4.3)
              </li>
              <li>
                Dokumentierte Informationen dieser Tätigkeiten aufbewahren — d.
                h. einen nachvollziehbaren Audit-Trail führen
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Die drei häufigsten Audit-Befunde bei 8.4
            </h2>
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  1. Fehlende oder undokumentierte Bewertungskriterien
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sie bewerten Lieferanten irgendwie — aber nirgendwo steht
                  schriftlich, nach welchen Kriterien. Auditoren akzeptieren das
                  nicht: Die Kriterien müssen dokumentiert und konsequent
                  angewendet werden.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  2. Kein Nachweis der Überwachung
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sie haben Lieferanten einmalig bewertet, aber seitdem nichts
                  mehr dokumentiert. ISO 9001 verlangt eine regelmäßige
                  Überwachung — nicht nur eine einmalige Erstbewertung.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  3. Excel-Tabellen ohne Audit-Trail
                </h3>
                <p className="text-muted-foreground text-sm">
                  Änderungen in Excel werden nicht protokolliert. Auditoren
                  können nicht nachvollziehen, wer wann was geändert hat — das
                  ist kein revisionssicherer Audit-Trail im Sinne der Norm.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Welche Bewertungskriterien Auditoren erwarten
            </h2>
            <p className="text-muted-foreground">
              ISO 9001 schreibt keine konkreten Kriterien vor — aber die
              folgenden Kategorien sind branchenüblich und werden von Auditoren
              regelmäßig erwartet:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                {
                  label: "Qualität",
                  detail: "Fehlerquote, Reklamationen, Nacharbeitsquote",
                },
                {
                  label: "Liefertreue",
                  detail: "Termintreue, Lieferverzögerungen, Flexibilität",
                },
                {
                  label: "Zertifizierungsstatus",
                  detail:
                    "ISO 9001, EN 1090, ISO 3834 — gültig oder abgelaufen",
                },
                {
                  label: "Kommunikation",
                  detail: "Reaktionszeit, Erreichbarkeit, Dokumentenqualität",
                },
                {
                  label: "Preis-Leistung",
                  detail: "Preisniveau, Transparenz, Vergleich zu Markt",
                },
                {
                  label: "Maßnahmen",
                  detail: "Reaktion auf Beanstandungen, Ursachenanalyse",
                },
              ].map((c) => (
                <div key={c.label} className="bg-muted/30 rounded-lg p-4">
                  <p className="font-medium text-sm">{c.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Praktischer Prozess für ISO-9001-konforme Lieferantenbewertung
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Lieferantenliste anlegen:
                </strong>{" "}
                Alle externen Anbieter, die Einfluss auf Ihre Produktqualität
                haben, erfassen.
              </li>
              <li>
                <strong className="text-foreground">
                  Bewertungskriterien festlegen:
                </strong>{" "}
                Schriftlich dokumentieren, nach welchen Kriterien bewertet wird
                und wann ein Lieferant als &quot;qualifiziert&quot; gilt.
              </li>
              <li>
                <strong className="text-foreground">
                  Erstbewertung durchführen:
                </strong>{" "}
                Alle Lieferanten nach dem definierten Schema bewerten und das
                Ergebnis dokumentieren.
              </li>
              <li>
                <strong className="text-foreground">
                  Regelmäßig neu bewerten:
                </strong>{" "}
                Mindestens jährlich oder bei Anlass (Reklamation,
                Zertifikatsablauf) eine neue Bewertung durchführen.
              </li>
              <li>
                <strong className="text-foreground">
                  Maßnahmen verfolgen:
                </strong>{" "}
                Bei negativer Bewertung eine Maßnahme definieren und deren
                Umsetzung und Wirksamkeit dokumentieren.
              </li>
            </ol>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            ISO-9001-konforme Lieferantenbewertung digital umsetzen
          </h3>
          <p className="text-muted-foreground mb-6">
            ZulieferCheck bietet strukturierte Lieferantenbewertungen nach ISO
            9001 Kapitel 8.4 — mit automatischem Audit-Trail, ohne Excel.
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
