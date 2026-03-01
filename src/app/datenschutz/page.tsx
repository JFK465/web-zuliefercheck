import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – ZulieferCheck",
  description: "Datenschutzerklärung von ZulieferCheck gemäß DSGVO.",
  alternates: { canonical: `${siteConfig.url}/datenschutz` },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="heading-section mb-8">Datenschutzerklärung</h1>
      <div className="prose prose-gray max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            <br />
            ZulieferCheck
            <br />
            Deutschland
            <br />
            E-Mail: hallo@zuliefercheck.de
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            2. Erhobene Daten
          </h2>
          <p>
            Bei der Nutzung dieser Website werden folgende Daten verarbeitet:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Server-Logfiles (IP-Adresse, Zeitstempel, aufgerufene URL)</li>
            <li>Kontaktformular-Daten (Name, E-Mail, Nachricht)</li>
            <li>Newsletter-Anmeldedaten (E-Mail)</li>
            <li>Beta-Registrierungsdaten (Name, E-Mail, Unternehmen)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            3. Rechtsgrundlage
          </h2>
          <p>
            Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO
            (Vertragserfüllung), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie
            Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch. Wenden Sie sich dazu an: hallo@zuliefercheck.de
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            5. Cookies
          </h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies.
            Es werden keine Tracking-Cookies oder Marketing-Cookies eingesetzt.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            6. Hosting
          </h2>
          <p>
            Diese Website wird auf Servern in Deutschland gehostet. Die
            Verarbeitung erfolgt DSGVO-konform.
          </p>
        </section>
        <p className="text-sm">Stand: März 2026</p>
      </div>
    </div>
  );
}
