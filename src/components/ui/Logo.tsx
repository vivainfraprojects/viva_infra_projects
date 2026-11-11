import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "dark",
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const isLight = variant === "light";
  
  // Height sizing optimized for 320px mobile through desktop
  const dimensions = {
    sm: { h: "h-7 sm:h-8", w: "w-16 sm:w-20", text: "text-[11px] sm:text-xs", subtext: "text-[8px]" },
    md: { h: "h-8 sm:h-10 md:h-11", w: "w-20 sm:w-24 md:w-28", text: "text-[11px] sm:text-xs md:text-sm", subtext: "text-[8px] sm:text-[9px]" },
    lg: { h: "h-11 sm:h-13", w: "w-28 sm:w-36", text: "text-sm sm:text-base", subtext: "text-[9px] sm:text-[10px]" },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-md ${className}`}
      aria-label="VIVA INFRA PROJECTS Home"
    >
      {/* Official ViP Oval Logo Image */}
      <div className={`relative ${dimensions.h} ${dimensions.w} shrink-0 transition-transform duration-200 group-hover:scale-105`}>
        <Image
          src="/images/logos/vip-logo.png"
          alt="ViP - Viva Infra Projects Official Logo"
          fill
          priority
          sizes="(max-width: 768px) 96px, 144px"
          className="object-contain"
        />
      </div>

      {/* Full Corporate Name with Subtitle */}
      {showText && (
        <div className={`flex flex-col border-l pl-2 sm:pl-2.5 ${isLight ? "border-white/20" : "border-brand-border"}`}>
          <span
            className={`font-heading font-black tracking-tight ${dimensions.text} uppercase leading-tight whitespace-nowrap ${
              isLight ? "text-white" : "text-brand-dark"
            }`}
          >
            VIVA INFRA PROJECTS
          </span>
          <span
            className={`font-heading font-bold tracking-wider uppercase leading-none mt-0.5 ${dimensions.subtext} ${
              isLight ? "text-brand-yellow" : "text-brand-muted"
            }`}
          >
            Civil • PEB • CMEP
          </span>
        </div>
      )}
    </Link>
  );
}
