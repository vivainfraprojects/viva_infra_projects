import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Building2,
  Layers,
  Wrench,
  Zap,
  Palette,
  Sparkles,
  Trees,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/types/service";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Building2,
  Layers,
  Wrench,
  Zap,
  Palette,
  Sparkles,
  Trees,
  Briefcase,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <div className="group flex flex-col bg-white rounded-lg border border-brand-border hover:border-brand-yellow/50 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Card Image */}
      <div className="relative h-48 w-full overflow-hidden bg-brand-light">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Icon Floating Badge matching reference: dark with golden yellow */}
        <div className="absolute bottom-3 left-4 w-12 h-12 rounded-lg bg-brand-dark text-brand-yellow flex items-center justify-center shadow-md border border-brand-yellow/30 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-dark group-hover:text-brand-yellow-hover transition-colors">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-brand-muted line-clamp-2 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Bullet Features with golden checkmark */}
        <ul className="mt-4 space-y-1.5 flex-grow border-t border-brand-border/60 pt-3">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-brand-dark/80"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Link matching reference screenshot: Golden Yellow Learn More and circular arrow button */}
        <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-yellow transition-colors focus:outline-none group/link"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-yellow transition-transform group-hover/link:translate-x-1" />
          </Link>
          <div className="w-7 h-7 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center group-hover:bg-brand-yellow-hover transition-colors shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
