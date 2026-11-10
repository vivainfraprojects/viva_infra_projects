import React from "react";
import { Container } from "@/components/ui/Container";
import { Clock, CheckCircle, Compass, HeartHandshake } from "lucide-react";

export function StatisticsSection() {
  const highlights = [
    {
      icon: Clock,
      value: "10+",
      label: "Years of Experience",
      subtext: "Industrial & EPC Expertise",
    },
    {
      icon: CheckCircle,
      value: "200+",
      label: "Projects Completed",
      subtext: "Civil, PEB & CMEP Works",
    },
    {
      icon: Compass,
      value: "Pan India",
      label: "Project Execution",
      subtext: "Chennai HQ & Multistate Ops",
    },
    {
      icon: HeartHandshake,
      value: "100%",
      label: "Client Satisfaction",
      subtext: "High Repeat-Order Trust",
    },
  ];

  return (
    <section className="bg-white text-brand-dark py-8 sm:py-10 border-b border-brand-border relative z-20">
      <Container size="wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 sm:gap-5 border-l-2 border-brand-yellow/60 pl-4 sm:pl-6"
              >
                <div className="w-12 h-12 rounded-full bg-brand-yellow-light border-2 border-brand-yellow text-brand-dark flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-brand-dark tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-heading font-semibold text-xs sm:text-sm text-brand-muted uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-brand-muted/80 hidden sm:block">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
