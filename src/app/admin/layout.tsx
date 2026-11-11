import React from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin Portal | VIVA INFRA PROJECTS",
  description: "Internal Operations & Project Management Control Center for Viva Infra Projects",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}

