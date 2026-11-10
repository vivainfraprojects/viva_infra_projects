import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Phone, ArrowRight } from "lucide-react";
import { companyData } from "@/data/company";

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-brand-dark overflow-hidden text-white">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E3330_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-yellow border border-brand-yellow/30 text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
            <span>COMMENCE YOUR PROJECT WITH ViP</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight uppercase">
            LET&apos;S BUILD YOUR <span className="text-brand-yellow">NEXT PROJECT</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Connect with our team for construction, engineering, heavy machine foundations, and turnkey CMEP project requirements across Chennai and India.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 font-bold transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`tel:${companyData.contact.phonePrimary}`}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-medium text-sm px-6 py-4 rounded-md transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-brand-yellow" />
              <span>Call +91 91590 50754</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
