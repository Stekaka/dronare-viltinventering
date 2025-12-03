"use client";

import { ReactNode, useState, useEffect, useRef, Children } from "react";
import { motion } from "framer-motion";
import { useKeyboardNavigation } from "@/app/hooks/useKeyboardNavigation";

function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).msFullscreenElement
        )
      );
    };

    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);
    document.addEventListener("mozfullscreenchange", handleChange);
    document.addEventListener("MSFullscreenChange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("mozfullscreenchange", handleChange);
      document.removeEventListener("MSFullscreenChange", handleChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).mozRequestFullScreen) {
        (element as any).mozRequestFullScreen();
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  return { isFullscreen, toggleFullscreen };
}

interface PresentationLayoutProps {
  children: ReactNode;
}

export default function PresentationLayout({
  children,
}: PresentationLayoutProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Children.toArray(children).length;
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const isKeyboardNavigating = useRef(false);

  // Always reset to first slide and scroll to top when component mounts
  useEffect(() => {
    setCurrentSlide(0);
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      isKeyboardNavigating.current = true;
      setTimeout(() => {
        const sections = document.querySelectorAll('section');
        if (sections[nextSlide]) {
          sections[nextSlide].scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Reset flag after scroll animation completes
        setTimeout(() => {
          isKeyboardNavigating.current = false;
        }, 500);
      }, 0);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      setCurrentSlide(prevSlide);
      isKeyboardNavigating.current = true;
      setTimeout(() => {
        const sections = document.querySelectorAll('section');
        if (sections[prevSlide]) {
          sections[prevSlide].scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Reset flag after scroll animation completes
        setTimeout(() => {
          isKeyboardNavigating.current = false;
        }, 500);
      }, 0);
    }
  };

  useKeyboardNavigation(handleNext, handlePrevious);

  // Update slide on scroll (only when not keyboard navigating)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;
    
    const handleScroll = () => {
      // Ignore scroll events during keyboard navigation
      if (isKeyboardNavigating.current) {
        return;
      }
      
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        let newSlide = currentSlide; // Start with current slide
        let closestDistance = Infinity;
        let mostVisibleIndex = currentSlide;
        let maxVisibleHeight = 0;
        
        // Find the section closest to the top of the viewport (for scroll-snap)
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const viewportTop = 0;
          const viewportCenter = window.innerHeight / 2;
          const viewportBottom = window.innerHeight;
          
          // Check if section is in viewport
          const isInView = rect.top < viewportBottom && rect.bottom > viewportTop;
          
          if (isInView) {
            // Calculate visible height
            const visibleTop = Math.max(rect.top, viewportTop);
            const visibleBottom = Math.min(rect.bottom, viewportBottom);
            const visibleHeight = visibleBottom - visibleTop;
            
            // Primary: Find section where top is closest to viewport top (scroll-snap behavior)
            const distanceFromTop = Math.abs(rect.top - viewportTop);
            if (distanceFromTop < closestDistance && rect.top <= viewportTop + 100) {
              closestDistance = distanceFromTop;
              newSlide = index;
            }
            
            // Secondary: Track section with most visible area as fallback
            if (visibleHeight > maxVisibleHeight) {
              maxVisibleHeight = visibleHeight;
              mostVisibleIndex = index;
            }
          }
        });
        
        // Fallback: use section with most visible area if no section found near top
        if (closestDistance === Infinity && maxVisibleHeight > window.innerHeight * 0.4) {
          newSlide = mostVisibleIndex;
        }
        
        // Only update if we found a valid new slide that's different
        if (newSlide !== currentSlide && newSlide >= 0 && newSlide < totalSlides) {
          setCurrentSlide(newSlide);
        }
        
        isScrolling = false;
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative">
      {/* Fullscreen button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => {
          toggleFullscreen();
          e.currentTarget.blur();
        }}
        onMouseDown={(e) => e.preventDefault()}
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full backdrop-blur-md text-white transition-all shadow-lg border border-white/20 flex items-center justify-center outline-none focus:outline-none focus-visible:outline-none ${
          isFullscreen
            ? "opacity-0 hover:opacity-100 bg-black/30 hover:bg-black/60"
            : "bg-black/60 hover:bg-black/80"
        }`}
        aria-label={isFullscreen ? "Avsluta helskärm" : "Helskärm"}
      >
        {isFullscreen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </motion.button>

      {/* Minimal slide indicator */}
      <div className="fixed bottom-4 right-4 z-50 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-mono">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Navigation hint */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-white/60 text-xs text-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
        >
          ← → för att navigera
        </motion.div>
      )}

      {children}
    </div>
  );
}
