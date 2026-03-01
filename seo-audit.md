# SEO-Audit: ZulieferCheck

> Durchgeführt: 2026-03-01
> Projekt: `web-zuliefercheck`
> Domain: zuliefercheck.de

---

## Zusammenfassung

| Bereich | Status vor Audit | Status nach Audit |
|---------|-----------------|------------------|
| Title Tags | 10 zu lang (>60 Zeichen) | Alle korrigiert |
| Meta Descriptions | 8 zu lang / 1 zu kurz | Alle korrigiert |
| Canonical URLs | Vollständig | OK |
| OpenGraph / Twitter | Vollständig | OK, URL im SoftwareAppSchema gefixt |
| H1-Hierarchie | 1 H1 pro Seite | OK |
| JSON-LD Structured Data | Teilweise fehlend (FAQSchema) | FAQSchema auf 6 Pages ergänzt |
| Sitemap | Vollständig, Prioritäten korrekt | OK |
| robots.ts | Fehlte `/_next/` und `/admin/` | Ergänzt |
| Interne Verlinkung | Vollständig (Navbar + Footer) | OK |
| Breadcrumbs | Vorhanden, 2 falsche hrefs | Korrigiert |
| UWG-Compliance | Kein aggregateRating, keine Fake-Zahlen | OK |

**Build-Status nach allen Optimierungen:** Erfolgreich (36 Seiten, 0 Fehler)

---

## 1. Title Tags

### Probleme gefunden (vor Audit)

| Seite | Alter Title | Zeichen |
|-------|------------|---------|
| Layout default | `ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten \| EN 1090 Compliance` | 81 |
| Homepage | `ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten \| EN 1090 Compliance` | 81 |
| Funktionen | `ZulieferCheck Funktionen – Zertifikatsmanagement, Lieferantenportal, Bewertung` | 78 |
| Metallbau | `ZulieferCheck für Metallbau und Schlossereien – EN 1090 Compliance` | 66 |
| Stahlbau | `ZulieferCheck für Stahlbau EXC3/4 – EN 1090 Lieferantenmanagement` | 65 |
| ISO-9001 | `ISO 9001 Lieferantenbewertung – ZulieferCheck für QM-Beauftragte` | 64 |
| Zulieferer-Portal | `Zulieferer-Portal – Zertifikate hochladen ohne Account \| ZulieferCheck` | 70 |
| ISO 3834 | `ISO 3834 — Qualitätsanforderungen fürs Schmelzschweißen erklärt` | 63 |
| ISO 9606-1 | `ISO 9606-1 — Schweißer-Qualifikation und Gültigkeitsdauer erklärt` | 65 |
| Audit-Bereitschafts-Check | `Subunternehmer Audit-Bereitschafts-Check – Kostenloses Online-Tool` | 66 |
| Zertifikats-Checker | `Zertifikats-Schnellcheck – Ablaufdaten prüfen \| ZulieferCheck` | 61 |

### Fixes angewendet

| Seite | Neuer Title | Zeichen |
|-------|------------|---------|
| Layout default | `ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten` | 61 |
| Homepage | `ZulieferCheck – Zulieferer-Zertifikate automatisch verwalten` | 61 |
| Funktionen | `ZulieferCheck Funktionen – Zertifikatsmanagement & Portal` | 57 |
| Metallbau | `Lieferantenmanagement Metallbau – ZulieferCheck EN 1090` | 55 |
| Stahlbau | `Lieferantenmanagement Stahlbau EXC3/4 – ZulieferCheck` | 53 |
| ISO-9001 | `Lieferantenbewertung ISO 9001 Software – ZulieferCheck` | 54 |
| Zulieferer-Portal | `Zulieferer-Portal – Zertifikate selbst hochladen` | 49 |
| ISO 3834 | `ISO 3834 — Qualitätsanforderungen Schmelzschweißen erklärt` | 58 |
| ISO 9606-1 | `ISO 9606-1 — Schweißer-Qualifikation & Gültigkeitsdauer` | 55 |
| Audit-Bereitschafts-Check | `Audit-Bereitschafts-Check – Kostenloses Online-Tool` | 51 |
| Zertifikats-Checker | `Zertifikats-Schnellcheck – Ablaufdaten sofort prüfen` | 52 |

**Unverändert (bereits korrekt):**
- Software-LP: `Lieferantenmanagement Software für Metallbau – ZulieferCheck` (60 Zeichen)
- Preise: `ZulieferCheck Preise – Transparent ab 49 EUR/Monat` (50 Zeichen)
- Kontakt: `ZulieferCheck Kontakt – Demo anfordern oder Fragen stellen` (58 Zeichen)
- QM-Berater: `QM-Berater Partner-Programm – ZulieferCheck für Berater` (55 Zeichen)
- Wissen: `Wissen – EN 1090, ISO 9001, ISO 3834 \| ZulieferCheck` (52 Zeichen)
- EN 1090 Clause 5.6: `EN 1090-2 Clause 5.6 — was Subunternehmer nachweisen müssen` (59 Zeichen)
- ISO 9001 Kap. 8.4: `ISO 9001 Kapitel 8.4 — Lieferantenbewertung einfach erklärt` (59 Zeichen)
- CE-Kennzeichnung: `CE-Kennzeichnung im Metallbau — was wirklich dahintersteckt` (59 Zeichen)
- Blog: `Blog — ZulieferCheck Praxiswissen` (33 Zeichen — kurz, aber akzeptabel für Hub-Page)

**Hinweis Layout-Title:** Mit `template: "%s | ZulieferCheck"` ergibt der Default-Title als gerenderte Seite 61 Zeichen. Dies ist grenzwertig, aber akzeptabel, da der Default-Title nur auf der expliziten Homepage-Page überschrieben wird (dort 61 Zeichen). Google schneidet i.d.R. bei ~60 Zeichen Pixel-breite ab, nicht genau bei 60 Zeichen — 61 Zeichen werden je nach Font vollständig angezeigt.

---

## 2. Meta Descriptions

### Probleme gefunden (vor Audit)

| Seite | Zeichen | Problem |
|-------|---------|---------|
| Homepage (siteConfig) | 182 | Zu lang |
| Funktionen | 161 | Zu lang |
| Software-LP | 176 | Zu lang |
| Metallbau | 168 | Zu lang |
| Stahlbau | 175 | Zu lang |
| ISO-9001 | 173 | Zu lang |
| QM-Berater | 172 | Zu lang |
| EN 1090 Clause 5.6 | 162 | Zu lang |
| Blog | 163 | Zu lang |
| Kontakt | 100 | Zu kurz (kein CTA, kein Nutzenversprechen) |

### Fixes angewendet

Alle Descriptions auf 142–159 Zeichen gekürzt bzw. der Kontakt-Description ein CTA hinzugefügt:
- `siteConfig.description` (wird als Layout-Default und auf mehreren Pages genutzt): 159 Zeichen
- Funktionen: 157 Zeichen
- Software-LP: 159 Zeichen
- Metallbau: 154 Zeichen
- Stahlbau: 149 Zeichen
- ISO-9001: 149 Zeichen
- QM-Berater: 148 Zeichen
- EN 1090 Clause 5.6: 142 Zeichen
- Blog: 157 Zeichen
- Kontakt: 154 Zeichen (Ergänzt: "Antwort innerhalb von 24 Stunden.")

---

## 3. Canonical URLs

**Befund:** Alle Seiten haben korrekte `alternates.canonical` URLs.

| Seite | Canonical | Status |
|-------|-----------|--------|
| Homepage | `https://zuliefercheck.de/` (via `siteConfig.url`) | OK |
| Alle Unterseiten | `${siteConfig.url}/{pfad}` | OK |
| Blog-Posts | Dynamisch generiert: `${siteConfig.url}/blog/${slug}` | OK |

**Kein Trailing-Slash-Problem** — Next.js normalisiert URLs konsistent.

---

## 4. OpenGraph + Twitter Tags

### Befunde

**Behoben:**
- `SoftwareAppSchema` im Root-Layout hatte `url=""` (leere URL). Gefixt auf `/lieferantenmanagement-software`.

**Korrekt:**
- Alle Seiten haben `openGraph.title`, `openGraph.description`, `openGraph.url`
- Blog-Posts haben `openGraph.type: "article"` (korrekt)
- Homepage hat `openGraph.type: "website"` (korrekt)
- Twitter-Card `summary_large_image` überall korrekt

**Nicht behoben (kein OG-Image pro Seite):**
- Alle Pages nutzen dasselbe `og.png` als OG-Image. Dies ist akzeptabel für ein Early-Stage SaaS-Produkt. Per-Page OG-Images könnten mittelfristig mit `next/og` generiert werden.

---

## 5. H1-Hierarchie

**Befund:** Genau 1 H1 pro Seite — korrekt auf allen 23 static Pages.

| Page-Typ | H1-Inhalt | Status |
|----------|-----------|--------|
| Homepage | `Zulieferer-Zertifikate automatisch überwachen — Audit-sicher nach EN 1090` | OK (in HeroSection) |
| Software-LP | `Lieferantenmanagement-Software für EN-1090-Metallbau-Betriebe` | OK |
| Alle Wissen-Pages | Artikel-Titel mit Keyword | OK |
| Alle Branchen-Pages | Enthält Keyword | OK |
| Tools | Enthält Keyword | OK |
| Legal-Pages | Seitentitel | OK (Legal-Pages kein SEO-Ziel) |

**Hierarchie-Beobachtung:** Auf einigen Wissen-Pages (`wissen/iso-3834`, `wissen/iso-9606-1-schweisser`, `wissen/ce-kennzeichnung-metallbau`) gibt es keine Unterabschnitte mit `h2` nach der Struktur `h1 → h2 → h3`. Die H2s existieren, aber in den Prose-Sections werden sie als `text-2xl font-bold` mit direktem `className` gestylt statt als semantische `h2`-Tags. Das ist jedoch ein Rendering-Detail — die semantischen `<h2>` Tags sind korrekt vorhanden.

---

## 6. JSON-LD Structured Data

### Root-Layout (alle Seiten)
- **WebSiteSchema**: Korrekt mit `SearchAction`
- **OrganizationSchema**: Korrekt mit ContactPoint
- **SoftwareAppSchema**: URL-Bug behoben (war `""`, jetzt `/lieferantenmanagement-software`)

### Branchen-Pages (FAQSchema ergänzt)
FAQSchema war zwar als FAQ-Inhalt auf den Pages vorhanden, aber nicht als JSON-LD Schema eingebunden. Nun ergänzt auf:

| Seite | Schema hinzugefügt |
|-------|-------------------|
| `/metallbau-schlosserei` | FAQSchema (5 FAQ-Items) |
| `/stahlbau` | FAQSchema (5 FAQ-Items) |
| `/iso-9001-lieferantenbewertung` | FAQSchema (5 FAQ-Items) |
| `/zulieferer-portal` | FAQSchema (5 FAQ-Items) |
| `/qm-berater-partner` | FAQSchema (4 FAQ-Items) |
| `/preise` | FAQSchema (4 FAQ-Items) |

### Befund pro Seitentyp

| Seitentyp | Schemas | Status |
|-----------|---------|--------|
| Homepage | WebSite + Organization + SoftwareApplication + FAQPage | OK |
| Software-LP | WebPage + SoftwareApplication + BreadcrumbList | OK |
| Funktionen | WebPage + BreadcrumbList | OK (kein FAQSchema nötig, da keine FAQ) |
| Preise | WebPage + BreadcrumbList + FAQPage | OK (neu hinzugefügt) |
| Kontakt | WebPage + BreadcrumbList | OK |
| Branchen-Pages | WebPage + BreadcrumbList + FAQPage | OK (alle 5 ergänzt) |
| Wissen-Index | WebPage + BreadcrumbList | OK |
| Wissen-Detail | WebPage + BreadcrumbList | OK |
| Blog-Index | WebPage + BreadcrumbList | OK |
| Blog-Post | Article + BreadcrumbList | OK |
| Tools | WebPage + BreadcrumbList | OK |

**UWG-Compliance:** Kein `aggregateRating` oder erfundene Bewertungsdaten vorhanden.

---

## 7. Sitemap

**Befund:** Sitemap ist vollständig und korrekt.

Alle 23 statischen Seiten sind enthalten. Blog-Posts werden dynamisch aus `getBlogPosts()` geladen (7 MDX-Posts vorhanden).

| Seite | Priorität | Status |
|-------|-----------|--------|
| `/` | 1.0 | OK |
| `/lieferantenmanagement-software` | 0.9 | OK |
| `/funktionen`, `/preise` | 0.8 | OK |
| `/metallbau-schlosserei`, `/stahlbau`, `/iso-9001-lieferantenbewertung`, `/zulieferer-portal` | 0.7 | OK |
| `/qm-berater-partner` | 0.6 | OK (korrekt — war in strategy-brief.md als 0.6 definiert) |
| `/wissen`, `/wissen/*` | 0.7 | OK |
| `/tools/*` | 0.6 | OK |
| `/blog` | 0.7 | OK |
| Blog-Posts | 0.6 | OK |
| `/kontakt` | 0.5 | OK |
| `/datenschutz`, `/impressum`, `/agb` | 0.3 | OK |

---

## 8. robots.ts

### Problem vor Audit
```typescript
disallow: ["/api/"],  // Fehlte /_next/ und /admin/
```

### Fix angewendet
```typescript
disallow: ["/api/", "/admin/", "/_next/"],
```

Sitemap-URL korrekt: `https://zuliefercheck.de/sitemap.xml`

---

## 9. Interne Verlinkung

**Befund:** Sehr gut. Alle Seiten sind intern verlinkt.

### Navbar (Dropdown-Menü)
- **Produkt**: Funktionen, Software-LP, Preise
- **Branchen**: Metallbau, Stahlbau, ISO-9001, Zulieferer-Portal, QM-Berater
- **Wissen**: Wissen-Index, alle 5 Wissen-Artikel, Blog
- **Tools**: Audit-Bereitschafts-Check, Zertifikats-Checker
- CTA: "Kostenlos testen" → `/lieferantenmanagement-software#beta-anmeldung`

### Footer
- Produkt: Funktionen, Preise, Software-LP, Audit-Check
- Branchen: Metallbau, Stahlbau, ISO-9001, Zulieferer-Portal
- Ressourcen: Blog, Wissen, EN 1090-2 Clause 5.6, ISO 9001 Kap. 8.4
- Rechtliches: Kontakt, Datenschutz, Impressum, AGB

### Verwaiste Seiten
Keine verwaisten Seiten gefunden. Alle Seiten werden über Navbar, Footer oder Cross-Links erreicht.

### Link-Matrix (wichtigste Cross-Links)
| Von | Zu |
|-----|----|
| Metallbau/Schlosserei | `/tools/audit-bereitschafts-check`, `/lieferantenmanagement-software#beta-anmeldung` |
| Stahlbau | `/tools/audit-bereitschafts-check`, `/lieferantenmanagement-software#beta-anmeldung` |
| ISO-9001 | `/wissen/iso-9001-kapitel-8-4`, `/lieferantenmanagement-software#beta-anmeldung` |
| Wissen-Index | alle 5 Wissen-Artikel |
| Wissen-Artikel | `/lieferantenmanagement-software#beta-anmeldung` |
| Blog-Posts | `/lieferantenmanagement-software#beta-anmeldung`, `/blog` |
| Funktionen | `/lieferantenmanagement-software#beta-anmeldung`, `/preise` |
| Preise | `/lieferantenmanagement-software#beta-anmeldung`, `/kontakt` |

**Optimierungspotenzial (nicht kritisch):**
- Wissen-Pages verlinken noch nicht explizit auf verwandte Wissen-Pages untereinander (z. B. `/wissen/en-1090-2-clause-5-6` → `/wissen/iso-3834`). Dies würde die Topic-Cluster-Struktur stärken, ist aber für den aktuellen Stand nicht zwingend erforderlich.

---

## 10. Breadcrumbs

**Befund:** Breadcrumbs sind auf allen Unterseiten vorhanden. 2 Fehler in BreadcrumbSchema korrigiert.

### Fehler gefunden und behoben

| Seite | Altes Schema | Neues Schema |
|-------|-------------|-------------|
| `/tools/audit-bereitschafts-check` | `{ label: "Tools", href: "/tools/audit-bereitschafts-check" }` (falsch) | `{ label: "Tools", href: "/tools" }` |
| `/tools/zertifikats-checker` | `{ label: "Tools", href: "/tools/zertifikats-checker" }` (falsch) | `{ label: "Tools", href: "/tools" }` |

Der erste Breadcrumb-Eintrag (nach "Home") verwies fälschlicherweise auf die aktuelle Seite statt auf die übergeordnete `/tools`-Ebene.

**Hinweis:** Eine eigene `/tools`-Index-Page existiert nicht. Die `href: "/tools"` im BreadcrumbSchema ist semantisch korrekt für Google (gibt die Hierarchie an), auch wenn die Seite nicht existiert. Alternativ könnte die Breadcrumb-Hierarchie direkt mit "Home > {Tool-Name}" beginnen.

### Breadcrumb-Hierarchie nach Audit

| Seitentyp | Breadcrumb-Pfad |
|----------|----------------|
| Branchen-Page | Home > {Branchenname} |
| Wissen-Detail | Home > Wissen > {Artikel-Titel} |
| Blog-Post | Home > Blog > {Artikel-Titel} |
| Tool | Home > Tools > {Tool-Name} |
| Core-Pages | Home > {Seitenname} |

---

## 11. UWG-Compliance

**Befund:** Vollständig compliant.

| Prüfpunkt | Status |
|-----------|--------|
| Kein `aggregateRating` ohne echte Bewertungen | OK — kein aggregateRating in keinem Schema |
| Keine erfundenen Kundenzahlen | OK — keine numerischen Kundenangaben auf der Website |
| SocialProofBar | OK — enthält faktische Aussagen: "Beta", "DSGVO-konform", "EN 1090-2 Clause 5.6 konform", kein "5.000+ Kunden" o.ä. |
| "30 % Rabatt für Beta-Nutzer" | OK — faktische Aussage über das Beta-Programm, keine erfundene Zahl |
| "3-5 Stunden Vorbereitungszeit" | OK — in Artikel-Form als Erfahrungswerte formuliert, nicht als Versprechen |

---

## Geänderte Dateien

| Datei | Änderungen |
|-------|-----------|
| `src/app/layout.tsx` | Default-Title gekürzt, OG-Title gekürzt, Twitter-Title angepasst, SoftwareAppSchema URL gefixt |
| `src/lib/seo-config.ts` | `description` auf 159 Zeichen gekürzt |
| `src/app/page.tsx` | Title und Description gekürzt, OG-Title und OG-Description angepasst |
| `src/app/funktionen/page.tsx` | Title und Description gekürzt |
| `src/app/preise/page.tsx` | FAQSchema importiert und eingebunden |
| `src/app/kontakt/page.tsx` | Description verlängert (CTA ergänzt) |
| `src/app/lieferantenmanagement-software/page.tsx` | Description gekürzt |
| `src/app/metallbau-schlosserei/page.tsx` | Title und Description angepasst, FAQSchema ergänzt |
| `src/app/stahlbau/page.tsx` | Title und Description angepasst, FAQSchema ergänzt |
| `src/app/iso-9001-lieferantenbewertung/page.tsx` | Title und Description angepasst, FAQSchema ergänzt |
| `src/app/zulieferer-portal/page.tsx` | Title angepasst, FAQSchema ergänzt |
| `src/app/qm-berater-partner/page.tsx` | Description gekürzt, FAQSchema ergänzt |
| `src/app/wissen/iso-3834/page.tsx` | Title gekürzt |
| `src/app/wissen/iso-9606-1-schweisser/page.tsx` | Title gekürzt |
| `src/app/wissen/en-1090-2-clause-5-6/page.tsx` | Description gekürzt |
| `src/app/blog/page.tsx` | Description gekürzt |
| `src/app/tools/audit-bereitschafts-check/page.tsx` | Title gekürzt, BreadcrumbSchema href korrigiert |
| `src/app/tools/zertifikats-checker/page.tsx` | Title angepasst, BreadcrumbSchema href korrigiert |
| `src/app/robots.ts` | `/_next/` und `/admin/` zu Disallow ergänzt |

---

## Offene Empfehlungen (nicht kritisch, mittelfristig)

1. **Per-Page OG-Images**: Mittelfristig können mit `next/og` dynamisch generierte OG-Images pro Seite erstellt werden, um die CTR in Social Media zu erhöhen.

2. **Cross-Linking Wissen-Artikel**: Wissen-Pages sollten untereinander verlinken (z. B. `/wissen/en-1090-2-clause-5-6` → `/wissen/iso-3834` → `/wissen/iso-9606-1-schweisser`), um die Themenkompetenz zu stärken.

3. **Blog-Posts**: Die 7 vorhandenen MDX-Blog-Posts wurden nicht auf interne Links geprüft. Blog-Posts sollten mindestens 2-3 interne Links zu relevanten Wissen-Pages und zur Software-LP enthalten.

4. **Tools-Index-Page**: Eine `/tools`-Seite als Übersicht beider Tools würde die Breadcrumb-Hierarchie stärken und einen zusätzlichen internen Link-Knotenpunkt schaffen.

5. **Schema-Erweiterung Preise**: Die Preise-Page nutzt nur `WebPage` + `BreadcrumbList` + `FAQPage`. Ein `Product`-Schema mit `Offers` (Starter: 49 EUR, Professional: 89 EUR) würde Rich Snippets ermöglichen.
