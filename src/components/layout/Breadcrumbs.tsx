import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import type { BreadcrumbItem } from "@/lib/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {i === items.length - 1 ? (
                <span className="text-foreground">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
