"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  Building2,
  Wrench,
  Layers,
  ArrowRight,
  ShieldCheck,
  FileText,
  Phone,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = servicesData.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase()) ||
    (p.client && p.client.toLowerCase().includes(query.toLowerCase()))
  );

  const staticPages = [
    { title: "About Us & Vision/Mission", href: "/about", category: "Company" },
    { title: "Statutory Compliance & GSTIN (33CKPPV6042Q1Z8)", href: "/about#financial-performance", category: "Statutory" },
    { title: "Get a Turnkey Project Quote", href: "/get-a-quote", category: "Action" },
    { title: "Contact Head Office (Sriperumbudur)", href: "/contact", category: "Contact" },
    { title: "Careers & Engineering Openings", href: "/careers", category: "Company" },
    { title: "Admin Portal Control Center", href: "/admin", category: "Portal" },
  ].filter((page) => page.title.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-brand-border overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-brand-border p-4 flex items-center gap-3 bg-brand-light">
          <Search className="w-5 h-5 text-brand-muted shrink-0" />
          <input
            type="text"
            placeholder="Search engineering services, industrial projects, GST details..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-medium text-brand-dark focus:outline-none placeholder:text-brand-muted"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-brand-muted hover:text-brand-dark px-1.5 py-0.5 rounded bg-gray-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 divide-y divide-brand-border/60">
          {/* Quick Actions / Core Pages */}
          {staticPages.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted px-2 block">
                Pages & Core Information
              </span>
              {staticPages.map((page) => (
                <button
                  key={page.href}
                  onClick={() => handleSelect(page.href)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-brand-light flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-brand-yellow-light text-brand-dark flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-brand-dark group-hover:text-brand-yellow-hover">
                      {page.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-dark group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          )}

          {/* Services */}
          {filteredServices.length > 0 && (
            <div className="pt-3 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted px-2 block">
                Engineering Services ({filteredServices.length})
              </span>
              {filteredServices.slice(0, 4).map((svc) => (
                <button
                  key={svc.slug}
                  onClick={() => handleSelect(`/services/${svc.slug}`)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-brand-light flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-brand-yellow-light text-brand-dark flex items-center justify-center shrink-0">
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-dark group-hover:text-brand-yellow-hover block">
                        {svc.title}
                      </span>
                      <span className="text-[11px] text-brand-muted line-clamp-1">
                        {svc.shortDescription}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-dark group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="pt-3 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted px-2 block">
                Verified Projects ({filteredProjects.length})
              </span>
              {filteredProjects.slice(0, 5).map((p) => (
                <button
                  key={p.slug}
                  onClick={() => handleSelect(`/projects/${p.slug}`)}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-brand-light flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-brand-dark text-brand-yellow flex items-center justify-center shrink-0">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-dark group-hover:text-brand-yellow-hover block">
                        {p.title}
                      </span>
                      <span className="text-[11px] text-brand-muted">
                        {p.category} • {p.location}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-dark group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {filteredServices.length === 0 &&
            filteredProjects.length === 0 &&
            staticPages.length === 0 && (
              <div className="py-8 text-center text-xs text-brand-muted">
                No matching services or projects found for &quot;{query}&quot;. Try searching for &quot;Civil&quot;, &quot;PEB&quot;, &quot;Machine Pit&quot;, or &quot;Turnover&quot;.
              </div>
            )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="p-3 bg-brand-light border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-brand-border font-mono text-[10px]">Esc</kbd> to exit</span>
          <span className="font-semibold text-brand-dark">VIVA INFRA PROJECTS</span>
        </div>
      </div>
    </div>
  );
}
