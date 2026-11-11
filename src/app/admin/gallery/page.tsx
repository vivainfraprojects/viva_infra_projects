"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon, Filter, Search, Copy, Check, Upload, X } from "lucide-react";

export default function AdminGalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const galleryItems = [
    // Civil
    { src: "/images/projects/civil/deep-excavation.jpg", title: "Heavy Foundation Deep Excavation", category: "Civil" },
    { src: "/images/projects/civil/foundation-reinforcement.jpg", title: "Concrete Foundation Rebar Steel", category: "Civil" },
    { src: "/images/projects/civil/concrete-pour.jpg", title: "High-Grade Industrial Ready Mix Pour", category: "Civil" },
    { src: "/images/projects/civil/machine-pit.jpg", title: "1600-Ton Hydraulic Machine Pit", category: "Civil" },
    { src: "/images/projects/civil/substructure-complete.jpg", title: "Industrial Civil Substructure", category: "Civil" },
    // PEB
    { src: "/images/projects/peb-structural/structural-fabrication.jpg", title: "Heavy PEB Structural Fabrication", category: "PEB Steel" },
    { src: "/images/projects/peb-structural/blasting-painting.jpg", title: "Sa 2.5 Shot Blasting & PU Coating", category: "PEB Steel" },
    { src: "/images/projects/peb-structural/mezzanine-floor.jpg", title: "Industrial Mezzanine Floor Framing", category: "PEB Steel" },
    { src: "/images/projects/peb-structural/roof-sheeting.jpg", title: "Standing Seam Roof & Purlin Sheeting", category: "PEB Steel" },
    { src: "/images/projects/peb-structural/structural-erection.jpg", title: "High-Precision Crane Structural Erection", category: "PEB Steel" },
    // Electrical & Mechanical
    { src: "/images/projects/electrical/substation-transformer.jpg", title: "11kV Industrial Transformer Substation", category: "CMEP" },
    { src: "/images/projects/electrical/cable-tray-installation.jpg", title: "High-Voltage Cable Tray Routing", category: "CMEP" },
    { src: "/images/projects/mechanical/process-piping.jpg", title: "Industrial Compressed Air & Process Piping", category: "CMEP" },
    { src: "/images/projects/mechanical/chiller-piping.jpg", title: "Chilled Water Loop & Pump Header", category: "CMEP" },
    { src: "/images/projects/mechanical/pump-room-fire-hydrant.jpg", title: "Fire Hydrant Pump Room System", category: "CMEP" },
    // Flooring
    { src: "/images/projects/flooring-painting/epoxy-floor-preparation.jpg", title: "Diamond Grinding Surface Prep", category: "Flooring" },
    { src: "/images/projects/flooring-painting/epoxy-flooring.jpg", title: "3mm Self-Leveling Epoxy Screed", category: "Flooring" },
    { src: "/images/projects/flooring-painting/structural-painting.jpg", title: "Industrial Polyurethane Coating", category: "Flooring" },
    // Facilities & Safety
    { src: "/images/safety/safety-toolbox-meeting.png", title: "Daily Site Safety Toolbox Meeting", category: "Safety" },
    { src: "/images/facilities/modern-factory.jpg", title: "Automotive Industrial Facility", category: "Facilities" },
    { src: "/images/facilities/industrial-complex.jpg", title: "PEB Superstructure Complex", category: "Facilities" },
    { src: "/images/projects/interior-exterior/modular-partition.jpg", title: "Office Modular Partitions", category: "Interiors" },
    { src: "/images/projects/interior-exterior/exterior-acp-glazing.jpg", title: "Structural Glazing & ACP Cladding", category: "Interiors" },
  ];

  const categories = ["All", "Civil", "PEB Steel", "CMEP", "Flooring", "Safety", "Facilities", "Interiors"];

  const filtered = galleryItems.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark tracking-tight">
            Media & Project Asset Gallery
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
            Authentic project photography library extracted from official ViP engineering documentation.
          </p>
        </div>

        <button
          onClick={() => alert("Upload simulation: new image will be processed.")}
          className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
        >
          <Upload className="w-3.5 h-3.5 font-bold" />
          <span>Upload New Asset</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="bg-white p-3 rounded-xl border border-brand-border shadow-xs flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === cat
                ? "bg-brand-dark text-brand-yellow font-bold"
                : "bg-brand-light text-brand-muted hover:text-brand-dark hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-xl border border-brand-border overflow-hidden shadow-xs hover:shadow-card transition-all flex flex-col"
          >
            <div
              className="relative h-44 w-full cursor-pointer bg-brand-light"
              onClick={() => setPreviewImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-dark/90 text-white">
                {item.category}
              </span>
            </div>

            <div className="p-3 flex items-center justify-between gap-2 border-t border-brand-border bg-white">
              <span className="text-xs font-semibold text-brand-dark line-clamp-1">
                {item.title}
              </span>
              <button
                onClick={() => copyToClipboard(item.src)}
                className="p-1 rounded hover:bg-brand-light text-brand-muted hover:text-brand-dark transition-colors shrink-0"
                title="Copy relative path"
              >
                {copiedPath === item.src ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-xs z-[60] flex items-center justify-center p-3 sm:p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-black border border-white/20">
            <button
              onClick={() => setPreviewImage(null)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors z-10"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-[55vh] sm:h-[70vh] max-h-[540px] w-full">
              <Image
                src={previewImage}
                alt="Enlarged Project Asset"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

