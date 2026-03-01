"use client";

import { motion } from "framer-motion";
import { UserPlus, Bell, CheckSquare } from "lucide-react";
import { staggerContainerFast, fadeInUp } from "@/lib/animations";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Zulieferer anlegen und einladen",
    description:
      "Legen Sie Ihre Zulieferer einmalig an. ZulieferCheck sendet ihnen eine Einladung — Zulieferer laden ihre Zertifikate selbst hoch. Einmaliger Aufwand, dauerhafter Nutzen.",
  },
  {
    number: 2,
    icon: Bell,
    title: "Automatische Überwachung läuft",
    description:
      "ZulieferCheck prüft täglich alle Ablaufdaten. Sie erhalten automatische Erinnerungen 90, 30 und 7 Tage vor Ablauf. Kein manuelles Tracking mehr.",
  },
  {
    number: 3,
    icon: CheckSquare,
    title: "Beim Audit: Ampel-Übersicht öffnen, fertig",
    description:
      "Alle Zulieferer mit Zertifikatsstatus auf einem Blick — gültig (grün), bald ablaufend (gelb), abgelaufen (rot). Sofort druckbar als Audit-Nachweis gemäß EN 1090-2 Clause 5.6.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4">In 3 Schritten audit-ready</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Einmal einrichten, dauerhaft sicher.
          </p>
        </div>

        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-border" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
