"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Mail, FileX, Search, Users } from "lucide-react";
import { staggerContainerSlow, fadeInUp } from "@/lib/animations";

const painPoints = [
  {
    icon: Search,
    title:
      '"Der Auditor fragt nach Zertifikaten — und niemand weiß genau, wo sie liegen"',
    description:
      "Zertifikate in Outlook-Ordnern, veraltete PDFs auf dem Server, keine zentrale Übersicht.",
  },
  {
    icon: AlertTriangle,
    title:
      '"Ein Zulieferer-Zertifikat ist abgelaufen — Sie erfahren es erst beim Audit"',
    description:
      "Abgelaufenes WPK-Zertifikat oder ISO-3834-Nachweis → Ihre eigene CE-Kennzeichnung formal in Frage gestellt.",
  },
  {
    icon: Clock,
    title: '"2-4 Stunden E-Mail-Chaos vor jedem Audit"',
    description:
      "Denselben Zulieferern immer wieder identische E-Mails schicken, auf Antworten warten, veraltete PDFs bekommen.",
  },
  {
    icon: FileX,
    title:
      '"Lieferantenbewertung ISO 9001 Kap. 8.4 — immer im letzten Moment erledigt"',
    description:
      "Das jährliche Word-Formular wird gehetzt ausgefüllt, unvollständig — und der Auditor findet Lücken.",
  },
  {
    icon: Mail,
    title: '"Neue qualifizierte Zulieferer finden ist mühsam"',
    description:
      "Kein branchenspezifisches Verzeichnis verifizierter EN-1090-Zulieferer. Empfehlungen laufen nur über persönliche Kontakte.",
  },
  {
    icon: Users,
    title:
      '"Schweißer-Zertifikate Ihres Subunternehmers laufen ab — ohne dass Sie es wissen"',
    description:
      "ISO 9606-1 gilt 2 Jahre. Bei 10+ Schweißern eines Subunternehmers verliert man schnell den Überblick.",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Kennen Sie das?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Diese Situationen erleben EN-1090-zertifizierte Betriebe regelmäßig
            — und sie sind vermeidbar.
          </p>
        </div>

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <point.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-semibold mb-2 text-sm leading-snug">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
