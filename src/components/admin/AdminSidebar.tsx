"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Projects", href: "/admin/projects", icon: FolderGit2 },
    { label: "Enquiries", href: "/admin/enquiries", icon: Inbox },
    { label: "Services", href: "/admin/services", icon: Wrench },
    { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { label: "Website Content", href: "/admin/content", icon: FileText },
    { label: "Team Members", href: "/admin/team", icon: Users },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-full lg:w-64 bg-brand-dark text-white flex flex-col justify-between shrink-0 border-r border-white/10 select-none">
      <div>
        {/* Top Brand Logo matching official ViP emblem */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="relative h-10 w-24 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/logos/vip-logo.png"
                alt="ViP Official Logo"
                fill
                priority
                sizes="96px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col border-l border-white/20 pl-2">
              <span className="font-heading font-black text-xs text-white tracking-wider uppercase leading-none">
                ViP ADMIN
              </span>
              <span className="text-[9px] font-bold text-brand-yellow uppercase tracking-widest mt-1">
                Control Center
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 px-3 py-1 mb-1">
            MANAGEMENT
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-brand-yellow text-brand-dark font-bold shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? "text-brand-dark" : "text-gray-400"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Environment Status & Public Link */}
      <div className="p-4 border-t border-white/10 space-y-2.5">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
          <div className="flex items-center gap-1.5 text-brand-yellow font-bold text-[10px] uppercase tracking-wider mb-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statutory GST: 33CKPPV6042Q1Z8</span>
          </div>
          <p className="text-gray-300 text-[11px] font-normal">
            Turnover FY 25–26: ₹ 7.02 Cr
          </p>
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-white/10"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Open Public Website</span>
          </span>
          <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">
            Live
          </span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded-lg transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit Admin Portal</span>
        </Link>
      </div>
    </aside>
  );
}

