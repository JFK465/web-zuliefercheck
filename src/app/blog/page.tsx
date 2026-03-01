import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — ZulieferCheck Praxiswissen",
  description:
    "Praxiswissen für QM-Beauftragte: EN 1090-2, ISO 9001 Kapitel 8.4, ISO 3834 und Subunternehmer-Management — fundierte Artikel für Metallbau-Betriebe.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog — ZulieferCheck Praxiswissen",
    description:
      "Praxiswissen für QM-Beauftragte in EN-1090-zertifizierten Betrieben.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <WebPageSchema
        title="Blog — ZulieferCheck Praxiswissen"
        description="Praxiswissen für QM-Beauftragte in EN-1090-zertifizierten Betrieben."
        url="/blog"
      />
      <BreadcrumbSchema items={[{ label: "Blog", href: "/blog" }]} />
      <div className="container-custom py-4">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      </div>

      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-hero mb-4">
            Praxiswissen für QM-Beauftragte und Schweißkoordinatoren
          </h1>
          <p className="text-xl text-muted-foreground">
            EN 1090, ISO 9001, ISO 3834 und Lieferantenmanagement — fundierte
            Artikel ohne Fachchinesisch, mit konkreten Handlungsempfehlungen für
            den Alltag.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">
                Die ersten Artikel erscheinen in Kürze.
              </p>
              <Button asChild>
                <Link href="/lieferantenmanagement-software#beta-anmeldung">
                  Jetzt Beta-Zugang sichern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
