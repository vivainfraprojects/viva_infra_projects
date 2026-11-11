"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = [
  "All",
  "Civil",
  "PEB & Structural",
  "M&E",
  "Industrial",
  "Commercial",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Page Hero matching reference screenshot */}
      <section className="relative py-16 sm:py-20 bg-brand-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/peb-structural/structural-erection.jpg"
            alt="Viva Infra Projects Execution Portfolio"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "Projects" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Our Projects
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed">
            Explore our completed and ongoing projects across industrial, commercial and residential sectors.
          </p>
        </Container>
      </section>

      {/* Projects Gallery Section matching reference screenshot */}
      <section className="py-14 sm:py-20 bg-brand-light/40">
        <Container size="wide">
          {/* Category Filter Pills - swipeable edge-to-edge on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 mb-8 sm:mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 sm:px-5 py-2.5 min-h-[40px] rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                  activeCategory === cat
                    ? "bg-brand-yellow text-brand-dark shadow-sm"
                    : "bg-white text-brand-dark hover:bg-brand-yellow-light border border-brand-border"
                )}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Project Grid matching reference screenshot (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

