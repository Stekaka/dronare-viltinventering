"use client";

import { useEffect, useCallback } from "react";

export function useKeyboardNavigation(
  onNext: () => void,
  onPrevious: () => void
) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          onPrevious();
          break;
      }
    },
    [onNext, onPrevious]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
