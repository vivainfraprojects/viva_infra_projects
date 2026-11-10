import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  tagline,
  title,
  highlightedWord,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {tagline && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3",
            isDark
              ? "bg-white/10 text-brand-yellow border border-brand-yellow/30"
              : "bg-brand-yellow-light text-brand-dark border border-brand-yellow/40"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
          <span>{tagline}</span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-brand-dark"
        )}
      >
        {highlightedWord && title.includes(highlightedWord) ? (
          <>
            {title.split(highlightedWord)[0]}
            <span className="text-brand-yellow underline decoration-brand-yellow decoration-4 underline-offset-4">
              {highlightedWord}
            </span>
            {title.split(highlightedWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-gray-300" : "text-brand-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
