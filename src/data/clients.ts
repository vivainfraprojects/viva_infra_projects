export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  region: string;
  status: "Completed Projects" | "Ongoing Engagement" | "Multi-Plant Partner";
}

export const clientsData: ClientItem[] = [
  {
    id: "sungwoo-hitech",
    name: "SUNGWOO HITECH INDIA LTD.",
    shortName: "Sungwoo Hitech",
    category: "Automotive Body Structures & Assemblies",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "daejoo-automotive",
    name: "DAEJOO AUTOMOTIVE INDIA PRIVATE LIMITED",
    shortName: "Daejoo Automotive",
    category: "Automotive Precision Engineering",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "poshyundai-steel",
    name: "POSHYUNDAI STEEL MFG CO LTD.",
    shortName: "Poshyundai Steel",
    category: "Steel Processing & Manufacturing",
    region: "Chennai Region",
    status: "Completed Projects",
  },
  {
    id: "cubic-modular",
    name: "CUBIC MODULAR SYSTEMS INDIA P LTD",
    shortName: "Cubic Modular Systems",
    category: "Modular Enclosures & Switchboards",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "dymos-lear",
    name: "DYMOS LEAR AUTOMOTIVE INDIA PVT LTD.",
    shortName: "Dymos Lear Automotive",
    category: "Automotive Seating Systems",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "dae-seung",
    name: "DAE SEUNG AUTOMOTIVE INDIA PVT. LTD.",
    shortName: "Dae Seung Automotive",
    category: "Automotive Metal Components",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "daebu-seats",
    name: "DAEBU AUTOMOTIVE SEATS INDIA PVT. LTD.",
    shortName: "Daebu Automotive Seats",
    category: "Automotive Seating & Frame Technology",
    region: "Tamil Nadu & AP",
    status: "Ongoing Engagement",
  },
  {
    id: "seoyon-ehwa",
    name: "SEOYON E HWA AUTOMOTIVE INDIA P LTD",
    shortName: "Seoyon E Hwa (All 5 Plants)",
    category: "Automotive Interior & Door Trim Systems",
    region: "Tamil Nadu & AP",
    status: "Multi-Plant Partner",
  },
  {
    id: "yj-polytech",
    name: "YJ POLYTECH INDIA P LTD",
    shortName: "YJ Polytech",
    category: "Engineered Polymer Components",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "hwaeseung-automotive",
    name: "HWAESEUNG AUTOMOTIVE INDIA P LTD, AP",
    shortName: "Hwaeseung Automotive",
    category: "Weatherstrips & Rubber Sealing Systems",
    region: "Andhra Pradesh",
    status: "Ongoing Engagement",
  },
  {
    id: "pinstar-automotive",
    name: "PINSTAR AUTOMOTIVE INDIA PVT LTD",
    shortName: "Pinstar Automotive",
    category: "Automotive Components & Tooling",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "mobase-electronics",
    name: "MOBASE ELECTRONICS INDIA P LTD",
    shortName: "Mobase Electronics",
    category: "Automotive Electronics & Smart Keys",
    region: "Tamil Nadu",
    status: "Completed Projects",
  },
  {
    id: "mykey-ensol",
    name: "MYKEY ENSOL PRIVATE LIMITED",
    shortName: "Mykey Ensol",
    category: "Automotive Electronics & Energy Solutions",
    region: "Tamil Nadu",
    status: "Ongoing Engagement",
  },
  {
    id: "daesung-seat",
    name: "DAESUNG SEAT COMPANY PVT LTD. AP FACTORY",
    shortName: "Daesung Seat AP Factory",
    category: "Automotive Seating Systems",
    region: "Andhra Pradesh",
    status: "Ongoing Engagement",
  },
];

