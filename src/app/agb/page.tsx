import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "AGB – ZulieferCheck",
  description: "Allgemeine Geschäftsbedingungen von ZulieferCheck.",
  alternates: { canonical: `${siteConfig.url}/agb` },
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="heading-section mb-8">Allgemeine Geschäftsbedingungen</h1>
      <div className="prose prose-gray max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            § 1 Geltungsbereich
          </h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge
            zwischen ZulieferCheck und den Nutzern der Software ZulieferCheck.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            § 2 Leistungsbeschreibung
          </h2>
          <p>
            ZulieferCheck stellt eine webbasierte Software zur Verwaltung von
            Zulieferer-Zertifikaten und Lieferantenbewertungen bereit. Der
            Funktionsumfang richtet sich nach dem gebuchten Tarif.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            § 3 Beta-Phase
          </h2>
          <p>
            Während der Beta-Phase ist die Software kostenlos nutzbar.
            ZulieferCheck behält sich vor, den Funktionsumfang zu ändern,
            Dienste vorübergehend zu unterbrechen und die Beta-Phase zu beenden.
            Beta-Nutzer werden über das Ende der Beta-Phase mindestens 30 Tage
            im Voraus informiert.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            § 4 Haftungsbeschränkung
          </h2>
          <p>
            ZulieferCheck haftet nicht für die Richtigkeit der vom Nutzer
            eingegebenen Zertifikatsdaten. Die Software unterstützt bei der
            Verwaltung von Zulieferer-Informationen, ersetzt jedoch nicht die
            eigenverantwortliche Prüfung und Überwachung durch den Nutzer. Die
            in der Software hinterlegten Normeninformationen dienen der
            allgemeinen Information und ersetzen nicht die Lektüre der
            Originalnormen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            § 5 Datenschutz
          </h2>
          <p>
            Es gilt die Datenschutzerklärung von ZulieferCheck. Alle Daten
            werden DSGVO-konform verarbeitet und auf Servern in Deutschland
            gespeichert.
          </p>
        </section>
        <p className="text-sm">Stand: März 2026</p>
      </div>
    </div>
  );
}
