import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all group">
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime} Min.
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Weiterlesen
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
