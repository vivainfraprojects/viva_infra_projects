"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const drawerContent = (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile & Tablet Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[86%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-border">
          <Logo variant="dark" size="sm" />
          <button
            onClick={() => setIsOpen(false)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-brand-dark hover:bg-brand-light focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div key={item.label} className="py-0.5">
                  <div className="flex items-center justify-between rounded-lg text-base font-medium text-brand-dark hover:bg-brand-light">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 px-3 py-3 min-h-[44px] flex items-center",
                        isActive && "text-brand-dark font-bold"
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-brand-yellow-light text-brand-muted"
                      aria-label="Toggle Services submenu"
                      aria-expanded={servicesExpanded}
                    >
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          servicesExpanded && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  {servicesExpanded && (
                    <div className="pl-3 pr-1 py-1.5 space-y-1 border-l-2 border-brand-yellow ml-4 my-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block py-2.5 px-3 rounded-md text-sm transition-colors min-h-[40px]",
                            pathname === child.href
                              ? "text-brand-dark font-bold bg-brand-yellow-light"
                              : "text-brand-dark/80 hover:text-brand-dark hover:bg-brand-light"
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
                  "flex items-center px-3 py-3 min-h-[44px] rounded-lg text-base font-medium transition-colors",
                  isActive
                    ? "bg-brand-yellow-light text-brand-dark font-bold"
                    : "text-brand-dark hover:bg-brand-light"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-brand-border space-y-3 bg-brand-light/70">
          <Button
            href="/get-a-quote"
            variant="primary"
            size="md"
            icon
            className="w-full min-h-[48px] text-brand-dark font-bold"
          >
            Get a Quote
          </Button>

          <div className="pt-2 text-xs text-brand-muted space-y-2">
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="flex items-center gap-2.5 py-1.5 text-brand-dark font-semibold hover:text-brand-yellow-hover"
            >
              <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="text-sm">{companyData.contact.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-2.5 py-1.5 text-brand-dark hover:text-brand-yellow-hover"
            >
              <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
              <span className="text-sm break-all">{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-brand-dark hover:text-brand-yellow-hover hover:bg-brand-yellow-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mounted && createPortal(drawerContent, document.body)}
    </div>
  );
}
