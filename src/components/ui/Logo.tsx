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
  
  // Height sizing
  const dimensions = {
    sm: { h: "h-8", w: "w-20", text: "text-xs", subtext: "text-[8px]" },
    md: { h: "h-10 sm:h-11", w: "w-24 sm:w-28", text: "text-xs sm:text-sm", subtext: "text-[9px]" },
    lg: { h: "h-12 sm:h-14", w: "w-32 sm:w-36", text: "text-sm sm:text-base", subtext: "text-[10px]" },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-md ${className}`}
      aria-label="VIVA INFRA PROJECTS Home"
    >
      {/* Official ViP Oval Logo Image */}
      <div className={`relative ${dimensions.h} ${dimensions.w} shrink-0 transition-transform duration-200 group-hover:scale-105`}>
        <Image
          src="/images/logos/vip-logo.png"
          alt="ViP - Viva Infra Projects Official Logo"
          fill
          priority
          sizes="(max-width: 768px) 112px, 144px"
          className="object-contain"
        />
      </div>

      {/* Full Corporate Name with Subtitle */}
      {showText && (
        <div className={`flex flex-col border-l pl-2.5 ${isLight ? "border-white/20" : "border-brand-border"}`}>
          <span
            className={`font-heading font-black tracking-tight ${dimensions.text} uppercase leading-tight ${
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
