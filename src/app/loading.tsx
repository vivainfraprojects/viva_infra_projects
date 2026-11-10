import React from "react";
import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-white py-20">
      <Container size="narrow" className="text-center">
        <div className="w-12 h-12 border-4 border-brand-sage border-t-brand-forest rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-muted">
          Loading Viva Infra Projects...
        </p>
      </Container>
    </div>
  );
}

