import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AuditBereitschaftsCheck } from "@/components/tools/AuditBereitschaftsCheck";

export const metadata: Metadata = {
  title: "Audit-Bereitschafts-Check – Kostenloses Online-Tool",
  description:
    "Kostenloser Compliance-Check für EN-1090-zertifizierte Betriebe: 10 Fragen, 3 Minuten, sofortiger Score zu Ihrem Subunternehmer-Management. Jetzt testen.",
  alternates: {
    canonical: `${siteConfig.url}/tools/audit-bereitschafts-check`,
  },
  openGraph: {
    title: "Audit-Bereitschafts-Check – Kostenloses Online-Tool",
    description:
      "10 Fragen, 3 Minuten, sofortiger Score. Wie audit-ready ist Ihr Subunternehmer-Management?",
    url: `${siteConfig.url}/tools/audit-bereitschafts-check`,
  },
};

export default function AuditBereitschaftsCheckPage() {
  return (
    <>
      <WebPageSchema
        title="Subunternehmer Audit-Bereitschafts-Check – Kostenloses Online-Tool"
        description="Kostenloser Compliance-Check: 10 Fragen, 3 Minuten, sofortiger Score."
        url="/tools/audit-bereitschafts-check"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools" },
          {
            label: "Audit-Bereitschafts-Check",
            href: "/tools/audit-bereitschafts-check",
          },
        ]}
      />

      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            {
              label: "Audit-Bereitschafts-Check",
              href: "/tools/audit-bereitschafts-check",
            },
          ]}
        />
      </div>

      <AuditBereitschaftsCheck />
    </>
  );
}
