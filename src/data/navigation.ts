export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Planning & Design",
        href: "/services/planning-and-design",
        description: "Layout design, 3D structural modeling & concurrent engineering",
      },
      {
        label: "Civil Construction",
        href: "/services/civil-construction",
        description: "Heavy foundations, 1600T machine pits, factory buildings & RCC",
      },
      {
        label: "PEB & Structural Works",
        href: "/services/peb-and-structural-works",
        description: "Steel fabrication, erection, grit blasting, mezzanines & roofing",
      },
      {
        label: "Mechanical Engineering",
        href: "/services/mechanical-engineering",
        description: "Compressed air lines, cooling towers, piping networks & machine shifting",
      },
      {
        label: "Electrical Engineering",
        href: "/services/electrical-engineering",
        description: "11kV/33kV substations, transformers, panels, high bay lights & CCTV",
      },
      {
        label: "Interior & Exterior Works",
        href: "/services/interior-and-exterior-works",
        description: "Exterior glazing, ACP cladding, modular workstations & false ceilings",
      },
      {
        label: "Epoxy Flooring & Coatings",
        href: "/services/flooring-and-coatings",
        description: "Chemical-resistant industrial epoxy flooring & structural painting",
      },
      {
        label: "Landscaping, Roads & Utilities",
        href: "/services/landscaping-roads-and-utilities",
        description: "Asphalt roads, paver blocks, fire pump rooms, STP & ETP systems",
      },
      {
        label: "Turnkey CMEP Management",
        href: "/services/turnkey-project-management",
        description: "Single-point end-to-end design, procurement, and execution",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About Viva Infra Projects", href: "/about" },
    { label: "Vision & Mission", href: "/about#vision-mission" },
    { label: "Our Core Principles", href: "/about#principles" },
    { label: "Major Clients", href: "/#clients" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Planning & Design", href: "/services/planning-and-design" },
    { label: "Civil Construction", href: "/services/civil-construction" },
    { label: "PEB & Structural Works", href: "/services/peb-and-structural-works" },
    { label: "Mechanical Engineering", href: "/services/mechanical-engineering" },
    { label: "Electrical Engineering", href: "/services/electrical-engineering" },
    { label: "Turnkey CMEP Management", href: "/services/turnkey-project-management" },
  ],
  quickLinks: [
    { label: "Featured Projects", href: "/projects" },
    { label: "Get a Project Quote", href: "/get-a-quote" },
    { label: "Contact Our Engineers", href: "/contact" },
    { label: "Industrial Safety Policy", href: "/about#safety" },
  ],
};

