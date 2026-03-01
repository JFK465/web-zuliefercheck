import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center max-w-2xl mx-auto">
      <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-4">Seite nicht gefunden</h1>
      <p className="text-muted-foreground mb-8">
        Die gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Zur Startseite
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/lieferantenmanagement-software#beta-anmeldung">
            Kostenlos testen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
