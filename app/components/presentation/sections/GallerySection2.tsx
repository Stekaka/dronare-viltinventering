"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

export default function GallerySection2() {
  const images = [
    "/Älg4.JPG",
    "/Älg5.JPG",
    "/Älg6.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Always reset to first image when component mounts
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // If on last image, scroll to next section
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Array.from(sections).indexOf(sectionRef.current!);
      if (sections[currentSectionIndex + 1]) {
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex, images.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // If on first image, scroll to previous section
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Array.from(sections).indexOf(sectionRef.current!);
      if (sections[currentSectionIndex - 1]) {
        sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentIndex]);

  // Handle keyboard navigation for this section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if this section is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isInView) {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            e.stopPropagation();
            goToNext();
          } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            e.stopPropagation();
            goToPrevious();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, true); // Use capture phase to intercept first
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [goToNext, goToPrevious]);

  return (
    <section ref={sectionRef} className="group min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 snap-start snap-always">
      {/* Fullscreen image slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/10 backdrop-blur-sm text-white/30 hover:bg-black/40 hover:text-white/90 transition-all shadow-lg border border-white/10 hover:border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100"
        aria-label="Föregående bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/10 backdrop-blur-sm text-white/30 hover:bg-black/40 hover:text-white/90 transition-all shadow-lg border border-white/10 hover:border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100"
        aria-label="Nästa bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3 opacity-0 group-hover:opacity-60 transition-opacity">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white/80 w-8"
                : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Gå till bild ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-black/10 backdrop-blur-sm rounded-full px-6 py-2 text-white/30 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
        {currentIndex + 1} / {images.length}
      </div>
    </section>
  );
}

