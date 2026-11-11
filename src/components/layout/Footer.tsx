import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNavigation } from "@/data/navigation";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      {/* Top Banner / Fast Quote Bar */}
      <div className="bg-brand-dark-secondary py-6 border-b border-white/10">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-lg bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-base">
                  Planning an Industrial Facility or Plant Expansion?
                </p>
                <p className="text-xs text-gray-300 leading-normal">
                  Connect directly with our senior engineering team in Sriperumbudur, Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                href="/get-a-quote"
                className="w-full md:w-auto justify-center min-h-[44px] inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all shadow-md group"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Info */}
      <div className="py-12 lg:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Column 1: Company Profile (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Logo variant="light" />
              <p className="text-xs text-gray-300 leading-relaxed font-normal pt-2">
                Viva Infra Projects (ViP) is a premier CMEP infrastructure company with offices in the Chennai industrial region, operating heavy civil, PEB structural, and mechanical/electrical projects PAN India.
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1 text-[11px] text-gray-300">
                <p>
                  <strong className="text-white">GSTIN:</strong> {companyData.legalDetails.gstin} ({companyData.legalDetails.constitution})
                </p>
                <p>
                  <strong className="text-white">Coverage:</strong> {companyData.coverage.operationalCoverage}
                </p>
                <p>
                  <strong className="text-white">Specialty:</strong> 1600T Machine Pits, Heavy PEB, Industrial CMEP Turnkey
                </p>
              </div>
            </div>

            {/* Column 2: Engineering Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-brand-yellow border-b border-white/10 pb-2">
                Engineering Services
              </h4>
              <ul className="space-y-2 text-xs">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-brand-yellow opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Corporate Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-brand-yellow border-b border-white/10 pb-2">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-brand-yellow opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-brand-yellow border-b border-white/10 pb-2">
                Head Office
              </h4>
              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {companyData.headOffice.addressLine1}, {companyData.headOffice.addressLine2}, {companyData.headOffice.district}, {companyData.headOffice.state} – {companyData.headOffice.pincode}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <a
                    href={`tel:${companyData.contact.phonePrimary}`}
                    className="hover:text-brand-yellow transition-colors font-medium"
                  >
                    {companyData.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>{companyData.contact.workingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-t border-white/10 bg-black/40 text-center text-xs text-gray-400">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
            <p>
              © {currentYear} {companyData.name} ({companyData.shortName}). All rights reserved.
            </p>
            <p className="text-gray-400">
              GSTIN: {companyData.legalDetails.gstin} • Chennai Region Office • PAN India Project Execution • Turnkey CMEP Solutions
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
