import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Impressum – ZulieferCheck",
  description: "Impressum von ZulieferCheck gemäß § 5 TMG.",
  alternates: { canonical: `${siteConfig.url}/impressum` },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="heading-section mb-8">Impressum</h1>
      <div className="prose prose-gray max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            ZulieferCheck
            <br />
            Deutschland
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Kontakt
          </h2>
          <p>E-Mail: hallo@zuliefercheck.de</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>ZulieferCheck</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte können wir jedoch keine Gewähr übernehmen. Die auf dieser
            Website veröffentlichten Normeninhalte (EN 1090, ISO 9001, ISO 3834
            etc.) dienen ausschließlich der allgemeinen Information und ersetzen
            nicht die jeweiligen Originaldokumente der Normenherausgeber.
          </p>
        </section>
        <p className="text-sm">Stand: März 2026</p>
      </div>
    </div>
  );
}
