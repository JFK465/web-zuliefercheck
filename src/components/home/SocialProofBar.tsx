import { Shield, Server, CheckCircle, Zap, FileCheck } from "lucide-react";

const items = [
  { icon: Shield, label: "DSGVO-konform" },
  { icon: Server, label: "Server in Deutschland" },
  { icon: CheckCircle, label: "Keine Kreditkarte nötig" },
  { icon: Zap, label: "In 15 Minuten eingerichtet" },
  { icon: FileCheck, label: "EN 1090-2 konforme Dokumentation" },
];

export function SocialProofBar() {
  return (
    <section className="border-y bg-muted/40 py-6">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
