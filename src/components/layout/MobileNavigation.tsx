"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { companyData } from "@/data/company";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-brand-dark hover:text-brand-yellow hover:bg-brand-yellow-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-border">
          <Logo variant="dark" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-brand-dark hover:bg-brand-light focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div key={item.label} className="py-1">
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-brand-dark">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1",
                        isActive && "text-brand-dark font-bold"
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="p-1 rounded hover:bg-brand-light text-brand-muted"
                      aria-label="Toggle Services submenu"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          servicesExpanded && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  {servicesExpanded && (
                    <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-brand-yellow ml-3 my-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block py-1.5 px-2 rounded text-xs transition-colors",
                            pathname === child.href
                              ? "text-brand-dark font-bold bg-brand-yellow-light"
                              : "text-brand-dark/80 hover:text-brand-yellow"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-yellow-light text-brand-dark font-bold"
                    : "text-brand-dark hover:bg-brand-light hover:text-brand-yellow"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-brand-border space-y-3 bg-brand-light/60">
          <Button
            href="/get-a-quote"
            variant="primary"
            size="md"
            icon
            className="w-full text-brand-dark font-bold"
          >
            Get a Quote
          </Button>

          <div className="pt-2 text-xs text-brand-muted space-y-1.5">
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-yellow"
            >
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{companyData.contact.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-2 text-brand-dark hover:text-brand-yellow"
            >
              <Mail className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
