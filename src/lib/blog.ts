import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: number;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        author: data.author ?? "",
        tags: data.tags ?? [],
        category: data.category ?? "",
        readTime: calculateReadTime(content),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const posts = getBlogPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return posts.slice(0, limit);

  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      if (p.category === current.category) score += 2;
      score += p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function getCategories(): string[] {
  const posts = getBlogPosts();
  return [...new Set(posts.map((p) => p.category).filter(Boolean))];
}
