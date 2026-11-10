"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  Filter,
  ExternalLink,
  Edit,
  Trash2,
  Building,
  CheckCircle,
  Clock,
  Layers,
  X,
} from "lucide-react";
import { projectsData } from "@/data/projects";

export default function AdminProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectsList, setProjectsList] = useState(projectsData);

  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: "",
    category: "PEB & Structural",
    location: "Chennai Region, Tamil Nadu",
    client: "",
    duration: "6 Months",
    status: "Ongoing",
  });

  const categories = [
    "All",
    "PEB & Structural",
    "Civil Construction",
    "CMEP & Turnkey",
    "M&E Utilities",
    "Flooring & Coating",
  ];

  const filteredProjects = projectsList.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.client && p.client.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory =
      selectedCategory === "All" || p.category.includes(selectedCategory) || p.categoryLabel.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title) return;
    const added = {
      id: `proj-${Date.now()}`,
      slug: newProject.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newProject.title,
      category: newProject.category as "Civil" | "PEB & Structural" | "M&E" | "Industrial" | "Commercial",
      categoryLabel: newProject.category,
      shortDescription: `New industrial construction and engineering execution in ${newProject.location}.`,
      fullDescription: `Full-scope turnkey execution managed by Viva Infra Projects engineering team.`,
      location: newProject.location,
      client: newProject.client || "Industrial Client (Confidential)",
      duration: newProject.duration,
      scope: ["Engineering & Planning", "Site Execution", "Quality Inspection"],
      status: newProject.status as "Completed" | "Ongoing",
      featured: false,
      mainImage: "/images/projects/peb-structural/structural-erection.jpg",
      galleryImages: [],
      keyHighlights: ["Adherence to time schedules", "Zero accident safety standards"],
      engineeringDivision: "Industrial Civil & PEB Works",
    };
    setProjectsList([added, ...projectsList]);
    setIsModalOpen(false);
    setNewProject({
      title: "",
      category: "PEB & Structural",
      location: "Chennai Region, Tamil Nadu",
      client: "",
      duration: "6 Months",
      status: "Ongoing",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this project from the database?")) {
      setProjectsList(projectsList.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Projects Management
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Manage, update, and publish civil, PEB structural, and CMEP turnkey project records.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4 font-bold" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-brand-border shadow-xs flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, client, location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-brand-border bg-brand-light focus:outline-none focus:border-brand-yellow focus:bg-white text-brand-dark"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-brand-dark text-brand-yellow font-bold"
                  : "bg-brand-light text-brand-muted hover:text-brand-dark hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-brand-border shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-brand-light text-brand-muted uppercase text-[10px] font-bold tracking-wider border-b border-brand-border">
              <tr>
                <th className="py-3 px-5">Project Details</th>
                <th className="py-3 px-5">Category</th>
                <th className="py-3 px-5">Client Name</th>
                <th className="py-3 px-5">Location</th>
                <th className="py-3 px-5">Duration</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-dark">
              {filteredProjects.map((p) => (
                <tr key={p.id} className="hover:bg-brand-light/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-16 rounded-md overflow-hidden bg-brand-light border border-brand-border shrink-0">
                        <Image
                          src={p.mainImage || "/images/projects/peb-structural/structural-erection.jpg"}
                          alt={p.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/projects/${p.slug}`}
                          target="_blank"
                          className="font-bold text-brand-dark hover:text-brand-yellow-hover line-clamp-1"
                        >
                          {p.title}
                        </Link>
                        <span className="text-[10px] text-brand-muted">
                          ID: {p.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-block px-2 py-0.5 rounded bg-brand-light border border-brand-border text-[11px] font-medium text-brand-dark">
                      {p.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-medium text-brand-dark">
                    {p.client}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted">
                    {p.location}
                  </td>
                  <td className="py-3.5 px-5 text-brand-muted font-mono text-[11px]">
                    {p.duration}
                  </td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        p.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/projects/${p.slug}`}
                        target="_blank"
                        className="p-1.5 rounded text-brand-muted hover:text-brand-dark hover:bg-brand-light transition-colors"
                        title="View Public Page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding New Project */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-brand-border relative animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-dark"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-heading font-bold text-lg text-brand-dark mb-1">
              Add New Construction Project
            </h2>
            <p className="text-xs text-brand-muted mb-4">
              Enter project specifications to create a verified project record.
            </p>

            <form onSubmit={handleAddProject} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-brand-dark block mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2000T Hydraulic Press Foundation"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-brand-dark block mb-1">
                    Category *
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none bg-white"
                  >
                    <option value="PEB & Structural">PEB & Structural</option>
                    <option value="Civil Construction">Civil Construction</option>
                    <option value="CMEP & Turnkey">CMEP & Turnkey</option>
                    <option value="M&E Utilities">M&E Utilities</option>
                    <option value="Flooring & Coating">Flooring & Coating</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-brand-dark block mb-1">
                    Status
                  </label>
                  <select
                    value={newProject.status}
                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none bg-white"
                  >
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-brand-dark block mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyundai Transys India"
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-brand-dark block mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Months"
                    value={newProject.duration}
                    onChange={(e) => setNewProject({ ...newProject, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-brand-dark block mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={newProject.location}
                  onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-brand-border font-semibold text-brand-dark hover:bg-brand-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold uppercase tracking-wider"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
