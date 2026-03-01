"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/seo-config";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
        {dropdown.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const navItems: NavDropdown[] = [
  {
    label: "Produkt",
    items: [
      {
        name: "Alle Funktionen",
        href: "/funktionen",
        description: "Übersicht aller Module",
      },
      {
        name: "Lieferantenmanagement Software",
        href: "/lieferantenmanagement-software",
        description: "Beta-Zugang sichern",
      },
      {
        name: "Preise",
        href: "/preise",
        description: "Starter, Professional, Enterprise",
      },
    ],
  },
  {
    label: "Branchen",
    items: [
      {
        name: "Metallbau & Schlosserei",
        href: "/metallbau-schlosserei",
        description: "EN 1090 Compliance",
      },
      {
        name: "Stahlbau EXC3/EXC4",
        href: "/stahlbau",
        description: "Lückenlose Dokumentation",
      },
      {
        name: "ISO 9001 Lieferantenbewertung",
        href: "/iso-9001-lieferantenbewertung",
        description: "Kapitel 8.4 konform",
      },
      {
        name: "Zulieferer-Portal",
        href: "/zulieferer-portal",
        description: "Branchenverzeichnis & Self-Upload",
      },
      {
        name: "QM-Berater & Partner",
        href: "/qm-berater-partner",
        description: "Partnerprogramm",
      },
    ],
  },
  {
    label: "Wissen",
    items: [
      {
        name: "Wissen & Ratgeber",
        href: "/wissen",
        description: "Alle Normen-Artikel",
      },
      {
        name: "EN 1090-2 Clause 5.6",
        href: "/wissen/en-1090-2-clause-5-6",
        description: "Subunternehmer-Anforderungen",
      },
      {
        name: "ISO 9001 Kapitel 8.4",
        href: "/wissen/iso-9001-kapitel-8-4",
        description: "Lieferantenbewertung",
      },
      {
        name: "ISO 3834 erklärt",
        href: "/wissen/iso-3834",
        description: "Schweißqualitätsmanagement",
      },
      {
        name: "ISO 9606-1 Schweißer",
        href: "/wissen/iso-9606-1-schweisser",
        description: "Gültigkeit & Verlängerung",
      },
      {
        name: "CE-Kennzeichnung Metallbau",
        href: "/wissen/ce-kennzeichnung-metallbau",
        description: "Zulieferer & Compliance",
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Praxiswissen für Metallbau-Betriebe",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        name: "Audit-Bereitschafts-Check",
        href: "/tools/audit-bereitschafts-check",
        description: "10 Fragen, Sofort-Score",
      },
      {
        name: "Zertifikats-Ablauf-Checker",
        href: "/tools/zertifikats-checker",
        description: "Ablaufdatum prüfen",
      },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <CheckSquare className="h-6 w-6" />
          <span>ZulieferCheck</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <DropdownMenu key={item.label} dropdown={item} />
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.appUrl}>Anmelden</a>
          </Button>
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/lieferantenmanagement-software#beta-anmeldung">
              Kostenlos testen
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2 border-t">
              <Button variant="outline" className="w-full" asChild>
                <a href={siteConfig.appUrl}>Anmelden</a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link
                  href="/lieferantenmanagement-software#beta-anmeldung"
                  onClick={() => setMobileOpen(false)}
                >
                  Kostenlos testen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
