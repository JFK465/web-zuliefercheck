"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/types";

const faqItems: FAQItem[] = [
  {
    question: "Was verlangt EN 1090-2 Clause 5.6 von meinen Zulieferern?",
    answer:
      "EN 1090-2 Clause 5.6 verlangt, dass Sie beim Einsatz von Subunternehmern für Schweißarbeiten nachweisen können, dass diese über die notwendigen Qualifikationen verfügen — insbesondere gültige WPK-Zertifizierung (EN 1090-1), ISO-3834-Nachweis und gültige Schweißer-Qualifikationen (ISO 9606-1). ZulieferCheck bildet genau diese Anforderungen digital ab.",
  },
  {
    question:
      "Was passiert, wenn beim Audit ein Zulieferer-Zertifikat abgelaufen ist?",
    answer:
      "Ein abgelaufenes Zertifikat eines Schweißen-Subunternehmers stellt Ihre eigene CE-Kennzeichnung formal in Frage, da die Konformitätskette unterbrochen ist. Im schlimmsten Fall führt dies zu einem Audit-Befund (Major Non-Conformity), der ein Nachaudit erfordert oder im Extremfall zur Suspendierung der Zertifizierung führen kann. ZulieferCheck verhindert genau dieses Szenario durch automatische Frühwarnungen.",
  },
  {
    question:
      "Eignet sich ZulieferCheck auch für Betriebe mit nur 3-5 Zulieferern?",
    answer:
      "Ja, besonders für kleine Betriebe lohnt sich ZulieferCheck: Der Aufwand für manuelle Verfolgung ist auch bei wenigen Zulieferern hoch, wenn man bedenkt, dass jedes Schweißer-Zertifikat (ISO 9606-1) alle 2 Jahre erneuert werden muss und ein Subunternehmer mehrere Schweißer haben kann. Der Starter-Plan ist speziell für kleinere Betriebe konzipiert.",
  },
  {
    question:
      "Wie unterscheidet sich ZulieferCheck von SupplyOn oder Relatico?",
    answer:
      "SupplyOn und ähnliche Lösungen sind auf Großunternehmen und komplexe Supply-Chain-Management-Prozesse ausgelegt. ZulieferCheck ist speziell für kleine und mittlere Metallbau-Betriebe (5-50 Zulieferer) entwickelt und berücksichtigt EN-1090-spezifische Anforderungen wie WPK-Zertifikate, ISO 3834 und ISO 9606-1. Einfachere Einrichtung, niedrigere Kosten, branchenspezifische Logik.",
  },
  {
    question: "Kann ich bestehende Zertifikats-PDFs importieren?",
    answer:
      "Ja, beim Onboarding können Sie bestehende Zertifikats-PDFs direkt hochladen und mit den jeweiligen Zulieferern verknüpfen. Alternativ können Sie Ihre Zulieferer einladen, ihre eigenen aktuellen Dokumente selbst hochzuladen — das spart Ihnen Aufwand und stellt sicher, dass immer die aktuellste Version vorliegt.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Die Grundeinrichtung mit Ihren ersten Zulieferern dauert ca. 15 Minuten. Für jeden weiteren Zulieferer brauchen Sie nach dem Onboarding ca. 2-3 Minuten. Wenn Sie Zulieferer einladen, ihre Dokumente selbst hochzuladen, reduziert sich Ihr Aufwand weiter auf das Prüfen und Bestätigen.",
  },
];

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Häufige Fragen</h2>
          <p className="text-muted-foreground text-lg">
            Antworten auf die wichtigsten Fragen zu ZulieferCheck.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
