<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <xsl:variable name="firstUrl" select="sitemap:urlset/sitemap:url[1]/sitemap:loc"/>
    <xsl:variable name="afterProtocol" select="substring-after($firstUrl, '://')"/>
    <html lang="de">
      <head>
        <title>XML-Sitemap</title>
        <meta name="robots" content="noindex,nofollow"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; color: #1e293b; padding: 2rem; }
          .container { max-width: 1000px; margin: 0 auto; }
          h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; color: #0f172a; }
          .meta { color: #64748b; font-size: 0.875rem; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
          th { background: #0f172a; color: #f8fafc; text-align: left; padding: 0.75rem 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
          td { padding: 0.6rem 1rem; border-bottom: 1px solid #e2e8f0; font-size: 0.85rem; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f1f5f9; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .priority { font-variant-numeric: tabular-nums; }
          .badge { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 600; }
          .badge-high { background: #dcfce7; color: #166534; }
          .badge-mid  { background: #dbeafe; color: #1e40af; }
          .badge-low  { background: #f1f5f9; color: #475569; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML-Sitemap</h1>
          <p class="meta">
            <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs &#8212; <xsl:choose><xsl:when test="contains($afterProtocol, '/')"><xsl:value-of select="substring-before($afterProtocol, '/')"/></xsl:when><xsl:otherwise><xsl:value-of select="$afterProtocol"/></xsl:otherwise></xsl:choose>
          </p>
          <table>
            <thead><tr><th>#</th><th>URL</th><th>Prioritaet</th><th>Aenderungsfreq.</th><th>Letzte Aenderung</th></tr></thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><xsl:value-of select="position()"/></td>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td class="priority">
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.8"><span class="badge badge-high"><xsl:value-of select="sitemap:priority"/></span></xsl:when>
                      <xsl:when test="sitemap:priority &gt;= 0.6"><span class="badge badge-mid"><xsl:value-of select="sitemap:priority"/></span></xsl:when>
                      <xsl:otherwise><span class="badge badge-low"><xsl:value-of select="sitemap:priority"/></span></xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
