export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  capabilities: string[];
  workflowSteps?: Array<{
    title: string;
    description: string;
  }>;
  relatedServiceSlugs?: string[];
}

