import { siteConfig } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const posts = getBlogPosts();
  const now = new Date().toISOString();

  const staticPages: SitemapEntry[] = [
    {
      url: siteConfig.url,
      lastmod: now,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/lieferantenmanagement-software`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/funktionen`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/preise`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/metallbau-schlosserei`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/stahlbau`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/iso-9001-lieferantenbewertung`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/zulieferer-portal`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/qm-berater-partner`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/wissen`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/wissen/en-1090-2-clause-5-6`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/wissen/iso-9001-kapitel-8-4`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/wissen/iso-3834`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/wissen/iso-9606-1-schweisser`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/wissen/ce-kennzeichnung-metallbau`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/tools/audit-bereitschafts-check`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/tools/zertifikats-checker`,
      lastmod: now,
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastmod: now,
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/kontakt`,
      lastmod: now,
      changefreq: "yearly",
      priority: 0.5,
    },
  ];

  const blogPages: SitemapEntry[] = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
