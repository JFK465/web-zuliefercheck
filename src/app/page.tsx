import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { FAQSchema } from "@/components/seo/StructuredData";
import {
  HeroSection,
  SocialProofBar,
  PainPointsSection,
  HowItWorksSection,
  FeaturesGrid,
  PricingPreview,
  HomepageFAQ,
  SEOContentSection,
  CTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
  description:
    "Nie wieder abgelaufene Zulieferer-Zertifikate beim EN-1090-Audit. Automatische Erinnerungen, Lieferantenportal und Branchenverzeichnis. Jetzt kostenlos testen.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
    description:
      "Automatische Erinnerungen, Lieferantenportal und EN-1090-Branchenverzeichnis für Metallbau-Betriebe.",
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: "ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZulieferCheck – Lieferantenmanagement-Software für EN 1090",
    description:
      "Automatische Zertifikats-Überwachung, Lieferantenportal und Branchenverzeichnis für Metallbau-Betriebe.",
    images: [`${siteConfig.url}/og.png`],
  },
};

const faqItems = [
  {
    question: "Was verlangt EN 1090-2 Clause 5.6 von meinen Zulieferern?",
    answer:
      "EN 1090-2 Clause 5.6 verlangt, dass Sie beim Einsatz von Schweißen-Subunternehmern nachweisen können, dass diese über die notwendigen Qualifikationen verfügen — insbesondere gültige WPK-Zertifizierung, ISO-3834-Nachweis und gültige Schweißer-Qualifikationen (ISO 9606-1).",
  },
  {
    question:
      "Was passiert, wenn beim Audit ein Zulieferer-Zertifikat abgelaufen ist?",
    answer:
      "Ein abgelaufenes Zertifikat eines Schweißen-Subunternehmers stellt Ihre eigene CE-Kennzeichnung formal in Frage. Im schlimmsten Fall führt dies zu einem Audit-Befund, der ein Nachaudit erfordert.",
  },
  {
    question:
      "Eignet sich ZulieferCheck auch für Betriebe mit nur 3-5 Zulieferern?",
    answer:
      "Ja, besonders für kleine Betriebe lohnt sich ZulieferCheck. Der Starter-Plan ist speziell für kleinere Betriebe konzipiert und ab 49 EUR/Monat erhältlich.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Die Grundeinrichtung dauert ca. 15 Minuten. Wenn Sie Zulieferer einladen, ihre Dokumente selbst hochzuladen, reduziert sich Ihr Aufwand weiter auf das Prüfen und Bestätigen.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PricingPreview />
      <HomepageFAQ />
      <SEOContentSection />
      <CTASection />
    </>
  );
}
