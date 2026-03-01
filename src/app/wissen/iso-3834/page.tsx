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
  title: "ISO 3834 — Qualitätsanforderungen Schmelzschweißen erklärt",
  description:
    "ISO 3834-2 vs. ISO 3834-3 — welche Anforderungsstufe für welche Ausführungsklasse gilt und was das für Ihre Subunternehmer bedeutet.",
  alternates: { canonical: `${siteConfig.url}/wissen/iso-3834` },
  openGraph: {
    title: "ISO 3834 — Qualitätsanforderungen fürs Schmelzschweißen",
    description:
      "ISO 3834-2 vs. ISO 3834-3 für Metallbau- und Stahlbau-Betriebe.",
    url: `${siteConfig.url}/wissen/iso-3834`,
  },
};

export default function Iso3834Page() {
  return (
    <>
      <WebPageSchema
        title="ISO 3834 — Qualitätsanforderungen fürs Schmelzschweißen erklärt"
        description="ISO 3834 für Metallbau- und Stahlbau-Betriebe: was die Norm verlangt, welche Stufe wann gilt."
        url="/wissen/iso-3834"
      />
      <BreadcrumbSchema
        items={[
          { label: "Wissen", href: "/wissen" },
          { label: "ISO 3834", href: "/wissen/iso-3834" },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Wissen", href: "/wissen" },
            { label: "ISO 3834", href: "/wissen/iso-3834" },
          ]}
        />
      </div>

      <article className="container-custom max-w-3xl py-12">
        <div className="mb-6">
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
            ISO 3834
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            5 Min. Lesezeit
          </span>
        </div>

        <h1 className="heading-hero mb-6">
          ISO 3834 — Qualitätsanforderungen fürs Schmelzschweißen einfach
          erklärt
        </h1>

        <p className="text-xl text-muted-foreground mb-12">
          ISO 3834 ist die Norm, die Qualitätsanforderungen für das
          Schmelzschweißen festlegt. Für EN-1090-zertifizierte Betriebe und ihre
          Subunternehmer ist sie nicht optional.
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Was ISO 3834 regelt</h2>
            <p className="text-muted-foreground">
              ISO 3834 legt Qualitätsanforderungen für das Schmelzschweißen von
              metallischen Werkstoffen sowohl in Werkstätten als auch auf
              Baustellen fest. Die Norm besteht aus mehreren Teilen, wobei für
              EN-1090-zertifizierte Betriebe vor allem Teil 2 (umfassende
              Qualitätsanforderungen) und Teil 3
              (Standard-Qualitätsanforderungen) relevant sind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              ISO 3834-2 vs. ISO 3834-3 — der Unterschied
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-3">ISO 3834-2</h3>
                <p className="text-sm font-medium text-primary mb-2">
                  Umfassende Qualitätsanforderungen
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  <li>Gilt für EXC3 und EXC4</li>
                  <li>Vollständige Schweißpläne erforderlich</li>
                  <li>Umfangreichere Prüfaufzeichnungen</li>
                  <li>Strengere Qualifikationsanforderungen</li>
                  <li>Nachvollziehbarkeit aller Fertigungsschritte</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-5">
                <h3 className="font-semibold text-lg mb-3">ISO 3834-3</h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Standard-Qualitätsanforderungen
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                  <li>Gilt für EXC2</li>
                  <li>Vereinfachte Schweißpläne akzeptiert</li>
                  <li>Weniger Prüfaufzeichnungen notwendig</li>
                  <li>Grundlegende Qualifikationsanforderungen</li>
                  <li>Weniger Nachvollziehbarkeits-Anforderungen</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Welche Stufe gilt für welche Ausführungsklasse?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold border border-border">
                      Ausführungsklasse
                    </th>
                    <th className="text-left p-3 font-semibold border border-border">
                      ISO-3834-Anforderung
                    </th>
                    <th className="text-left p-3 font-semibold border border-border">
                      Gilt auch für Subunternehmer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">EXC1</td>
                    <td className="p-3 border border-border text-muted-foreground">
                      ISO 3834-4 oder gleichwertig
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Ja
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border">EXC2</td>
                    <td className="p-3 border border-border text-muted-foreground">
                      ISO 3834-3 (mindestens)
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Ja
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">EXC3</td>
                    <td className="p-3 border border-border font-medium">
                      ISO 3834-2 (zwingend)
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Ja — auch Subunternehmer
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-3 border border-border">EXC4</td>
                    <td className="p-3 border border-border font-medium">
                      ISO 3834-2 (zwingend)
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Ja — auch Subunternehmer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Was das für Ihre Subunternehmer bedeutet
            </h2>
            <p className="text-muted-foreground">
              Wenn Sie EXC3- oder EXC4-Bauteile herstellen und dabei
              Schweißarbeiten an einen Subunternehmer vergeben, muss dieser
              Subunternehmer eine gültige ISO-3834-2-Zertifizierung vorweisen.
              Ein Subunternehmer mit nur ISO 3834-3 ist für EXC3/4-Arbeiten
              formal nicht qualifiziert.
            </p>
            <p className="text-muted-foreground mt-4">
              Das klingt einfach — in der Praxis wird es jedoch oft übersehen.
              Viele Subunternehmer haben eine ISO-3834-3-Zertifizierung, weil
              das günstiger ist. Wenn Sie als Hauptauftragnehmer dann EXC3
              deklarieren, haben Sie ein Problem beim Audit.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">
            ISO-3834-Zertifikat-Ablauf automatisch überwachen
          </h3>
          <p className="text-muted-foreground mb-6">
            ZulieferCheck erinnert Sie 90/30/7 Tage vor Ablauf jedes
            ISO-3834-Zertifikats Ihrer Subunternehmer.
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
