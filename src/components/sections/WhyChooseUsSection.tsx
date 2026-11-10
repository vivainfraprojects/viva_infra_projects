import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShieldAlert,
  Sparkles,
  Cpu,
  Award,
  CheckCircle,
  Users,
  Timer,
  Layers,
  CalendarCheck,
} from "lucide-react";

export function WhyChooseUsSection() {
  const principles = [
    {
      title: "Extra Care for Safety",
      desc: "Daily toolbox meetings, PPE protocols, and zero-accident site policies protecting manpower and equipment.",
      icon: ShieldAlert,
    },
    {
      title: "Clean Working Environment",
      desc: "Orderly, clean industrial sites that optimize operational efficiency and prevent job site hazards.",
      icon: Sparkles,
    },
    {
      title: "Customer Needs Design & Concurrent Engineering",
      desc: "Synchronizing civil, structural, and CMEP designs to eliminate field clashes and rework.",
      icon: Cpu,
    },
    {
      title: "Good Workmanship Professionally",
      desc: "High-grade finishing, precision bar bending, certified structural welding, and flawless concrete pours.",
      icon: Award,
    },
    {
      title: "Good Quality Management System",
      desc: "Multi-tier material testing, cube crush tests, weld radiography, and documented QA audits.",
      icon: CheckCircle,
    },
    {
      title: "Qualified Professionals in Action",
      desc: "Hands-on project leadership by seasoned civil, mechanical, and electrical site directors.",
      icon: Users,
    },
    {
      title: "Close Monitoring of Target Schedule",
      desc: "Micro-tracking milestones to ensure all critical path activities proceed on schedule.",
      icon: Timer,
    },
    {
      title: "Application of Latest Technologies",
      desc: "Modern PEB structural modeling, CNC fabrication, heavy machine pit engineering, and laser screeding.",
      icon: Layers,
    },
    {
      title: "Compliance to Agreed Timeline",
      desc: "Contractual handover commitments met rigorously, enabling timely production plant commissioning.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-light border-t border-brand-border">
      <Container size="wide">
        <SectionHeading
          tagline="OUR DOCUMENTED PRINCIPLES"
          title="Why Choose Viva Infra Projects"
          description="Built on uncompromising engineering integrity, strict schedule adherence, and direct on-site management leadership."
          align="center"
        />

        {/* Slide 7: Stringent Rule for Planning & Design */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-brand-dark text-white border border-brand-yellow/30 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow block mb-1">
                GOVERNING RULE FOR PLANNING & DESIGN (SLIDE 7)
              </span>
              <p className="font-heading font-extrabold text-sm sm:text-base text-white">
                Customer Satisfaction • Quality in Mind • Delivery in Time • Safety is Prime
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-3 py-1 rounded bg-brand-yellow text-brand-dark text-[11px] font-black uppercase tracking-wider">
                ViP Core Motto
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-brand-border hover:border-brand-yellow/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-yellow-light text-brand-dark group-hover:bg-brand-yellow transition-colors flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-dark mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed flex-grow">
                  {principle.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
