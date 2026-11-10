import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Eye,
  Target,
  ShieldCheck,
  Clock,
  HardHat,
  Award,
  Users,
  HeartHandshake,
} from "lucide-react";
import { companyData } from "@/data/company";

export function VisionMissionSection() {
  const coreValues = [
    { title: "Highest Integrity", icon: ShieldCheck },
    { title: "Adhere to Time Schedule", icon: Clock },
    { title: "A Safe Work Environment", icon: HardHat },
    { title: "Quality of Our Products & Service", icon: Award },
    { title: "Excellence in Our Team", icon: Users },
    { title: "Customer Satisfaction", icon: HeartHandshake },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-brand-border">
      <Container size="wide">
        <SectionHeading
          tagline="GUIDING PHILOSOPHY"
          title="Vision, Mission & Core Values"
          description="The foundational compass driving Viva Infra Projects across every industrial project site in India."
          align="center"
        />

        {/* Vision & Mission Cards matching reference screenshot: Solid Golden Yellow Icon Circles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Vision */}
          <div className="bg-brand-light rounded-2xl border border-brand-border p-8 text-center flex flex-col items-center hover:shadow-card transition-shadow">
            <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center mb-4 shadow-md">
              <Eye className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="font-heading font-black text-xl text-brand-dark mb-3 uppercase tracking-wider">
              Our Vision
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed font-normal">
              {companyData.vision.statement}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-brand-light rounded-2xl border border-brand-border p-8 text-center flex flex-col items-center hover:shadow-card transition-shadow">
            <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center mb-4 shadow-md">
              <Target className="w-8 h-8 text-brand-dark" />
            </div>
            <h3 className="font-heading font-black text-xl text-brand-dark mb-3 uppercase tracking-wider">
              Our Mission
            </h3>
            <p className="text-sm text-brand-dark/80 leading-relaxed font-normal">
              {companyData.mission.statement}
            </p>
          </div>
        </div>

        {/* Our Core Values Section matching reference screenshot: Dark #181818 with Golden Yellow icons */}
        <div className="bg-brand-dark-secondary rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
              WHAT DEFINES US
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-dark border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:border-brand-yellow/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-dark-secondary text-brand-yellow flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <span className="font-heading font-bold text-xs text-white leading-tight">
                    {val.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
