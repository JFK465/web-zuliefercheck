"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/contact", {
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
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="font-bold text-xl mb-2">Nachricht erhalten!</h3>
        <p className="text-muted-foreground">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="contact-name"
        >
          Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Max Mustermann"
          required
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="contact-email"
        >
          E-Mail *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="max@firma.de"
          required
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="contact-company"
        >
          Unternehmen
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Metallbau GmbH"
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="contact-subject"
        >
          Betreff
        </label>
        <select
          id="contact-subject"
          name="subject"
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="demo">Demo anfordern</option>
          <option value="question">Allgemeine Frage</option>
          <option value="partner">Partnerschaft / QM-Berater</option>
          <option value="other">Sonstiges</option>
        </select>
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          htmlFor="contact-message"
        >
          Nachricht *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Wie können wir Ihnen helfen?"
          required
          className="w-full border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Wird gesendet..." : "Nachricht senden"}
        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        DSGVO-konform. Ihre Daten werden nicht weitergegeben.
      </p>
    </form>
  );
}
