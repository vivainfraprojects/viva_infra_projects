import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Engineering Services Catalogue | Civil, PEB & CMEP Solutions",
  description:
    "Comprehensive engineering and construction services by Viva Infra Projects: Civil foundations, 1600T press pits, PEB steel structures, mechanical process piping, electrical substations, epoxy flooring and turnkey project management.",
  canonical: "https://vivainfraprojects.in/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Hero matching reference screenshot */}
      <section className="relative py-16 sm:py-20 bg-brand-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/peb-structural/structural-erection.jpg"
            alt="Viva Infra Projects Engineering Services"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "Services" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Our Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal">
            Comprehensive construction and engineering solutions for industrial, commercial and institutional infrastructure.
          </p>
        </Container>
      </section>

      {/* Services Grid matching reference screenshot */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-light/40">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-forest uppercase tracking-widest bg-brand-sage-light px-3 py-1 rounded-full border border-brand-sage">
              MULTIDISCIPLINARY CAPABILITIES
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-charcoal mt-2">
              Integrated CMEP & Civil Engineering Services
            </h2>
            <p className="text-sm text-brand-muted mt-2">
              Explore our core engineering divisions executed under stringent quality management and scheduled timeline compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

