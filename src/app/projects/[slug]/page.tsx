import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/seo";
import {
  MapPin,
  Building,
  Clock,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({ title: "Project Not Found" });
  }

  return constructMetadata({
    title: `${project.title} | Projects Portfolio`,
    description: project.shortDescription,
    image: project.mainImage,
    canonical: `https://vivainfraprojects.in/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Page Header with Breadcrumb */}
      <section className="bg-brand-light py-6 border-b border-brand-border">
        <Container size="wide">
          <Breadcrumb
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />
        </Container>
      </section>

      {/* Main Project Details matching reference screenshot */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Interactive Photo Gallery & Technical Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Interactive Gallery with thumbnail clicking & lightbox */}
              <ProjectGallery
                mainImage={project.mainImage}
                title={project.title}
                galleryImages={project.galleryImages}
              />

              {/* Full Engineering Description */}
              <div className="pt-6 border-t border-brand-border">
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  Project Description & Engineering Scope
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Key Execution Highlights */}
                {project.keyHighlights && project.keyHighlights.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-heading font-semibold text-sm text-brand-dark mb-3">
                      Execution Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {project.keyHighlights.map((hl, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Project Sidebar Info matching reference screenshot (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-card sticky top-24">
                {/* Title */}
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark mb-4">
                  {project.title}
                </h1>

                {/* Tags matching reference screenshot: Golden Yellow category pill */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-brand-yellow text-brand-dark text-xs font-bold rounded shadow-sm">
                    {project.categoryLabel}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded ${
                      project.status === "Completed"
                        ? "bg-emerald-500 text-white"
                        : "bg-brand-yellow-light text-brand-dark border border-brand-yellow/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Metadata List matching reference screenshot */}
                <div className="space-y-4 border-t border-brand-border pt-5 text-sm">
                  {/* Client */}
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block">
                        Client
                      </span>
                      <span className="font-semibold text-brand-dark">
                        {project.client || "Confidential Industrial Client"}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="font-semibold text-brand-dark">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block">
                        Project Type
                      </span>
                      <span className="font-semibold text-brand-dark">
                        {project.categoryLabel} ({project.engineeringDivision})
                      </span>
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block">
                        Scope of Work
                      </span>
                      <ul className="mt-1 space-y-1">
                        {project.scope.map((s, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-brand-dark font-medium flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Duration */}
                  {project.duration && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-brand-muted font-bold uppercase tracking-wider block">
                          Duration
                        </span>
                        <span className="font-semibold text-brand-dark">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button matching reference screenshot: Golden Yellow Button */}
                <div className="mt-8 pt-6 border-t border-brand-border">
                  <Button
                    href={`/get-a-quote?project=${encodeURIComponent(project.title)}`}
                    variant="primary"
                    size="lg"
                    icon
                    className="w-full font-bold text-brand-dark bg-brand-yellow hover:bg-brand-yellow-hover"
                  >
                    Enquire About Similar Project
                  </Button>
                </div>
              </div>

              {/* Direct Call card */}
              <div className="bg-brand-yellow-light rounded-xl p-5 border border-brand-yellow/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                    Have Technical Questions?
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Speak directly with our Chief Engineer
                  </p>
                </div>
                <a
                  href="tel:9159050754"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-dark hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-brand-border">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark mb-6">
                Related Industrial Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/projects/${rel.slug}`}
                    className="group block bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-card transition-all"
                  >
                    <div className="relative h-44 w-full bg-brand-light">
                      <Image
                        src={rel.mainImage}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider">
                        {rel.categoryLabel}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-brand-dark group-hover:text-brand-yellow-hover line-clamp-1 mt-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-brand-muted line-clamp-1 mt-1">
                        {rel.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
