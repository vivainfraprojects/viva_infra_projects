"use client";

import React, { useState } from "react";
import {
  Inbox,
  Search,
  Filter,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  X,
  Building,
} from "lucide-react";

interface EnquiryRecord {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceCategory: string;
  location: string;
  estimatedArea: string;
  timeline: string;
  date: string;
  status: "New" | "In Progress" | "Quoted" | "Closed";
  scopeDescription: string;
}

export default function AdminEnquiriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);

  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([
    {
      id: "RFQ-2026-001",
      name: "Ravi Kumar",
      company: "Sungwoo Hitech India Ltd.",
      email: "r.kumar@sungwoohitech.co.in",
      phone: "+91 98401 23456",
      serviceCategory: "Industrial Building & Heavy Civil",
      location: "Sriperumbudur, Tamil Nadu",
      estimatedArea: "45,000 sq.ft.",
      timeline: "6 Months",
      date: "Oct 20, 2026",
      status: "New",
      scopeDescription:
        "Extension of existing stamping press shop including machine foundations, trench ducting, and structural PEB framing for 20-ton crane rails.",
    },
    {
      id: "RFQ-2026-002",
      name: "Priya Sharma",
      company: "Daejoo Automotive India",
      email: "priya.sharma@daejoo.in",
      phone: "+91 94440 98765",
      serviceCategory: "PEB & Structural Works",
      location: "Oragadam Industrial Corridor, Chennai",
      estimatedArea: "32,000 sq.ft.",
      timeline: "4 Months",
      date: "Oct 19, 2026",
      status: "In Progress",
      scopeDescription:
        "Design, structural fabrication, blasting Sa 2.5, PU coating, and erection of logistics warehouse canopy with motorized rolling shutters.",
    },
    {
      id: "RFQ-2026-003",
      name: "Suresh B",
      company: "Cubic Modular Systems",
      email: "suresh.b@cubicmodular.com",
      phone: "+91 98840 55443",
      serviceCategory: "Interior Glazing & Office Civil",
      location: "Bangalore / Hosur Road",
      estimatedArea: "15,000 sq.ft.",
      timeline: "3 Months",
      date: "Oct 18, 2026",
      status: "New",
      scopeDescription:
        "Corporate admin block interiors, modular aluminum partitions, ACP exterior cladding, and HVAC duct integration.",
    },
    {
      id: "RFQ-2026-004",
      name: "Karthik M",
      company: "Dae Seung Automotive India",
      email: "karthik.m@daeseung.in",
      phone: "+91 97910 11223",
      serviceCategory: "Civil Construction & Machine Pits",
      location: "Hosur, Tamil Nadu",
      estimatedArea: "22,000 sq.ft.",
      timeline: "5 Months",
      date: "Oct 17, 2026",
      status: "Quoted",
      scopeDescription:
        "1600 Ton press pit foundation with reinforced M35 grade concrete, vibration damping pads, and sump drainage network.",
    },
    {
      id: "RFQ-2026-005",
      name: "Anand R",
      company: "Seoyon E Hwa Automotive India",
      email: "anand.r@seoyonehwa.in",
      phone: "+91 99400 88990",
      serviceCategory: "Turnkey CMEP Infrastructure",
      location: "Vallam Vadagal, Sriperumbudur",
      estimatedArea: "55,000 sq.ft.",
      timeline: "8 Months",
      date: "Oct 15, 2026",
      status: "In Progress",
      scopeDescription:
        "Complete CMEP solution including civil superstructure, 11kV transformer substation, heavy fire hydrant network, and epoxy flooring.",
    },
    {
      id: "RFQ-2026-006",
      name: "Venkatesh S",
      company: "Poshyundai Steel Mfg Co Ltd",
      email: "venkatesh@poshyundai.co.in",
      phone: "+91 94450 33445",
      serviceCategory: "Industrial Flooring & Coating",
      location: "Chennai Region, Tamil Nadu",
      estimatedArea: "30,000 sq.ft.",
      timeline: "2 Months",
      date: "Oct 12, 2026",
      status: "Closed",
      scopeDescription:
        "High-build solvent-free 3mm self-leveling epoxy screed flooring across coil storage bay and heavy dispatch area.",
    },
  ]);

  const updateStatus = (id: string, newStatus: EnquiryRecord["status"]) => {
    setEnquiries(
      enquiries.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: EnquiryRecord["status"]) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "In Progress":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Quoted":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Closed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Client Enquiries & RFQ Inbox
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Incoming quotations and project requests submitted via public forms.
          </p>
        </div>

        <button
          onClick={() => alert("Enquiry CSV export generated successfully.")}
          className="inline-flex items-center gap-1.5 bg-white border border-brand-border hover:bg-brand-light text-brand-dark px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-brand-muted" />
          <span>Export to CSV</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-border shadow-xs flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by client, company, RFQ ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full min-h-[42px] pl-9 pr-4 py-2 text-base sm:text-xs rounded-lg border border-brand-border bg-brand-light focus:outline-none focus:border-brand-yellow focus:bg-white text-brand-dark"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 md:flex-wrap no-scrollbar">
          {["All", "New", "In Progress", "Quoted", "Closed"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 whitespace-nowrap ${
                statusFilter === st
                  ? "bg-brand-dark text-brand-yellow font-bold"
                  : "bg-brand-light text-brand-muted hover:text-brand-dark hover:bg-gray-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-white rounded-xl border border-brand-border shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[840px] text-left text-xs">
            <thead className="bg-brand-light text-brand-muted uppercase text-[10px] font-bold tracking-wider border-b border-brand-border whitespace-nowrap">
              <tr>
                <th className="py-3 px-5">RFQ ID</th>
                <th className="py-3 px-5">Client / Company</th>
                <th className="py-3 px-5">Service Category</th>
                <th className="py-3 px-5">Location</th>
                <th className="py-3 px-5">Est. Area</th>
                <th className="py-3 px-5">Date</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-dark">
              {filteredEnquiries.map((row) => (
                <tr key={row.id} className="hover:bg-brand-light/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-[11px] font-bold text-brand-dark">
                    {row.id}
                  </td>
                  <td className="py-3.5 px-5">
                    <p className="font-semibold text-brand-dark">{row.name}</p>
                    <p className="text-[11px] text-brand-muted">{row.company}</p>
                  </td>
                  <td className="py-3.5 px-5 font-medium text-brand-dark">
                    {row.serviceCategory}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted">
                    {row.location}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted font-mono text-[11px]">
                    {row.estimatedArea}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted font-mono text-[11px]">
                    {row.date}
                  </td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => setSelectedEnquiry(row)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark bg-brand-yellow-light hover:bg-brand-yellow px-2.5 py-1 rounded transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-brand-dark" />
                      <span>Review</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Enquiry Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[60] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border border-brand-border relative animate-fade-in space-y-4 my-auto">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute top-3.5 right-3.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-colors"
              aria-label="Close enquiry modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow bg-brand-dark px-2.5 py-0.5 rounded">
                {selectedEnquiry.id}
              </span>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl text-brand-dark mt-2">
                {selectedEnquiry.serviceCategory}
              </h2>
              <p className="text-xs text-brand-muted">
                Submitted by {selectedEnquiry.name} • {selectedEnquiry.company}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-brand-light border border-brand-border text-xs">
              <div>
                <span className="text-brand-muted block text-[10px] font-bold uppercase">
                  Phone Number
                </span>
                <span className="font-semibold text-brand-dark">
                  {selectedEnquiry.phone}
                </span>
              </div>
              <div>
                <span className="text-brand-muted block text-[10px] font-bold uppercase">
                  Email Address
                </span>
                <span className="font-semibold text-brand-dark break-all">
                  {selectedEnquiry.email}
                </span>
              </div>
              <div>
                <span className="text-brand-muted block text-[10px] font-bold uppercase">
                  Project Location
                </span>
                <span className="font-semibold text-brand-dark">
                  {selectedEnquiry.location}
                </span>
              </div>
              <div>
                <span className="text-brand-muted block text-[10px] font-bold uppercase">
                  Estimated Area / Timeline
                </span>
                <span className="font-semibold text-brand-dark">
                  {selectedEnquiry.estimatedArea} • {selectedEnquiry.timeline}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xs text-brand-dark uppercase tracking-wider mb-1">
                Project Scope & Requirements:
              </h3>
              <p className="p-3 rounded-lg bg-gray-50 border border-brand-border text-xs text-brand-dark leading-relaxed">
                {selectedEnquiry.scopeDescription}
              </p>
            </div>

            {/* Status Workflow Action */}
            <div className="pt-3 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-brand-dark">Update Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) =>
                    updateStatus(selectedEnquiry.id, e.target.value as EnquiryRecord["status"])
                  }
                  className="min-h-[40px] px-3 py-1.5 rounded-md border border-brand-border bg-white text-base sm:text-xs font-semibold focus:outline-none"
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Quoted">Quoted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="min-h-[40px] flex-1 sm:flex-none justify-center px-3 py-1.5 rounded-lg bg-brand-light hover:bg-brand-yellow-light text-brand-dark font-semibold text-xs transition-colors flex items-center gap-1.5 border border-brand-border"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Client</span>
                </a>
                <a
                  href={`mailto:${selectedEnquiry.email}?subject=Viva Infra Projects - Regarding your RFQ ${selectedEnquiry.id}`}
                  className="px-3 py-1.5 rounded-lg bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

