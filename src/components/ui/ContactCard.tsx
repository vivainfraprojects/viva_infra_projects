import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";

interface ContactCardProps {
  className?: string;
  showMap?: boolean;
}

export function ContactCard({ className = "", showMap = true }: ContactCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-brand-border p-6 sm:p-8 shadow-card ${className}`}
    >
      <h3 className="font-heading font-bold text-xl text-brand-dark mb-6">
        Head Office & Project Enquiries
      </h3>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <MapPin className="w-5 h-5 text-brand-dark" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Office Address
            </h4>
            <p className="mt-1 text-sm font-medium text-brand-dark leading-relaxed">
              {companyData.headOffice.addressLine1},<br />
              {companyData.headOffice.addressLine2},{" "}
              {companyData.headOffice.district},<br />
              {companyData.headOffice.state} – {companyData.headOffice.pincode}
            </p>
            <span className="inline-block mt-1 text-xs text-brand-yellow font-bold">
              Primary Location: {companyData.coverage.primaryRegion}
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
            <Phone className="w-5 h-5 text-brand-dark" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Call Us Directly
            </h4>
            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="mt-1 block text-base font-bold text-brand-dark hover:text-brand-yellow-hover transition-colors"
            >
              {companyData.contact.phoneFormatted}
            </a>
            <p className="text-xs text-brand-muted mt-0.5">
              Available for technical consultations & tenders
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
            <Mail className="w-5 h-5 text-brand-dark" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Official Email
            </h4>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="mt-1 block text-sm font-bold text-brand-dark hover:text-brand-yellow-hover transition-colors"
            >
              {companyData.contact.email}
            </a>
            <p className="text-xs text-brand-muted mt-0.5">
              Send RFQs, drawing sets, and tender documents
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
            <Clock className="w-5 h-5 text-brand-dark" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Operational Hours
            </h4>
            <p className="mt-1 text-sm font-medium text-brand-dark">
              {companyData.contact.workingHours}
            </p>
            <p className="text-xs text-brand-muted mt-0.5">
              PAN India Project Site Execution 24/7 as per schedule
            </p>
          </div>
        </div>
      </div>

      {/* Statutory / Tax Registration from Slide 25 */}
      <div className="mt-6 p-4 rounded-lg bg-brand-light border border-brand-border text-xs">
        <h4 className="font-heading font-bold text-brand-dark mb-1 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-dark" />
          <span>Statutory Registration (Slide 25)</span>
        </h4>
        <div className="space-y-1 text-brand-muted text-[11px] pt-1">
          <p><strong className="text-brand-dark">GSTIN:</strong> {companyData.legalDetails.gstin}</p>
          <p><strong className="text-brand-dark">Legal Entity:</strong> {companyData.legalDetails.tradeName} ({companyData.legalDetails.constitution})</p>
          <p><strong className="text-brand-dark">Governing Act:</strong> {companyData.legalDetails.approvingAuthority}</p>
        </div>
      </div>

      {/* Map visual section */}
      {showMap && (
        <div className="mt-8 pt-6 border-t border-brand-border">
          <div className="relative h-44 w-full rounded-lg overflow-hidden bg-brand-light border border-brand-border flex items-center justify-center text-center p-4">
            <div className="absolute inset-0 bg-brand-yellow-light/60 flex flex-col items-center justify-center p-4">
              <MapPin className="w-8 h-8 text-red-600 mb-2 animate-bounce" />
              <p className="font-heading font-bold text-xs text-brand-dark">
                Sriperumbudur Industrial Corridor
              </p>
              <p className="text-[11px] text-brand-muted mt-0.5">
                Kancheepuram District, Tamil Nadu – 602105
              </p>
              <a
                href="https://maps.google.com/?q=Sriperumbudur,+Tamil+Nadu+602105"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-brand-dark hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
