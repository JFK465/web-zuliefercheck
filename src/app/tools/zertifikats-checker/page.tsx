import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ZertifikatsChecker } from "@/components/tools/ZertifikatsChecker";

export const metadata: Metadata = {
  title: "Zertifikats-Schnellcheck – Ablaufdaten sofort prüfen",
  description:
    "Kostenloses Tool: Tragen Sie Ihre Subunternehmer-Zertifikate mit Ablaufdaten ein und sehen Sie sofort, welche bald ablaufen oder bereits abgelaufen sind.",
  alternates: {
    canonical: `${siteConfig.url}/tools/zertifikats-checker`,
  },
  openGraph: {
    title: "Zertifikats-Schnellcheck – Ablaufdaten sofort prüfen",
    description:
      "Kostenloses Online-Tool: Welche Subunternehmer-Zertifikate laufen bald ab?",
    url: `${siteConfig.url}/tools/zertifikats-checker`,
  },
};

export default function ZertifikatsCheckerPage() {
  return (
    <>
      <WebPageSchema
        title="Zertifikats-Schnellcheck – Ablaufdaten prüfen"
        description="Kostenloses Tool zum Prüfen von Ablaufdaten bei Subunternehmer-Zertifikaten."
        url="/tools/zertifikats-checker"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools" },
          {
            label: "Zertifikats-Schnellcheck",
            href: "/tools/zertifikats-checker",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Zertifikats-Schnellcheck",
              href: "/tools/zertifikats-checker",
            },
          ]}
        />
      </div>

      <ZertifikatsChecker />
    </>
  );
}
