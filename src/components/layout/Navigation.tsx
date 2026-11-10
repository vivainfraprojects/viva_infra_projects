"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
      {mainNavigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        if (item.children) {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                  isActive
                    ? "text-brand-dark font-bold"
                    : "text-brand-dark hover:text-brand-yellow-hover"
                )}
                aria-expanded={servicesOpen}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </Link>
              {isActive && (
                <span className="block h-0.5 bg-brand-yellow mx-3 -mt-1 rounded-full" />
              )}

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-dropdown border border-brand-border py-3 px-2 z-50 animate-fade-in">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted px-3 py-1 mb-1 border-b border-brand-border/60">
                    Engineering Divisions
                  </div>
                  <div className="space-y-1">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "group block p-2.5 rounded-lg text-xs transition-colors",
                            isChildActive
                              ? "bg-brand-yellow-light text-brand-dark font-bold"
                              : "hover:bg-brand-light text-brand-dark hover:text-brand-yellow-hover"
                          )}
                        >
                          <div className="font-heading font-medium flex items-center justify-between">
                            <span>{child.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-yellow" />
                          </div>
                          {child.description && (
                            <p className="text-[11px] text-brand-muted line-clamp-1 mt-0.5 font-normal">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        }

        return (
          <div key={item.label} className="relative">
            <Link
              href={item.href}
              className={cn(
                "inline-flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                isActive
                  ? "text-brand-dark font-bold"
                  : "text-brand-dark hover:text-brand-yellow-hover"
              )}
            >
              {item.label}
            </Link>
            {isActive && (
              <span className="block h-0.5 bg-brand-yellow mx-3 -mt-1 rounded-full" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
