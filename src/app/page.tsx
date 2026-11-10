import { HeroSection } from "@/components/sections/HeroSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — COMPANY HIGHLIGHTS / STATISTICS */}
      <StatisticsSection />

      {/* SECTION 3 — ABOUT VIVA INFRA PROJECTS */}
      <AboutSection />

      {/* SECTION 4 — OUR SERVICES */}
      <ServicesSection />

      {/* SECTION 5 — FEATURED PROJECTS */}
      <ProjectsSection />

      {/* SECTION 6 — WHY CHOOSE US / DOCUMENTED PRINCIPLES */}
      <WhyChooseUsSection />

      {/* SECTION 7 — VISION, MISSION & CORE VALUES */}
      <VisionMissionSection />

      {/* SECTION 8 — MAJOR INDUSTRIAL CLIENTS */}
      <ClientsSection />

      {/* SECTION 9 — CALL TO ACTION */}
      <CTASection />
    </>
  );
}

