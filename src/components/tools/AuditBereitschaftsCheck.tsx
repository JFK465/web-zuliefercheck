"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

type AnswerValue =
  | "ja"
  | "nein"
  | "teilweise"
  | "keine"
  | "kleinere"
  | "größere"
  | "nachaudit";

interface Question {
  id: number;
  category: string;
  text: string;
  options: { value: AnswerValue; label: string; points: number }[];
}

const questions: Question[] = [
  // Kategorie 1: Subunternehmer-Zertifikate
  {
    id: 1,
    category: "Subunternehmer-Zertifikate",
    text: "Haben alle aktuell beauftragten Schweißen-Subunternehmer ein gültiges WPK-Zertifikat (EN 1090-1)?",
    options: [
      { value: "ja", label: "Ja, alle gültig und im Überblick", points: 10 },
      {
        value: "teilweise",
        label: "Bin unsicher / weiß es nicht genau",
        points: 3,
      },
      { value: "nein", label: "Nein / einige sind abgelaufen", points: 0 },
    ],
  },
  {
    id: 2,
    category: "Subunternehmer-Zertifikate",
    text: "Liegen für alle eingesetzten Subunternehmer gültige ISO-3834-Nachweise vor (passend zur Ausführungsklasse)?",
    options: [
      { value: "ja", label: "Ja, alle vorhanden und gültig", points: 10 },
      {
        value: "teilweise",
        label: "Teilweise / nicht vollständig geprüft",
        points: 4,
      },
      { value: "nein", label: "Nein / nicht bekannt", points: 0 },
    ],
  },
  {
    id: 3,
    category: "Subunternehmer-Zertifikate",
    text: "Haben Sie für alle eingesetzten Schweißer der Subunternehmer gültige ISO-9606-1-Nachweise?",
    options: [
      { value: "ja", label: "Ja, alle gültig und dokumentiert", points: 10 },
      { value: "teilweise", label: "Nicht für alle vorhanden", points: 3 },
      {
        value: "nein",
        label: "Nein / wird nicht systematisch verfolgt",
        points: 0,
      },
    ],
  },
  // Kategorie 2: Überwachungsprozess
  {
    id: 4,
    category: "Überwachungsprozess",
    text: "Haben Sie einen definierten Prozess, der Sie vor Ablauf von Subunternehmer-Zertifikaten warnt?",
    options: [
      { value: "ja", label: "Ja, automatische Überwachung läuft", points: 10 },
      {
        value: "teilweise",
        label: "Erinnerungen manuell in Kalender",
        points: 5,
      },
      { value: "nein", label: "Nein, reagiere erst beim Audit", points: 0 },
    ],
  },
  {
    id: 5,
    category: "Überwachungsprozess",
    text: "Wie sammeln Sie aktuell die Zertifikate Ihrer Subunternehmer?",
    options: [
      {
        value: "ja",
        label: "Digitale Plattform, Subunternehmer lädt selbst hoch",
        points: 10,
      },
      {
        value: "teilweise",
        label: "Per E-Mail, in Outlook-Ordner abgelegt",
        points: 4,
      },
      { value: "nein", label: "Papier oder gar nicht systematisch", points: 0 },
    ],
  },
  // Kategorie 3: Audit-Vorbereitung
  {
    id: 6,
    category: "Audit-Vorbereitung",
    text: "Können Sie alle Subunternehmer-Zertifikate innerhalb von 30 Minuten zusammenstellen?",
    options: [
      { value: "ja", label: "Ja, sofort abrufbar", points: 10 },
      { value: "teilweise", label: "Brauche mehrere Stunden", points: 3 },
      { value: "nein", label: "Nein, brauche Tage", points: 0 },
    ],
  },
  {
    id: 7,
    category: "Audit-Vorbereitung",
    text: "Haben Sie eine aktuelle Liste aller beauftragten Subunternehmer mit ihren Zertifizierungsstatus?",
    options: [
      { value: "ja", label: "Ja, immer aktuell", points: 10 },
      {
        value: "teilweise",
        label: "Liste existiert, aber nicht immer aktuell",
        points: 5,
      },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  // Kategorie 4: ISO 9001 Kapitel 8.4
  {
    id: 8,
    category: "ISO 9001 / Lieferantenbewertung",
    text: "Führen Sie regelmäßige Lieferantenbewertungen nach ISO 9001 Kapitel 8.4 durch?",
    options: [
      {
        value: "ja",
        label: "Ja, dokumentiert und jährlich aktualisiert",
        points: 10,
      },
      {
        value: "teilweise",
        label: "Unregelmäßig, nicht vollständig dokumentiert",
        points: 4,
      },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  {
    id: 9,
    category: "ISO 9001 / Lieferantenbewertung",
    text: "Gibt es für Ihre Lieferantenbewertungen einen nachvollziehbaren Audit-Trail?",
    options: [
      { value: "ja", label: "Ja, revisionssicher dokumentiert", points: 10 },
      {
        value: "teilweise",
        label: "Excel-Tabellen, kein formaler Trail",
        points: 3,
      },
      { value: "nein", label: "Nein", points: 0 },
    ],
  },
  // Kategorie 5: Letztes Audit
  {
    id: 10,
    category: "Letztes Audit",
    text: "Hat Ihr Betrieb beim letzten Überwachungsaudit Befunde zur Subunternehmer-Dokumentation erhalten?",
    options: [
      { value: "keine", label: "Keine Befunde", points: 10 },
      { value: "kleinere", label: "Kleinere Hinweise", points: 5 },
      { value: "größere", label: "Major-Befund", points: 0 },
      { value: "nachaudit", label: "Nachaudit notwendig", points: -5 },
    ],
  },
];

const categories = [
  "Subunternehmer-Zertifikate",
  "Überwachungsprozess",
  "Audit-Vorbereitung",
  "ISO 9001 / Lieferantenbewertung",
  "Letztes Audit",
];

export function AuditBereitschaftsCheck() {
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [showResult, setShowResult] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const currentCategoryName = categories[currentCategory];
  const currentQuestions = questions.filter(
    (q) => q.category === currentCategoryName,
  );
  const answeredInCategory = currentQuestions.filter(
    (q) => answers[q.id] !== undefined,
  ).length;

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find((o) => o.value === answer);
        if (option) total += option.points;
      }
    });
    return Math.max(0, Math.min(100, total));
  };

  const score = showResult ? calculateScore() : 0;

  const getScoreLevel = (s: number) => {
    if (s >= 80)
      return {
        level: "gruen",
        label: "Gut aufgestellt",
        color: "text-green-600",
      };
    if (s >= 50)
      return {
        level: "orange",
        label: "Handlungsbedarf",
        color: "text-orange-600",
      };
    return {
      level: "rot",
      label: "Kritisch — Sofortmaßnahmen empfohlen",
      color: "text-red-600",
    };
  };

  const getWeakAreas = () => {
    return questions
      .filter((q) => {
        const answer = answers[q.id];
        if (!answer) return false;
        const option = q.options.find((o) => o.value === answer);
        return option && option.points < 8;
      })
      .map((q) => q.category);
  };

  const handleAnswer = (questionId: number, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextCategory = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevCategory = () => {
    if (currentCategory > 0) setCurrentCategory((c) => c - 1);
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
    setCurrentCategory(0);
  };

  if (showResult) {
    const level = getScoreLevel(score);
    const weakAreas = [...new Set(getWeakAreas())];

    return (
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-2xl">
          <div className="bg-background rounded-2xl border border-border p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold mb-2">
              Ihr Audit-Bereitschafts-Score
            </h2>
            <p className="text-muted-foreground mb-8">
              Basierend auf Ihren Antworten zum Subunternehmer-Management
            </p>

            {/* Score Display */}
            <div className="relative mb-8">
              <div className="w-36 h-36 rounded-full mx-auto flex items-center justify-center border-8 border-primary/20 bg-primary/5">
                <div>
                  <div className={`text-5xl font-bold ${level.color}`}>
                    {score}
                  </div>
                  <div className="text-sm text-muted-foreground">/ 100</div>
                </div>
              </div>
            </div>

            {/* Level Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                level.level === "gruen"
                  ? "bg-green-100 text-green-700"
                  : level.level === "orange"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {level.level === "gruen" ? (
                <CheckCircle className="h-4 w-4" />
              ) : level.level === "orange" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              {level.label}
            </div>

            {/* Message */}
            <p className="text-muted-foreground mb-6">
              {level.level === "gruen"
                ? "Gut aufgestellt. ZulieferCheck hält diesen Stand automatisch aufrecht und warnt Sie vor jedem Ablauf."
                : level.level === "orange"
                  ? `Handlungsbedarf in ${weakAreas.length} Bereichen. ZulieferCheck schließt diese Lücken systematisch.`
                  : "Kritisch. Ihr Betrieb hat erhebliche Lücken im Subunternehmer-Management. ZulieferCheck hilft Ihnen sofort."}
            </p>

            {/* Weak Areas */}
            {weakAreas.length > 0 && (
              <div className="text-left bg-muted/30 rounded-xl p-4 mb-6">
                <h3 className="font-semibold mb-2 text-sm">
                  Bereiche mit Handlungsbedarf:
                </h3>
                <ul className="space-y-1">
                  {weakAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <AlertTriangle className="h-3 w-3 text-orange-500 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/lieferantenmanagement-software#beta-anmeldung">
                  ZulieferCheck schließt diese Lücken — kostenlos testen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" onClick={reset}>
                Check wiederholen
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            Kostenloses Tool
          </div>
          <h1 className="heading-hero mb-3">
            Subunternehmer-Audit-Bereitschafts-Check
          </h1>
          <p className="text-xl text-muted-foreground">
            10 Fragen — 3 Minuten — Ihr persönlicher Compliance-Score
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-8 pb-16">
        <div className="container-custom max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Kategorie {currentCategory + 1} von {categories.length}:{" "}
                {currentCategoryName}
              </span>
              <span>
                {Object.keys(answers).length} / {questions.length} beantwortet
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: `${(Object.keys(answers).length / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Questions for current category */}
          <div className="space-y-6">
            {currentQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-background rounded-xl border border-border p-6 shadow-sm"
              >
                <p className="font-medium mb-4">
                  <span className="text-primary font-bold mr-2">
                    {questions.indexOf(q) + 1}.
                  </span>
                  {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(q.id, option.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ${
                        answers[q.id] === option.value
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border hover:border-primary/40 hover:bg-muted/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevCategory}
              disabled={currentCategory === 0}
            >
              Zurück
            </Button>
            <Button
              onClick={nextCategory}
              disabled={answeredInCategory < currentQuestions.length}
            >
              {currentCategory === categories.length - 1
                ? "Score berechnen"
                : "Weiter"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {answeredInCategory < currentQuestions.length && (
            <p className="text-center text-sm text-muted-foreground mt-3">
              Bitte alle Fragen in dieser Kategorie beantworten um fortzufahren.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
