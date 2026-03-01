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
  title: "CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt",
  description:
    "Was die CE-Kennzeichnung nach EN 1090-1 bedeutet, wer sie benötigt und warum ein abgelaufenes Subunternehmer-Zertifikat sie formal ungültig machen kann.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/ce-kennzeichnung-metallbau`,
  },
  openGraph: {
    title: "CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt",
    description:
      "CE-Kennzeichnung nach EN 1090-1: Grundlagen, Anforderungen und typische Fehler.",
    url: `${siteConfig.url}/wissen/ce-kennzeichnung-metallbau`,
  },
};

export default function CeKennzeichnungMetallbauPage() {
  return (
    <>
      <WebPageSchema
        title="CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt"
        description="CE-Kennzeichnung nach EN 1090-1: Grundlagen, Anforderungen und die Verbindung zu Subunternehmer-Zertifikaten."
        url="/wissen/ce-kennzeichnung-metallbau"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          {
            label: "CE-Kennzeichnung Metallbau",
            href: "/wissen/ce-kennzeichnung-metallbau",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            {
              label: "CE-Kennzeichnung Metallbau",
              href: "/wissen/ce-kennzeichnung-metallbau",
            },
          ]}
        />
      </div>

      <article className="container-custom max-w-3xl py-12">
        <div className="mb-6">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            CE-Kennzeichnung
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            8 Min. Lesezeit
          </span>
        </div>

        <h1 className="heading-hero mb-6">
          CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          Ohne CE-Kennzeichnung kein Inverkehrbringen von Stahlbauteilen in der
          EU — das ist bekannt. Weniger bekannt: Ein einziges abgelaufenes
          Subunternehmer-Zertifikat kann die CE-Kennzeichnung formal ungültig
          machen.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was die CE-Kennzeichnung im Metallbau bedeutet
            </h2>
            <p className="text-muted-foreground">
              Im Metallbau und Stahlbau ist die CE-Kennzeichnung keine
              freiwillige Auszeichnung, sondern eine gesetzliche Pflicht. Sie
              basiert auf der Bauproduktenverordnung (BauPVO, EU 305/2011) und
              wird für Stahlbauteile durch die Norm EN 1090-1 geregelt.
            </p>
            <p className="text-muted-foreground mt-4">
              Mit der CE-Kennzeichnung erklärt ein Hersteller, dass sein
              Stahlbauteil die wesentlichen Anforderungen der harmonisierten
              Norm EN 1090-1 erfüllt. Grundlage dafür ist eine werkseigene
              Produktionskontrolle (WPK), die von einer notifizierten Stelle
              zertifiziert wurde.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Wer die CE-Kennzeichnung benötigt
            </h2>
            <p className="text-muted-foreground">
              Grundsätzlich jeder Betrieb, der tragfähige Stahlbauteile und
              Aluminiumtragwerke herstellt und in Verkehr bringt. Das betrifft:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Stahlbauunternehmen (Hallen, Brücken, Tribünen)</li>
              <li>Schlossereien mit tragenden Schweißkonstruktionen</li>
              <li>Metallbauer für Geländer, Treppen und Balkone</li>
              <li>Fassadenbauer mit tragenden Aluminiumkonstruktionen</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Ausgenommen sind Betriebe, die ausschließlich nicht-tragende
              Metallbauteile herstellen — aber diese Ausnahme ist enger als
              viele denken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Die Ausführungsklassen EXC1 bis EXC4
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold border border-border">
                      EXC
                    </th>
                    <th className="text-left p-3 font-semibold border border-border">
                      Anwendung (Beispiele)
                    </th>
                    <th className="text-left p-3 font-semibold border border-border">
                      Folgen bei Versagen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border font-medium">
                      EXC1
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Einfache Geländer, Treppen ohne statische Funktion
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Gering
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border font-medium">
                      EXC2
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Standardgebäude, Hallenkonstruktionen
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Mittel
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-medium">
                      EXC3
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Stadiontribünen, Parkhäuser, Brücken
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Hoch
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border font-medium">
                      EXC4
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Kernkraftanlagen, Hängebrücken
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Sehr hoch
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">
                    Warum ein abgelaufenes Subunternehmer-Zertifikat Ihre
                    CE-Kennzeichnung gefährdet
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    EN 1090-2 Clause 5.6 verlangt, dass alle eingesetzten
                    Subunternehmer die gleichen Qualifikationsanforderungen
                    erfüllen wie der Hauptauftragnehmer. Wenn ein Subunternehmer
                    Schweißarbeiten mit einem abgelaufenen WPK-Zertifikat
                    durchführt, gelten diese Arbeiten als nicht durch eine
                    qualifizierte Stelle ausgeführt. Das bedeutet: Ihre
                    Leistungserklärung (DoP) und damit Ihre CE-Kennzeichnung
                    sind für diese Bauteile formal nicht korrekt — auch wenn
                    alle Ihre eigenen Dokumente vollständig sind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was beim Audit zur CE-Kennzeichnung geprüft wird
            </h2>
            <p className="text-muted-foreground">
              Bei Zertifizierungsaudits prüfen notifizierte Stellen
              typischerweise:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Gültigkeit Ihres eigenen WPK-Zertifikats</li>
              <li>
                Gültigkeit der WPK-Zertifikate aller eingesetzten Subunternehmer
              </li>
              <li>
                Übereinstimmung der EXC-Klasse zwischen Ihnen und den
                Subunternehmern
              </li>
              <li>Vollständigkeit der Leistungserklärungen (DoP)</li>
              <li>
                Prozess zur laufenden Überwachung der
                Subunternehmer-Qualifikationen
              </li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            CE-Kennzeichnung absichern — automatisch
          </h3>
          <p className="text-muted-foreground mb-6">
            ZulieferCheck überwacht alle Zertifikate Ihrer Subunternehmer und
            warnt Sie, bevor ein Ablauf Ihre CE-Kennzeichnung gefährdet.
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
