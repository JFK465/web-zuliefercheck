import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SEOContentSection() {
  return (
    <section className="py-20 border-t">
      <div className="container-custom max-w-4xl">
        <h2 className="heading-sub mb-6">
          ZulieferCheck: Lieferantenmanagement-Software für
          EN-1090-zertifizierte Metallbau-Betriebe
        </h2>
        <div className="prose prose-gray max-w-none text-muted-foreground">
          <p className="text-base leading-relaxed mb-4">
            EN 1090-2 Clause 5.6 verpflichtet Metallbau-Betriebe dazu, beim
            Einsatz von Schweißen-Subunternehmern nachweislich qualifizierte
            Zulieferer einzusetzen. Das bedeutet: Gültige WPK-Zertifizierung (EN
            1090-1), ISO-3834-Nachweis und aktuelle Schweißer-Qualifikationen
            (ISO 9606-1) aller eingesetzten Subunternehmer müssen jederzeit
            vorgelegt werden können.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Die Realität in vielen Betrieben sieht anders aus: Zertifikate
            liegen verteilt in Outlook-Ordnern, die Ablaufdaten sind nicht
            zentral erfasst, und vor jedem Audit beginnt das hektische
            Zusammensuchen. ZulieferCheck löst dieses Problem mit automatischem
            Ablauf-Tracking, einem Lieferantenportal für den Self-Upload durch
            Zulieferer und einem übersichtlichen Audit-Cockpit.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Zusätzlich bietet ZulieferCheck ein{" "}
            <Link
              href="/zulieferer-portal"
              className="text-primary hover:underline"
            >
              Branchenverzeichnis verifizierter EN-1090-Zulieferer
            </Link>{" "}
            — Hauptbetriebe können neue qualifizierte Schweißen-Subunternehmer
            in ihrer Region finden, und Zulieferer können sich mit verifizierten
            Zertifikaten präsentieren. Dieser Netzwerkeffekt wächst mit jedem
            weiteren Mitglied und macht ZulieferCheck zum branchenspezifischen
            Marktplatz für qualifizierte EN-1090-Zulieferer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link
            href="/wissen/en-1090-2-clause-5-6"
            className="group flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            EN 1090-2 Clause 5.6 erklärt
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/wissen/iso-9001-kapitel-8-4"
            className="group flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            ISO 9001 Kapitel 8.4 — Lieferantenbewertung
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/tools/audit-bereitschafts-check"
            className="group flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Audit-Bereitschafts-Check (kostenlos)
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
