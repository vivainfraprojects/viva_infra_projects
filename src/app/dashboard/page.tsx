"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderGit2,
  Inbox,
  Wrench,
  Image as ImageIcon,
  FileText,
  Users,
  Settings,
  LogOut,
  Search,
  Bell,
  TrendingUp,
  Building,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Filter,
  ChevronDown,
  User,
  ShieldAlert,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarLinks = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Projects", icon: FolderGit2 },
    { label: "Enquiries", icon: Inbox },
    { label: "Services", icon: Wrench },
    { label: "Gallery", icon: ImageIcon },
    { label: "Website Content", icon: FileText },
    { label: "Team Members", icon: Users },
    { label: "Settings", icon: Settings },
  ];

  const statCards = [
    {
      title: "Total Projects",
      value: "24",
      badge: "↑ 12%",
      badgeType: "positive",
      icon: FolderGit2,
      subtext: "All industrial & PEB contracts",
    },
    {
      title: "Ongoing Projects",
      value: "8",
      badge: "Active",
      badgeType: "neutral",
      icon: Building,
      subtext: "On-site execution in progress",
    },
    {
      title: "Completed Projects",
      value: "15",
      badge: "Verified",
      badgeType: "positive",
      icon: CheckCircle2,
      subtext: "Handed over to clients",
    },
    {
      title: "New Enquiries",
      value: "6",
      badge: "This Week",
      badgeType: "highlight",
      icon: Inbox,
      subtext: "RFQs requiring review",
    },
  ];

  const recentEnquiries = [
    {
      name: "Ravi Kumar",
      projectType: "Industrial Building",
      location: "Chennai",
      date: "Oct 20, 2026",
      status: "New",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      name: "Priya Sharma",
      projectType: "Warehouse Facility",
      location: "Sriperumbudur",
      date: "Oct 19, 2026",
      status: "In Progress",
      statusColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      name: "Suresh B",
      projectType: "Commercial Complex",
      location: "Bangalore",
      date: "Oct 18, 2026",
      status: "New",
      statusColor: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      name: "Karthik M",
      projectType: "PEB Structure",
      location: "Hosur",
      date: "Oct 17, 2026",
      status: "Done",
      statusColor: "bg-green-100 text-green-700 border-green-200",
    },
    {
      name: "Anand R",
      projectType: "1600T Machine Pit Foundation",
      location: "Oragadam",
      date: "Oct 15, 2026",
      status: "In Progress",
      statusColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-brand-dark">
      {/* Left Dark Sidebar matching reference screenshot (#181818) */}
      <aside className="w-full md:w-64 bg-brand-dark text-white flex flex-col justify-between shrink-0 border-r border-white/10">
        <div>
          {/* Logo Branding */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Logo variant="light" />
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-brand-yellow text-brand-dark font-bold shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-dark" : "text-gray-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom User & Logout */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow block">
              PORTAL ENVIRONMENT
            </span>
            <p className="text-gray-300 text-[11px] mt-0.5">
              Next-Gen Supabase Ready
            </p>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Return to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header matching reference */}
        <header className="h-16 bg-white border-b border-brand-border px-6 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
          {/* Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, enquiries, drawings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-brand-border bg-brand-light focus:outline-none focus:border-brand-yellow focus:bg-white transition-all text-brand-dark placeholder:text-brand-muted"
            />
          </div>

          {/* User Profile Pill & Notifications */}
          <div className="flex items-center gap-3">
            <button
              className="relative p-2 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-yellow border-2 border-white" />
            </button>

            <div className="flex items-center gap-2.5 pl-3 border-l border-brand-border">
              <div className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark font-heading font-black text-xs flex items-center justify-center shadow-xs">
                A
              </div>
              <div className="hidden sm:block text-left text-xs">
                <span className="font-heading font-bold text-brand-dark block leading-none">
                  Admin
                </span>
                <span className="text-[10px] text-brand-muted font-normal">
                  ViP Projects Ops
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-brand-muted hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Dashboard Main View */}
        <main className="p-6 sm:p-8 space-y-8 flex-1 overflow-y-auto">
          {/* Welcome Title */}
          <div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
              Welcome back! Here&apos;s what&apos;s happening today across ViP project sites.
            </p>
          </div>

          {/* 4 Stat Cards matching reference screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-brand-border shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
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
                    <div className="w-10 h-10 rounded-lg bg-brand-yellow-light text-brand-dark flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-dark" />
                    </div>
                  </div>

                  <p className="text-[11px] text-brand-muted mt-2">
                    {card.subtext}
                  </p>
                </div>
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
                  Monthly client RFP & project consultation volume
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-brand-dark hover:bg-brand-light">
                  <span>This Year</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <Link
                  href="/contact"
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
                  <line x1="0" y1="40" x2="800" y2="40" stroke="#E2E8F0" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="800" y2="90" stroke="#E2E8F0" strokeDasharray="3 3" />
                  <line x1="0" y1="140" x2="800" y2="140" stroke="#E2E8F0" strokeDasharray="3 3" />

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
                  Prospective customer inquiries for industrial projects
                </p>
              </div>

              <Link
                href="/contact"
                className="text-xs font-bold text-brand-yellow hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-brand-light text-brand-muted uppercase text-[10px] font-bold tracking-wider border-b border-brand-border">
                  <tr>
                    <th className="py-3 px-5">Client Name</th>
                    <th className="py-3 px-5">Project Type</th>
                    <th className="py-3 px-5">Location</th>
                    <th className="py-3 px-5">Date Received</th>
                    <th className="py-3 px-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border text-brand-dark">
                  {recentEnquiries.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-light/60 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-brand-dark">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-5 text-brand-muted">
                        {row.projectType}
                      </td>
                      <td className="py-3.5 px-5 text-brand-muted">
                        {row.location}
                      </td>
                      <td className="py-3.5 px-5 text-brand-muted font-mono text-[11px]">
                        {row.date}
                      </td>
                      <td className="py-3.5 px-5">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${row.statusColor}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

