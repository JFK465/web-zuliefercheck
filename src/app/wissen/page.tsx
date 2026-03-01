import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Wissen – EN 1090, ISO 9001, ISO 3834 | ZulieferCheck",
  description:
    "Praxiswissen zu EN 1090-2 Clause 5.6, ISO 9001 Kapitel 8.4, ISO 3834 und Lieferantenmanagement für zertifizierte Metallbau- und Stahlbau-Betriebe.",
  alternates: { canonical: `${siteConfig.url}/wissen` },
  openGraph: {
    title: "Wissen – EN 1090, ISO 9001, ISO 3834",
    description:
      "Praxiswissen für QM-Beauftragte und Schweißkoordinatoren in EN-1090-zertifizierten Betrieben.",
    url: `${siteConfig.url}/wissen`,
  },
};

const articles = [
  {
    href: "/wissen/en-1090-2-clause-5-6",
    title: "EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen",
    description:
      "Welche Zertifikate Ihre Schweißen-Subunternehmer zwingend vorweisen müssen und was passiert, wenn eines abläuft.",
    tag: "EN 1090-2",
    readTime: "6 Min.",
  },
  {
    href: "/wissen/iso-9001-kapitel-8-4",
    title: "ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt",
    description:
      "Was ISO 9001 Kapitel 8.4 von Ihnen verlangt, welche Dokumente Auditoren sehen wollen und wie Sie einen audit-sicheren Prozess aufbauen.",
    tag: "ISO 9001",
    readTime: "7 Min.",
  },
  {
    href: "/wissen/iso-3834",
    title: "ISO 3834 — Qualitätsanforderungen fürs Schmelzschweißen",
    description:
      "ISO 3834-2 vs. ISO 3834-3 — welche Anforderungsstufe für welche Ausführungsklasse gilt und was das für Ihre Subunternehmer bedeutet.",
    tag: "ISO 3834",
    readTime: "5 Min.",
  },
  {
    href: "/wissen/iso-9606-1-schweisser",
    title: "ISO 9606-1 — Schweißer-Qualifikation und Gültigkeitsdauer",
    description:
      "Wie lange eine ISO-9606-1-Prüfung gültig ist, wann sie verlängert werden muss und welche Konsequenzen eine abgelaufene Qualifikation hat.",
    tag: "ISO 9606-1",
    readTime: "5 Min.",
  },
  {
    href: "/wissen/ce-kennzeichnung-metallbau",
    title: "CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt",
    description:
      "Was die CE-Kennzeichnung nach EN 1090-1 bedeutet, wer sie benötigt und warum ein einziges abgelaufenes Subunternehmer-Zertifikat sie formal ungültig machen kann.",
    tag: "CE-Kennzeichnung",
    readTime: "8 Min.",
  },
];

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        title="Wissen – EN 1090, ISO 9001, ISO 3834"
        description="Praxiswissen für QM-Beauftragte und Schweißkoordinatoren in EN-1090-zertifizierten Betrieben."
        url="/wissen"
      />
      <BreadcrumbSchema items={[{ label: "Wissen", href: "/wissen" }]} />

      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Wissen", href: "/wissen" }]} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Wissen</span>
          </div>
          <h1 className="heading-hero mb-6 max-w-3xl">
            Praxiswissen zu EN 1090, ISO 9001 und Lieferantenmanagement
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Fundierte Artikel für QM-Beauftragte, Schweißkoordinatoren und
            Geschäftsführer in EN-1090-zertifizierten Betrieben — ohne
            Fachchinesisch, mit konkreten Handlungsempfehlungen.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-background rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime} Lesezeit
                  </span>
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  Artikel lesen
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">
            Wissen in die Praxis umsetzen
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            ZulieferCheck setzt die Anforderungen aus EN 1090-2, ISO 9001 und
            ISO 3834 direkt in einen strukturierten Arbeitsablauf um.
          </p>
          <Button size="lg" asChild>
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Jetzt kostenlos testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
