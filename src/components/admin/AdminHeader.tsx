"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Bell, ChevronDown, ExternalLink, Plus, CheckCircle, ShieldAlert } from "lucide-react";

export function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    {
      title: "New RFQ: Machine Pit Foundation",
      time: "10 mins ago",
      desc: "Sungwoo Hitech India requested technical feasibility review.",
      unread: true,
    },
    {
      title: "Toolbox Meeting Log Submitted",
      time: "2 hours ago",
      desc: "Daily morning safety compliance completed at Sriperumbudur site.",
      unread: true,
    },
    {
      title: "Turnover Update Recorded",
      time: "Yesterday",
      desc: "FY 2025-26 performance logged at ₹7.02 Cr.",
      unread: false,
    },
  ];

  return (
    <header className="h-16 bg-white border-b border-brand-border px-6 flex items-center justify-between gap-4 sticky top-0 z-30 shadow-xs select-none">
      {/* Universal Search Bar */}
      <div className="relative w-full max-w-md hidden sm:block">
        <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search projects, enquiries, drawings, or clients..."
          className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-brand-border bg-brand-light focus:outline-none focus:border-brand-yellow focus:bg-white transition-all text-brand-dark placeholder:text-brand-muted"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Quick Add Project Button */}
        <Link
          href="/admin/projects?action=new"
          className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5 font-bold" />
          <span className="hidden md:inline">New Project</span>
        </Link>

        {/* View Live Site */}
        <Link
          href="/"
          target="_blank"
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border text-xs font-semibold text-brand-dark hover:bg-brand-light transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
          <span>Live Site</span>
        </Link>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-yellow border-2 border-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-brand-border p-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-brand-border mb-2">
                <span className="font-heading font-bold text-xs text-brand-dark">
                  Site Notifications
                </span>
                <span className="text-[10px] text-brand-yellow-hover font-bold cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {notifications.map((n, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg text-xs transition-colors ${
                      n.unread ? "bg-brand-light border border-brand-border" : "hover:bg-brand-light"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-brand-dark">{n.title}</span>
                      <span className="text-[10px] text-brand-muted">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-brand-muted mt-0.5 line-clamp-1">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Admin Profile Pill */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2.5 pl-3 border-l border-brand-border focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-yellow font-heading font-black text-xs flex items-center justify-center shadow-xs border border-brand-yellow/30">
              VS
            </div>
            <div className="hidden sm:block text-left text-xs">
              <span className="font-heading font-bold text-brand-dark block leading-none">
                Vithya Selvam
              </span>
              <span className="text-[10px] text-brand-muted font-normal">
                Proprietor & Admin
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-brand-muted hidden sm:block" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-brand-border p-2 z-50 text-xs">
              <div className="p-2 border-b border-brand-border">
                <p className="font-bold text-brand-dark">Vithya Selvam</p>
                <p className="text-[11px] text-brand-muted">vip1010ce@gmail.com</p>
              </div>
              <Link
                href="/admin/settings"
                className="block p-2 rounded-lg hover:bg-brand-light text-brand-dark font-medium transition-colors"
                onClick={() => setShowUserMenu(false)}
              >
                Account Settings
              </Link>
              <Link
                href="/admin/content"
                className="block p-2 rounded-lg hover:bg-brand-light text-brand-dark font-medium transition-colors"
                onClick={() => setShowUserMenu(false)}
              >
                Website Content
              </Link>
              <div className="border-t border-brand-border my-1" />
              <Link
                href="/"
                className="block p-2 rounded-lg hover:bg-red-50 text-red-600 font-semibold transition-colors"
                onClick={() => setShowUserMenu(false)}
              >
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

