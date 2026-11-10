export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  foundedNarrative: string;
  legalDetails: {
    legalName: string;
    tradeName: string;
    constitution: string;
    gstin: string;
    registrationType: string;
    registrationDate: string;
    approvingAuthority: string;
  };
  financialPerformance: Array<{
    financialYear: string;
    turnoverCrores: string;
    isOngoing?: boolean;
  }>;
  headOffice: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phonePrimary: string;
    phoneFormatted: string;
    email: string;
    workingHours: string;
  };
  coverage: {
    primaryRegion: string;
    operationalCoverage: string;
  };
  vision: {
    headline: string;
    statement: string;
    pillars: string[];
  };
  mission: {
    headline: string;
    statement: string;
    commitment: string[];
  };
  coreValues: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  principles: Array<{
    title: string;
    description: string;
  }>;
  areasOfStrength: string[];
  capabilitiesSummary: string[];
}
