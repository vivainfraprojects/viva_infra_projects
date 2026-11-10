# VIVA INFRA PROJECTS (ViP)
### Premium Industrial Engineering, Infrastructure & CMEP Corporate Website

An enterprise-grade corporate website and dedicated operations admin portal for **VIVA INFRA PROJECTS (ViP)**, headquartered in Sriperumbudur, Chennai Industrial Corridor, Tamil Nadu, executing heavy industrial civil, PEB structural, and CMEP turnkey projects PAN India.

---

## 🏗️ Technology Stack

- **Framework:** Next.js 15.5+ (App Router)
- **Library:** React 19
- **Type Safety:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS 3.4+ with custom industrial tokens
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS Hardware Accelerated Transitions
- **Backend Architecture:** Future Supabase / PostgreSQL Ready (`supabase/schema.sql`, `src/types/database.ts`)

---

## 🏛️ Authentic Corporate Profile Details

All corporate data is sourced from the official 27-page company profile without fabrication:

- **Mission (Slide 4 Verbatim):**
  > *"Strives to be the preferred Specialist and Solution Provider in the Industrial Engineering Field and Dedication to provide the Quality Construction, Technical and Management services to our Esteemed Customers."*
- **Governing Rule for Planning & Design (Slide 7):**
  > *"Customer Satisfaction, Quality in Mind, Delivery in Time, Safety is Prime."*
- **Statutory GST Registration (Slide 25):**
  - **GSTIN:** `33CKPPV6042Q1Z8`
  - **Legal Entity:** `VITHYA SELVAM`
  - **Trade Name:** `VIVA INFRA PROJECTS`
  - **Constitution:** `Proprietorship`
  - **Registration Date:** `30/11/2022`
  - **Governing Act:** `Centre Goods and Services Tax Act, 2017`
  - **Registered Address:** `No.31, Sri Ram Nagar, Sriperumbudur, District: Kancheepuram, State: Tamil Nadu, PIN Code: 602105`
- **Audited Financial Turnover Performance (Slide 25):**
  - **FY 2022–2023:** ₹ 1.30 Crore
  - **FY 2023–2024:** ₹ 2.00 Crore
  - **FY 2024–2025:** ₹ 5.59 Crore
  - **FY 2025–2026 (till Nov 2025):** ₹ 7.02 Crore *(5.4x growth scale)*
- **Industrial Safety Standards (Slide 26):**
  - Daily mandatory on-site Safety Toolbox Meetings with full PPE gear attendance.
- **Documented Client Portfolio (Slides 23–24):**
  - Sungwoo Hitech India, Daejoo Automotive, Poshyundai Steel Mfg, Cubic Modular Systems, Dymos Lear Automotive, Dae Seung Automotive, Daebu Automotive Seats, Seoyon E Hwa Automotive (All 5 Plants), YJ Polytech, Hwaeseung Automotive, Pinstar Automotive.

---

## 🌐 Website Pages & Architecture

### Public Corporate Website
- `/` — Premium Homepage with 10 Industrial Sections (Hero, Statistics, About ViP, Services, Projects Gallery, Why Choose Us, Vision & Mission, Clients, CTA, Footer)
- `/about` — Dedicated Company Profile, Verbatim Mission, Governing Principles, Statutory GSTIN Filing & Financial Turnover Growth Chart
- `/services` — Complete Catalog of 9 Engineering Divisions
- `/services/[slug]` — 9 Dynamic Service Detail SSG Pages (Civil, PEB, CMEP, Flooring, Utilities, etc.)
- `/projects` — Filterable Project Portfolio (All, Civil, PEB, CMEP, etc.)
- `/projects/[slug]` — 12 Project Detail Case Studies with Interactive Modal Lightbox Gallery
- `/careers` — Career Opportunities & Candidate Application Form
- `/contact` — Office Map, Direct Phone, Statutory Card & Interactive Contact Form
- `/get-a-quote` — Multi-Step Technical Quotation / RFQ Estimation Form

### Standalone Admin Portal (`/admin/*`)
- `/admin` — Executive Dashboard with KPI cards, interactive SVG Enquiries Chart & recent enquiries
- `/admin/projects` — Project Management (Add, Edit, Filter, Delete projects)
- `/admin/enquiries` — Client RFQ & Quotation CRM with status workflow (New, In Progress, Quoted, Closed)
- `/admin/services` — 9 Engineering Divisions & capabilities
- `/admin/gallery` — Media Library showcasing all 71 genuine project photographs
- `/admin/content` — CMS for Corporate Identity, Mission, GST compliance, and Turnover
- `/admin/team` — Site leadership, Civil directors, PEB engineers & HSE safety coordinators
- `/admin/settings` — Supabase PostgreSQL schema readiness & token palette

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/vivainfraprojects/viva_infra_projects.git
cd viva_infra_projects

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.
Visit [http://localhost:3000/admin](http://localhost:3000/admin) to view the Admin Portal.

### Production Build
```bash
# TypeScript verification
npm run type-check

# Next.js production build
npm run build

# Start production server
npm start
```

---

## 📄 License
© 2026 VIVA INFRA PROJECTS (ViP). All rights reserved.
Registered under Centre Goods and Services Tax Act, 2017 (GSTIN: 33CKPPV6042Q1Z8).
