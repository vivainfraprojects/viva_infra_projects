import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactCard } from "@/components/ui/ContactCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us | Head Office Sriperumbudur & PAN India Operations",
  description:
    "Get in touch with Viva Infra Projects (ViP) at Plot No.31, Sriram Nagar, Devendra Nagar, Sriperumbudur, Tamil Nadu. Phone: +91 91590 50754, Email: vip1010ce@gmail.com.",
  canonical: "https://vivainfraprojects.in/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Hero matching reference screenshot */}
      <section className="relative py-16 sm:py-20 bg-brand-forest-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facilities/modern-factory.jpg"
            alt="Contact Viva Infra Projects"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "Contact Us" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed">
            We&apos;re here to discuss your construction and engineering needs. Let&apos;s build a stronger future together.
          </p>
        </Container>
      </section>

      {/* Main Contact Grid matching reference screenshot (Left: Details & Map, Right: Form) */}
      <section className="py-14 sm:py-20 bg-brand-light/40">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Info & Map (5 cols) */}
            <div className="lg:col-span-5">
              <ContactCard showMap={true} />
            </div>

            {/* Right: Interactive Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

