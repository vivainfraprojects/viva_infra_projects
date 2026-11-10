import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { constructMetadata } from "@/lib/seo";
import {
  Eye,
  Target,
  ShieldCheck,
  Clock,
  HardHat,
  Award,
  Users,
  HeartHandshake,
  CheckCircle,
  Building2,
  Wrench,
  Layers,
  ArrowRight,
  ShieldAlert,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us | Industrial Engineering & Turnkey Infrastructure",
  description:
    "Learn about Viva Infra Projects (ViP) — Chennai-headquartered CMEP contractor with PAN India project operations, specialty PEB engineering, heavy foundations and civil infrastructure.",
  canonical: "https://vivainfraprojects.in/about",
});

export default function AboutPage() {
  const coreValues = [
    {
      title: "The Highest Integrity",
      description: "Ethical conduct and transparency in all contracts and operations.",
      icon: ShieldCheck,
    },
    {
      title: "Adhere To Time Schedule",
      description: "Disciplined scheduling ensuring on-time project handovers.",
      icon: Clock,
    },
    {
      title: "A Safe Work Environment",
      description: "Daily safety toolbox meetings and zero-accident target execution.",
      icon: HardHat,
    },
    {
      title: "Quality Of Our Product and Service",
      description: "Zero-compromise material testing and craftsmanship.",
      icon: Award,
    },
    {
      title: "Excellence in our Team",
      description: "Continuous technical lectures and training for engineers and staff.",
      icon: Users,
    },
    {
      title: "Customer Satisfaction",
      description: "Solving site bottlenecks across the table to earn repeat client orders.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero with Breadcrumb matching reference screenshot: Dark Background */}
      <section className="relative py-16 sm:py-20 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facilities/industrial-complex.jpg"
            alt="Viva Infra Projects Industrial Engineering"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 filter brightness-75"
          />
        </div>
        <Container size="wide" className="relative z-10">
          <Breadcrumb
            items={[{ label: "About Us" }]}
            theme="dark"
            className="mb-4"
          />
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            About Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-200 max-w-2xl font-normal">
            Pioneering CMEP infrastructure, heavy industrial civil engineering, and specialized PEB steel solutions across India.
          </p>
        </Container>
      </section>

      {/* Section: Who We Are & Company Overview matching reference screenshot */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Story Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-light text-brand-dark border border-brand-yellow/40 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-tight">
                Engineering Excellence for Industrial Infrastructure
              </h2>

              <div className="space-y-4 text-base text-brand-muted leading-relaxed">
                <p>
                  We <strong className="text-brand-dark font-semibold">Viva Infra Projects (ViP)</strong> is the CMEP company, with office in Chennai region and Operating PAN India Projects.
                </p>
                <p>
                  ViP services encompass <strong className="text-brand-dark">Construction, Engineering, Procurement, and Project Management</strong>. To ViP&apos;s credit stand Industrial & Institutional structures and Infrastructure facilities, Mechanical and Electrical Division (M&E), Commercial, Building Products Division, and Project Design Division.
                </p>
                <p>
                  ViP&apos;s Specialty projects involving <strong className="text-brand-dark">PEB-engineered structures and Shell Structures</strong> are remarkable for their innovative and revolutionary application of technology and expertise.
                </p>
                <p>
                  ViP has time and again stood true to its Vision and Mission, and looks to the future with undiminished enthusiasm and enterprise.
                </p>
              </div>

              {/* Vision & Mission inline cards matching reference screenshot */}
              <div id="vision-mission" className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-brand-light border border-brand-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shadow-sm">
                      <Eye className="w-5 h-5 text-brand-dark" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-brand-dark">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    To be a leading construction company known for quality, integrity, teamwork, safety, and strict adherence to time schedules.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-brand-light border border-brand-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shadow-sm">
                      <Target className="w-5 h-5 text-brand-dark" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-brand-dark">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {companyData.mission.statement}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo Column matching reference screenshot (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-brand-border shadow-lg">
                <Image
                  src="/images/facilities/modern-factory.jpg"
                  alt="ViP Modern Factory Operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Quality Construction Badge */}
              <div className="bg-brand-dark text-white rounded-xl p-5 border border-brand-yellow/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      Quality Construction
                    </h4>
                    <p className="text-xs text-brand-yellow font-medium">
                      for a Stronger Future
                    </p>
                  </div>
                </div>
                <Link
                  href="/get-a-quote"
                  className="text-xs font-bold uppercase tracking-wider text-brand-yellow hover:underline flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Our Core Values matching reference screenshot: Dark #181818 with Golden Yellow */}
      <section className="py-16 sm:py-20 bg-brand-dark-secondary text-white">
        <Container size="wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
              ORGANIZATIONAL PILLARS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-dark p-6 rounded-xl border border-white/10 hover:border-brand-yellow/40 transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-dark-secondary text-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      {val.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section: Documented Principles from Slide 6 */}
      <section id="principles" className="py-16 sm:py-20 bg-white">
        <Container size="wide">
          <SectionHeading
            tagline="GOVERNING STANDARD"
            title="Our Governing Principles"
            description="Documented quality, safety, and concurrent engineering concepts rigorously implemented across all ViP project sites."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyData.principles.map((pr, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-brand-border bg-white hover:border-brand-yellow/50 shadow-sm transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-brand-yellow-light text-brand-dark font-heading font-bold text-xs flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-dark mb-2">
                  {pr.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section: Areas of Strength from Slide 5 */}
      <section className="py-16 sm:py-20 bg-brand-dark text-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
              COMPETITIVE ADVANTAGE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-1 mb-8">
              Documented Areas of Strength
            </h2>

            <div className="space-y-4">
              {companyData.areasOfStrength.map((strength, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 bg-brand-dark-secondary border border-brand-yellow/20 p-4 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-200 leading-relaxed font-normal">
                    {strength}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Financial Performance & Statutory Compliance from Slide 25 */}
      <section id="financial-performance" className="py-16 sm:py-20 bg-brand-light border-y border-brand-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Financial Performance Growth (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-light text-brand-dark border border-brand-yellow/40 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-brand-dark" />
                <span>FINANCIAL GROWTH & PERFORMANCE</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight leading-tight">
                Consistent Year-on-Year Turnover Growth
              </h2>

              <p className="text-sm text-brand-muted leading-relaxed">
                As documented in the official Viva Infra Projects corporate profile (Slide 25), ViP has demonstrated exceptional financial resilience and scale in the industrial engineering and CMEP turnkey sector, expanding from ₹1.30 Crore in FY 2022-23 to over ₹7.02 Crore in FY 2025-26.
              </p>

              {/* Turnover Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {companyData.financialPerformance.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-brand-border shadow-sm flex flex-col justify-between hover:border-brand-yellow/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                        FY {item.financialYear}
                      </span>
                      {item.isOngoing && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                          Till Nov 2025
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-heading font-black text-2xl sm:text-3xl text-brand-dark">
                        {item.turnoverCrores}
                      </div>
                      <p className="text-xs text-brand-muted mt-1">
                        Turnover Performance
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Statutory GST Information (5 cols) */}
            <div className="lg:col-span-5 bg-brand-dark text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg space-y-5">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-dark flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-brand-yellow uppercase tracking-widest block">
                    GOVERNMENT OF INDIA
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Statutory Registration
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-gray-200">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">GSTIN:</span>
                  <span className="font-mono font-bold text-sm text-brand-yellow">
                    {companyData.legalDetails.gstin}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">Legal Name:</span>
                  <span className="font-semibold text-white">
                    {companyData.legalDetails.legalName}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">Trade Name:</span>
                  <span className="font-semibold text-white">
                    {companyData.legalDetails.tradeName}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">Constitution:</span>
                  <span className="font-semibold text-white">
                    {companyData.legalDetails.constitution}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">Registration Date:</span>
                  <span className="font-semibold text-white">
                    {companyData.legalDetails.registrationDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                  <span className="text-gray-400">Governing Act:</span>
                  <span className="font-semibold text-white text-right">
                    {companyData.legalDetails.approvingAuthority}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Registered Address:</span>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    No.31, Sri Ram Nagar, Sriperumbudur, District: Kancheepuram, State: Tamil Nadu, PIN: 602105
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <p className="text-[11px] text-gray-400 italic">
                  * Official GST registration and statutory compliance filing as documented in Slide 25.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Industrial Safety from Slide 26 */}
      <section id="safety" className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-brand-border shadow-md">
              <Image
                src="/images/safety/safety-toolbox-meeting.png"
                alt="Industrial Safety Toolbox Meeting at ViP Project Site"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-brand-dark/90 text-white text-[11px] font-bold px-3 py-1 rounded backdrop-blur-sm">
                Authentic Site Toolbox Meeting
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-light text-brand-dark text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5 text-brand-yellow" />
                <span>INDUSTRIAL SAFETY POLICY</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark">
                Safety First — Daily Toolbox Meetings
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                At Viva Infra Projects, industrial safety is a mandatory operational prerequisite. Every morning begins with a mandatory on-site Safety Toolbox Meeting covering hazard identification, personal protective equipment (PPE) compliance, crane hoisting clearances, and electrical lock-out tag-out (LOTO) protocols.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Discuss Project Safety Standards
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-brand-light border-t border-brand-border text-center">
        <Container size="wide">
          <h3 className="font-heading font-bold text-2xl text-brand-dark mb-2">
            Ready to partner with an experienced CMEP engineering team?
          </h3>
          <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
            Review your site requirements directly with our technical leadership in Sriperumbudur.
          </p>
          <Button href="/get-a-quote" variant="primary" size="lg" icon>
            Request a Project Consultation
          </Button>
        </Container>
      </section>
    </div>
  );
}
