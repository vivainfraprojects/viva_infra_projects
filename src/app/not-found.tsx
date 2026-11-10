import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-light py-20">
      <Container size="narrow" className="text-center">
        <span className="text-brand-forest font-black font-heading text-7xl sm:text-9xl tracking-tight block">
          404
        </span>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-charcoal mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-muted max-w-md mx-auto mb-8 leading-relaxed">
          The requested infrastructure page or engineering division could not be located. Please check the URL or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Back to Home</span>
          </Button>
          <Button href="/services" variant="outline" size="md">
            <span>Explore Services</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

