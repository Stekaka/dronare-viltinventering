"use client";

import { track } from "@vercel/analytics";

export const trackSlideChange = (slideNumber: number, slideName: string) => {
  track("slide_view", {
    slide_number: slideNumber,
    slide_name: slideName,
  });
};

export const trackFullscreen = (action: "enter" | "exit") => {
  track("fullscreen", {
    action: action,
  });
};

export const trackGalleryImageChange = (
  galleryName: string,
  imageIndex: number,
  totalImages: number
) => {
  track("gallery_image_change", {
    gallery_name: galleryName,
    image_index: imageIndex,
    total_images: totalImages,
  });
};

export const trackMethodologyStep = (stepNumber: number, stepName: string) => {
  track("methodology_step", {
    step_number: stepNumber,
    step_name: stepName,
  });
};

