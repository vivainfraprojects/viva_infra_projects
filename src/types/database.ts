export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: "admin" | "editor" | "viewer";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: "admin" | "editor" | "viewer";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: "admin" | "editor" | "viewer";
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          slug: string;
          title: string;
          short_description: string;
          full_description: string;
          icon_name: string;
          image_url: string;
          features: string[];
          capabilities: string[];
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          short_description: string;
          full_description: string;
          icon_name: string;
          image_url: string;
          features?: string[];
          capabilities?: string[];
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          short_description?: string;
          full_description?: string;
          icon_name?: string;
          image_url?: string;
          features?: string[];
          capabilities?: string[];
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          category_label: string;
          short_description: string;
          full_description: string;
          location: string;
          client_name: string | null;
          duration: string | null;
          scope: string[];
          status: "Completed" | "Ongoing" | "In Execution";
          featured: boolean;
          main_image_url: string;
          engineering_division: string;
          key_highlights: string[];
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          category_label: string;
          short_description: string;
          full_description: string;
          location: string;
          client_name?: string | null;
          duration?: string | null;
          scope?: string[];
          status?: "Completed" | "Ongoing" | "In Execution";
          featured?: boolean;
          main_image_url: string;
          engineering_division: string;
          key_highlights?: string[];
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          category_label?: string;
          short_description?: string;
          full_description?: string;
          location?: string;
          client_name?: string | null;
          duration?: string | null;
          scope?: string[];
          status?: "Completed" | "Ongoing" | "In Execution";
          featured?: boolean;
          main_image_url?: string;
          engineering_division?: string;
          key_highlights?: string[];
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      project_images: {
        Row: {
          id: string;
          project_id: string;
          image_url: string;
          caption: string | null;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          image_url: string;
          caption?: string | null;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          image_url?: string;
          caption?: string | null;
          display_order?: number;
          created_at?: string;
        };
      };
      enquiries: {
        Row: {
          id: string;
          type: "contact" | "quote";
          full_name: string;
          company_name: string | null;
          email: string;
          phone: string | null;
          project_type: string | null;
          project_location: string | null;
          estimated_budget: string | null;
          message: string;
          status: "new" | "in_review" | "contacted" | "closed";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          type?: "contact" | "quote";
          full_name: string;
          company_name?: string | null;
          email: string;
          phone?: string | null;
          project_type?: string | null;
          project_location?: string | null;
          estimated_budget?: string | null;
          message: string;
          status?: "new" | "in_review" | "contacted" | "closed";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          type?: "contact" | "quote";
          full_name?: string;
          company_name?: string | null;
          email?: string;
          phone?: string | null;
          project_type?: string | null;
          project_location?: string | null;
          estimated_budget?: string | null;
          message?: string;
          status?: "new" | "in_review" | "contacted" | "closed";
          created_at?: string;
          updated_at?: string;
        };
      };
      careers: {
        Row: {
          id: string;
          title: string;
          slug: string;
          division: string;
          location: string;
          employment_type: string;
          experience_required: string;
          description: string;
          responsibilities: string[];
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          division: string;
          location: string;
          employment_type?: string;
          experience_required: string;
          description: string;
          responsibilities?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          division?: string;
          location?: string;
          employment_type?: string;
          experience_required?: string;
          description?: string;
          responsibilities?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      job_applications: {
        Row: {
          id: string;
          career_id: string | null;
          target_role: string;
          full_name: string;
          email: string;
          phone: string;
          experience_years: string;
          cover_note: string | null;
          resume_storage_path: string | null;
          status: "pending" | "reviewed" | "shortlisted" | "rejected";
          created_at: string;
        };
        Insert: {
          id?: string;
          career_id?: string | null;
          target_role: string;
          full_name: string;
          email: string;
          phone: string;
          experience_years: string;
          cover_note?: string | null;
          resume_storage_path?: string | null;
          status?: "pending" | "reviewed" | "shortlisted" | "rejected";
          created_at?: string;
        };
        Update: {
          id?: string;
          career_id?: string | null;
          target_role?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          experience_years?: string;
          cover_note?: string | null;
          resume_storage_path?: string | null;
          status?: "pending" | "reviewed" | "shortlisted" | "rejected";
          created_at?: string;
        };
      };
      clients: {
        Row: {
          id: string;
          name: string;
          short_name: string;
          category: string;
          region: string;
          status: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          short_name: string;
          category: string;
          region: string;
          status: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          short_name?: string;
          category?: string;
          region?: string;
          status?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          client_name: string;
          author_title: string;
          company_name: string;
          quote: string;
          rating: number;
          is_featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_name: string;
          author_title: string;
          company_name: string;
          quote: string;
          rating?: number;
          is_featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          client_name?: string;
          author_title?: string;
          company_name?: string;
          quote?: string;
          rating?: number;
          is_featured?: boolean;
          created_at?: string;
        };
      };
      website_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          description: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          description?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          key?: string;
          value?: Json;
          description?: string | null;
          updated_at?: string;
        };
      };
    };
  };
}
