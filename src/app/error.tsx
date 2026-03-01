"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-custom py-24 text-center max-w-2xl mx-auto">
      <div className="text-8xl font-bold text-destructive/20 mb-4">500</div>
      <h1 className="text-3xl font-bold mb-4">Ein Fehler ist aufgetreten</h1>
      <p className="text-muted-foreground mb-8">
        Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kehren Sie
        zur Startseite zurück.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={reset}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Erneut versuchen
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Zur Startseite
          </Link>
        </Button>
      </div>
    </div>
  );
}
