import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <h2 className="heading-section mb-4 text-primary-foreground">
          Audit-sicher in 15 Minuten — jetzt starten
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg mb-10">
          Schließen Sie Ihre Compliance-Lücken, bevor der Auditor sie findet.
          ZulieferCheck ist während der Beta-Phase kostenlos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Beta-Zugang sichern — kostenlos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/kontakt">Demo anfordern</Link>
          </Button>
        </div>
        <p className="mt-6 text-primary-foreground/60 text-sm">
          Keine Kreditkarte. Keine Einrichtungsgebühr. Server in Deutschland.
        </p>
      </div>
    </section>
  );
}
