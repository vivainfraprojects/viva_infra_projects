"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring if configured
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white py-20">
      <Container size="narrow" className="text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl text-brand-charcoal mb-2">
          An Unexpected Error Occurred
        </h1>
        <p className="text-sm text-brand-muted max-w-md mx-auto mb-6 leading-relaxed">
          We encountered a temporary technical glitch while loading this section. Please retry or contact technical support.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button onClick={() => reset()} variant="primary" size="md">
            <RefreshCw className="w-4 h-4 mr-1.5" />
            <span>Try Again</span>
          </Button>
          <Button href="/" variant="outline" size="md">
            <span>Return to Home</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

