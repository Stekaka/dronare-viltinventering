"use client";

import { useEffect } from "react";

export default function PageViewTracker() {
  useEffect(() => {
    // Track page view när sidan laddas
    const trackPageView = () => {
      const url = window.location.pathname + window.location.search;
      const path = window.location.pathname;
      
      fetch(`/api/track?url=${encodeURIComponent(url)}&path=${encodeURIComponent(path)}`, {
        method: "GET",
      }).catch(() => {
        // Ignorera fel - tracking ska inte påverka användarupplevelsen
      });
    };

    // Track initial page load
    trackPageView();

    // Track vid hash change (för single-page navigation)
    const handleHashChange = () => {
      trackPageView();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}

