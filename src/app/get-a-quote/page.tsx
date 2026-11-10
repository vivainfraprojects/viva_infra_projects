import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { companyData } from "@/data/company";
import { constructMetadata } from "@/lib/seo";
import { ShieldCheck, Clock, Award, Phone, Mail } from "lucide-react";

export const metadata = constructMetadata({
  title: "Get a Quote | Turnkey CMEP & Industrial Construction Estimate",
  description:
    "Request a detailed technical and financial quotation from Viva Infra Projects (ViP) for industrial civil foundations, PEB steel structures, 1600T machine pits, or turnkey CMEP plant execution.",
  canonical: "https://vivainfraprojects.in/get-a-quote",
});

export default function GetAQuotePage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 bg-brand-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/peb-structural/structural-fabrication.jpg"
            alt="Request a Project Estimate"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "Get a Quote" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Get a Quote
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed">
            Partner with ViP for comprehensive civil foundations, PEB steel superstructures, and turnkey CMEP solutions tailored to your operational specifications.
          </p>
        </Container>
      </section>

      {/* Main Quote Content */}
      <section className="py-14 sm:py-20 bg-brand-light/40">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Form (8 cols) */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Right Information Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Turnaround & SLA */}
              <div className="bg-brand-forest text-white rounded-2xl p-6 sm:p-8 shadow-card">
                <span className="text-xs font-bold text-brand-lime uppercase tracking-widest">
                  FAST RESPONSE SLA
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1 mb-3">
                  24-Hour Review Turnaround
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed font-normal mb-6">
                  Our Chief Technical Officer and senior estimators will review your requirements, analyze layout parameters, and contact you for a discovery discussion.
                </p>

                <div className="space-y-4 pt-4 border-t border-brand-lime/20 text-xs">
                  <div className="flex items-center gap-3 text-brand-sage">
                    <ShieldCheck className="w-5 h-5 text-brand-lime shrink-0" />
                    <span>Concurrent engineering feasibility analysis</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-sage">
                    <Clock className="w-5 h-5 text-brand-lime shrink-0" />
                    <span>Detailed bar-bending & steel tonnage budgeting</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-sage">
                    <Award className="w-5 h-5 text-brand-lime shrink-0" />
                    <span>Single-point turnkey accountability</span>
                  </div>
                </div>
              </div>

              {/* Direct Hotline */}
              <div className="bg-white rounded-xl p-6 border border-brand-border shadow-sm">
                <h4 className="font-heading font-bold text-sm text-brand-charcoal mb-2">
                  Prefer Direct Discussion?
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Call our Sriperumbudur headquarters directly to speak with an engineering lead:
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${companyData.contact.phonePrimary}`}
                    className="flex items-center gap-2.5 text-sm font-bold text-brand-forest hover:underline"
                  >
                    <Phone className="w-4 h-4 text-brand-lime bg-brand-forest p-0.5 rounded" />
                    <span>{companyData.contact.phoneFormatted}</span>
                  </a>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand-forest"
                  >
                    <Mail className="w-4 h-4 text-brand-forest" />
                    <span>{companyData.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

