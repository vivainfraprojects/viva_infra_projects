"use client";

import React, { useState } from "react";
import {
  Settings,
  Database,
  ShieldCheck,
  Palette,
  CheckCircle,
  Server,
  Lock,
  RefreshCw,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [supabaseReady] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
          System & Infrastructure Settings
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
          Backend infrastructure status, security controls, and design system configuration.
        </p>
      </div>

      {/* Supabase Integration Readiness Card */}
      <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-brand-dark">
                Supabase & PostgreSQL Schema Architecture
              </h2>
              <p className="text-xs text-brand-muted">
                10 Tables, RLS security policies, and storage buckets prepared
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Architecture Ready</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-brand-light border border-brand-border">
            <span className="text-[10px] font-bold text-brand-muted uppercase block">
              Database Tables
            </span>
            <span className="font-heading font-black text-lg text-brand-dark mt-0.5 block">
              10 Typed Tables
            </span>
            <span className="text-[11px] text-brand-muted">
              Projects, Enquiries, Services, Media...
            </span>
          </div>

          <div className="p-3 rounded-lg bg-brand-light border border-brand-border">
            <span className="text-[10px] font-bold text-brand-muted uppercase block">
              Security Framework
            </span>
            <span className="font-heading font-black text-lg text-brand-dark mt-0.5 block">
              Row-Level Security (RLS)
            </span>
            <span className="text-[11px] text-brand-muted">
              Zero public write access without auth
            </span>
          </div>

          <div className="p-3 rounded-lg bg-brand-light border border-brand-border">
            <span className="text-[10px] font-bold text-brand-muted uppercase block">
              Storage Buckets
            </span>
            <span className="font-heading font-black text-lg text-brand-dark mt-0.5 block">
              2 Buckets Defined
            </span>
            <span className="text-[11px] text-brand-muted">
              projects-media, rfq-drawings
            </span>
          </div>
        </div>

        <p className="text-[11px] text-brand-muted italic">
          * DDL migration script is located at <code className="bg-gray-100 px-1 py-0.5 rounded text-brand-dark font-mono font-semibold">supabase/schema.sql</code> and TypeScript database interfaces at <code className="bg-gray-100 px-1 py-0.5 rounded text-brand-dark font-mono font-semibold">src/types/database.ts</code>.
        </p>
      </div>

      {/* Brand Theme Tokens */}
      <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
          <Palette className="w-4 h-4 text-brand-yellow" />
          <h2 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
            Brand Tokens & Design Palette
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-3 rounded-xl border border-brand-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-yellow shrink-0 border border-black/10 shadow-xs" />
            <div>
              <span className="font-bold text-brand-dark block">Safety Gold</span>
              <span className="font-mono text-[10px] text-brand-muted">#F8C02E</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-brand-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-dark shrink-0 border border-white/10 shadow-xs" />
            <div>
              <span className="font-bold text-brand-dark block">Charcoal</span>
              <span className="font-mono text-[10px] text-brand-muted">#111111</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-brand-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E51A1A] shrink-0 border border-black/10 shadow-xs" />
            <div>
              <span className="font-bold text-brand-dark block">Emblem Red</span>
              <span className="font-mono text-[10px] text-brand-muted">#E51A1A</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-brand-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#009B3A] shrink-0 border border-black/10 shadow-xs" />
            <div>
              <span className="font-bold text-brand-dark block">Emblem Green</span>
              <span className="font-mono text-[10px] text-brand-muted">#009B3A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Access Info */}
      <div className="bg-white p-6 rounded-xl border border-brand-border shadow-xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-brand-border">
          <Lock className="w-4 h-4 text-brand-yellow" />
          <h2 className="font-heading font-bold text-sm text-brand-dark uppercase tracking-wider">
            Portal Access & Governance
          </h2>
        </div>
        <p className="text-xs text-brand-muted leading-relaxed">
          The Admin Portal operates in standalone control center mode. In future deployment stages, access can be gated through Supabase OAuth / email magic links using the existing policies defined in <code className="font-mono font-semibold text-brand-dark">supabase/schema.sql</code>.
        </p>
      </div>
    </div>
  );
}

