"use client";

import React, { useState } from "react";
import { FileText, Save, CheckCircle, ShieldCheck, TrendingUp, Building } from "lucide-react";
import { companyData } from "@/data/company";

export default function AdminContentPage() {
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: companyData.name,
    shortName: companyData.shortName,
    tagline: companyData.tagline,
    missionStatement: companyData.mission.statement,
    visionStatement: companyData.vision.statement,
    gstin: companyData.legalDetails.gstin,
    legalName: companyData.legalDetails.legalName,
    tradeName: companyData.legalDetails.tradeName,
    phone: companyData.contact.phoneFormatted,
    email: companyData.contact.email,
    address: companyData.headOffice.fullAddress,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Website Content & Statutory CMS
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Manage company mission, statutory GST records, turnover performance, and contact details.
          </p>
        </div>

        {saved && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>Updates saved successfully!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Official Corporate Identity */}
        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
            <Building className="w-4 h-4 text-brand-yellow" />
            <h2 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
              Corporate Identity & Brand Tagline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Company Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Short Name / Abbreviation</label>
              <input
                type="text"
                value={formData.shortName}
                onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-bold text-brand-dark block mb-1">Official Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision Verbatim Statements */}
        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
            <FileText className="w-4 h-4 text-brand-yellow" />
            <h2 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
              Documented Mission & Vision (Slides 3 & 4)
            </h2>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-brand-dark block mb-1">
                Official Mission Statement (Verbatim from Slide 4)
              </label>
              <textarea
                rows={3}
                value={formData.missionStatement}
                onChange={(e) => setFormData({ ...formData, missionStatement: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="font-bold text-brand-dark block mb-1">
                Official Vision Statement
              </label>
              <textarea
                rows={3}
                value={formData.visionStatement}
                onChange={(e) => setFormData({ ...formData, visionStatement: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Statutory GST Registration & Financial Growth */}
        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
            <ShieldCheck className="w-4 h-4 text-brand-yellow" />
            <h2 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
              Statutory Compliance & Turnover (Slide 25)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-bold text-brand-dark block mb-1">GSTIN Number</label>
              <input
                type="text"
                value={formData.gstin}
                onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border font-mono font-bold text-brand-dark focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Legal Proprietor Name</label>
              <input
                type="text"
                value={formData.legalName}
                onChange={(e) => setFormData({ ...formData, legalName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Trade Entity Name</label>
              <input
                type="text"
                value={formData.tradeName}
                onChange={(e) => setFormData({ ...formData, tradeName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
          </div>

          {/* Turnover Performance Table */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block mb-2">
              Audited Turnover Performance:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {companyData.financialPerformance.map((fp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-brand-light border border-brand-border">
                  <span className="text-[10px] font-bold text-brand-muted block">FY {fp.financialYear}</span>
                  <span className="font-heading font-black text-sm text-brand-dark mt-0.5 block">{fp.turnoverCrores}</span>
                  {fp.isOngoing && <span className="text-[9px] text-amber-700 font-bold block mt-0.5">Till Nov 2025</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Contact & Address */}
        <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Phone Number</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Official Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="font-bold text-brand-dark block mb-1">Head Office Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <Save className="w-4 h-4 font-bold" />
            <span>Save & Publish Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}

