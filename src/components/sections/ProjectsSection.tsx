"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = [
  "All",
  "Civil",
  "PEB & Structural",
  "M&E",
  "Industrial",
  "Commercial",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData.slice(0, 6)
      : projectsData
          .filter((p) => p.category === activeCategory)
          .slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeading
            tagline="PORTFOLIO OF EXECUTION"
            title="Our Projects"
            description="Explore our completed and ongoing projects across industrial, automotive and institutional sectors."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-brand-dark hover:text-brand-yellow-hover bg-brand-yellow-light px-5 py-3 rounded-md border border-brand-yellow/30 transition-all group shrink-0"
          >
            <span>Full Project Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Pills matching reference screenshot: Golden Yellow for Active */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
                activeCategory === cat
                  ? "bg-brand-yellow text-brand-dark shadow-sm"
                  : "bg-brand-light text-brand-dark hover:bg-brand-yellow-light border border-brand-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
