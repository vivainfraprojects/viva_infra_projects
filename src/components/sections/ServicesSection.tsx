import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  // Select the 6 primary services matching reference screenshot
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-light/70 border-y border-brand-border/60">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
          <SectionHeading
            tagline="OUR ENGINEERING SPECIALTIES"
            title="Our Services"
            description="Comprehensive construction and engineering solutions for industrial, commercial and institutional infrastructure."
            className="mb-0"
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-forest hover:text-brand-forest-dark bg-white px-5 py-3 rounded-md border border-brand-border shadow-sm hover:shadow transition-all group shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Services Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

