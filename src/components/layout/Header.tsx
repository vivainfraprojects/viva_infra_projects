"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { SearchModal } from "@/components/ui/SearchModal";
import { Phone, Search } from "lucide-react";
import { companyData } from "@/data/company";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md",
        isScrolled
          ? "border-b border-brand-border/80 shadow-sm py-2.5"
          : "border-b border-brand-border/40 py-3.5"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Navigation />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Search Icon matching reference - available on Mobile, Tablet & Desktop */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex min-w-[44px] min-h-[44px] items-center justify-center rounded-lg text-brand-dark hover:text-brand-yellow-hover hover:bg-brand-yellow-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              aria-label="Search"
              title="Quick Search (Ctrl+K)"
            >
              <Search className="w-5 h-5 sm:w-4 sm:h-4" />
            </button>

            {/* Direct Phone link on desktop */}
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-brand-dark hover:text-brand-yellow-hover transition-colors py-2 px-3 rounded-md bg-brand-light border border-brand-border/60"
            >
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{companyData.contact.phoneFormatted}</span>
            </a>

            {/* Get a Quote Button matching reference image: Golden Yellow background with dark text */}
            <Link
              href="/get-a-quote"
              className="hidden sm:inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-heading font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all shadow-sm"
            >
              Get a Quote
            </Link>

            {/* Mobile Navigation Toggle */}
            <MobileNavigation />
          </div>
        </div>
      </Container>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
