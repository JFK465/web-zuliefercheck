"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Trash2,
} from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  type: string;
  expiryDate: string;
}

type StatusLevel = "ok" | "warning" | "expired" | "unknown";

function getStatus(expiryDate: string): StatusLevel {
  if (!expiryDate) return "unknown";
  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysLeft = Math.floor(
    (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (daysLeft < 0) return "expired";
  if (daysLeft <= 30) return "warning";
  return "ok";
}

function getDaysLeft(expiryDate: string): number {
  if (!expiryDate) return 0;
  const today = new Date();
  const expiry = new Date(expiryDate);
  return Math.floor(
    (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );
}

const certTypes = [
  "WPK-Zertifikat (EN 1090-1)",
  "ISO 3834-2",
  "ISO 3834-3",
  "ISO 9606-1 Schweißer-Qualifikation",
  "ISO 9001",
  "Sonstiges",
];

export function ZertifikatsChecker() {
  const [certs, setCerts] = useState<Certificate[]>([
    { id: "1", name: "", type: certTypes[0], expiryDate: "" },
  ]);
  const [checked, setChecked] = useState(false);

  const addCert = () => {
    setCerts((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: "",
        type: certTypes[0],
        expiryDate: "",
      },
    ]);
  };

  const removeCert = (id: string) => {
    setCerts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCert = (id: string, field: keyof Certificate, value: string) => {
    setCerts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  const filledCerts = certs.filter((c) => c.name && c.expiryDate);
  const canCheck = filledCerts.length > 0;

  const expiredCount = filledCerts.filter(
    (c) => getStatus(c.expiryDate) === "expired",
  ).length;
  const warningCount = filledCerts.filter(
    (c) => getStatus(c.expiryDate) === "warning",
  ).length;
  const okCount = filledCerts.filter(
    (c) => getStatus(c.expiryDate) === "ok",
  ).length;

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            Kostenloses Tool
          </div>
          <h1 className="heading-hero mb-3">Zertifikats-Schnellcheck</h1>
          <p className="text-xl text-muted-foreground">
            Tragen Sie Ihre Subunternehmer-Zertifikate ein und sehen Sie sofort,
            welche bald ablaufen.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-8 pb-16">
        <div className="container-custom max-w-2xl">
          <div className="bg-background rounded-xl border border-border p-6 shadow-sm mb-6">
            <div className="space-y-4">
              {certs.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="grid gap-3 p-4 bg-muted/30 rounded-lg relative"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      Zertifikat {idx + 1}
                    </span>
                    {certs.length > 1 && (
                      <button
                        onClick={() => removeCert(cert.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label
                        htmlFor={`name-${cert.id}`}
                        className="text-xs mb-1 block"
                      >
                        Subunternehmer / Bezeichnung
                      </Label>
                      <Input
                        id={`name-${cert.id}`}
                        placeholder="z. B. Muster GmbH WPK"
                        value={cert.name}
                        onChange={(e) =>
                          updateCert(cert.id, "name", e.target.value)
                        }
                        className="h-9 text-sm"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor={`type-${cert.id}`}
                        className="text-xs mb-1 block"
                      >
                        Zertifikatstyp
                      </Label>
                      <select
                        id={`type-${cert.id}`}
                        value={cert.type}
                        onChange={(e) =>
                          updateCert(cert.id, "type", e.target.value)
                        }
                        className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {certTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor={`expiry-${cert.id}`}
                      className="text-xs mb-1 block"
                    >
                      Ablaufdatum
                    </Label>
                    <Input
                      id={`expiry-${cert.id}`}
                      type="date"
                      value={cert.expiryDate}
                      onChange={(e) =>
                        updateCert(cert.id, "expiryDate", e.target.value)
                      }
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={addCert}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                Weiteres Zertifikat
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            disabled={!canCheck}
            onClick={() => setChecked(true)}
          >
            Jetzt prüfen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {!canCheck && (
            <p className="text-center text-sm text-muted-foreground mt-3">
              Bitte mindestens ein Zertifikat mit Name und Ablaufdatum
              eintragen.
            </p>
          )}

          {/* Results */}
          {checked && filledCerts.length > 0 && (
            <div className="mt-8">
              {/* Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {okCount}
                  </div>
                  <div className="text-xs text-green-700 mt-1">Gültig</div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {warningCount}
                  </div>
                  <div className="text-xs text-orange-700 mt-1">
                    Läuft bald ab
                  </div>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {expiredCount}
                  </div>
                  <div className="text-xs text-red-700 mt-1">Abgelaufen</div>
                </div>
              </div>

              {/* Detail list */}
              <div className="space-y-3">
                {filledCerts.map((cert) => {
                  const status = getStatus(cert.expiryDate);
                  const daysLeft = getDaysLeft(cert.expiryDate);
                  return (
                    <div
                      key={cert.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        status === "ok"
                          ? "bg-green-50 border-green-100"
                          : status === "warning"
                            ? "bg-orange-50 border-orange-100"
                            : "bg-red-50 border-red-100"
                      }`}
                    >
                      {status === "ok" ? (
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : status === "warning" ? (
                        <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          {cert.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {cert.type}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div
                          className={`text-sm font-medium ${
                            status === "ok"
                              ? "text-green-700"
                              : status === "warning"
                                ? "text-orange-700"
                                : "text-red-700"
                          }`}
                        >
                          {status === "expired"
                            ? `Abgelaufen (${Math.abs(daysLeft)} Tage)`
                            : status === "warning"
                              ? `Noch ${daysLeft} Tage`
                              : `Noch ${daysLeft} Tage`}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(cert.expiryDate).toLocaleDateString(
                            "de-DE",
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {(expiredCount > 0 || warningCount > 0) && (
                <div className="mt-6 bg-primary/5 rounded-xl p-6 text-center">
                  <p className="font-semibold mb-2">
                    {expiredCount > 0
                      ? `${expiredCount} Zertifikat${expiredCount > 1 ? "e sind" : " ist"} abgelaufen.`
                      : `${warningCount} Zertifikat${warningCount > 1 ? "e laufen" : " läuft"} bald ab.`}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    ZulieferCheck überwacht alle Ablaufdaten automatisch und
                    erinnert Sie 90/30/7 Tage vor Ablauf — damit das nicht mehr
                    passiert.
                  </p>
                  <Button asChild>
                    <Link href="/lieferantenmanagement-software#beta-anmeldung">
                      Jetzt kostenlos testen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
