"use client";

import Link from "next/link";
import { Shield, Flag, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-custom py-12">
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold mb-2">
              Nie wieder abgelaufene Zulieferer-Zertifikate
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Praxiswissen zu EN 1090-2, ISO 9001 Kapitel 8.4 und
              Zertifikatsmanagement — direkt in Ihr Postfach.
            </p>
            {subscribed ? (
              <p className="text-green-400 text-sm font-medium">
                Angemeldet! Wir melden uns bald bei Ihnen.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="ihre@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="E-Mail-Adresse für Newsletter"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 shrink-0"
                >
                  Anmelden
                </Button>
              </form>
            )}
            <p className="text-background/50 text-xs mt-2">
              DSGVO-konform. Keine Weitergabe an Dritte. Jederzeit abmeldbar.
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Marke */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg mb-4"
            >
              <Image
                src="/logo-dark.svg"
                alt="ZulieferCheck"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-background/60 text-sm">
              Zulieferer-Zertifikate automatisch überwachen — Audit-sicher nach
              EN 1090.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/funktionen"
                  className="hover:text-background transition-colors"
                >
                  Funktionen
                </Link>
              </li>
              <li>
                <Link
                  href="/preise"
                  className="hover:text-background transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/lieferantenmanagement-software"
                  className="hover:text-background transition-colors"
                >
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/audit-bereitschafts-check"
                  className="hover:text-background transition-colors"
                >
                  Audit-Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Branchen */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Branchen</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/metallbau-schlosserei"
                  className="hover:text-background transition-colors"
                >
                  Metallbau & Schlosserei
                </Link>
              </li>
              <li>
                <Link
                  href="/stahlbau"
                  className="hover:text-background transition-colors"
                >
                  Stahlbau EXC3/4
                </Link>
              </li>
              <li>
                <Link
                  href="/iso-9001-lieferantenbewertung"
                  className="hover:text-background transition-colors"
                >
                  ISO 9001 KMU
                </Link>
              </li>
              <li>
                <Link
                  href="/zulieferer-portal"
                  className="hover:text-background transition-colors"
                >
                  Zulieferer-Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-background transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen"
                  className="hover:text-background transition-colors"
                >
                  Wissen & Normen
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen/en-1090-2-clause-5-6"
                  className="hover:text-background transition-colors"
                >
                  EN 1090-2 Clause 5.6
                </Link>
              </li>
              <li>
                <Link
                  href="/wissen/iso-9001-kapitel-8-4"
                  className="hover:text-background transition-colors"
                >
                  ISO 9001 Kap. 8.4
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-background transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-background transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-background transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="hover:text-background transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2026 ZulieferCheck. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-background/60 text-xs">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              DSGVO-konform
            </span>
            <span className="flex items-center gap-1">
              <Flag className="h-3 w-3" />
              Made in Germany
            </span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              256-Bit SSL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
