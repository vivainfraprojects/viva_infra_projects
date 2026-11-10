import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Layers } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return constructMetadata({ title: "Service Not Found" });
  }

  return constructMetadata({
    title: `${service.title} | Engineering Services`,
    description: service.shortDescription,
    image: service.image,
    canonical: `https://vivainfraprojects.in/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Detail Page Hero: Dark background matching reference */}
      <section className="relative py-16 sm:py-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {service.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 sm:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Comprehensive Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-brand-border shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Full Description */}
              <div>
                <h2 className="font-heading font-extrabold text-2xl text-brand-dark mb-4">
                  Overview & Engineering Approach
                </h2>
                <p className="text-base text-brand-muted leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">
                  Key Scope & Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-lg bg-brand-light border border-brand-border/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-brand-dark font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Capabilities */}
              <div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">
                  Technical Capabilities
                </h3>
                <ul className="space-y-2.5">
                  {service.capabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-brand-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 shrink-0" />
                      <span className="leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4-Step Execution Workflow with Golden Yellow Badges */}
              {service.workflowSteps && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-brand-dark mb-6">
                    Structured Execution Process
                  </h3>
                  <div className="space-y-4">
                    {service.workflowSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl border border-brand-border bg-white shadow-sm"
                      >
                        <div className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark font-heading font-bold text-xs flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-brand-dark">
                            {step.title}
                          </h4>
                          <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar Actions & Inquiries (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Request Estimate Card: Dark #111111 with Golden Yellow Button */}
              <div className="bg-brand-dark rounded-2xl p-6 sm:p-8 text-white shadow-card">
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  CONSULTATION & RFQ
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1 mb-3">
                  Need {service.title}?
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-normal">
                  Our senior engineering staff will review your layout drawings and provide a buildable, timeline-compliant estimate.
                </p>
                <Button
                  href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  size="md"
                  icon
                  className="w-full text-xs uppercase tracking-wider font-bold text-brand-dark bg-brand-yellow hover:bg-brand-yellow-hover mb-4"
                >
                  Request a Quote
                </Button>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Direct Hotline: +91 91590 50754</span>
                </div>
              </div>

              {/* Documented Standards Card */}
              <div className="bg-brand-light rounded-xl p-6 border border-brand-border">
                <div className="flex items-center gap-2.5 mb-3 text-brand-dark font-heading font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                  <span>Quality Assurance Standard</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  All {service.title} projects adhere strictly to National Building Codes (NBC), Indian Standards (IS), concurrent engineering protocols, and daily safety toolbox audits.
                </p>
              </div>

              {/* All Services Navigation */}
              <div className="bg-white rounded-xl p-6 border border-brand-border shadow-sm">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-muted mb-3">
                  All Engineering Services
                </h4>
                <div className="space-y-1.5">
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`block text-xs py-1.5 px-2.5 rounded transition-colors ${
                        s.slug === service.slug
                          ? "bg-brand-yellow-light text-brand-dark font-bold"
                          : "text-brand-dark hover:bg-brand-light hover:text-brand-yellow"
                      }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
