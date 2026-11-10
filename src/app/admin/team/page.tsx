"use client";

import React, { useState } from "react";
import { Users, Plus, Mail, Phone, ShieldCheck, HardHat, Award } from "lucide-react";

export default function AdminTeamPage() {
  const [team] = useState([
    {
      id: "TM-01",
      name: "Er. Vithya Selvam",
      role: "Managing Director & Chief Technical Lead",
      division: "Executive & Project Strategy",
      phone: "+91 91590 50754",
      email: "vip1010ce@gmail.com",
      experience: "15+ Years Industrial Construction",
      status: "Active",
    },
    {
      id: "TM-02",
      name: "Er. K. Murugan",
      role: "Senior Civil Infrastructure Director",
      division: "Civil & Heavy Machine Foundations",
      phone: "+91 91590 50754",
      email: "civil@vivainfraprojects.in",
      experience: "12+ Years 1600T Press Pits",
      status: "Active",
    },
    {
      id: "TM-03",
      name: "Er. S. Rajesh",
      role: "Principal PEB & Structural Engineer",
      division: "PEB Design & Steel Fabrication",
      phone: "+91 91590 50754",
      email: "peb@vivainfraprojects.in",
      experience: "10+ Years Structural Erection",
      status: "Active",
    },
    {
      id: "TM-04",
      name: "M. Saravanan",
      role: "Lead MEP & Electrical Engineer",
      division: "11kV Substation & CMEP Works",
      phone: "+91 91590 50754",
      email: "mep@vivainfraprojects.in",
      experience: "8+ Years Substation Projects",
      status: "Active",
    },
    {
      id: "TM-05",
      name: "P. Karthikeyan",
      role: "Chief Health, Safety & Environment (HSE) Officer",
      division: "On-Site Safety & Toolbox Protocols",
      phone: "+91 91590 50754",
      email: "safety@vivainfraprojects.in",
      experience: "9+ Years Zero-Accident Execution",
      status: "Active",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Team Members & Site Leadership
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Engineering team directors, PEB specialists, and on-site HSE coordinators.
          </p>
        </div>

        <button
          onClick={() => alert("Add team member action.")}
          className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4 font-bold" />
          <span>Add Member</span>
        </button>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl border border-brand-border p-5 shadow-xs hover:shadow-card transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow-light text-brand-dark font-black flex items-center justify-center font-heading text-sm border border-brand-yellow/40">
                  {member.name.split(" ")[1]?.charAt(0) || "V"}
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {member.status}
                </span>
              </div>

              <h2 className="font-heading font-bold text-base text-brand-dark">
                {member.name}
              </h2>
              <p className="text-xs font-semibold text-brand-yellow-hover">
                {member.role}
              </p>
              <p className="text-[11px] text-brand-muted mt-0.5">
                {member.division}
              </p>
            </div>

            <div className="pt-3 border-t border-brand-border space-y-1.5 text-xs text-brand-dark">
              <div className="flex items-center gap-2 text-[11px]">
                <HardHat className="w-3.5 h-3.5 text-brand-muted shrink-0" />
                <span>{member.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Phone className="w-3.5 h-3.5 text-brand-muted shrink-0" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-brand-muted shrink-0" />
                <span className="text-brand-muted">{member.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

