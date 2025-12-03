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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Touch/swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

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
    <section 
      ref={sectionRef} 
      className="group min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 snap-start snap-always"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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

      {/* Navigation arrows - visible on mobile, hover on desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 md:bg-black/10 backdrop-blur-sm text-white/80 md:text-white/30 hover:bg-black/60 md:hover:bg-black/40 hover:text-white md:hover:text-white/90 transition-all shadow-lg border border-white/30 md:border-white/10 hover:border-white/50 md:hover:border-white/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
        aria-label="Föregående bild"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 md:bg-black/10 backdrop-blur-sm text-white/80 md:text-white/30 hover:bg-black/60 md:hover:bg-black/40 hover:text-white md:hover:text-white/90 transition-all shadow-lg border border-white/30 md:border-white/10 hover:border-white/50 md:hover:border-white/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 touch-manipulation"
        aria-label="Nästa bild"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators - visible on mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-3 opacity-60 md:opacity-0 md:group-hover:opacity-60 transition-opacity">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all touch-manipulation ${
              index === currentIndex
                ? "bg-white/90 md:bg-white/80 w-6 md:w-8"
                : "bg-white/40 md:bg-white/20 hover:bg-white/60 md:hover:bg-white/40"
            }`}
            aria-label={`Gå till bild ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter - visible on mobile */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 bg-black/40 md:bg-black/10 backdrop-blur-sm rounded-full px-4 py-1.5 md:px-6 md:py-2 text-white/80 md:text-white/30 text-xs md:text-sm font-mono opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        {currentIndex + 1} / {images.length}
      </div>
    </section>
  );
}

