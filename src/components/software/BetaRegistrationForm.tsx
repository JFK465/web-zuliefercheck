"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function BetaRegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-2">Beta-Zugang gesichert!</h3>
        <p className="text-muted-foreground text-sm">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden mit Ihrem Zugang.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="beta-name">
          Name
        </label>
        <input
          id="beta-name"
          name="name"
          type="text"
          placeholder="Max Mustermann"
          required
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="beta-email">
          E-Mail
        </label>
        <input
          id="beta-email"
          name="email"
          type="email"
          placeholder="max@metallbau-mustermann.de"
          required
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="beta-company"
        >
          Unternehmen
        </label>
        <input
          id="beta-company"
          name="company"
          type="text"
          placeholder="Metallbau Mustermann GmbH"
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="beta-suppliers"
        >
          Anzahl Zulieferer (ca.)
        </label>
        <select
          id="beta-suppliers"
          name="suppliers"
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="">Bitte wählen</option>
          <option value="1-5">1–5 Zulieferer</option>
          <option value="6-15">6–15 Zulieferer</option>
          <option value="16-50">16–50 Zulieferer</option>
          <option value="50+">Mehr als 50</option>
        </select>
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? "Wird gesendet..." : "Kostenlos Beta-Zugang sichern"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        DSGVO-konform. Keine Weitergabe. Jederzeit kündbar.
      </p>
    </form>
  );
}
