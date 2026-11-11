"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { QuoteFormData } from "@/types/enquiry";
import { CheckCircle2, AlertCircle, FileText, Shield } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "Civil Construction",
    projectLocation: "",
    estimatedBudget: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company or entity name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for verification";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid contact number";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project site location/city is required";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide project description and scope";
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription =
        "Please provide sufficient detail (at least 15 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        projectType: "Civil Construction",
        projectLocation: "",
        estimatedBudget: "",
        projectDescription: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-10 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
          <FileText className="w-6 h-6 text-brand-dark" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-dark">
            Request an Industrial Project Estimate
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted">
            Direct review by ViP Senior Civil, Structural & CMEP Project Directors
          </p>
        </div>
      </div>

      {isSuccess && (
        <div className="mb-8 p-6 rounded-xl bg-amber-50 border border-brand-yellow/50 text-brand-dark flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-brand-yellow shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-bold text-base text-brand-dark">
              Quotation Request Received!
            </h4>
            <p className="mt-1 text-brand-dark/80 leading-relaxed">
              Thank you for sharing your project parameters. A ViP Senior Project Engineer will review the specifications, cross-reference site requirements in the Chennai/PAN-India corridor, and reach out to schedule an initial technical discussion.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-3 text-xs font-bold text-brand-dark underline"
            >
              Submit another project enquiry
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="quote-fullname"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-fullname"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="e.g. S. Ramanathan"
              className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.fullName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
                }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="quote-company"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Company / Organization Name <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-company"
              type="text"
              required
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              placeholder="e.g. Automotive Components Pvt Ltd"
              className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.companyName
                  ? "border-red-400 focus:ring-red-200"
                  : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
                }`}
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.companyName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="quote-email"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Work Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="e.g. ramanathan@autocomp.com"
              className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
                }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="quote-phone"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Direct Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="e.g. +91 91590 50754"
              className={`w-full px-4 py-2.5 min-h-[44px] rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.phone
                  ? "border-red-400 focus:ring-red-200"
                  : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
                }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Project Type & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="quote-type"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Primary Engineering Scope <span className="text-red-500">*</span>
            </label>
            <select
              id="quote-type"
              value={formData.projectType}
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
              className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-brand-border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow-light transition-all"
            >
              <option value="Civil Construction">Civil Construction & Heavy Foundations</option>
              <option value="PEB & Structural">PEB & Heavy Steel Structural Works</option>
              <option value="Turnkey CMEP Solutions">Complete Turnkey CMEP Solutions</option>
              <option value="Mechanical Process Piping">Mechanical Piping, Cooling Towers & Scrubbers</option>
              <option value="Electrical Substations">HT/LT Substations & Power Distribution</option>
              <option value="Epoxy Flooring">Epoxy Flooring & Structural Coatings</option>
              <option value="Architectural Interiors & Facade">Admin Interiors, Glazing & ACP Works</option>
              <option value="Site Infrastructure">Roads, Paver Blocks, Fire Safety & ETP/STP</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quote-location"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
            >
              Project Location / Industrial Zone <span className="text-red-500">*</span>
            </label>
            <input
              id="quote-location"
              type="text"
              required
              value={formData.projectLocation}
              onChange={(e) =>
                setFormData({ ...formData, projectLocation: e.target.value })
              }
              placeholder="e.g. Sriperumbudur / Oragadam / Hosur / Other"
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.projectLocation
                  ? "border-red-400 focus:ring-red-200"
                  : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
                }`}
            />
            {errors.projectLocation && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.projectLocation}</span>
              </p>
            )}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="quote-budget"
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
          >
            Estimated Project Budget Range (Optional)
          </label>
          <select
            id="quote-budget"
            value={formData.estimatedBudget}
            onChange={(e) =>
              setFormData({ ...formData, estimatedBudget: e.target.value })
            }
            className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-brand-border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow-light transition-all"
          >
            <option value="">Select an estimated budget range</option>
            <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
            <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs – ₹1 Crore</option>
            <option value="₹1 Crore - ₹5 Crores">₹1 Crore – ₹5 Crores</option>
            <option value="₹5 Crores - ₹15 Crores">₹5 Crores – ₹15 Crores</option>
            <option value="Above ₹15 Crores">Above ₹15 Crores (Large EPC / Turnkey)</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="quote-description"
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5"
          >
            Project Description, Built-up Area & Scope <span className="text-red-500">*</span>
          </label>
          <textarea
            id="quote-description"
            required
            rows={5}
            value={formData.projectDescription}
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
            placeholder="Please specify built-up area (sq. ft. / sq. m.), machine tonnages, foundation requirements, target completion schedule, or any specific drawings available..."
            className={`w-full px-4 py-2.5 rounded-lg border text-base sm:text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${errors.projectDescription
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
              }`}
          />
          {errors.projectDescription && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectDescription}</span>
            </p>
          )}
        </div>

        {/* Privacy & confidentiality notice */}
        <div className="flex items-center gap-2 text-xs text-brand-muted bg-brand-light p-3 rounded-lg border border-brand-border/60">
          <Shield className="w-4 h-4 text-brand-dark shrink-0" />
          <span>
            Non-Disclosure & Confidentiality: All drawings, technical parameters, and corporate information submitted are held in strict commercial confidence.
          </span>
        </div>

        {/* Golden yellow submit button matching reference */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon
          isLoading={isSubmitting}
          className="w-full py-4 text-base font-bold text-brand-dark bg-brand-yellow hover:bg-brand-yellow-hover"
        >
          Submit Quotation Request
        </Button>
      </form>
    </div>
  );
}
