export const siteConfig = {
  name: "ZulieferCheck",
  description:
    "Nie wieder abgelaufene Zulieferer-Zertifikate beim EN-1090-Audit. Automatische Erinnerungen, Lieferantenportal und Branchenverzeichnis. Jetzt kostenlos testen.",
  url: "https://lieferantenmanagementsoftware.de",
  ogImage: "/og.png",
  keywords: [
    "Lieferantenmanagement Software Metallbau",
    "Zulieferer Zertifikat Software",
    "Lieferantenbewertung Software KMU",
    "EN 1090 Zulieferer Software",
    "Zertifikatsmanagement Software",
    "Lieferantenmanagement Software ISO 9001",
    "Subunternehmer Verwaltung Software",
    "Lieferantenportal Software",
    "Audit Software Metallbau",
  ],
  author: "ZulieferCheck",
  locale: "de_DE",
  twitterHandle: "@zuliefercheck",
};

export type SiteConfig = typeof siteConfig;

export const COMPANY = {
  name: "Jonas Krüger",
  type: "Einzelunternehmen",
  street: "Meisenweg 13",
  zip: "78465",
  city: "Konstanz",
  country: "Deutschland",
  email: "info@lieferantenmanagementsoftware.de",
  fallbackEmail: "info@jfkconsulting.de",
  ustHinweis:
    "Kleinunternehmer gemäß § 19 UStG — daher wird keine Umsatzsteuer ausgewiesen.",
} as const;
