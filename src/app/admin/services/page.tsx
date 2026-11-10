"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Wrench, CheckCircle, ExternalLink, Edit2, ShieldAlert } from "lucide-react";
import { servicesData } from "@/data/services";

export default function AdminServicesPage() {
  const [services] = useState(servicesData);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Engineering Divisions & Services
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Active industrial services catalog and engineering division specifications.
          </p>
        </div>

        <Link
          href="/services"
          target="_blank"
          className="inline-flex items-center gap-1.5 bg-white border border-brand-border hover:bg-brand-light text-brand-dark px-4 py-2 rounded-lg text-xs font-semibold transition-colors shadow-xs"
        >
          <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
          <span>View Public Services Page</span>
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-xl border border-brand-border p-5 shadow-xs hover:shadow-card transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 border border-brand-border">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-dark/90 text-white backdrop-blur-xs">
                  Active Division
                </span>
              </div>

              <h2 className="font-heading font-bold text-base text-brand-dark mb-1">
                {svc.title}
              </h2>
              <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                {svc.shortDescription}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-brand-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block">
                Key Capabilities:
              </span>
              <ul className="space-y-1 text-[11px] text-brand-dark">
                {svc.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-brand-yellow shrink-0" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href={`/services/${svc.slug}`}
                  target="_blank"
                  className="text-xs font-bold text-brand-yellow hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
                <span className="text-[10px] font-mono text-brand-muted">
                  ID: {svc.slug}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

