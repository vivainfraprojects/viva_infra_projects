import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Building2,
  Layers,
  Wrench,
  Briefcase,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function AboutSection() {
  const capabilityBadges = [
    {
      title: "Design & Engineering",
      icon: Compass,
      desc: "Concurrent Engineering & 3D Modeling",
    },
    {
      title: "Civil Construction",
      icon: Building2,
      desc: "1600T Machine Pits & Factories",
    },
    {
      title: "PEB & Structural Works",
      icon: Layers,
      desc: "Fabrication, Erection & Sheeting",
    },
    {
      title: "CMEP Solutions",
      icon: Wrench,
      desc: "Process Piping, Power & HVAC",
    },
    {
      title: "Turnkey Management",
      icon: Briefcase,
      desc: "Single-Point EPC Delivery",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Authentic Facility Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] w-full rounded-2xl overflow-hidden border border-brand-border shadow-xl">
              <Image
                src="/images/facilities/modern-factory.jpg"
                alt="ViP Modern Industrial Facility and Turnkey Project Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />

              {/* Inset Branding Badge */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-brand-dark/90 backdrop-blur-md px-3 py-1 rounded text-white text-[11px] sm:text-xs font-heading font-bold uppercase tracking-widest border border-white/20">
                ViP Facility
              </div>

              {/* Bottom Feature Pill matching reference screenshot: Golden Yellow Accent */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-brand-dark/95 backdrop-blur-md rounded-xl p-3 sm:p-4 text-white border border-brand-yellow/30 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs sm:text-sm text-white">
                      Quality Construction
                    </p>
                    <p className="text-[11px] sm:text-xs text-brand-yellow font-medium">
                      for a Stronger Future
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <ArrowRight className="w-4 h-4 text-brand-yellow" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Company Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-light text-brand-dark border border-brand-yellow/40 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span>ABOUT VIVA INFRA PROJECTS</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-tight">
              Trusted Construction Partner for a Better Future
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed">
              <p>
                We <strong className="text-brand-dark font-semibold">Viva Infra Projects (ViP)</strong> is the CMEP company, with office in Chennai region and operating PAN India Projects. ViP services encompass Construction, Engineering, Procurement, and Project Management.
              </p>
              <p>
                To ViP&apos;s credit stand Industrial & Institutional structures and Infrastructure facilities, Mechanical and Electrical Division (M&E), Commercial, Building Products Division, and Project Design Division.
              </p>
              <p>
                ViP&apos;s Specialty projects involving PEB-engineered structures and Shell Structures are remarkable for their innovative and revolutionary application of technology and expertise. ViP has time and again stood true to its Vision and Mission, and looks to the future with undiminished enthusiasm and enterprise.
              </p>
            </div>

            {/* CTA Button in Golden Yellow matching reference */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-heading font-bold text-sm uppercase tracking-wider px-6 py-3.5 min-h-[48px] rounded-md transition-all shadow-md group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 font-bold transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges matching reference screenshot */}
        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-brand-border">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {capabilityBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className={`bg-brand-light hover:bg-brand-yellow-light p-3.5 sm:p-4 rounded-xl border border-brand-border transition-all duration-200 text-center flex flex-col items-center group ${
                    idx === capabilityBadges.length - 1 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-white border border-brand-border text-brand-dark group-hover:text-brand-dark group-hover:bg-brand-yellow transition-colors flex items-center justify-center mb-2.5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-brand-dark">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-brand-muted mt-1 leading-tight">
                    {badge.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
