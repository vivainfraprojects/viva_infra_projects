"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Upload,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>("Senior Project Manager (Civil / CMEP)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "3-5 Years",
    position: "Senior Project Manager (Civil / CMEP)",
    portfolioLink: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const samplePositions = [
    {
      id: "pm-civil",
      title: "Senior Project Manager (Civil / CMEP)",
      division: "Civil & Infrastructure",
      location: "Sriperumbudur / Chennai Region",
      type: "Full-Time (Site Execution)",
      experience: "7 - 12 Years",
      description:
        "Lead heavy industrial civil foundations, 1600T machine pits, factory sheds, and manage client milestone reviews across the table.",
      responsibilities: [
        "Execution of industrial foundations, machine pits, and mass concreting",
        "Master schedule tracking and subcontractor management",
        "Direct coordination with client engineering teams and architects",
      ],
    },
    {
      id: "peb-engineer",
      title: "PEB Structural & Erection Site Engineer",
      division: "PEB & Structural Division",
      location: "Tamil Nadu & AP Sites",
      type: "Full-Time",
      experience: "3 - 6 Years",
      description:
        "Supervise structural steel fabrication, Sa 2.5 grit blasting, crane hoisting, purlins, and industrial standing seam roofing.",
      responsibilities: [
        "On-site erection of pre-engineered building components and mezzanines",
        "Weld quality inspection and torque checking for bolted connections",
        "Daily safety toolbox meetings and crane safety clearances",
      ],
    },
    {
      id: "electrical-engineer",
      title: "HT Substation & Electrical Site Engineer",
      division: "Electrical Engineering",
      location: "Chennai Region",
      type: "Full-Time",
      experience: "4 - 8 Years",
      description:
        "Oversee 11kV/33kV HT switchyard installation, transformer commissioning, LT busducts, electrical panels, and CEIG liaising.",
      responsibilities: [
        "Substation transformer testing, filtration, and energization",
        "Laying of multi-core HT/LT cables, trays, and high bay plant lighting",
        "Assisting statutory CEIG inspections and clearance certificates",
      ],
    },
    {
      id: "mechanical-piping",
      title: "Mechanical Process Piping & Utility Engineer",
      division: "Mechanical Division",
      location: "PAN India Sites",
      type: "Full-Time",
      experience: "3 - 7 Years",
      description:
        "Execute compressed air piping loops, cooling tower manifolds, RO/DM water networks, LPG fuel systems, and imported machinery shifting.",
      responsibilities: [
        "Piping isometrics, pressure hydro-testing, and pneumatic line verification",
        "Cooling tower circuit balancing and air washer GI ducting erection",
        "Rigging and alignment of heavy industrial machineries",
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "3-5 Years",
        position: selectedJob,
        portfolioLink: "",
        coverNote: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facilities/modern-factory.jpg"
            alt="Careers at Viva Infra Projects"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "Careers" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Careers at ViP
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed">
            Build your professional engineering career with an established industrial construction and CMEP turnkey organization.
          </p>
        </Container>
      </section>

      {/* Culture & Strengths */}
      <section className="py-14 sm:py-18 bg-brand-light border-b border-brand-border">
        <Container size="wide">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-brand-dark uppercase tracking-widest bg-brand-yellow-light px-3 py-1 rounded-full border border-brand-yellow/30">
              OUR WORK CULTURE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark mt-2">
              Empowering Engineers Through Continuous Professional Growth
            </h2>
            <p className="text-sm text-brand-muted mt-2 leading-relaxed">
              At Viva Infra Projects, continuous training is given to all field staff. Periodical administrative and technical lectures are conducted at our Head Office by eminent industry personalities, ensuring our team commands the highest engineering standards and safety discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-brand-border shadow-sm">
              <GraduationCap className="w-8 h-8 text-brand-yellow mb-3" />
              <h3 className="font-heading font-bold text-sm text-brand-dark">
                Technical Masterclasses
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Regular lectures by veteran civil & structural consultants at Head Office.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-border shadow-sm">
              <ShieldCheck className="w-8 h-8 text-brand-yellow mb-3" />
              <h3 className="font-heading font-bold text-sm text-brand-dark">
                Safety-First Culture
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Mandatory daily toolbox meetings and zero-compromise safety protocols.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-border shadow-sm">
              <Briefcase className="w-8 h-8 text-brand-yellow mb-3" />
              <h3 className="font-heading font-bold text-sm text-brand-dark">
                High-Impact Projects
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Direct hands-on experience on 1600T press pits, substations, and automotive plants.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-brand-border shadow-sm">
              <Users className="w-8 h-8 text-brand-yellow mb-3" />
              <h3 className="font-heading font-bold text-sm text-brand-dark">
                Proactive Leadership
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Close collaboration with senior management solving challenges across the table.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Available Opportunities & Application Form */}
      <section className="py-14 sm:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Open Positions List (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  OPPORTUNITIES
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark mt-1">
                  Available Engineering Openings
                </h2>
                <p className="text-xs text-brand-muted mt-1">
                  Select a role below to auto-fill the application form.
                </p>
              </div>

              <div className="space-y-4">
                {samplePositions.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => {
                      setSelectedJob(job.title);
                      setFormData({ ...formData, position: job.title });
                    }}
                    className={`p-6 rounded-xl border transition-all cursor-pointer ${
                      selectedJob === job.title
                        ? "border-brand-yellow bg-brand-yellow-light/60 shadow-sm"
                        : "border-brand-border bg-white hover:border-brand-yellow/40"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark bg-white px-2.5 py-0.5 rounded border border-brand-border">
                        {job.division}
                      </span>
                      <span className="text-xs text-brand-muted font-medium">
                        Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-brand-dark">
                      {job.title}
                    </h3>

                    <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-brand-border/60 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-brand-dark">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
                        <span>{job.type}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Application Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-brand-border p-5 sm:p-8 shadow-card lg:sticky lg:top-24">
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-1">
                  Apply for a Position
                </h3>
                <p className="text-xs text-brand-muted mb-6">
                  Submit your resume and credentials directly to our HR & Technical Evaluation Team.
                </p>

                {isSuccess && (
                  <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-brand-yellow/50 text-brand-dark flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-bold">Application Submitted!</p>
                      <p className="mt-0.5 text-brand-dark/80">
                        Thank you for your interest in ViP. Our team will review your qualifications and reach out if there is a site match.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-2 font-bold text-brand-dark underline min-h-[36px] inline-flex items-center"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                      Target Role
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.position}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs bg-brand-light text-brand-dark font-semibold cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Venkatesh"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="venkatesh@mail.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                      Total Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                    >
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5-8 Years">5 - 8 Years</option>
                      <option value="8-12 Years">8 - 12 Years</option>
                      <option value="12+ Years">12+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1">
                      Cover Note / Summary
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Mention your relevant site experience, key projects handled, and earliest joining availability..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-brand-border text-base sm:text-xs text-brand-dark bg-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                    />
                  </div>

                  <div className="p-3 border border-dashed border-brand-border rounded-lg bg-brand-light text-center">
                    <Upload className="w-5 h-5 mx-auto text-brand-yellow mb-1" />
                    <p className="text-[11px] font-semibold text-brand-dark">
                      Resume Upload Ready
                    </p>
                    <p className="text-[10px] text-brand-muted">
                      Future Supabase Storage will securely archive your PDF resume.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    className="w-full py-3 font-bold text-brand-dark bg-brand-yellow hover:bg-brand-yellow-hover"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
