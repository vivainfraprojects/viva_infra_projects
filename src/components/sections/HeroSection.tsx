"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Compass, Building2, Layers, Wrench, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const capabilityStrip = [
    { title: "Design & Engineering", icon: Compass },
    { title: "Civil Construction", icon: Building2 },
    { title: "PEB & Structural Works", icon: Layers },
    { title: "CMEP Solutions", icon: Wrench },
    { title: "Turnkey Project Management", icon: Briefcase },
  ];

  return (
    <div className="relative bg-brand-dark">
      {/* Hero Main */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
        {/* Background Industrial Construction Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facilities/modern-factory.jpg"
            alt="VIVA INFRA PROJECTS Industrial Construction and Steel Superstructures"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 filter brightness-70 contrast-110"
          />
          {/* Dark Architectural Overlay matching reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30" />
        </div>

        <Container size="wide" className="relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow Tagline in Golden Yellow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-brand-yellow/40 text-brand-yellow text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              <span>DESIGN, CIVIL, PEB AND CMEP TURNKEY SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] uppercase">
              BUILDING <br />
              A STRONGER <br />
              <span className="text-brand-yellow">TOMORROW</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl">
              High-quality Construction, Engineering, Procurement and Project Management solutions across India.
            </p>

            {/* Action CTAs matching reference image */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-heading font-bold text-sm sm:text-base uppercase tracking-wider px-7 py-4 rounded-md transition-all shadow-lg hover:shadow-xl group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 font-bold transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-heading font-medium text-sm sm:text-base px-6 py-4 rounded-md transition-all backdrop-blur-sm group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white" />
                </div>
                <span>Explore Our Projects</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 Capability Strip matching reference image: Dark background #111111 with golden icons */}
      <div className="border-t border-white/10 bg-brand-dark-secondary py-5 text-white">
        <Container size="wide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilityStrip.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-xs text-gray-200 uppercase tracking-wider leading-snug">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
