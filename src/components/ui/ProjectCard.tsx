import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { ProjectItem } from "@/types/project";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-lg border border-brand-border hover:border-brand-yellow/50 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden bg-brand-light">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Category Badge matching reference: Golden Yellow */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-brand-yellow text-brand-dark rounded shadow-sm">
            {project.categoryLabel}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
              project.status === "Completed"
                ? "bg-emerald-500 text-white"
                : "bg-brand-yellow text-brand-dark"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Location snippet on image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white/90">
          <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0" />
          <span className="truncate">{project.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand-yellow-hover transition-colors line-clamp-1">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        <p className="mt-1.5 text-xs text-brand-muted line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Action Link & Arrow matching reference: Golden Yellow circular button */}
        <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-bold text-brand-dark hover:text-brand-yellow-hover uppercase tracking-wider inline-flex items-center gap-1 focus:outline-none"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="w-7 h-7 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center group-hover:bg-brand-yellow-hover transition-colors shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
