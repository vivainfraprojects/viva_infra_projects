import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientsData } from "@/data/clients";
import { Building } from "lucide-react";

export function ClientsSection() {
  return (
    <section id="clients" className="py-16 sm:py-20 bg-brand-light/40 border-t border-brand-border">
      <Container size="wide">
        <SectionHeading
          tagline="DOCUMENTED CLIENT RELATIONSHIPS"
          title="Trusted by Leading Industrial Conglomerates"
          description="A representative list of major automotive, steel manufacturing, and industrial electronics clients documented in ViP's corporate portfolio."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="bg-white p-5 rounded-xl border border-brand-border/80 hover:border-brand-forest/40 shadow-sm hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-sage-light text-brand-forest group-hover:bg-brand-forest group-hover:text-brand-lime transition-colors flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted bg-brand-light px-2 py-0.5 rounded">
                    {client.region}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm text-brand-charcoal group-hover:text-brand-forest transition-colors leading-snug">
                  {client.name}
                </h4>

                <p className="text-[11px] text-brand-muted mt-1.5 line-clamp-1">
                  {client.category}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-brand-forest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  {client.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

