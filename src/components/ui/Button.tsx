import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "yellow" | "outline" | "ghost" | "dark" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon = false,
      isLoading = false,
      children,
      href,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-semibold tracking-tight rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

    const variants = {
      // Golden yellow from reference image
      primary:
        "bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark focus-visible:ring-brand-yellow shadow-sm hover:shadow",
      yellow:
        "bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark focus-visible:ring-brand-yellow shadow-sm hover:shadow",
      lime:
        "bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark focus-visible:ring-brand-yellow shadow-sm hover:shadow",
      secondary:
        "bg-brand-yellow-light hover:bg-brand-yellow-muted text-brand-dark focus-visible:ring-brand-yellow",
      outline:
        "border border-brand-border hover:border-brand-yellow text-brand-dark bg-transparent focus-visible:ring-brand-yellow",
      ghost:
        "text-brand-dark hover:text-brand-dark hover:bg-brand-yellow-light focus-visible:ring-brand-yellow",
      dark:
        "bg-brand-dark hover:bg-black text-white focus-visible:ring-brand-dark shadow-sm",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        <span>{children}</span>
        {icon && !isLoading && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(combinedClassName, "group")}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={cn(combinedClassName, "group")}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
