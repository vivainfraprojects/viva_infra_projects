export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  projectDescription: string;
}

export interface FormSubmissionState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
}

