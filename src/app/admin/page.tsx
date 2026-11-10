"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  Building,
  CheckCircle2,
  Inbox,
  ChevronDown,
  ArrowUpRight,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [timeRange, setTimeRange] = useState("This Year");

  const statCards = [
    {
      title: "Total Projects",
      value: "24",
      badge: "↑ 12%",
      badgeType: "positive",
      icon: FolderGit2,
      subtext: "All industrial & PEB contracts",
      href: "/admin/projects",
    },
    {
      title: "Ongoing Projects",
      value: "8",
      badge: "Active",
      badgeType: "neutral",
      icon: Building,
      subtext: "On-site execution in progress",
      href: "/admin/projects",
    },
    {
      title: "Completed Projects",
      value: "15",
      badge: "Verified",
      badgeType: "positive",
      icon: CheckCircle2,
      subtext: "Handed over to clients",
      href: "/admin/projects",
    },
    {
      title: "New Enquiries",
      value: "6",
      badge: "This Week",
      badgeType: "highlight",
      icon: Inbox,
      subtext: "RFQs requiring review",
      href: "/admin/enquiries",
    },
  ];

  const recentEnquiries = [
    {
      id: "ENQ-1042",
      name: "Ravi Kumar",
      company: "Sungwoo Hitech India",
      projectType: "Industrial Building",
      location: "Chennai",
      date: "Oct 20, 2026",
      status: "New",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      amount: "Est. ₹ 85 Lakhs",
    },
    {
      id: "ENQ-1041",
      name: "Priya Sharma",
      company: "Daejoo Automotive",
      projectType: "Warehouse Facility",
      location: "Sriperumbudur",
      date: "Oct 19, 2026",
      status: "In Progress",
      statusColor: "bg-amber-50 text-amber-800 border-amber-200",
      amount: "Est. ₹ 1.40 Cr",
    },
    {
      id: "ENQ-1040",
      name: "Suresh B",
      company: "Cubic Modular Systems",
      projectType: "Commercial Complex",
      location: "Bangalore",
      date: "Oct 18, 2026",
      status: "New",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      amount: "Est. ₹ 60 Lakhs",
    },
    {
      id: "ENQ-1039",
      name: "Karthik M",
      company: "Dae Seung Automotive",
      projectType: "PEB Structure",
      location: "Hosur",
      date: "Oct 17, 2026",
      status: "Done",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amount: "Est. ₹ 2.10 Cr",
    },
    {
      id: "ENQ-1038",
      name: "Anand R",
      company: "Seoyon E Hwa Automotive",
      projectType: "1600T Machine Pit Foundation",
      location: "Oragadam",
      date: "Oct 15, 2026",
      status: "In Progress",
      statusColor: "bg-amber-50 text-amber-800 border-amber-200",
      amount: "Est. ₹ 95 Lakhs",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Welcome back! Here&apos;s what&apos;s happening today across ViP project sites.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 font-bold" />
            <span>Add Project</span>
          </Link>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-1.5 bg-white border border-brand-border hover:bg-brand-light text-brand-dark px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-xs"
          >
            <Inbox className="w-3.5 h-3.5 text-brand-muted" />
            <span>View All RFQs</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards matching reference screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className="bg-white p-5 rounded-xl border border-brand-border shadow-xs hover:shadow-card hover:border-brand-yellow/50 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  {card.title}
                </span>
                <span
                  className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                    card.badgeType === "positive"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : card.badgeType === "highlight"
                      ? "bg-brand-yellow-light text-brand-dark border border-brand-yellow/40"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  {card.badge}
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-1">
                <div className="font-heading font-black text-3xl text-brand-dark tracking-tight">
                  {card.value}
                </div>
                <div className="w-10 h-10 rounded-lg bg-brand-yellow-light text-brand-dark flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                  <Icon className="w-5 h-5 text-brand-dark" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/60">
                <span className="text-[11px] text-brand-muted">
                  {card.subtext}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Middle: Enquiries Overview Chart matching reference image */}
      <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-heading font-bold text-base text-brand-dark">
              Enquiries Overview
            </h2>
            <p className="text-xs text-brand-muted">
              Monthly client RFQ and project consultation volume
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-brand-light border border-brand-border rounded-lg p-0.5 text-xs font-semibold">
              {["Monthly", "Quarterly", "Annual"].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimeRange(period)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    timeRange === period
                      ? "bg-white text-brand-dark font-bold shadow-xs"
                      : "text-brand-muted hover:text-brand-dark"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-brand-yellow hover:underline"
            >
              View All
            </Link>
          </div>
        </div>

        {/* SVG Sparkline / Area Chart matching reference */}
        <div className="pt-4 pb-2">
          <div className="relative h-48 w-full">
            <svg
              viewBox="0 0 800 200"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F8C02E" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#F8C02E" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              <line x1="0" y1="40" x2="800" y2="40" stroke="#F1F5F9" strokeDasharray="3 3" />
              <line x1="0" y1="90" x2="800" y2="90" stroke="#F1F5F9" strokeDasharray="3 3" />
              <line x1="0" y1="140" x2="800" y2="140" stroke="#F1F5F9" strokeDasharray="3 3" />

              {/* Area fill */}
              <path
                d="M 0,160 Q 90,140 180,120 T 360,95 T 540,60 T 720,30 L 800,20 L 800,200 L 0,200 Z"
                fill="url(#chartGradient)"
              />

              {/* Chart line */}
              <path
                d="M 0,160 Q 90,140 180,120 T 360,95 T 540,60 T 720,30 L 800,20"
                fill="none"
                stroke="#F8C02E"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Highlight dots */}
              <circle cx="180" cy="120" r="4.5" fill="#181818" stroke="#F8C02E" strokeWidth="2.5" />
              <circle cx="360" cy="95" r="4.5" fill="#181818" stroke="#F8C02E" strokeWidth="2.5" />
              <circle cx="540" cy="60" r="4.5" fill="#181818" stroke="#F8C02E" strokeWidth="2.5" />
              <circle cx="720" cy="30" r="4.5" fill="#181818" stroke="#F8C02E" strokeWidth="2.5" />
              <circle cx="800" cy="20" r="6" fill="#F8C02E" stroke="#181818" strokeWidth="2.5" />
            </svg>

            {/* X Axis Labels */}
            <div className="flex justify-between text-[11px] text-brand-muted font-medium pt-3">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table: Recent Enquiries matching reference image */}
      <div className="bg-white rounded-xl border border-brand-border shadow-xs overflow-hidden">
        <div className="p-5 border-b border-brand-border flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-base text-brand-dark">
              Recent Enquiries
            </h3>
            <p className="text-xs text-brand-muted">
              Prospective customer inquiries for industrial civil and PEB projects
            </p>
          </div>

          <Link
            href="/admin/enquiries"
            className="text-xs font-bold text-brand-yellow hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-brand-light text-brand-muted uppercase text-[10px] font-bold tracking-wider border-b border-brand-border">
              <tr>
                <th className="py-3 px-5">ID</th>
                <th className="py-3 px-5">Client / Company</th>
                <th className="py-3 px-5">Project Type</th>
                <th className="py-3 px-5">Location</th>
                <th className="py-3 px-5">Date Received</th>
                <th className="py-3 px-5">Est. Scope</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-dark">
              {recentEnquiries.map((row) => (
                <tr key={row.id} className="hover:bg-brand-light/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-[11px] text-brand-muted font-semibold">
                    {row.id}
                  </td>
                  <td className="py-3.5 px-5">
                    <p className="font-semibold text-brand-dark">{row.name}</p>
                    <p className="text-[11px] text-brand-muted">{row.company}</p>
                  </td>
                  <td className="py-3.5 px-5 text-brand-dark font-medium">
                    {row.projectType}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted">
                    {row.location}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted font-mono text-[11px]">
                    {row.date}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-brand-dark">
                    {row.amount}
                  </td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${row.statusColor}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <Link
                      href="/admin/enquiries"
                      className="text-xs font-semibold text-brand-yellow hover:underline"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

