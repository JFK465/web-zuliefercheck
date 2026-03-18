import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import {
  ArticleSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <ArticleSchema post={post} url={`/blog/${slug}`} />
      <BreadcrumbSchema
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />
      <div className="container-custom py-4">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />
      </div>
      <article className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium text-xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} Min. Lesezeit
              </span>
              <span>{post.date}</span>
            </div>
            <h1 className="heading-hero mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>
          <div className="prose prose-gray max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground">
            <MDXRemote source={post.content} />
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="font-semibold mb-2 text-base">
              ZulieferCheck — Subunternehmer-Zertifikate automatisch überwachen
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              Automatische Ablauf-Erinnerungen, Zulieferer-Portal für
              Selbst-Upload, Audit-Cockpit mit Ampeldarstellung — EN 1090-2
              Clause 5.6 konform. Während der Beta kostenlos.
            </p>
            <Button asChild>
              <Link href="/lieferantenmanagement-software#beta-anmeldung">
                Kostenlos testen (Beta)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zum Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
