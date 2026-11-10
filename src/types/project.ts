export type ProjectCategory =
  | "All"
  | "Civil"
  | "PEB & Structural"
  | "M&E"
  | "Industrial"
  | "Commercial";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  client?: string;
  duration?: string;
  scope: string[];
  status: "Completed" | "Ongoing" | "In Execution";
  featured: boolean;
  mainImage: string;
  galleryImages: Array<{
    src: string;
    caption: string;
  }>;
  keyHighlights: string[];
  engineeringDivision: string;
}

