"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactFormData } from "@/types/enquiry";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "Civil Construction",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && !/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters)";
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
        name: "",
        email: "",
        phone: "",
        projectType: "Civil Construction",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-xl border border-brand-border p-6 sm:p-8 shadow-card">
      <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs text-brand-muted mb-6">
        Fill out your requirements below and our engineering team will get back to you within 24 business hours.
      </p>

      {isSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-brand-yellow/50 text-brand-dark flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-bold">Message Received Successfully!</p>
            <p className="mt-1 text-brand-dark/80">
              Thank you for contacting Viva Infra Projects. Our technical team has received your enquiry and will connect with you shortly.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-2 text-xs font-bold text-brand-dark underline"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rajesh Kumar"
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1"
            >
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. rajesh@company.com"
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
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
              htmlFor="contact-phone"
              className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone
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

        {/* Project Type */}
        <div>
          <label
            htmlFor="contact-project-type"
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1"
          >
            Project Type
          </label>
          <select
            id="contact-project-type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brand-border text-sm text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow-light transition-all"
          >
            <option value="Civil Construction">Civil Construction & Foundations</option>
            <option value="PEB & Structural">PEB & Structural Steel Works</option>
            <option value="CMEP Turnkey Solutions">Turnkey CMEP Solutions</option>
            <option value="Mechanical Engineering">Mechanical Engineering & Piping</option>
            <option value="Electrical Engineering">Electrical Substation & Panels</option>
            <option value="Epoxy Flooring">Epoxy Flooring & Structural Coatings</option>
            <option value="Interior & Exterior">Interior Fit-out & ACP Glazing</option>
            <option value="Infrastructure & Utilities">Roads, Landscaping & STP/ETP</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your project location, scope, proposed dimensions, or schedule requirements..."
            className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-red-400 focus:ring-red-200"
                : "border-brand-border focus:border-brand-yellow focus:ring-brand-yellow-light"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Send Message Button: Golden Yellow matching reference screenshot */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          icon
          isLoading={isSubmitting}
          className="w-full py-3.5 font-bold text-brand-dark bg-brand-yellow hover:bg-brand-yellow-hover"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
