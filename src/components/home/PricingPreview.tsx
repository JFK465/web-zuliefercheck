import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tiers = [
  {
    name: "Starter",
    price: "49",
    betaPrice: "0",
    description: "Für kleine Betriebe mit bis zu 10 Zulieferern.",
    features: [
      "Bis zu 10 Zulieferer",
      "Zertifikats-Ablauf-Tracker",
      "Automatische Erinnerungen",
      "Audit-Cockpit",
      "2 Benutzer-Zugänge",
      "E-Mail-Support",
    ],
    cta: "Beta-Zugang sichern",
    href: "/lieferantenmanagement-software#beta-anmeldung",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "89",
    betaPrice: "0",
    description:
      "Für Betriebe mit bis zu 50 Zulieferern und vollem Funktionsumfang.",
    features: [
      "Bis zu 50 Zulieferer",
      "Alles aus Starter",
      "Lieferantenportal (Self-Upload)",
      "Bewertungsmatrix ISO 9001",
      "Branchenverzeichnis-Eintrag",
      "Dokumentenarchiv",
      "5 Benutzer-Zugänge",
      "Prioritäts-Support",
    ],
    cta: "Beta-Zugang sichern",
    href: "/lieferantenmanagement-software#beta-anmeldung",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Auf Anfrage",
    betaPrice: "Kontakt",
    description:
      "Für große Betriebe mit vielen Standorten oder als White-Label für QM-Berater.",
    features: [
      "Unbegrenzt Zulieferer",
      "Alles aus Professional",
      "Multi-Mandanten",
      "White-Label-Option",
      "API-Zugang",
      "Dedizierter Account Manager",
      "SLA-Garantie",
    ],
    cta: "Kontakt aufnehmen",
    href: "/kontakt",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Beta — Jetzt kostenlos
          </Badge>
          <h2 className="heading-section mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Kein Enterprise-Vertrag. Kein Implementierungsaufwand. Heute
            anmelden, morgen audit-ready.
          </p>
          <p className="mt-4 text-primary font-semibold">
            Während der Beta-Phase kostenlos — jetzt Beta-Zugang sichern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-background"
              }`}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Beliebteste Wahl
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {tier.price === "Auf Anfrage" ? (
                    <span className="text-2xl font-bold">Auf Anfrage</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{tier.price} €</span>
                      <span className="text-muted-foreground text-sm">
                        /Monat
                      </span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted ? "bg-primary hover:bg-primary/90" : ""
                }`}
                variant={tier.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href={tier.href}>
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="ghost" asChild>
            <Link href="/preise">
              Alle Preisdetails ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
