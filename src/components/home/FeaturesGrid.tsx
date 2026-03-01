"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Upload,
  BarChart3,
  Monitor,
  Network,
  Archive,
  Users,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { staggerContainerSlow, fadeInUp } from "@/lib/animations";

const features = [
  {
    icon: Clock,
    title: "Zertifikats-Ablauf-Tracker",
    description:
      "Alle Zulieferer-Zertifikate mit Ablaufdaten erfasst. Ampelstatus auf einen Blick. Nie wieder eine ablaufende Frist verpassen.",
  },
  {
    icon: Bell,
    title: "Automatische Erinnerungs-E-Mails",
    description:
      "90, 30 und 7 Tage vor Ablauf automatische Benachrichtigung an Sie und optional direkt an den Zulieferer.",
  },
  {
    icon: Upload,
    title: "Lieferantenportal (Self-Upload)",
    description:
      "Zulieferer laden ihre aktuellen Zertifikate selbst hoch. Sie prüfen und bestätigen. Kein E-Mail-Ping-Pong mehr.",
  },
  {
    icon: BarChart3,
    title: "Bewertungsmatrix ISO 9001 Kap. 8.4",
    description:
      "Strukturiertes Bewertungsformular, das die ISO-9001-Anforderungen abdeckt. Revisionssicher gespeichert, jederzeit abrufbar.",
  },
  {
    icon: Monitor,
    title: "Audit-Cockpit",
    description:
      "Sofortiger Überblick: Welcher Zulieferer hat welches Zertifikat, gültig bis wann. Ein-Klick-Export als PDF für den Auditor.",
  },
  {
    icon: Network,
    title: "Branchenverzeichnis (Netzwerkeffekt)",
    description:
      "Verifiziertes Verzeichnis von EN-1090-Zulieferern. Neue qualifizierte Subunternehmer in Ihrer Region finden — oder selbst gefunden werden.",
  },
  {
    icon: Archive,
    title: "Dokumentenarchiv",
    description:
      "Alle Zertifikats-PDFs zentral und revisionssicher gespeichert. Versionierung: Welches Dokument war zum Zeitpunkt X gültig?",
  },
  {
    icon: Users,
    title: "Mehrbenutzer-Zugänge",
    description:
      "GF, QM-Beauftragter und Schweißaufsicht haben jeweils ihren Zugang mit passenden Berechtigungen.",
  },
  {
    icon: ShieldCheck,
    title: "EN-1090-spezifische Zertifikatstypen",
    description:
      "WPK-Zertifikat, ISO 3834, ISO 9606-1, ISO 9001 — alle normspezifisch vorerfasst mit den richtigen Gültigkeitsregeln.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">
            Alle Funktionen für Ihre EN-1090-Compliance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Von der Zertifikatsüberwachung bis zum Branchenverzeichnis —
            entwickelt für Metallbau-Betriebe.
          </p>
        </div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
