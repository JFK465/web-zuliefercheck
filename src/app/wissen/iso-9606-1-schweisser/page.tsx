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
  title: "ISO 9606-1 — Schweißer-Qualifikation & Gültigkeitsdauer",
  description:
    "Wie lange eine ISO-9606-1-Prüfung gültig ist, wann sie verlängert werden muss und welche Konsequenzen eine abgelaufene Schweißer-Qualifikation hat.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/iso-9606-1-schweisser`,
  },
  openGraph: {
    title: "ISO 9606-1 — Schweißer-Qualifikation und Gültigkeitsdauer",
    description:
      "Praxiswissen zur ISO-9606-1-Schweißer-Qualifikation für Metallbau-Betriebe.",
    url: `${siteConfig.url}/wissen/iso-9606-1-schweisser`,
  },
};

export default function Iso96061SchweisserPage() {
  return (
    <>
      <WebPageSchema
        title="ISO 9606-1 — Schweißer-Qualifikation und Gültigkeitsdauer erklärt"
        description="Praxiswissen zur ISO-9606-1-Schweißer-Qualifikation für Metallbau- und Stahlbau-Betriebe."
        url="/wissen/iso-9606-1-schweisser"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          {
            label: "ISO 9606-1 Schweißer",
            href: "/wissen/iso-9606-1-schweisser",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "ISO 9606-1 Schweißer",
              href: "/wissen/iso-9606-1-schweisser",
            },
          ]}
        />
      </div>

      <article className="container-custom max-w-3xl py-12">
        <div className="mb-6">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            ISO 9606-1
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            5 Min. Lesezeit
          </span>
        </div>

        <h1 className="heading-hero mb-6">
          ISO 9606-1 — Schweißer-Qualifikation und Gültigkeitsdauer einfach
          erklärt
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          ISO 9606-1 regelt die Prüfung von Schweißern für das Schmelzschweißen.
          Was viele QM-Beauftragte unterschätzen: Die Qualifikation ist nicht
          unbegrenzt gültig — und beim Subunternehmer hat man oft keinen
          Überblick.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Was ISO 9606-1 regelt</h2>
            <p className="text-muted-foreground">
              ISO 9606-1:2012 legt Anforderungen für die Prüfung und
              Zertifizierung von Schweißern für das Schmelzschweißen von Stählen
              fest. Für jeden Schweißer wird nach bestandener Prüfung ein
              Prüfzeugnis ausgestellt, das den Geltungsbereich (Verfahren,
              Nahtart, Werkstoffgruppe, Dickenbereich, Schweißposition usw.)
              dokumentiert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Gültigkeitsdauer — das müssen Sie wissen
            </h2>
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  Initiale Gültigkeitsdauer: 2 Jahre
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nach der bestandenen Prüfung ist das Prüfzeugnis zunächst 2
                  Jahre gültig — vorausgesetzt, der Schweißer hat innerhalb
                  dieser Zeit im Geltungsbereich der Qualifikation gearbeitet.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  Verlängerung auf 3 Jahre: 6-Monats-Bestätigung
                </h3>
                <p className="text-muted-foreground text-sm">
                  Alle 6 Monate muss der Arbeitgeber (oder die zuständige
                  Schweißaufsichtsperson) bestätigen, dass der Schweißer
                  innerhalb des Geltungsbereichs seiner Qualifikation tätig war.
                  Mit dieser Bestätigung kann die Gültigkeit auf 3 Jahre
                  verlängert werden.
                </p>
              </div>
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold mb-2">
                  Nach 3 Jahren: Erneute Prüfung erforderlich
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nach 3 Jahren erlischt die Qualifikation. Der Schweißer muss
                  eine neue Prüfung ablegen — eine Verlängerung durch
                  Bestätigung ist nicht mehr möglich.
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
                    Das Subunternehmer-Problem
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ein Subunternehmer hat typischerweise 5–15 Schweißer mit
                    unterschiedlichen Qualifikationen und Ablaufdaten. Als
                    Hauptauftragnehmer müssen Sie sicherstellen, dass alle
                    eingesetzten Schweißer eine gültige ISO-9606-1-Qualifikation
                    haben — für das eingesetzte Verfahren und die ausgeführten
                    Nahtarten. Das ohne System zu überwachen ist praktisch
                    unmöglich.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Geltungsbereich der Qualifikation
            </h2>
            <p className="text-muted-foreground">
              Eine ISO-9606-1-Qualifikation gilt nur für die geprüften
              Parameter. Wichtige Geltungsbereiche:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                {
                  label: "Schweißverfahren",
                  detail:
                    "111 (E-Hand), 135 (MAG), 141 (WIG) etc. — je nach Prüfung",
                },
                {
                  label: "Nahtart",
                  detail:
                    "Stumpfnaht (BW) oder Kehlnaht (FW) — BW qualifiziert i. d. R. auch FW",
                },
                {
                  label: "Werkstoffgruppe",
                  detail:
                    "Gruppen 1.1–1.4 (unlegierteer/niedriglegierter Stahl) etc.",
                },
                {
                  label: "Dickenbereich",
                  detail:
                    "Gilt für einen bestimmten Materialdicken-Bereich laut Prüfzeugnis",
                },
                {
                  label: "Schweißposition",
                  detail:
                    "PA, PB, PC, PF, PE etc. — nicht jede Prüfung qualifiziert alle Positionen",
                },
                {
                  label: "Rohr/Blech",
                  detail:
                    "Rohr-Qualifikation gilt auch für Blech, aber nicht umgekehrt",
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
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            Schweißer-Qualifikationen Ihrer Subunternehmer überwachen
          </h3>
          <p className="text-muted-foreground mb-6">
            ZulieferCheck überwacht die Ablaufdaten aller ISO-9606-1-Nachweise
            Ihrer Subunternehmer und erinnert Sie rechtzeitig vor Ablauf.
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
