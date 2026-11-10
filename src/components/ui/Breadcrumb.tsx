import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  theme?: "light" | "dark";
}

export function Breadcrumb({
  items,
  className = "",
  theme = "light",
}: BreadcrumbProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-medium ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              isDark
                ? "text-gray-300 hover:text-brand-lime"
                : "text-brand-muted hover:text-brand-forest"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className={`w-3 h-3 ${
                  isDark ? "text-gray-400" : "text-brand-muted/60"
                }`}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? "text-gray-300 hover:text-brand-lime"
                      : "text-brand-muted hover:text-brand-forest"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-semibold ${
                    isDark ? "text-brand-lime" : "text-brand-forest"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

