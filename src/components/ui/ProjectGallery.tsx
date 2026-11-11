"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  caption: string;
}

interface ProjectGalleryProps {
  mainImage: string;
  title: string;
  galleryImages: GalleryImage[];
}

export function ProjectGallery({
  mainImage,
  title,
  galleryImages,
}: ProjectGalleryProps) {
  const allImages: GalleryImage[] = [
    { src: mainImage, caption: `${title} - Main Construction View` },
    ...galleryImages,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = allImages[selectedIndex] || allImages[0];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="space-y-4">
      {/* Active Featured Image with Zoom Trigger */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="relative h-72 sm:h-[420px] lg:h-[480px] w-full rounded-2xl overflow-hidden border border-brand-border shadow-md bg-brand-light group cursor-pointer"
      >
        <Image
          src={activeImage.src}
          alt={activeImage.caption}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover transition-all duration-300"
        />

        {/* Overlay with zoom button - visible on mobile touchscreens, hover-reveal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-white font-medium drop-shadow pr-2">
            {activeImage.caption}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow shrink-0"
            aria-label="Open full-screen image viewer"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnail Carousel Strip matching reference screenshot */}
      {allImages.length > 1 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Project Gallery & Inspection Views ({allImages.length} Photographs)
            </h4>
            <span className="text-[11px] text-brand-muted">
              Click photo to preview
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`group relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all focus:outline-none ${
                  selectedIndex === idx
                    ? "border-brand-forest shadow-md ring-2 ring-brand-lime"
                    : "border-brand-border/80 opacity-75 hover:opacity-100"
                }`}
                aria-label={`View photo ${idx + 1}: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="120px"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between gap-3 text-white border-b border-white/10 pb-3 sm:pb-4">
            <div className="min-w-0">
              <p className="font-heading font-bold text-sm sm:text-base truncate">
                {title}
              </p>
              <p className="text-xs text-gray-400 truncate">
                Photo {selectedIndex + 1} of {allImages.length} — {activeImage.caption}
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close full-screen image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[75vh] max-w-5xl">
              <Image
                src={activeImage.src}
                alt={activeImage.caption}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Prev / Next controls */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute left-1 sm:left-6 p-3 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute right-1 sm:right-6 p-3 rounded-full bg-black/50 sm:bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Footer Thumbnail strip */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-2">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-14 h-14 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                  selectedIndex === idx
                    ? "border-brand-yellow scale-105"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

